'use strict';

const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { Server } = require('socket.io');

const app = express();
app.set('trust proxy', 1);
const server = http.createServer(app);
const allowedOrigins = new Set(String(process.env.FRONTEND_ORIGIN || '').split(',').map(origin => origin.trim()).filter(Boolean));
const corsOrigin = allowedOrigins.size ? [...allowedOrigins] : false;
function requestOriginAllowed(request) {
  const origin = request.headers.origin;
  if (!origin) return true;
  if (allowedOrigins.has(origin)) return true;
  const host = request.get ? request.get('host') : request.headers.host;
  const protocol = request.protocol || String(request.headers['x-forwarded-proto'] || 'http').split(',')[0].trim();
  return !!host && origin === `${protocol}://${host}`;
}
const io = new Server(server, {
  pingInterval:20000, pingTimeout:45000,
  cors:{ origin:corsOrigin, credentials:true },
  allowRequest:(request, callback) => callback(null, requestOriginAllowed(request))
});
const rooms = new Map();
const matchmakingQueue = new Map();
const MATCH_WAIT_MS = 30000;
let matchDeadlineAt = 0;
let lastMatchStateSecond = -1;
const TURN_MS = 10000;
const WIDTH = 800;
const HEIGHT = 480;
const PLAYER_RADIUS = 10;
const OBSTACLE_PASS_LIMIT = 10;
const OBSTACLE_SHAPES = [
  { width:78, height:34 }, { width:96, height:34 }, { width:48, height:82 },
  { width:88, height:34 }, { width:104, height:34 }
];
const clamp = (value, low, high) => Math.max(low, Math.min(high, value));

const PRIVATE_DIR = path.resolve(process.env.DATA_DIR || path.join(__dirname, '..', '.tag-stickmen-private'));
const ACCOUNTS_FILE = path.join(PRIVATE_DIR, 'accounts.json');
const SESSION_SECRET_FILE = path.join(PRIVATE_DIR, 'session.key');
const SESSION_COOKIE = 'tag_session';
const SESSION_AGE_SECONDS = 60 * 60 * 24 * 30;
const ACCOUNT_ITEM_PRICES = {
  shield:20, punch:30, boomerang:45, blink:35, ice:40,
  smoke:50, decoy:60, gust:65, thunder:70, spring:55,
  gravity:80, phase:65, haste:55, anchor:85, swap:100
};
const ACCOUNT_ITEM_COOLDOWNS = {
  shield:7000, punch:6500, boomerang:8500, blink:7000, ice:7000,
  smoke:12000, decoy:11000, gust:9000, thunder:11000, spring:9000,
  gravity:12000, phase:10000, haste:9000, anchor:12000, swap:13000
};
function adminUsername() {
  return String(process.env.ADMIN_USERNAME || '시후').trim();
}
function adminUsernameKey() {
  return adminUsername().toLocaleLowerCase('ko-KR');
}
function adminPassword() {
  const password = process.env.ADMIN_PASSWORD;
  return typeof password === 'string' && password.length >= 8 && password.length <= 100 ? password : '';
}
function adminCredentialTag() {
  const password = adminPassword();
  return password ? crypto.createHmac('sha256', sessionSecret).update(password).digest('hex') : '';
}
function adminPasswordMatches(candidate) {
  const configured = adminPassword();
  if (typeof candidate !== 'string' || candidate.length > 100 || !configured) return false;
  const candidateHash = crypto.createHash('sha256').update(candidate).digest();
  const configuredHash = crypto.createHash('sha256').update(configured).digest();
  return crypto.timingSafeEqual(candidateHash, configuredHash);
}
fs.mkdirSync(PRIVATE_DIR, { recursive:true, mode:0o700 });
let sessionSecret;
try { sessionSecret = fs.readFileSync(SESSION_SECRET_FILE); }
catch {
  sessionSecret = crypto.randomBytes(48);
  fs.writeFileSync(SESSION_SECRET_FILE, sessionSecret, { mode:0o600, flag:'wx' });
}
function loadAccounts() {
  try {
    const saved = JSON.parse(fs.readFileSync(ACCOUNTS_FILE, 'utf8'));
    return Array.isArray(saved.accounts) ? saved.accounts : [];
  } catch (error) {
    if (error.code !== 'ENOENT') console.error(`Could not read account data: ${error.message}`);
    return [];
  }
}
let accounts = loadAccounts();
function saveAccounts() {
  const tempFile = `${ACCOUNTS_FILE}.tmp`;
  fs.writeFileSync(tempFile, JSON.stringify({ accounts }), { mode:0o600 });
  fs.renameSync(tempFile, ACCOUNTS_FILE);
}
function accountView(account) {
  return {
    id:account.id, username:account.username,
    coins:account.coins, stage:account.stage,
    owned:account.owned, equipped:account.equipped,
    migrated:account.migrated,
    grantedPowers:normalizedPowers(account.grantedPowers),
    isAdmin:Boolean(account.isAdmin && account.usernameKey === adminUsernameKey() && adminCredentialTag())
  };
}
function makeAccount(username, password, isAdmin = false) {
  const salt = crypto.randomBytes(16).toString('hex');
  const account = {
    id:crypto.randomUUID(), username, usernameKey:username.toLocaleLowerCase('ko-KR'), salt,
    passwordHash:crypto.scryptSync(password, salt, 64).toString('hex'),
    coins:0, stage:1, owned:[], equipped:null, migrated:false, rewardedRounds:[], isAdmin
  };
  if (isAdmin) account.adminPasswordTag = adminCredentialTag();
  return account;
}
function passwordMatchesAccount(account, password) {
  if (typeof password !== 'string' || password.length > 100 || !account?.salt || !account?.passwordHash) return false;
  const candidate = crypto.scryptSync(password, account.salt, 64);
  const stored = Buffer.from(account.passwordHash, 'hex');
  return stored.length === candidate.length && crypto.timingSafeEqual(candidate, stored);
}
function setAccountPassword(account, password) {
  const salt = crypto.randomBytes(16).toString('hex');
  account.salt = salt;
  account.passwordHash = crypto.scryptSync(password, salt, 64).toString('hex');
}
function signSession(payload) {
  const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto.createHmac('sha256', sessionSecret).update(encoded).digest('base64url');
  return `${encoded}.${signature}`;
}
function verifySession(token) {
  if (typeof token !== 'string') return null;
  const [encoded, signature, extra] = token.split('.');
  if (!encoded || !signature || extra) return null;
  const expected = crypto.createHmac('sha256', sessionSecret).update(encoded).digest();
  let actual;
  try { actual = Buffer.from(signature, 'base64url'); } catch { return null; }
  if (actual.length !== expected.length || !crypto.timingSafeEqual(actual, expected)) return null;
  try {
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8'));
    if (!payload.id || payload.exp <= Date.now() / 1000) return null;
    const account = accounts.find(item => item.id === payload.id) || null;
    if (account?.isAdmin) {
      const currentAdminTag = adminCredentialTag();
      if (!currentAdminTag || account.usernameKey !== adminUsernameKey() || payload.adminCredentialTag !== currentAdminTag) return null;
    }
    return account;
  } catch { return null; }
}
function readCookie(request, name) {
  const cookies = (request.headers.cookie || '').split(';');
  for (const part of cookies) {
    const split = part.trim().indexOf('=');
    if (split < 0) continue;
    if (part.trim().slice(0, split) === name) {
      try { return decodeURIComponent(part.trim().slice(split + 1)); } catch { return null; }
    }
  }
  return null;
}
function requestSessionToken(request) {
  const authorization = String(request.headers.authorization || '');
  const bearer = authorization.match(/^Bearer\s+(.+)$/i)?.[1];
  return bearer || readCookie(request, SESSION_COOKIE);
}
function createSessionToken(account) {
  const payload = { id:account.id, exp:Math.floor(Date.now() / 1000) + SESSION_AGE_SECONDS };
  if (account.isAdmin) payload.adminCredentialTag = adminCredentialTag();
  return signSession(payload);
}
function setSessionCookie(response, token, secure) {
  const sameSite = secure ? 'None; Secure' : 'Lax';
  response.setHeader('Set-Cookie', `${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=${sameSite}; Max-Age=${SESSION_AGE_SECONDS}`);
}
function requireAccount(request, response, next) {
  request.account = verifySession(requestSessionToken(request));
  if (!request.account) return response.status(401).json({ error:'로그인이 필요해요.' });
  next();
}
function requireAdmin(request, response, next) {
  if (!request.account?.isAdmin || request.account.usernameKey !== adminUsernameKey() || !adminCredentialTag()) {
    return response.status(403).json({ error:'관리자 권한이 필요해요.' });
  }
  next();
}
const authRateLimits = new Map();
function limitAuthAttempts(maxAttempts, windowMs) {
  return (request, response, next) => {
    const now = Date.now();
    const key = `${request.ip}:${request.path}`;
    let bucket = authRateLimits.get(key);
    if (!bucket || bucket.resetAt <= now) {
      bucket = { count:0, resetAt:now + windowMs };
      authRateLimits.set(key, bucket);
    }
    if (bucket.count >= maxAttempts) {
      response.setHeader('Retry-After', String(Math.max(1, Math.ceil((bucket.resetAt - now) / 1000))));
      return response.status(429).json({ error:'요청이 너무 많아요. 잠시 후 다시 시도해 주세요.' });
    }
    bucket.count++;
    if (authRateLimits.size > 10000) {
      for (const [oldKey, oldBucket] of authRateLimits) {
        if (oldBucket.resetAt <= now) authRateLimits.delete(oldKey);
      }
      if (authRateLimits.size > 10000) authRateLimits.delete(authRateLimits.keys().next().value);
    }
    next();
  };
}
app.use((request, response, next) => {
  const origin = request.headers.origin;
  const allowed = requestOriginAllowed(request);
  if (origin && allowed) {
    response.setHeader('Access-Control-Allow-Origin', origin);
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    response.setHeader('Vary', 'Origin');
  }
  if (request.method === 'OPTIONS') return response.sendStatus(allowed ? 204 : 403);
  next();
});
app.use(express.json({ limit:'12kb' }));
app.post('/api/account/register', limitAuthAttempts(5, 10 * 60 * 1000), (request, response) => {
  const username = String(request.body?.username || '').trim();
  const password = String(request.body?.password || '');
  const usernameKey = username.toLocaleLowerCase('ko-KR');
  if (!/^[\p{L}\p{N}_-]{2,20}$/u.test(username)) return response.status(400).json({ error:'아이디는 한글·영문·숫자·_·- 조합으로 2~20자여야 해요.' });
  if (password.length < 8 || password.length > 100) return response.status(400).json({ error:'비밀번호는 8~100자로 입력해 주세요.' });
  if (usernameKey === adminUsernameKey()) return response.status(403).json({ error:'관리자 아이디는 관리자 로그인만 사용할 수 있어요.' });
  if (accounts.some(account => account.usernameKey === usernameKey)) return response.status(409).json({ error:'이미 사용 중인 아이디예요.' });
  if (password.toLocaleLowerCase('ko-KR') === usernameKey) return response.status(400).json({ error:'비밀번호는 사용자 이름과 다르게 정해 주세요.' });
  const duplicatePassword = accounts.some(account => {
    if (!account.salt || !account.passwordHash) return false;
    const candidate = crypto.scryptSync(password, account.salt, 64);
    const stored = Buffer.from(account.passwordHash, 'hex');
    return stored.length === candidate.length && crypto.timingSafeEqual(candidate, stored);
  });
  if (duplicatePassword) return response.status(409).json({ error:'이미 사용 중인 비밀번호예요. 다른 비밀번호를 정해 주세요.' });
  const account = makeAccount(username, password);
  accounts.push(account);
  saveAccounts();
  const token = createSessionToken(account);
  setSessionCookie(response, token, request.secure);
  response.status(201).json({ profile:accountView(account), token });
});
app.post('/api/account/login', limitAuthAttempts(12, 10 * 60 * 1000), (request, response) => {
  const username = String(request.body?.username || '').trim();
  const usernameKey = username.toLocaleLowerCase('ko-KR');
  const password = String(request.body?.password || '');
  if (usernameKey === adminUsernameKey()) {
    const configuredPassword = adminPassword();
    if (!configuredPassword || !/^[\p{L}\p{N}_-]{2,20}$/u.test(adminUsername())) {
      return response.status(503).json({ error:'관리자 계정이 서버에 설정되지 않았어요.' });
    }
    let account = accounts.find(item => (item.usernameKey || item.username.toLocaleLowerCase('ko-KR')) === usernameKey);
    const matchesConfiguredPassword = adminPasswordMatches(password);
    if (!account) {
      if (!matchesConfiguredPassword) return response.status(401).json({ error:'아이디 또는 비밀번호가 맞지 않아요.' });
      account = makeAccount(adminUsername(), configuredPassword, true);
      accounts.push(account);
    } else {
      const currentAdminTag = adminCredentialTag();
      const configuredPasswordWasRotated = !account.adminPasswordTag || account.adminPasswordTag !== currentAdminTag;
      const matchesSavedAdminPassword = account.isAdmin && passwordMatchesAccount(account, password);
      const canResetWithConfiguredPassword = matchesConfiguredPassword && (!account.isAdmin || configuredPasswordWasRotated);
      if (!matchesSavedAdminPassword && !canResetWithConfiguredPassword) {
        return response.status(401).json({ error:'아이디 또는 비밀번호가 맞지 않아요.' });
      }
      account.username = adminUsername();
      account.usernameKey = usernameKey;
      account.isAdmin = true;
      if (canResetWithConfiguredPassword) {
        setAccountPassword(account, configuredPassword);
        account.adminPasswordTag = currentAdminTag;
      } else if (!account.adminPasswordTag) account.adminPasswordTag = currentAdminTag;
      if (!Array.isArray(account.rewardedRounds)) account.rewardedRounds = [];
    }
    for (const other of accounts) if (other !== account && other.isAdmin) other.isAdmin = false;
    saveAccounts();
    const token = createSessionToken(account);
    setSessionCookie(response, token, request.secure);
    return response.json({ profile:accountView(account), token });
  }
  const account = accounts.find(item => item.usernameKey === usernameKey);
  if (!account || !passwordMatchesAccount(account, password)) return response.status(401).json({ error:'아이디 또는 비밀번호가 맞지 않아요.' });
  const token = createSessionToken(account);
  setSessionCookie(response, token, request.secure);
  response.json({ profile:accountView(account), token });
});
app.post('/api/account/logout', (request, response) => {
  const sameSite = request.secure ? 'None; Secure' : 'Lax';
  response.setHeader('Set-Cookie', `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=${sameSite}; Max-Age=0`);
  response.json({ ok:true });
});
app.get('/api/account/profile', requireAccount, (request, response) => {
  response.json({ profile:accountView(request.account) });
});
app.post('/api/account/change-password', limitAuthAttempts(8, 10 * 60 * 1000), requireAccount, (request, response) => {
  const currentPassword = request.body?.currentPassword;
  const newPassword = request.body?.newPassword;
  const account = request.account;
  if (typeof currentPassword !== 'string' || typeof newPassword !== 'string') {
    return response.status(400).json({ error:'비밀번호를 입력해 주세요.' });
  }
  if (!passwordMatchesAccount(account, currentPassword)) return response.status(400).json({ error:'현재 비밀번호가 맞지 않아요.' });
  if (newPassword.length < 8 || newPassword.length > 100) return response.status(400).json({ error:'비밀번호는 8~100자로 입력해 주세요.' });
  if (newPassword.toLocaleLowerCase('ko-KR') === account.usernameKey) return response.status(400).json({ error:'비밀번호는 사용자 이름과 다르게 정해 주세요.' });
  if (newPassword === currentPassword) return response.status(400).json({ error:'새 비밀번호는 현재 비밀번호와 다르게 정해 주세요.' });
  const duplicatePassword = accounts.some(other => other !== account && passwordMatchesAccount(other, newPassword));
  if (duplicatePassword) return response.status(409).json({ error:'이미 사용 중인 비밀번호예요. 다른 비밀번호를 정해 주세요.' });
  setAccountPassword(account, newPassword);
  saveAccounts();
  response.json({ profile:accountView(account) });
});
app.get('/api/admin/players', requireAccount, requireAdmin, (request, response) => {
  const now = Date.now();
  const players = [...io.sockets.sockets.values()].map(socket => {
    const roomCode = socket.data.roomCode || null;
    const room = roomCode ? rooms.get(roomCode) : null;
    const player = room?.players.get(socket.id);
    const queueEntry = matchmakingQueue.get(socket.id);
    const account = accountForSocket(socket);
    return {
      socketId:socket.id,
      accountUsername:account?.username || null,
      username:player?.name || queueEntry?.name || account?.username || '로그인 전 사용자',
      isAdmin:Boolean(account?.isAdmin && account.usernameKey === adminUsernameKey()),
      state:room ? (room.started ? '게임 중' : '대기실') : queueEntry ? '매칭 대기' : '로비 접속',
      roomCode,
      connectedAt:Number.isFinite(socket.data.connectedAt) ? socket.data.connectedAt : now
    };
  }).sort((a, b) => a.connectedAt - b.connectedAt);
  response.json({ players, serverTime:now });
});
app.get('/api/admin/powers', requireAccount, requireAdmin, (request, response) => {
  const socket = io.sockets.sockets.get(String(request.query.socketId || ''));
  if (!socket || accountForSocket(socket)?.id !== request.account.id || !isAdminSocket(socket)) {
    return response.status(409).json({ error:'관리자 연결을 찾을 수 없어요.' });
  }
  response.json({ powers:adminPowersFor(socket) });
});
app.post('/api/admin/powers', requireAccount, requireAdmin, (request, response) => {
  const socket = io.sockets.sockets.get(String(request.body?.socketId || ''));
  if (!socket || accountForSocket(socket)?.id !== request.account.id || !isAdminSocket(socket)) {
    return response.status(409).json({ error:'관리자 연결을 찾을 수 없어요.' });
  }
  const powers = {
    speed:request.body?.powers?.speed === true,
    invincible:request.body?.powers?.invincible === true,
    aim:request.body?.powers?.aim === true
  };
  socket.data.adminPowers = powers;
  const room = rooms.get(socket.data.roomCode);
  const player = room?.players.get(socket.id);
  if (player) player.adminInvincible = adminPowersFor(socket).invincible;
  if (room) sendState(room);
  response.json({ powers });
});
function findAdminTarget(username) {
  const key = String(username || '').trim().toLocaleLowerCase('ko-KR');
  return accounts.find(account => (account.usernameKey || account.username.toLocaleLowerCase('ko-KR')) === key);
}
function normalizedPowers(powers) {
  return { speed:powers?.speed === true, invincible:powers?.invincible === true, aim:powers?.aim === true };
}
function notifyAccountUpdate(account) {
  for (const socket of io.sockets.sockets.values()) {
    if (socket.data.accountId !== account.id) continue;
    const room = rooms.get(socket.data.roomCode);
    const player = room?.players.get(socket.id);
    if (player) player.adminInvincible = adminPowersFor(socket).invincible;
    socket.emit('account-profile', { profile:accountView(account) });
    if (room) sendState(room);
  }
}
app.get('/api/admin/account-powers', requireAccount, requireAdmin, (request, response) => {
  const account = findAdminTarget(request.query.username);
  if (!account) return response.status(404).json({ error:'해당 아이디의 계정을 찾을 수 없어요.' });
  response.json({ profile:accountView(account) });
});
app.post('/api/admin/account-powers', requireAccount, requireAdmin, (request, response) => {
  const account = findAdminTarget(request.body?.username);
  if (!account) return response.status(404).json({ error:'해당 아이디의 계정을 찾을 수 없어요.' });
  const powers = request.body?.powers;
  if (!powers || ['speed','invincible','aim'].some(key => typeof powers[key] !== 'boolean')) {
    return response.status(400).json({ error:'핵 기능 설정이 올바르지 않아요.' });
  }
  account.grantedPowers = normalizedPowers(powers);
  saveAccounts();
  notifyAccountUpdate(account);
  response.json({ profile:accountView(account) });
});
app.post('/api/admin/kick', requireAccount, requireAdmin, (request, response) => {
  const socketId = String(request.body?.socketId || '');
  const target = io.sockets.sockets.get(socketId);
  if (!target) return response.status(404).json({ error:'플레이어 연결을 찾을 수 없어요.' });
  if (accountForSocket(target)?.id === request.account.id) {
    return response.status(400).json({ error:'관리자 본인의 연결은 추방할 수 없어요.' });
  }
  if (isAdminSocket(target)) return response.status(403).json({ error:'관리자는 추방할 수 없어요.' });
  target.emit('admin-kicked');
  cancelMatchmaking(target, false);
  removePlayerFromRoom(target);
  target.disconnect(true);
  response.json({ kicked:true });
});
app.post('/api/admin/coins', requireAccount, requireAdmin, (request, response) => {
  const username = String(request.body?.username || '').trim();
  const usernameKey = username.toLocaleLowerCase('ko-KR');
  const amount = Number(request.body?.amount);
  if (!usernameKey) return response.status(400).json({ error:'코인을 받을 아이디를 입력해 주세요.' });
  if (!Number.isSafeInteger(amount) || amount <= 0) return response.status(400).json({ error:'지급할 코인은 1 이상의 정수로 입력해 주세요.' });
  const account = accounts.find(item => (item.usernameKey || item.username.toLocaleLowerCase('ko-KR')) === usernameKey);
  if (!account) return response.status(404).json({ error:'해당 아이디의 계정을 찾을 수 없어요.' });
  const action = request.body?.action || 'grant';
  if (!['grant','revoke'].includes(action)) return response.status(400).json({ error:'코인 작업이 올바르지 않아요.' });
  if (action === 'revoke' && amount > account.coins) return response.status(400).json({ error:'보유 코인보다 많이 회수할 수 없어요.' });
  const delta = action === 'revoke' ? -amount : amount;
  if (!Number.isSafeInteger(account.coins + delta)) return response.status(400).json({ error:'코인 합계가 허용 범위를 넘어요.' });
  account.coins += delta;
  saveAccounts();
  notifyAccountUpdate(account);
  response.json({ granted:delta, action, amount, profile:accountView(account) });
});
app.post('/api/account/migrate', requireAccount, (request, response) => {
  const account = request.account;
  if (!account.migrated) {
    const local = request.body?.profile || {};
    const localOwned = Array.isArray(local.owned) ? local.owned.filter(item => Object.hasOwn(ACCOUNT_ITEM_PRICES, item)) : [];
    const localCoins = Math.min(1000000, Math.max(0, Math.floor(Number(local.coins) || 0)));
    const localStage = Math.min(1000, Math.max(1, Math.floor(Number(local.stage) || 1)));
    const hasLocalProgress = localCoins > 0 || localStage > 1 || localOwned.length > 0;
    if (hasLocalProgress) {
      account.coins = Math.max(account.coins, localCoins);
      account.stage = Math.max(account.stage, localStage);
      account.owned = [...new Set([...account.owned, ...localOwned])];
      if (!account.equipped && account.owned.includes(local.equipped)) account.equipped = local.equipped;
      account.migrated = true;
      saveAccounts();
    }
  }
  response.json({ profile:accountView(account) });
});
app.post('/api/account/purchase', requireAccount, (request, response) => {
  const account = request.account;
  const item = request.body?.item;
  if (typeof item !== 'string' || !Object.hasOwn(ACCOUNT_ITEM_PRICES, item)) return response.status(400).json({ error:'알 수 없는 장비예요.' });
  const price = ACCOUNT_ITEM_PRICES[item];
  if (account.owned.includes(item)) return response.status(409).json({ error:'이미 보유한 장비예요.' });
  if (account.coins < price) return response.status(400).json({ error:`코인이 부족해요. ${price} 코인이 필요해요.` });
  account.coins -= price;
  account.owned.push(item);
  account.equipped = item;
  saveAccounts();
  response.json({ profile:accountView(account) });
});
app.post('/api/account/equip', requireAccount, (request, response) => {
  const account = request.account;
  const item = request.body?.item ?? null;
  if (item !== null && (!Object.hasOwn(ACCOUNT_ITEM_PRICES, item) || !account.owned.includes(item))) {
    return response.status(400).json({ error:'보유한 장비만 장착할 수 있어요.' });
  }
  account.equipped = item;
  saveAccounts();
  response.json({ profile:accountView(account) });
});
app.post('/api/account/reward', requireAccount, (request, response) => {
  const account = request.account;
  const roundId = String(request.body?.roundId || '');
  if (!/^[\w-]{12,80}$/.test(roundId)) return response.status(400).json({ error:'보상 요청을 확인할 수 없어요.' });
  if (account.rewardedRounds.includes(roundId)) return response.json({ profile:accountView(account), reward:0, duplicate:true });
  const reward = 15 + account.stage * 5;
  account.coins += reward;
  account.stage = Math.min(1000, account.stage + 1);
  account.rewardedRounds.push(roundId);
  if (account.rewardedRounds.length > 250) account.rewardedRounds.splice(0, account.rewardedRounds.length - 250);
  saveAccounts();
  response.json({ profile:accountView(account), reward });
});

app.get('/healthz', (_request, response) => response.json({ ok:true }));
app.use(express.static(__dirname, { index: 'index.html', dotfiles: 'ignore' }));

function publicState(room) {
  const now = Date.now();
  return {
    players: [...room.players.values()].map(player => ({
      id:player.id, name:player.name, x:player.x, y:player.y, angle:player.angle, alive:player.alive,
      equippedItem:player.equippedItem, shieldUntil:player.shieldUntil, frozenUntil:player.frozenUntil,
      slowedUntil:player.slowedUntil, hiddenUntil:player.hiddenUntil, phaseUntil:player.phaseUntil,
      speedBoostUntil:player.speedBoostUntil, specialCooldownMs:Math.max(0, player.specialCooldownUntil - now),
      anchor:player.anchor, snapVersion:player.snapVersion
    })),
    taggerId: room.taggerId,
    nextTurnAt: room.nextTurnAt,
    started: room.started,
    gameOver: room.gameOver,
    winnerId: room.winnerId,
    obstaclePassCounts: room.obstaclePassCounts,
    obstacles: room.obstacles,
    projectiles:room.projectiles,
    traps:room.traps,
    fields:room.fields,
    decoys:room.decoys,
    obstaclesGone: room.obstaclePassCounts.every(count => count >= OBSTACLE_PASS_LIMIT),
    activeObstacleIndexes: room.obstacles.map((_, index) => index).filter(index => room.obstaclePassCounts[index] < OBSTACLE_PASS_LIMIT)
  };
}
function sendState(room) { io.to(room.code).emit('state', publicState(room)); }
function alivePlayers(room) { return [...room.players.values()].filter(player => player.alive); }
function broadcastMatchmakingState(message = '') {
  const waitingCount = matchmakingQueue.size;
  const readyCount = [...matchmakingQueue.values()].filter(entry => entry.ready).length;
  const stateMessage = message || (waitingCount < 2 ? '게임을 시작하려면 최소 2명이 필요해요. 상대를 기다리고 있어요.' : '');
  for (const [id, entry] of matchmakingQueue) {
    const socket = io.sockets.sockets.get(id);
    socket?.emit('matchmaking-state', {
      waitingCount,
      readyCount,
      deadlineAt: matchDeadlineAt,
      ready: entry.ready,
      message:stateMessage
    });
  }
}
function createRoom(code) {
  const obstacles = generateObstacleLayout();
  const room = {
    code, obstacles, players:new Map(), taggerId:null, nextTurnAt:0, tagCooldownUntil:Date.now() + 1000,
    started:false, gameOver:false, winnerId:null, obstaclePassCounts:obstacles.map(() => 0), obstaclesGone:false,
    projectiles:[], traps:[], fields:[], decoys:[]
  };
  rooms.set(code, room);
  return room;
}
function randomRoomCode() {
  let code;
  do { code = Math.random().toString(36).slice(2, 7).toUpperCase(); } while (!code || rooms.has(code));
  return code;
}
function startMatchmakingGame() {
  const participants = [...matchmakingQueue.entries()]
    .map(([id, entry]) => ({ id, entry, socket:io.sockets.sockets.get(id) }))
    .filter(item => item.socket?.connected);
  matchmakingQueue.clear();
  matchDeadlineAt = 0;
  lastMatchStateSecond = -1;
  if (participants.length < 2) {
    for (const participant of participants) {
      participant.entry.ready = false;
      matchmakingQueue.set(participant.id, participant.entry);
      participant.socket.data.matchmaking = true;
    }
    if (matchmakingQueue.size) {
      matchDeadlineAt = Date.now() + MATCH_WAIT_MS;
      broadcastMatchmakingState('상대를 더 찾고 있어요.');
    }
    return;
  }
  const code = randomRoomCode();
  const room = createRoom(code);
  for (const { id, entry, socket } of participants) {
    const spawn = safeSpawn(room);
    room.players.set(id, makePlayer(id, entry.name, spawn, room, socket));
    socket.data.matchmaking = false;
    socket.data.roomCode = code;
    socket.join(code);
  }
  const lineup = [...room.players.values()];
  const firstTagger = lineup[Math.floor(Math.random() * lineup.length)];
  room.taggerId = firstTagger.id;
  moveOutsideObstacles(firstTagger, room);
  room.started = true;
  room.nextTurnAt = Date.now() + TURN_MS;
  io.to(code).emit('toast', `빠른 매칭 완료! ${firstTagger.name}님이 술래예요.`);
  for (const { id, socket } of participants) socket.emit('joined', { id, code, matched:true });
  sendState(room);
}
function maybeStartMatchmakingGame() {
  const count = matchmakingQueue.size;
  if (count < 2) return false;
  const readyCount = [...matchmakingQueue.values()].filter(entry => entry.ready).length;
  if (readyCount * 2 >= count) {
    startMatchmakingGame();
    return true;
  }
  return false;
}
function cancelMatchmaking(socket, notify = false) {
  if (!matchmakingQueue.has(socket.id)) return false;
  matchmakingQueue.delete(socket.id);
  socket.data.matchmaking = false;
  if (!matchmakingQueue.size) {
    matchDeadlineAt = 0;
    lastMatchStateSecond = -1;
  } else {
    maybeStartMatchmakingGame();
    if (matchmakingQueue.size) broadcastMatchmakingState();
  }
  if (notify) socket.emit('left');
  return true;
}
function generateObstacleLayout() {
  const zones = [0, 1, 2, 3, 4, 5];
  const shapes = OBSTACLE_SHAPES.slice();
  const shuffle = items => {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  };
  shuffle(zones);
  shuffle(shapes);
  return zones.slice(0, shapes.length).map((zone, index) => {
    const col = zone % 3, row = Math.floor(zone / 3), shape = shapes[index];
    const centerX = 140 + col * 260 + (Math.random() - .5) * 70;
    const centerY = 140 + row * 200 + (Math.random() - .5) * 70;
    return { x:centerX - shape.width / 2, y:centerY - shape.height / 2, ...shape };
  });
}
function blocked(x, y, room = null) {
  return (room?.obstacles || []).some((rect, index) => (room?.obstaclePassCounts?.[index] ?? 0) < OBSTACLE_PASS_LIMIT &&
    x + PLAYER_RADIUS > rect.x && x - PLAYER_RADIUS < rect.x + rect.width &&
    y + PLAYER_RADIUS > rect.y && y - PLAYER_RADIUS < rect.y + rect.height);
}
function safeSpawn(room = null) {
  for (let i = 0; i < 100; i++) {
    const x = 75 + Math.random() * (WIDTH - 150);
    const y = 65 + Math.random() * (HEIGHT - 130);
    if (!blocked(x, y, room)) return { x, y };
  }
  return { x: 400, y: 240 };
}
function accountForSocket(socket) {
  return accounts.find(account => account.id === socket.data.accountId) || null;
}
function isAdminSocket(socket) {
  const account = accountForSocket(socket);
  return Boolean(account?.isAdmin && account.usernameKey === adminUsernameKey() && adminCredentialTag());
}
function adminPowersFor(socket) {
  const granted = normalizedPowers(accountForSocket(socket)?.grantedPowers);
  const own = isAdminSocket(socket) ? normalizedPowers(socket.data.adminPowers) : normalizedPowers(null);
  return { speed:granted.speed || own.speed, invincible:granted.invincible || own.invincible, aim:granted.aim || own.aim };
}
function makePlayer(id, name, spawn, room, socket) {
  const account = socket ? accountForSocket(socket) : null;
  return {
    id, name, x:spawn.x, y:spawn.y, angle:0, alive:true,
    equippedItem:account?.owned.includes(account.equipped) ? account.equipped : null,
    adminInvincible:socket ? adminPowersFor(socket).invincible : false,
    shieldUntil:0, frozenUntil:0, slowedUntil:0, hiddenUntil:0, phaseUntil:0,
    speedBoostUntil:0, tagImmuneUntil:0, specialCooldownUntil:0, anchor:null, snapVersion:0,
    obstacleInside:room.obstacles.map(() => false), obstacleEntered:room.obstacles.map(() => false),
    lastMoveAt:Date.now()
  };
}
function moveTagger(player, targetX, targetY, room) {
  let x = player.x, y = player.y;
  const dx = targetX - x, dy = targetY - y;
  const steps = Math.max(1, Math.ceil(Math.max(Math.abs(dx), Math.abs(dy)) / 4));
  for (let i = 0; i < steps; i++) {
    const nextX = clamp(x + dx / steps, PLAYER_RADIUS, WIDTH - PLAYER_RADIUS);
    const nextY = clamp(y + dy / steps, PLAYER_RADIUS, HEIGHT - PLAYER_RADIUS);
    const canPhase = player.phaseUntil > Date.now();
    if (canPhase || !blocked(nextX, y, room)) x = nextX;
    if (canPhase || !blocked(x, nextY, room)) y = nextY;
  }
  player.x = x;
  player.y = y;
}
function moveOutsideObstacles(player, room = null) {
  const obstacles = room?.obstacles || [];
  for (let pass = 0; pass < obstacles.length; pass++) {
    const rect = obstacles.find((item, index) => (room?.obstaclePassCounts?.[index] ?? 0) < OBSTACLE_PASS_LIMIT && blocked(player.x, player.y, room) &&
      player.x + PLAYER_RADIUS > item.x && player.x - PLAYER_RADIUS < item.x + item.width &&
      player.y + PLAYER_RADIUS > item.y && player.y - PLAYER_RADIUS < item.y + item.height);
    if (!rect) break;
    const options = [
      { x: rect.x - PLAYER_RADIUS, y: player.y },
      { x: rect.x + rect.width + PLAYER_RADIUS, y: player.y },
      { x: player.x, y: rect.y - PLAYER_RADIUS },
      { x: player.x, y: rect.y + rect.height + PLAYER_RADIUS }
    ].map(point => ({ x: clamp(point.x, PLAYER_RADIUS, WIDTH - PLAYER_RADIUS), y: clamp(point.y, PLAYER_RADIUS, HEIGHT - PLAYER_RADIUS) }));
    const safe = options.filter(point => !blocked(point.x, point.y, room)).sort((a, b) =>
      Math.hypot(a.x - player.x, a.y - player.y) - Math.hypot(b.x - player.x, b.y - player.y))[0];
    if (!safe) break;
    player.x = safe.x;
    player.y = safe.y;
  }
}
function touchesObstacle(x, y, rect) {
  return x + PLAYER_RADIUS > rect.x && x - PLAYER_RADIUS < rect.x + rect.width &&
    y + PLAYER_RADIUS > rect.y && y - PLAYER_RADIUS < rect.y + rect.height;
}
function segmentTouchesObstacle(x1, y1, x2, y2, rect) {
  const distance = Math.hypot(x2 - x1, y2 - y1);
  const steps = Math.max(1, Math.ceil(distance / 4));
  for (let step = 0; step <= steps; step++) {
    const t = step / steps;
    if (touchesObstacle(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, rect)) return true;
  }
  return false;
}
function countObstaclePasses(room, player, oldX, oldY, newX, newY) {
  if (!player.obstacleInside) player.obstacleInside = room.obstacles.map(() => false);
  if (!player.obstacleEntered) player.obstacleEntered = room.obstacles.map(() => false);
  for (let index = 0; index < room.obstacles.length; index++) {
    const rect = room.obstacles[index];
    if (room.obstaclePassCounts[index] >= OBSTACLE_PASS_LIMIT) continue;
    const wasInside = player.obstacleInside[index];
    const isInside = touchesObstacle(newX, newY, rect);
    const touched = segmentTouchesObstacle(oldX, oldY, newX, newY, rect);
    if (!player.obstacleEntered[index] && !wasInside && touched) player.obstacleEntered[index] = true;
    if (player.obstacleEntered[index] && wasInside && !isInside) {
      player.obstacleEntered[index] = false;
      room.obstaclePassCounts[index]++;
    } else if (player.obstacleEntered[index] && !wasInside && !isInside && touched) {
      // A fast movement packet can cross the whole obstacle between updates.
      player.obstacleEntered[index] = false;
      room.obstaclePassCounts[index]++;
    }
    player.obstacleInside[index] = isInside;
    if (room.obstaclePassCounts[index] >= OBSTACLE_PASS_LIMIT) io.to(room.code).emit('obstacle-explode', { indexes:[index] });
  }
  room.obstaclesGone = room.obstaclePassCounts.every(count => count >= OBSTACLE_PASS_LIMIT);
}
function finishIfOneLeft(room) {
  if (!room.started || room.gameOver) return;
  const alive = alivePlayers(room);
  if (alive.length <= 1) {
    room.gameOver = true;
    room.winnerId = alive[0]?.id || null;
    room.taggerId = room.winnerId;
    io.to(room.code).emit('game-over', { winnerId: room.winnerId, winnerName: alive[0]?.name || null });
  }
}
function rotate(room) {
  const ids = alivePlayers(room).map(player => player.id);
  if (ids.length > 1) {
    const index = ids.indexOf(room.taggerId);
    room.taggerId = ids[(index + 1) % ids.length];
    const player = room.players.get(room.taggerId);
    moveOutsideObstacles(player, room);
    player.obstacleInside = room.obstacles.map(() => false);
    player.obstacleEntered = room.obstacles.map(() => false);
    io.to(room.code).emit('toast', `술래 교대! ${player.name}님이 술래예요.`);
  }
  room.nextTurnAt = Date.now() + TURN_MS;
}

function removePlayerFromRoom(socket) {
  const code = socket.data.roomCode;
  const room = rooms.get(code);
  if (!room) return;
  const wasTagger = room.taggerId === socket.id;
  const player = room.players.get(socket.id);
  room.players.delete(socket.id);
  socket.data.roomCode = null;
  if (wasTagger) {
    const nextTagger = alivePlayers(room)[0] || null;
    room.taggerId = nextTagger?.id || null;
    if (nextTagger && room.started && !room.gameOver) {
      moveOutsideObstacles(nextTagger, room);
      nextTagger.obstacleInside = room.obstacles.map(() => false);
      nextTagger.obstacleEntered = room.obstacles.map(() => false);
      room.nextTurnAt = Date.now() + TURN_MS;
      io.to(code).emit('toast', `${player?.name || '플레이어'}님이 나가 술래가 바뀌었어요.`);
    }
  }
  if (room.players.size === 0) {
    rooms.delete(code);
    return;
  }
  if (room.gameOver && room.winnerId === socket.id) room.winnerId = null;
  if (room.started && !room.gameOver) finishIfOneLeft(room);
  sendState(room);
}

function applyForcedMove(room, player, targetX, targetY, now = Date.now()) {
  const oldX = player.x, oldY = player.y;
  const x = clamp(targetX, PLAYER_RADIUS, WIDTH - PLAYER_RADIUS);
  const y = clamp(targetY, PLAYER_RADIUS, HEIGHT - PLAYER_RADIUS);
  if (player.id === room.taggerId) moveTagger(player, x, y, room);
  else {
    player.x = x; player.y = y;
    countObstaclePasses(room, player, oldX, oldY, player.x, player.y);
  }
  if (Math.hypot(player.x - oldX, player.y - oldY) > 28) {
    player.snapVersion++;
    player.tagImmuneUntil = Math.max(player.tagImmuneUntil, now + 180);
  }
}
function shieldBlocks(room, player, now) {
  if (player.shieldUntil <= now) return false;
  player.shieldUntil = 0;
  player.tagImmuneUntil = Math.max(player.tagImmuneUntil, now + 850);
  io.to(room.code).emit('toast', `${player.name}님의 방패가 공격을 막았어요!`);
  return true;
}
function eliminateOnlinePlayer(room, player, reason) {
  if (!player.alive) return false;
  if (player.adminInvincible) {
    io.to(room.code).emit('toast', `${player.name}님의 관리자 보호가 공격을 막았어요!`);
    return false;
  }
  player.alive = false;
  io.to(room.code).emit('toast', `${player.name}님이 ${reason} 탈락했어요!`);
  finishIfOneLeft(room);
  return true;
}
function createGravityField(room, x, y, now, ownerId = null) {
  room.fields.push({ id:crypto.randomUUID(), ownerId, x, y, radius:145, expiresAt:now + 3600 });
}
function updateRoomEffects(room, now) {
  const stepSeconds = .05;
  for (const player of room.players.values()) {
    if (!player.alive || !player.anchor || player.anchor.returnAt > now) continue;
    player.x = player.anchor.x; player.y = player.anchor.y;
    player.anchor = null;
    player.snapVersion++;
    player.tagImmuneUntil = now + 350;
    io.to(room.code).emit('toast', `${player.name}님의 시간 닻이 발동했어요!`);
  }

  for (let index = room.projectiles.length - 1; index >= 0; index--) {
    const projectile = room.projectiles[index];
    projectile.age += stepSeconds;
    if (projectile.targetId) {
      let target = room.players.get(projectile.targetId);
      if (!target?.alive || target.id === projectile.ownerId) {
        target = [...room.players.values()].filter(player => player.alive && player.id !== projectile.ownerId)
          .sort((a, b) => Math.hypot(a.x - projectile.x, a.y - projectile.y) - Math.hypot(b.x - projectile.x, b.y - projectile.y))[0] || null;
        projectile.targetId = target?.id || null;
      }
      if (target) {
        const dx = target.x - projectile.x, dy = target.y - projectile.y;
        const distance = Math.hypot(dx, dy) || 1;
        const speed = Math.max(1000, Math.hypot(projectile.vx, projectile.vy));
        projectile.vx = dx / distance * speed;
        projectile.vy = dy / distance * speed;
      }
    }
    if (projectile.kind === 'boomerang' && projectile.age >= .78 && !projectile.targetId) projectile.returning = true;
    if (projectile.returning) {
      const owner = room.players.get(projectile.ownerId);
      if (!owner?.alive) { room.projectiles.splice(index, 1); continue; }
      const dx = owner.x - projectile.x, dy = owner.y - projectile.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 18) { room.projectiles.splice(index, 1); continue; }
      projectile.vx = dx / distance * 560;
      projectile.vy = dy / distance * 560;
    }
    const oldX = projectile.x, oldY = projectile.y;
    projectile.x += projectile.vx * stepSeconds;
    projectile.y += projectile.vy * stepSeconds;
    projectile.life -= stepSeconds;
    let remove = projectile.life <= 0 || projectile.x < 0 || projectile.x > WIDTH || projectile.y < 0 || projectile.y > HEIGHT;
    if (!remove) {
      for (const target of room.players.values()) {
        if (!target.alive || target.id === projectile.ownerId) continue;
        let distance = Math.hypot(target.x - projectile.x, target.y - projectile.y);
        if (projectile.targetId === target.id) {
          const dx = projectile.x - oldX, dy = projectile.y - oldY;
          const lengthSquared = dx * dx + dy * dy;
          const projection = lengthSquared ? clamp(((target.x - oldX) * dx + (target.y - oldY) * dy) / lengthSquared, 0, 1) : 0;
          distance = Math.hypot(target.x - (oldX + dx * projection), target.y - (oldY + dy * projection));
        }
        if (distance > 20) continue;
        remove = true;
        if (target.adminInvincible) {
          io.to(room.code).emit('toast', `${target.name}님의 관리자 보호가 공격을 막았어요!`);
        } else if (projectile.kind === 'gravity') {
          createGravityField(room, projectile.x, projectile.y, now, projectile.ownerId);
        } else if (!shieldBlocks(room, target, now)) {
          if (projectile.kind === 'ice') {
            target.frozenUntil = Math.max(target.frozenUntil, now + 1300);
            target.slowedUntil = Math.max(target.slowedUntil, now + 3900);
            io.to(room.code).emit('toast', `${target.name}님이 빙결탄에 맞았어요!`);
          } else if (projectile.kind !== 'gravity') {
            eliminateOnlinePlayer(room, target, projectile.kind === 'boomerang' ? '부메랑에 맞아' : '주먹에 맞아');
          }
        }
        break;
      }
    }
    if (remove) room.projectiles.splice(index, 1);
    else if (projectile.kind === 'gravity' && projectile.age >= 1.5) {
      createGravityField(room, projectile.x, projectile.y, now, projectile.ownerId);
      room.projectiles.splice(index, 1);
    }
    if (projectile.x === oldX && projectile.y === oldY) room.projectiles.splice(index, 1);
  }

  room.traps = room.traps.filter(trap => trap.expiresAt > now);
  for (let index = room.traps.length - 1; index >= 0; index--) {
    const trap = room.traps[index];
    const target = [...room.players.values()].find(player => player.alive && player.id !== trap.ownerId && Math.hypot(player.x - trap.x, player.y - trap.y) < 24);
    if (!target) continue;
    const dx = target.x - trap.x, dy = target.y - trap.y, distance = Math.hypot(dx, dy) || 1;
    applyForcedMove(room, target, target.x + dx / distance * 145, target.y + dy / distance * 145, now);
    target.frozenUntil = Math.max(target.frozenUntil, now + 650);
    room.traps.splice(index, 1);
    io.to(room.code).emit('toast', `${target.name}님이 용수철 덫에 걸렸어요!`);
  }

  room.fields = room.fields.filter(field => field.expiresAt > now);
  for (const field of room.fields) {
    for (const target of room.players.values()) {
      if (!target.alive || target.id === field.ownerId) continue;
      const dx = field.x - target.x, dy = field.y - target.y, distance = Math.hypot(dx, dy);
      if (distance < 8 || distance > field.radius) continue;
      const pull = Math.min(5, (field.radius - distance) / field.radius * 5);
      applyForcedMove(room, target, target.x + dx / distance * pull, target.y + dy / distance * pull, now);
    }
  }
  room.decoys = room.decoys.filter(decoy => decoy.expiresAt > now);
}

function useOnlineSpecial(socket, payload, acknowledge) {
  const reply = typeof acknowledge === 'function' ? acknowledge : () => {};
  const room = rooms.get(socket.data.roomCode);
  const player = room?.players.get(socket.id);
  const item = payload?.item;
  const fail = message => reply({ ok:false, error:message });
  if (!room || !player?.alive || !room.started || room.gameOver) return fail('게임 중에만 무기를 사용할 수 있어요.');
  if (typeof item !== 'string' || !Object.hasOwn(ACCOUNT_ITEM_PRICES, item)) return fail('알 수 없는 무기예요.');
  const account = accountForSocket(socket);
  if (!account) return fail('온라인 무기를 쓰려면 로그인해 주세요.');
  if (!account.owned.includes(item) || account.equipped !== item) return fail('계정에서 이 무기를 장착해 주세요.');
  const now = Date.now();
  if (player.specialCooldownUntil > now) return fail(`무기가 충전 중이에요. ${Math.ceil((player.specialCooldownUntil - now) / 1000)}초 기다려 주세요.`);
  const angle = Number.isFinite(payload?.angle) ? clamp(payload.angle, -Math.PI, Math.PI) : player.angle;
  player.equippedItem = item;
  player.angle = angle;
  const directionX = Math.cos(angle), directionY = Math.sin(angle);
  const announce = message => io.to(room.code).emit('toast', message);

  if (item === 'shield') {
    player.shieldUntil = now + 2000;
    announce(`${player.name}님이 수호 방패를 펼쳤어요.`);
  } else if (['punch', 'boomerang', 'ice', 'gravity'].includes(item)) {
    const speed = item === 'punch' ? 540 : item === 'boomerang' ? 470 : item === 'ice' ? 430 : 360;
    const target = adminPowersFor(socket).aim
      ? [...room.players.values()].filter(other => other.alive && other.id !== player.id)
        .sort((a, b) => Math.hypot(a.x - player.x, a.y - player.y) - Math.hypot(b.x - player.x, b.y - player.y))[0]
      : null;
    const shotAngle = target ? Math.atan2(target.y - player.y, target.x - player.x) : angle;
    const shotX = Math.cos(shotAngle), shotY = Math.sin(shotAngle);
    if (target) player.angle = shotAngle;
    room.projectiles.push({
      id:crypto.randomUUID(), kind:item, ownerId:player.id,
      x:player.x + shotX * 16, y:player.y + shotY * 16,
      vx:shotX * (target ? 1000 : speed), vy:shotY * (target ? 1000 : speed),
      targetId:target?.id || null,
      life:target ? 4 : item === 'boomerang' ? 2.4 : item === 'ice' ? 1.65 : item === 'gravity' ? 1.5 : 1.35,
      age:0, returning:false
    });
    announce(`${player.name}님이 ${item === 'ice' ? '빙결탄' : item === 'gravity' ? '중력 구슬' : item === 'boomerang' ? '부메랑' : '날아가는 주먹'}을 사용했어요!`);
  } else if (item === 'blink') {
    let destination = null;
    for (let distance = 170; distance >= 70; distance -= 10) {
      const point = { x:clamp(player.x + directionX * distance, 24, WIDTH - 24), y:clamp(player.y + directionY * distance, 34, HEIGHT - 34) };
      const blockedForTagger = player.id === room.taggerId && blocked(point.x, point.y, room);
      const overlapsPlayer = [...room.players.values()].some(other => other.alive && other.id !== player.id && Math.hypot(other.x - point.x, other.y - point.y) < 32);
      if (!blockedForTagger && !overlapsPlayer && Math.hypot(point.x - player.x, point.y - player.y) >= 60) { destination = point; break; }
    }
    if (!destination) return fail('순간 이동할 빈 공간이 없어요. 방향을 바꿔 다시 시도해 주세요.');
    player.x = destination.x; player.y = destination.y; player.snapVersion++;
    player.tagImmuneUntil = now + 350;
    announce(`${player.name}님이 번개 장화로 순간 이동했어요.`);
  } else if (item === 'smoke') {
    player.hiddenUntil = now + 3000;
    announce(`${player.name}님이 유령 연막을 사용했어요.`);
  } else if (item === 'decoy') {
    room.decoys.push({ id:crypto.randomUUID(), ownerId:player.id, name:player.name,
      x:clamp(player.x + directionX * 95, 30, WIDTH - 30), y:clamp(player.y + directionY * 95, 40, HEIGHT - 40),
      angle, expiresAt:now + 4500 });
    announce(`${player.name}님이 도플갱어 미끼를 놓았어요.`);
  } else if (item === 'gust') {
    let pushed = 0;
    for (const target of room.players.values()) {
      if (!target.alive || target.id === player.id) continue;
      const dx = target.x - player.x, dy = target.y - player.y, distance = Math.hypot(dx, dy);
      if (distance > 220) continue;
      const scale = 160 / (distance || 1);
      applyForcedMove(room, target, target.x + (distance ? dx * scale : 160), target.y + (distance ? dy * scale : 0), now);
      pushed++;
    }
    announce(pushed ? `${player.name}님의 폭풍 장갑이 주변 플레이어 ${pushed}명을 밀어냈어요.` : `${player.name}님이 폭풍 장갑을 사용했어요.`);
  } else if (item === 'thunder') {
    let stunned = 0;
    for (const target of room.players.values()) {
      if (!target.alive || target.id === player.id || Math.hypot(target.x - player.x, target.y - player.y) > 155) continue;
      target.frozenUntil = Math.max(target.frozenUntil, now + 1350);
      stunned++;
    }
    announce(stunned ? `${player.name}님의 천둥 북이 ${stunned}명을 멈췄어요!` : `${player.name}님이 천둥 북을 쳤어요.`);
  } else if (item === 'spring') {
    const trapAngle = angle + (player.id === room.taggerId ? 0 : Math.PI);
    room.traps.push({ id:crypto.randomUUID(), kind:'spring', ownerId:player.id,
      x:clamp(player.x + Math.cos(trapAngle) * 44, 35, WIDTH - 35),
      y:clamp(player.y + Math.sin(trapAngle) * 44, 45, HEIGHT - 45), expiresAt:now + 9000 });
    announce(`${player.name}님이 용수철 덫을 설치했어요.`);
  } else if (item === 'phase') {
    if (player.id !== room.taggerId) return fail('유령 망토는 술래일 때만 사용할 수 있어요.');
    player.phaseUntil = now + 2200;
    announce(`${player.name}님이 유령 망토를 펼쳤어요.`);
  } else if (item === 'haste') {
    player.speedBoostUntil = now + 4200;
    announce(`${player.name}님이 혜성 운동화로 빨라졌어요.`);
  } else if (item === 'anchor') {
    player.anchor = { x:player.x, y:player.y, returnAt:now + 3000 };
    announce(`${player.name}님이 시간 닻을 놓았어요.`);
  } else if (item === 'swap') {
    const target = [...room.players.values()].filter(other => other.alive && other.id !== player.id)
      .sort((a, b) => Math.hypot(a.x - player.x, a.y - player.y) - Math.hypot(b.x - player.x, b.y - player.y))[0];
    if (!target || Math.hypot(target.x - player.x, target.y - player.y) > 260) return fail('자리를 바꿀 플레이어가 가까이 없어요.');
    const playerSpot = { x:player.x, y:player.y }, targetSpot = { x:target.x, y:target.y };
    if ((player.id === room.taggerId && blocked(targetSpot.x, targetSpot.y, room)) ||
        (target.id === room.taggerId && blocked(playerSpot.x, playerSpot.y, room))) return fail('술래를 장애물 안으로 옮길 수 없어요.');
    player.x = targetSpot.x; player.y = targetSpot.y;
    target.x = playerSpot.x; target.y = playerSpot.y;
    player.snapVersion++; target.snapVersion++;
    player.tagImmuneUntil = target.tagImmuneUntil = now + 350;
    announce(`${player.name}님이 ${target.name}님과 자리를 바꿨어요!`);
  }
  player.specialCooldownUntil = now + ACCOUNT_ITEM_COOLDOWNS[item];
  reply({ ok:true, cooldownMs:ACCOUNT_ITEM_COOLDOWNS[item] });
  sendState(room);
}

io.on('connection', socket => {
  socket.data.connectedAt = Date.now();
  socket.data.adminPowers = { speed:false, invincible:false, aim:false };
  const token = socket.handshake.auth?.token || readCookie(socket.request, SESSION_COOKIE);
  socket.data.accountId = verifySession(token)?.id || null;
  socket.on('account-logout', () => {
    socket.data.accountId = null;
    socket.data.adminPowers = { speed:false, invincible:false, aim:false };
    const room = rooms.get(socket.data.roomCode);
    const player = room?.players.get(socket.id);
    if (player) { player.equippedItem = null; player.shieldUntil = 0; player.adminInvincible = false; }
    if (room) sendState(room);
  });
  socket.on('join', payload => {
    const account = accountForSocket(socket);
    if (!account) { socket.emit('notice', '온라인 게임은 이름과 비밀번호로 로그인해야 참가할 수 있어요.'); return; }
    const name = account.username;
    const code = String(payload?.code || '').trim().toUpperCase().slice(0, 12);
    if (!code) { socket.emit('notice', '방 코드를 입력해 주세요.'); return; }
    if (socket.data.roomCode || socket.data.matchmaking) return;

    let room = rooms.get(code);
    if (!room) room = createRoom(code);
    if (room.gameOver) { socket.emit('notice', '이 방의 게임은 끝났어요. 새 방 코드를 사용해 주세요.'); return; }
    if (room.players.size >= 12) { socket.emit('notice', '방이 가득 찼어요. (최대 12명)'); return; }

    const spawn = safeSpawn(room);
    const player = makePlayer(socket.id, name, spawn, room, socket);
    room.players.set(socket.id, player);
    if (!room.taggerId) room.taggerId = socket.id;
    if (!room.started && room.players.size >= 2) {
      room.started = true;
      room.nextTurnAt = Date.now() + TURN_MS;
      io.to(room.code).emit('toast', '게임 시작! 술래를 피해 도망가세요.');
    }
    socket.data.roomCode = code;
    socket.join(code);
    socket.emit('joined', { id: socket.id, code });
    sendState(room);
  });

  socket.on('matchmake', payload => {
    if (socket.data.roomCode) return;
    const account = accountForSocket(socket);
    if (!account) { socket.emit('notice', '매칭은 이름과 비밀번호로 로그인해야 참가할 수 있어요.'); return; }
    const name = account.username;
    const existing = matchmakingQueue.get(socket.id);
    if (existing) { broadcastMatchmakingState(); return; }
    if (matchmakingQueue.size >= 12) { socket.emit('notice', '현재 매칭 대기열이 가득 찼어요. 잠시 후 다시 시도해 주세요.'); return; }
    matchmakingQueue.set(socket.id, { name, ready:false });
    socket.data.matchmaking = true;
    if (matchmakingQueue.size === 1 || !matchDeadlineAt) matchDeadlineAt = Date.now() + MATCH_WAIT_MS;
    broadcastMatchmakingState();
    maybeStartMatchmakingGame();
  });

  socket.on('match-ready', payload => {
    const entry = matchmakingQueue.get(socket.id);
    if (!entry) return;
    entry.ready = !!payload?.ready;
    broadcastMatchmakingState();
    maybeStartMatchmakingGame();
  });

  socket.on('move', data => {
    const room = rooms.get(socket.data.roomCode);
    const player = room?.players.get(socket.id);
    if (!player || !player.alive || room.gameOver || !Number.isFinite(data?.x) || !Number.isFinite(data?.y)) return;
    const now = Date.now();
    if (player.frozenUntil > now) return;
    const x = clamp(data.x, PLAYER_RADIUS, WIDTH - PLAYER_RADIUS);
    const y = clamp(data.y, PLAYER_RADIUS, HEIGHT - PLAYER_RADIUS);
    const oldX = player.x, oldY = player.y;
    const elapsed = clamp((now - (player.lastMoveAt || now)) / 1000, .025, .2);
    const baseSpeed = socket.id === room.taggerId ? 210 : 273;
    const speedFactor = (player.slowedUntil > now ? .42 : 1) * (player.speedBoostUntil > now ? 1.65 : 1) * (adminPowersFor(socket).speed ? 2.5 : 1);
    const maxDistance = baseSpeed * speedFactor * elapsed + 18;
    const wantedDistance = Math.hypot(x - oldX, y - oldY);
    const limit = wantedDistance > maxDistance ? maxDistance / wantedDistance : 1;
    const acceptedX = oldX + (x - oldX) * limit;
    const acceptedY = oldY + (y - oldY) * limit;
    if (socket.id === room.taggerId) moveTagger(player, acceptedX, acceptedY, room);
    else {
      player.x = acceptedX; player.y = acceptedY;
      countObstaclePasses(room, player, oldX, oldY, player.x, player.y);
    }
    if (Number.isFinite(data.angle)) player.angle = clamp(data.angle, -Math.PI, Math.PI);
    player.lastMoveAt = now;
  });

  socket.on('use-special', (payload, acknowledge) => useOnlineSpecial(socket, payload, acknowledge));

  socket.on('restart', () => {
    const room = rooms.get(socket.data.roomCode);
    if (!room || !room.gameOver) return;
    const lineup = [...room.players.values()];
    if (lineup.length < 2) {
      socket.emit('notice', '다시 하려면 방에 두 명 이상 있어야 해요.');
      return;
    }
    room.obstacles = generateObstacleLayout();
    room.obstaclesGone = false;
    room.obstaclePassCounts = room.obstacles.map(() => 0);
    room.projectiles = []; room.traps = []; room.fields = []; room.decoys = [];
    lineup.forEach(player => {
      player.alive = true;
      const spawn = safeSpawn(room);
      player.x = spawn.x;
      player.y = spawn.y;
      player.angle = 0;
      player.shieldUntil = player.frozenUntil = player.slowedUntil = player.hiddenUntil = 0;
      player.phaseUntil = player.speedBoostUntil = player.specialCooldownUntil = player.tagImmuneUntil = 0;
      player.anchor = null;
      player.snapVersion++;
      player.obstacleInside = room.obstacles.map(() => false);
      player.obstacleEntered = room.obstacles.map(() => false);
    });
    const nextTagger = lineup[Math.floor(Math.random() * lineup.length)];
    moveOutsideObstacles(nextTagger, room);
    room.started = true;
    room.gameOver = false;
    room.winnerId = null;
    room.taggerId = nextTagger.id;
    room.nextTurnAt = Date.now() + TURN_MS;
    room.tagCooldownUntil = Date.now() + 1000;
    io.to(room.code).emit('toast', `새 게임 시작! ${nextTagger.name}님이 술래예요.`);
    sendState(room);
  });

  socket.on('leave', () => {
    const code = socket.data.roomCode;
    if (cancelMatchmaking(socket, true)) return;
    if (!code) { socket.emit('left'); return; }
    removePlayerFromRoom(socket);
    socket.leave(code);
    socket.emit('left');
  });

  socket.on('disconnect', () => {
    cancelMatchmaking(socket, false);
    removePlayerFromRoom(socket);
  });
});

setInterval(() => {
  if (!matchmakingQueue.size || !matchDeadlineAt) return;
  const now = Date.now();
  const second = Math.ceil(Math.max(0, matchDeadlineAt - now) / 1000);
  if (second !== lastMatchStateSecond) {
    lastMatchStateSecond = second;
    broadcastMatchmakingState();
  }
  if (now < matchDeadlineAt) return;
  if (matchmakingQueue.size >= 2) startMatchmakingGame();
  else {
    for (const entry of matchmakingQueue.values()) entry.ready = false;
    matchDeadlineAt = now + MATCH_WAIT_MS;
    lastMatchStateSecond = -1;
    broadcastMatchmakingState('아직 상대가 없어 계속 찾고 있어요.');
  }
}, 250);

setInterval(() => {
  const now = Date.now();
  for (const room of rooms.values()) {
    if (room.started && !room.gameOver && room.taggerId && now >= room.nextTurnAt) rotate(room);
    if (room.started && !room.gameOver) updateRoomEffects(room, now);
    const tagger = room.players.get(room.taggerId);
    if (room.started && !room.gameOver && tagger?.alive && now >= room.tagCooldownUntil) {
      for (const player of room.players.values()) {
        if (player.alive && player.id !== tagger.id && !player.adminInvincible && player.hiddenUntil <= now && player.tagImmuneUntil <= now && Math.hypot(player.x - tagger.x, player.y - tagger.y) < 31) {
          if (shieldBlocks(room, player, now)) {
            room.tagCooldownUntil = now + 500;
            break;
          }
          player.alive = false;
          room.tagCooldownUntil = now + 900;
          io.to(room.code).emit('toast', `${player.name}님이 잡혀 탈락했어요!`);
          finishIfOneLeft(room);
          break;
        }
      }
    }
    sendState(room);
  }
}, 50);

const port = Number(process.env.PORT) || 3000;
server.listen(port, '0.0.0.0', () => console.log(`Tag Stickmen running on http://localhost:${port}`));
server.on('error', error => {
  console.error(`Could not start the game server: ${error.message}`);
  process.exitCode = 1;
});
