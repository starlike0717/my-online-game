(() => {
  'use strict';

  // Original synthesized music and effects need no downloaded audio files.
  class GameAudio {
    constructor() {
      try { this.enabled = localStorage.getItem('tag-sound-enabled-v1') !== 'off'; } catch { this.enabled = true; }
      this.context = null;
      this.master = null;
      this.timer = null;
      this.step = 0;
      this.paused = false;
      this.resultKey = null;
    }
    unlock() {
      if (!this.enabled || document.hidden) return;
      try {
        if (!this.context) {
          const Audio = window.AudioContext || window.webkitAudioContext;
          if (!Audio) return;
          this.context = new Audio();
          this.master = this.context.createGain();
          this.master.gain.value = .2;
          this.master.connect(this.context.destination);
          this.timer = setInterval(() => this.music(), 300);
        }
        if (this.context.state === 'suspended') this.context.resume().catch(() => {});
      } catch { /* An unavailable audio device must never block the game UI. */ }
    }
    tone(note, duration = .16, volume = .2, delay = 0, type = 'sine') {
      if (!this.enabled || !this.context || this.context.state !== 'running' || document.hidden) return;
      try {
        const now = this.context.currentTime + delay;
        const oscillator = this.context.createOscillator(), gain = this.context.createGain();
        oscillator.type = type;
        oscillator.frequency.value = 440 * 2 ** ((note - 69) / 12);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(volume, now + .012);
        gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
        oscillator.connect(gain); gain.connect(this.master);
        oscillator.start(now); oscillator.stop(now + duration + .02);
        oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
      } catch {}
    }
    music() {
      if (this.paused || !this.enabled || document.hidden) return;
      const melody = [72,76,79,76,74,77,81,77,72,76,79,84,81,79,76,74];
      this.tone(melody[this.step % melody.length], .24, .1, 0, 'triangle');
      if (this.step % 4 === 0) this.tone([48,53,48,55][Math.floor(this.step / 4) % 4], .8, .13);
      this.step++;
    }
    effect(kind) {
      const notes = {
        click:[79], skill:[67,74,86], tag:[76,64], hit:[55,48],
        ready:[76,84], win:[72,76,79,84,88], lose:[67,63,60,55]
      }[kind] || [];
      notes.forEach((note, i) => this.tone(note, kind === 'click' ? .065 : .18, kind === 'click' ? .12 : .3, i * .09, kind === 'hit' ? 'triangle' : 'sine'));
    }
    toggle() {
      this.enabled = !this.enabled;
      try { localStorage.setItem('tag-sound-enabled-v1', this.enabled ? 'on' : 'off'); } catch {}
      if (this.master && this.context) this.master.gain.setValueAtTime(this.enabled ? .2 : 0, this.context.currentTime);
      if (this.enabled) this.unlock();
    }
    result(key, won) {
      if (key && this.resultKey !== key) this.effect(won ? 'win' : 'lose');
      this.resultKey = key;
    }
  }
  const gameAudio = new GameAudio();

  // Keep networking helpers in this file so deployment cannot omit a dependency.
  class MovementHistory {
    constructor() { this.reset(); }
    reset() { this.sequence = 0; this.acknowledged = 0; this.sent = []; }
    clear() { this.sent = []; this.acknowledged = this.sequence; }
    record(x, y) {
      const move = { seq:++this.sequence, x, y };
      this.sent.push(move);
      if (this.sent.length > 160) this.sent.shift();
      return move;
    }
    correction(player) {
      const seq = player.lastMoveSeq;
      if (!Number.isSafeInteger(seq) || seq <= this.acknowledged) return null;
      const move = this.sent.find(item => item.seq === seq);
      this.sent = this.sent.filter(item => item.seq > seq);
      this.acknowledged = seq;
      // Compare the server position with the position in that exact packet,
      // never with the newer position currently being drawn on this client.
      return move ? { x:player.x - move.x, y:player.y - move.y } : null;
    }
  }
  class SnapshotBuffer {
    constructor() { this.samples = []; }
    push(time, x, y, reset = false) {
      if (!Number.isFinite(time) || !Number.isFinite(x) || !Number.isFinite(y)) return;
      if (reset) this.samples = [];
      const last = this.samples[this.samples.length - 1];
      if (last && time < last.time) return;
      if (last?.time === time) this.samples.pop();
      this.samples.push({ time, x, y });
      if (this.samples.length > 24) this.samples.shift();
    }
    sample(time) {
      const samples = this.samples;
      if (!samples.length) return null;
      if (time <= samples[0].time) return samples[0];
      for (let i = 1; i < samples.length; i++) {
        const before = samples[i - 1], after = samples[i];
        if (time > after.time) continue;
        const fraction = (time - before.time) / (after.time - before.time);
        return { x:before.x + (after.x - before.x) * fraction, y:before.y + (after.y - before.y) * fraction };
      }
      const last = samples[samples.length - 1], previous = samples[samples.length - 2];
      if (!previous) return last;
      const elapsed = Math.max(1, last.time - previous.time);
      const lead = Math.min(100, Math.max(0, time - last.time));
      // Predict only briefly during a missing packet, then stop instead of drifting.
      return {
        x:Math.max(10, Math.min(790, last.x + (last.x - previous.x) / elapsed * lead)),
        y:Math.max(10, Math.min(470, last.y + (last.y - previous.y) / elapsed * lead))
      };
    }
  }


  const $ = id => document.getElementById(id);
  const GAME_SERVER_URL = String(window.GAME_SERVER_URL || location.origin).trim().replace(/\/+$/, '');
  const ACCOUNT_TOKEN_KEY = 'tag-stickmen-account-token-v1';
  function readAccountToken() {
    try { return localStorage.getItem(ACCOUNT_TOKEN_KEY) || ''; } catch { return ''; }
  }
  const LANGUAGE_KEY = 'tag-stickmen-language-v1';
  let language = (() => { try { return localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'ko'; } catch { return 'ko'; } })();
  const ENGLISH_TEXT = {
    '무기 상점':'Weapon shop', '게임이나 매칭 대기 중에는 무기를 바꿀 수 없어요. 로비에서 장착해 주세요.':'Equip weapons in the lobby. You cannot change them during a game or matchmaking.',
    '상점 처리가 끝난 뒤 입장해 주세요.':'Wait for the shop action to finish before joining.',
    '술레잡기':'Tag', '게임':'Game', '장착 중인 무기':'Equipped weapon', '무기 충전':'Weapon charge', '소리 끄기':'Mute sound', '소리 켜기':'Enable sound',
    '게임이 끝난 방에 입장했어요. 다시 하기를 눌러 새 게임을 시작하세요.':'Joined a finished room. Press Play again to start a new game.',
    '메뉴 스크롤':'Scroll menu', '↑ 위로':'↑ Up', '↓ 아래로':'↓ Down',
    '입장 버튼으로 ↓':'Go to entry button ↓', '시작 버튼으로 ↓':'Go to start button ↓',
    '특정 계정 관리':'Manage a specific account', '대상 아이디':'Target username', '계정 조회':'Look up account',
    '대상 아이디를 입력하거나 접속 목록에서 선택하세요. 선택한 계정에만 적용됩니다.':'Enter a username or select an online account. Changes apply only to that account.',
    '계정을 조회하면 보유 코인과 핵 기능을 볼 수 있어요.':'Look up an account to view its coins and powers.',
    '이 계정에 허용할 핵':'Powers granted to this account', '선택한 핵 적용':'Apply selected powers', '핵 전부 회수':'Revoke all granted powers',
    '코인 수량':'Coin amount', '코인 회수':'Revoke coins', '대상 아이디를 입력해 주세요.':'Enter a target username.',
    '보유 코인보다 많이 회수할 수 없어요.':'You cannot revoke more coins than the account owns.',
    '핵 기능 설정이 올바르지 않아요.':'Invalid power settings.', '코인 작업이 올바르지 않아요.':'Invalid coin action.',

    '연결 확인 중':'Checking connection', '로그인':'Log in', '친구들과 뛰어놀 시간':'Time to run with friends',
    '빙글빙글':'Stickman', '술래잡기':'Tag', '술래를 피해 달려요. 10초마다 술래가 바뀌어요!':'Run from the tagger. The tagger changes every 10 seconds!',
    '복사':'Copy', '연습 진행':'Practice stage', '코인':'Coins', '다음 술래 교대':'Next tagger swap', '남은 플레이어':'Players left',
    '술래잡기 게임 화면':'Tag game arena', '게임 참가':'Join game', '터치 이동 조작':'Touch movement controls', '가상 조이스틱':'Virtual joystick', '같이 뛰어볼까요?':'Ready to play?',
    '이름과 방 코드를 입력해 주세요.':'Enter your name and room code.', '온라인':'Online', '매칭':'Matchmaking', '연습':'Practice',
    '단계 도전':'Stage challenge', '특수 훈련장':'Special training', '1단계 · 0 코인':'Stage 1 · 0 coins',
    '상점':'Shop', '내 이름':'Your name', '방 코드':'Room code', '게임 시작':'Start game', '같은 방 코드를 친구와 공유해 보세요':'Share your room code with friends',
    '빠른 매칭':'Quick match', '상대를 찾고 있어요':'Finding players', '최대 30초 동안 함께할 플레이어를 찾습니다.':'Finding players for up to 30 seconds.',
    '대기 인원':'Players waiting', '남은 시간':'Time left', '바로 시작 동의':'Ready to start', '바로 시작하기':'Start now', '매칭 취소':'Cancel matchmaking',
    '연습 상점':'Practice shop', '장비는 여러 개 보유할 수 있지만, 한 번에 하나만 장착할 수 있어요.':'You can own several items, but equip only one at a time.',
    '보유 코인':'Coins', '돌아가기':'Back', '계정 로그인':'Account login', '코인 계정':'Coin account', '단계':'Stage',
    '로그인하면 코인과 장비가 계정에 저장돼요.':'Sign in to save your coins and equipment.', '로그인 또는 가입':'Sign in or register',
    '새 계정 만들기':'Create account', '이름 / 아이디':'Name / username', '이름 또는 아이디':'Name or username',
    '관리자':'Admin', '코인 받을 아이디':'Account to credit', '지급 코인':'Coins to grant', '코인 지급':'Grant coins',
    '접속 중인 플레이어':'Players online', '새로고침':'Refresh', '목록을 불러오는 중…':'Loading players…',
    '계정에 코인을 지급하고 현재 접속한 플레이어를 확인해요.':'Grant coins to accounts and see who is connected.',
    '관리자 능력':'Admin powers', '스피드 핵 · 2.5배':'Speed hack · 2.5×', '잡힘 방지':'Tag immunity',
    '에임 핵 · 투사체 자동 조준':'Aim hack · auto-aim projectiles', '온라인과 연습장에서 사용할 수 있어요.':'Available in online and practice games.', '연습장에서도 사용할 수 있어요.':'Available in practice games.', '관리자 보호가 공격을 막았어요!':'Admin protection blocked the attack!',
    '관리자 게임 서버에 연결되지 않았어요.':'The game server is not connected.', '관리자 능력 설정을 저장했어요.':'Admin power settings saved.',
    '관리자 능력 저장 중…':'Saving admin powers…', '추방':'Kick', '관리자':'Admin', '나':'Me',
    '추방 중…':'Kicking…', '플레이어를 추방했어요.':'Player kicked.', '관리자에 의해 접속이 종료되었어요.':'You were disconnected by an administrator.',
    '이 플레이어를 추방할까요?':'Kick this player?', '관리자 연결을 찾을 수 없어요.':'Could not find the admin connection.',
    '플레이어 연결을 찾을 수 없어요.':'Could not find that player connection.', '관리자 본인의 연결은 추방할 수 없어요.':'You cannot kick your own admin connection.',
    '관리자는 추방할 수 없어요.':'Admins cannot be kicked.', 'Shift+1 속도 · Shift+2 잡힘 방지 · Shift+3 에임 핵':'Shift+1 speed · Shift+2 tag immunity · Shift+3 aim hack',
    '플레이어 아이디':'Player username', '관리자 계정이 서버에 설정되지 않았어요.':'Admin login is not configured on the server.',
    '관리자 아이디는 관리자 로그인만 사용할 수 있어요.':'That username is reserved for admin login.',
    '관리자 권한이 필요해요.':'Admin access is required.', '코인을 받을 아이디를 입력해 주세요.':'Enter a username to receive coins.',
    '지급할 코인은 1 이상의 정수로 입력해 주세요.':'Enter a whole number of at least 1 coin.',
    '해당 아이디의 계정을 찾을 수 없어요.':'No account was found for that username.',
    '코인 합계가 허용 범위를 넘어요.':'The coin total exceeds the supported range.',
    '코인 지급 완료':'Coins granted.', '접속한 플레이어가 없어요.':'No players are connected.',
    '접속 정보':'Connection details', '접속 시간':'Connected', '로그인 전 사용자':'Guest connection',
    '게임 중':'In game', '대기실':'Room lobby', '매칭 대기':'Matchmaking', '로비 접속':'In lobby',
    '비밀번호':'Password', '비밀번호 변경':'Change password', '현재 비밀번호':'Current password', '새 비밀번호':'New password',
    '새 비밀번호 확인':'Confirm new password', '변경 저장':'Save password', '취소':'Cancel',
    '새 비밀번호를 다시 입력':'Re-enter the new password', '보기':'Show', '숨기기':'Hide',
    '비밀번호 보기':'Show password', '비밀번호 숨기기':'Hide password', '현재 비밀번호가 맞지 않아요.':'Current password is incorrect.',
    '비밀번호를 입력해 주세요.':'Enter your password.', '새 비밀번호가 일치하지 않아요.':'The new passwords do not match.',
    '새 비밀번호는 현재 비밀번호와 다르게 정해 주세요.':'Choose a new password different from your current one.',
    '비밀번호 변경 완료':'Password changed.', '비밀번호를 바꾸는 중…':'Changing password…',
    '8자 이상':'At least 8 characters', '계정 만들기':'Create account', '코인 계정 로그인':'Sign in to your account',
    '계정 연결됨':'Account connected', '로그아웃':'Log out', '닫기':'Close', '승리!':'You win!', '다시 한 판 해볼까요?':'Ready for another round?',
    '다시 하기':'Play again', '장비 없음':'No item equipped', 'Q 또는 우클릭으로 사용':'Press Q or right-click to use', '움직이기':'Move', '또는':'or',
    '조작 설정':'Control settings', '어떤 기기로 플레이하나요?':'Which device are you playing on?',
    '기기에 맞는 조작 방법을 설정해 주세요. 나중에 조작 설정에서 바꿀 수 있어요.':'Choose controls for your device. You can change this later in Control settings.',
    '핸드폰':'Phone', '화면 터치 조작':'On-screen touch controls', 'WASD 또는 방향키':'WASD or arrow keys',
    '터치 이동 조작':'Touch movement controls', '위로':'Up', '아래로':'Down', '왼쪽으로':'Left', '오른쪽으로':'Right',
    '화면의 무기 버튼을 눌러 사용':'Tap the weapon button on screen to use it',
    'PC 키보드 조작을 설정했어요.':'PC keyboard controls enabled.', '핸드폰 터치 조작을 설정했어요.':'Phone touch controls enabled.',
    '일시정지':'Pause', '계속하기':'Resume', '일시정지됨':'Paused',
    '계속하려면 계속하기를 눌러 주세요.':'Press Resume to continue.',
    '연습이 일시 정지됐어요.':'Practice paused.', '연습을 계속합니다.':'Practice resumed.',
    '온라인 방 참가':'Join online room', '매칭 시작':'Start matchmaking', '모드 선택':'Choose a mode', '훈련장 입장':'Enter training room',
    '술래가 되면 반짝반짝!':'Shine when you become the tagger!', '최대 12명':'Up to 12 players', '실시간 멀티플레이':'Real-time multiplayer',
    '준비 취소':'Cancel ready', '훈련장':'Training room', '다시 도전해요':'Try again', '게임 종료':'Game over',
    '온라인, 매칭 또는 연습 모드를 선택해 주세요.':'Choose online, matchmaking, or practice.',
    '연습 모드에는 AI 봇 3명이 참여합니다.':'Practice includes 3 AI bots.',
    '친구와 같은 방 코드를 입력해 함께 플레이하세요.':'Enter the same room code as your friends to play together.',
    '방 코드를 공유해 함께 플레이하세요. 온라인에서 무기를 쓰려면 계정 로그인과 장착이 필요해요.':'Share your room code to play together. Sign in and equip an item to use weapons online.',
    '매칭은 게임 서버 주소로 접속해야 이용할 수 있어요.':'Matchmaking requires the game server address.',
    '서버 실행 후 http:// 주소로 게임을 열어 주세요.':'Start the server, then open the game using its http:// address.',
    '현재 매칭 대기 인원의 절반 이상이 동의하면 바로 시작해요.':'The match starts as soon as more than half of the waiting players are ready.',
    '대기 중 매칭 취소가 가능하고, 게임 중에도 나갈 수 있어요.':'You can cancel while waiting or leave during a game.',
    '온라인 게임은 서버 주소로 열어야 연결돼요.':'Open the server address to play online.',
    '방 코드를 공유해 보세요':'Share your room code',
    '움직이지 않는 훈련봇 한 명에게 특수 무기를 시험해요.':'Try special weapons on a stationary training bot.',
    '연습에서 이길 때마다 코인을 받고, 단계가 오를수록 봇이 강해져요.':'Earn coins for each practice win. Bots get stronger at each stage.',
    '상점에서 장비 하나를 골라 장착하고, Q 또는 우클릭으로 훈련봇에게 시험해 보세요.':'Equip an item from the shop, then try it on the training bot with Q or right-click.',
    '승리 코인으로 장비를 모으고, 상점에서 한 번에 하나씩 바꿔 장착하세요.':'Earn coins from wins and equip one item at a time from the shop.',
    '계정 아이디가 온라인에서 내 이름으로 표시돼요. 코인과 장비도 이 계정에 저장돼요.':'Your account username is your name online. Coins and equipment are saved to this account.',
    '사용하지 않은 이름(아이디)과 비밀번호로 계정을 만들어요.':'Create an account with an available username and password.',
    '이름(아이디)과 비밀번호로 본인을 확인해요. 로그인하면 코인·단계·장비도 저장돼요.':'Sign in with your username and password. Your coins, stages, and equipment will be saved.',
    '내 이름 · 계정 아이디':'Your name · account username', '로그인한 계정 이름':'Signed-in account name', '예: 민지':'e.g. Alex',
    '장착한 무기':'Equipped weapon', '장착 중':'Equipped', '이 장비로 변경':'Equip this item', '코인 · 구매':'coins · Buy',
    '온라인 무기는 로그인 필요':'Sign in to use online weapons', '로그인 필요':'Sign in required', '사용 가능':'Ready',
    '계정 서버와 통신하지 못했어요.':'Could not reach the account server.', '로그인이 필요해요.':'Please sign in.',
    '아이디는 한글·영문·숫자·_·- 조합으로 2~20자여야 해요.':'Username must be 2–20 Korean or English letters, numbers, _ or -.',
    '비밀번호는 8~100자로 입력해 주세요.':'Password must be 8–100 characters.', '이미 사용 중인 아이디예요.':'That username is already taken.',
    '비밀번호는 사용자 이름과 다르게 정해 주세요.':'Password must be different from your username.',
    '아이디 또는 비밀번호가 맞지 않아요.':'Incorrect username or password.', '알 수 없는 장비예요.':'Unknown item.',
    '이미 보유한 장비예요.':'You already own this item.', '보유한 장비만 장착할 수 있어요.':'You can equip only items you own.',
    '보상 요청을 확인할 수 없어요.':'Could not verify the reward request.', '알 수 없는 무기예요.':'Unknown weapon.',
    '게임 중에만 무기를 사용할 수 있어요.':'Weapons can only be used during a game.',
    '온라인 무기를 쓰려면 로그인해 주세요.':'Sign in to use weapons online.',
    '계정에서 이 무기를 장착해 주세요.':'Equip this weapon in your account.',
    '순간 이동할 빈 공간이 없어요. 방향을 바꿔 다시 시도해 주세요.':'No open space to teleport to. Turn and try again.',
    '유령 망토는 술래일 때만 사용할 수 있어요.':'The Ghost Cloak can only be used while you are the tagger.',
    '자리를 바꿀 플레이어가 가까이 없어요.':'No player nearby to swap with.',
    '술래를 장애물 안으로 옮길 수 없어요.':'You cannot move the tagger inside an obstacle.',
    '온라인 게임은 이름과 비밀번호로 로그인해야 참가할 수 있어요.':'Sign in with your username and password to play online.',
    '매칭은 이름과 비밀번호로 로그인해야 참가할 수 있어요.':'Sign in with your username and password to join matchmaking.',
    '방 코드를 입력해 주세요.':'Enter a room code.', '이 방의 게임은 끝났어요. 새 방 코드를 사용해 주세요.':'This room’s game has ended. Use a new room code.',
    '방이 가득 찼어요. (최대 12명)':'This room is full (12 players max).',
    '게임 시작! 술래를 피해 도망가세요.':'Game on! Run from the tagger.',
    '현재 매칭 대기열이 가득 찼어요. 잠시 후 다시 시도해 주세요.':'The matchmaking queue is full. Try again shortly.',
    '다시 하려면 방에 두 명 이상 있어야 해요.':'At least two players are needed to play again.',
    '게임을 시작하려면 최소 2명이 필요해요. 상대를 기다리고 있어요.':'At least 2 players are needed. Waiting for others.',
    '상대를 더 찾고 있어요.':'Still looking for players.', '아직 상대가 없어 계속 찾고 있어요.':'No players yet. Still searching.',
    '방 코드':'Room code', '게임에 참가해 주세요':'Join a game', '로컬 연습 모드':'Local practice',
    '서버 연결됨':'Server connected', '서버 연결 끊김':'Server disconnected', '연습 모드 가능':'Practice available',
    '서버 연결 중…':'Connecting to server…', '서버 클라이언트를 찾을 수 없음':'Server client not found',
    '서버에 연결할 수 없음':'Could not connect to server', '게임 서버를 찾을 수 없음':'Game server not found',
    '다시 도전 ↻':'Try again ↻', '다시 하기 ↻':'Play again ↻', '훈련':'Training',
    '수호 방패':'Guardian Shield', '날아가는 주먹':'Flying Fist', '회수형 부메랑':'Returning Boomerang',
    '번개 장화':'Lightning Boots', '빙결탄':'Frost Shot', '유령 연막탄':'Ghost Smoke Bomb',
    '도플갱어 미끼':'Doppelganger Decoy', '폭풍 장갑':'Storm Gauntlet', '천둥 북':'Thunder Drum',
    '용수철 덫':'Spring Trap', '중력 구슬':'Gravity Orb', '유령 망토':'Ghost Cloak',
    '혜성 운동화':'Comet Sneakers', '시간 닻':'Time Anchor', '자리 바꾸개':'Swap Charm', '유령 연막':'Ghost Smoke',
    '방패':'shield', '부메랑':'boomerang', '봇':'bot', '훈련봇':'training bot'
  };
  Object.assign(ENGLISH_TEXT, {
    '계정 로그인은 서버 주소로 열어야 해요. http://localhost:3000을 사용해 주세요.':'Open the server address to sign in. Use http://localhost:3000.',
    '로그인 완료! 온라인 무기는 나갔다가 다시 참가하면 사용할 수 있어요.':'Signed in! Leave and rejoin to use online weapons.',
    '로그아웃했어요. 이 기기의 게스트 기록은 남아 있어요.':'Signed out. Guest progress on this device is still saved.',
    '계정 기능은 서버 주소에서 이용할 수 있어요.':'Account features are available from the server address.',
    '계정 서버에 연결할 수 없어요. 서버 상태를 확인해 주세요.':'Could not connect to the account server. Check that the server is running.',
    '서버에 연결되지 않았어요. 서버를 실행하고 이 주소를 다시 열어 주세요.':'Could not connect to the server. Start it and reopen this address.',
    '계정을 만들고 있어요…':'Creating account…', '로그인 중…':'Signing in…',
    '계정 서버와 통신하지 못했어요.':'Could not communicate with the account server.',
    '연습 모드 가능':'Practice available', '서버 연결됨':'Server connected', '서버 연결 끊김':'Server disconnected',
    '서버 연결 중…':'Connecting to server…', '서버 클라이언트를 찾을 수 없음':'Server client not found',
    '서버에 연결할 수 없음':'Could not connect to the server', '게임 서버를 찾을 수 없음':'Game server not found',
    '게임에서 나왔어요. 다시 참가할 수 있습니다.':'You left the game. You can join again.',
    '잡혔어요! 관전 중입니다.':'You were caught! You are spectating.', '잡혀서 탈락했어요. 남은 플레이어를 관전합니다.':'You were eliminated. Spectating the remaining players.',
    '다른 플레이어가 참가하면 게임이 시작돼요.':'The game starts when another player joins.',
    '온라인 또는 연습 모드를 먼저 선택해 주세요.':'Choose online or practice mode first.',
    '매칭은 file:// 주소에서 이용할 수 없어요. 서버의 http:// 주소를 열어 주세요.':'Matchmaking is unavailable from a file:// address. Open the game using its http:// server address.',
    '온라인 게임은 file:// 주소에서 접속할 수 없어요. 위에 표시된 http:// 주소를 열어 주세요.':'Online play is unavailable from a file:// address. Open the http:// address shown above.',
    '온라인과 매칭은 이름과 비밀번호로 로그인해야 참가할 수 있어요.':'Sign in with your username and password to play online or join matchmaking.',
    '게임 서버에 연결할 수 없어요. 서버가 깨어날 때까지 잠시 기다린 뒤 다시 시도해 주세요.':'The game server is waking up or unavailable. Wait a moment, then try again.',
    '매칭 대기열에 참가하는 중…':'Joining the matchmaking queue…', '방에 참가하는 중…':'Joining the room…',
    '참가 응답이 없어요. 서버 연결을 확인해 주세요.':'No response from the server. Check your connection.',
    '방 코드를 복사했어요.':'Room code copied.', '방에서 나가는 중…':'Leaving the room…',
    '서버 연결이 끊겼어요. 다시 연결한 뒤 눌러 주세요.':'Server disconnected. Reconnect and try again.',
    '새 게임을 준비하는 중…':'Preparing a new game…', '매칭 완료! WASD 또는 방향키로 움직이세요.':'Match found! Move with WASD or the arrow keys.',
    '방에 참가했어요 — WASD 또는 방향키로 움직이세요.':'Joined the room. Move with WASD or the arrow keys.',
    '연결이 끊겨 매칭 대기에서 나왔어요. 다시 시도해 주세요.':'Disconnected from matchmaking. Please try again.',
    '게임이 시작된 뒤에 무기를 쓸 수 있어요.':'You can use weapons after the game starts.',
    '온라인 무기를 쓰려면 먼저 계정에 로그인해 주세요.':'Sign in to your account to use online weapons.',
    '상점에서 보유한 무기를 장착해 주세요.':'Equip an owned weapon in the shop.', '무기가 아직 충전 중이에요.':'Weapon is still on cooldown.',
    '무기를 사용할 수 없어요.':'Could not use the weapon.', '상점에서 방패를 구매하고 장착해 주세요.':'Buy and equip the shield in the shop.',
    '방패가 아직 충전 중이에요.':'Shield is still on cooldown.', '방패를 펼쳤어요! 공격을 막을 수 있어요.':'Shield up! It can block an attack.',
    '상점에서 날아가는 주먹을 구매하고 장착해 주세요.':'Buy and equip the Flying Fist in the shop.', '주먹이 아직 충전 중이에요.':'Fist is still on cooldown.',
    '날아가는 주먹 발사!':'Flying Fist launched!', '특수 기능이 아직 충전 중이에요.':'Special ability is still on cooldown.',
    '부메랑을 던졌어요. 돌아오는 길도 조심하세요!':'Boomerang thrown. Watch for it on the way back!',
    '빙결탄 발사! 맞은 봇이 느려져요.':'Frost Shot fired! A hit slows the bot.', '질주할 공간이 없어요. 방향을 바꿔 다시 시도해 주세요.':'No room to dash. Turn and try again.',
    '번개처럼 질주했어요!':'You dashed like lightning!', '유령 연막! 3초 동안 봇과 술래가 나를 놓쳐요.':'Ghost smoke! Bots and the tagger lose track of you for 3 seconds.',
    '분신 미끼를 놓았어요. 술래 봇이 미끼를 쫓아요!':'Decoy placed. The tagger bot will chase it!', '폭풍 장갑! 주변 봇을 밀어내요.':'Storm Gauntlet! Push nearby bots away.',
    '천둥 북을 쳤어요! 가까운 봇이 멈춰요.':'Thunder Drum! Nearby bots stop moving.', '용수철 덫을 설치했어요. 밟은 봇을 튕겨내요!':'Spring Trap placed. It knocks back bots that step on it!',
    '중력 구슬 발사! 닿은 곳에 중력장이 생겨요.':'Gravity Orb launched! It creates a gravity field where it lands.',
    '유령 망토! 2초 동안 장애물을 통과해요.':'Ghost Cloak! Pass through obstacles for 2 seconds.',
    '혜성 운동화! 4초 동안 빠르게 달려요.':'Comet Sneakers! Run faster for 4 seconds.',
    '시간 닻을 놓았어요. 3초 뒤 이 자리로 돌아와요!':'Time Anchor placed. You will return here in 3 seconds!',
    '자리를 바꿀 봇이 가까이 없어요.':'No bot nearby to swap places with.', '장애물 안으로 술래를 옮길 수 없어요.':'You cannot move the tagger inside an obstacle.',
    '시간 닻이 발동해 원래 자리로 돌아왔어요!':'Time Anchor activated. You returned to your marked spot!',
    '방패로 훈련봇의 공격을 막았어요!':'Your shield blocked the training bot’s attack!', '공격이 닿았어요. 다음 공격은 Q 방패로 막아 보세요.':'The attack hit. Try blocking the next one with Q.',
    '중력장이 생겼어요. 주변 봇이 끌려가요!':'Gravity field created. Nearby bots are being pulled in!', '훈련봇이 얼었어요!':'The training bot is frozen!',
    '명중! 훈련봇이 잠시 후 다시 일어나요.':'Hit! The training bot will get back up soon.', '훈련봇이 다시 일어났어요.':'The training bot is back up.',
    '훈련봇의 공격! Q로 방패를 켜 보세요.':'The training bot is attacking! Press Q to raise your shield.',
    '잡혔어요! 관전 중입니다.':'You were caught! You are spectating.', '다시 한 판 해볼까요?':'Ready for another round?',
    '파일로 열면 연습 모드로 시작합니다.':'Opening this file starts practice mode.', '온라인 플레이는 서버 주소(http://…)로 접속하세요.':'For online play, open the server address (http://…).',
    '훈련봇 공격':'Training bot attack', '다음 술래 교대':'Next tagger swap', '분신':'Decoy', '탈락':'Eliminated', '나':'Me',
    '게임 모드 선택':'Choose a game mode', '연습 종류':'Practice type', '매칭 또는 로그인':'Matchmaking or sign-in',
    '연결 상태':'Connection status', '빠른 매칭':'Quick match', '연습 상점':'Practice shop', '계정 로그인':'Account login',
    '로그인 또는 가입':'Sign in or register', '장착한 무기':'Equipped weapon',
    '특수 기능 훈련장 — 움직이지 않는 훈련봇을 상대로 연습하세요.':'Special training room — practice against a stationary training bot.',
    '잡혀 탈락했어요. 남은 플레이어를 관전합니다.':'You were eliminated. Spectating the remaining players.',
    '방패를 펼쳤어요! 공격을 막을 수 있어요.':'Shield up! It can block an attack.',
    '방패가 아직 충전 중이에요.':'Shield is still on cooldown.', '주먹이 아직 충전 중이에요.':'Fist is still on cooldown.',
    '특수 기능이 아직 충전 중이에요.':'Special ability is still on cooldown.', '날아가는 주먹 발사!':'Flying Fist launched!',
    '부메랑을 던졌어요. 돌아오는 길도 조심하세요!':'Boomerang thrown. Watch for it on the way back!',
    '빙결탄 발사! 맞은 봇이 느려져요.':'Frost Shot fired! A hit slows the bot.',
    '질주할 공간이 없어요. 방향을 바꿔 다시 시도해 주세요.':'No room to dash. Turn and try again.',
    '번개처럼 질주했어요!':'You dashed like lightning!', '유령 연막! 3초 동안 봇과 술래가 나를 놓쳐요.':'Ghost smoke! Bots and the tagger lose track of you for 3 seconds.',
    '분신 미끼를 놓았어요. 술래 봇이 미끼를 쫓아요!':'Decoy placed. The tagger bot will chase it!',
    '폭풍 장갑! 주변 봇을 밀어내요.':'Storm Gauntlet! Push nearby bots away.', '천둥 북을 쳤어요! 가까운 봇이 멈춰요.':'Thunder Drum! Nearby bots stop moving.',
    '용수철 덫을 설치했어요. 밟은 봇을 튕겨내요!':'Spring Trap placed. It knocks back bots that step on it!',
    '중력 구슬 발사! 닿은 곳에 중력장이 생겨요.':'Gravity Orb launched! It creates a gravity field where it lands.',
    '유령 망토! 2초 동안 장애물을 통과해요.':'Ghost Cloak! Pass through obstacles for 2 seconds.',
    '혜성 운동화! 4초 동안 빠르게 달려요.':'Comet Sneakers! Run faster for 4 seconds.',
    '시간 닻을 놓았어요. 3초 뒤 이 자리로 돌아와요!':'Time Anchor placed. You will return here in 3 seconds!',
    '자리를 바꿀 봇이 가까이 없어요.':'No bot nearby to swap places with.', '시간 닻이 발동해 원래 자리로 돌아왔어요!':'Time Anchor activated. You returned to your marked spot!',
    '방패로 훈련봇의 공격을 막았어요!':'Your shield blocked the training bot’s attack!',
    '공격이 닿았어요. 다음 공격은 Q 방패로 막아 보세요.':'The attack hit. Try blocking the next one with Q.',
    '중력장이 생겼어요. 주변 봇이 끌려가요!':'Gravity field created. Nearby bots are being pulled in!',
    '훈련봇이 얼었어요!':'The training bot is frozen!', '명중! 훈련봇이 잠시 후 다시 일어나요.':'Hit! The training bot will get back up soon.',
    '훈련봇이 다시 일어났어요.':'The training bot is back up.', '훈련봇의 공격! Q로 방패를 켜 보세요.':'The training bot is attacking! Press Q to raise your shield.',
    '방패로 술래의 공격을 막았어요!':'Your shield blocked the tagger’s attack.'
  });
  const ENGLISH_PATTERNS = [
    [/^(\d+)단계 · (\d+) 코인$/, (_, stage, coins) => `Stage ${stage} · ${coins} coins`],
    [/^(\d+)단계$/, (_, stage) => `Stage ${stage}`],
    [/^연습 (\d+)$/, (_, stage) => `Practice ${stage}`],
    [/^(.+) · 계정$/, (_, username) => `${username} · Account`],
    [/^(\d+) 코인 · 구매$/, (_, price) => `${price} coins · Buy`],
    [/^봇 (\d+)명$/, (_, number) => `${number} bots`],
    [/^봇 (\d+)$/, (_, number) => `Bot ${number}`],
    [/^봇 (\d+)명과 함께 플레이합니다\.$/, (_, number) => `Play with ${number} bots.`],
    [/^연습 (\d+)단계 — 봇 (\d+)명과 함께 플레이합니다\.$/, (_, stage, number) => `Practice Stage ${stage} — play with ${number} bots.`],
    [/^(\d+)단계 승리!$/, (_, stage) => `Stage ${stage} won!`],
    [/^(\d+)단계 도전 ↻$/, (_, stage) => `Challenge Stage ${stage} ↻`],
    [/^\+(\d+) 코인! (\d+)단계가 열렸어요\.$/, (_, coins, stage) => `+${coins} coins! Stage ${stage} unlocked.`],
    [/^(\d+)단계에서 탈락했어요\. 다시 도전해 보세요\.$/, (_, stage) => `Eliminated at Stage ${stage}. Try again!`],
    [/^(\d+)단계에서 탈락했어요\. 다시 도전할 수 있어요\.$/, (_, stage) => `Eliminated at Stage ${stage}. You can try again.`],
    [/^재사용까지 (\d+)초$/, (_, seconds) => `Ready in ${seconds}s`],
    [/^코인이 부족해요\. (\d+) 코인이 필요해요\.$/, (_, amount) => `Not enough coins. You need ${amount} coins.`],
    [/^폭풍 장갑! 봇 (\d+)명을 밀어냈어요\.$/, (_, count) => `Storm Gauntlet pushed back ${count} bots!`],
    [/^천둥 북! 봇 (\d+)명이 잠깐 멈췄어요\.$/, (_, count) => `Thunder Drum stopped ${count} bots!`],
    [/^방 코드: (.+)$/, (_, code) => `Room code: ${code}`],
    [/^코인 저장 실패: (.+)$/, (_, error) => `Could not save coins: ${translateText(error)}`],
    [/^(.+?)님이 새 술래예요!$/, (_, name) => `${displayPlayerName(name)} is the new tagger!`],
    [/^(.+?)님이 술래예요!$/, (_, name) => `${displayPlayerName(name)} is the tagger!`],
    [/^(.+?)님이 빙결탄에 맞아 느려졌어요!$/, (_, name) => `${displayPlayerName(name)} was hit by Frost Shot and slowed!`],
    [/^(.+?)님이 용수철 덫에 걸렸어요!$/, (_, name) => `${displayPlayerName(name)} was caught in a spring trap!`],
    [/^(.+?)으로 장비를 바꿨어요\.$/, (_, item) => `Equipped ${item}.`],
    [/^(.+?)으로 장비를 바꿨어요\. 한 번에 하나만 장착됩니다\.$/, (_, item) => `Equipped ${item}. You can equip one item at a time.`],
    [/^(.+?) 구매 완료! 한 번에 하나만 장착돼요\.$/, (_, item) => `${item} purchased! You can equip one item at a time.`],
    [/^(.+?) 구매 완료! 현재 장비 하나만 장착했어요\.$/, (_, item) => `${item} purchased and equipped. You can equip one item at a time.`],
    [/^상점에서 (.+)을 장착해 주세요\.$/, (_, item) => `Equip ${item} from the shop.`],
    [/^장애물 (\d+)번(, 장애물 \d+번)*이 10회 통과되어 폭발했어요!$/, match => `${match.replace(/장애물 (\d+)번/g, 'Obstacle $1').replace(/이 10회 통과되어 폭발했어요!$/, ' exploded after 10 passes!')}`],
    [/^로그인 완료! (.+) 계정으로 코인을 저장해요\.$/, (_, name) => `Signed in! Coins are saved to ${name}'s account.`],
    [/^계정에 (\d+) 코인을 저장했어요!$/, (_, coins) => `Saved ${coins} coins to your account!`],
    [/^\+(\d+) 코인!$/, (_, coins) => `+${coins} coins!`],
    [/^게임 서버 주소.*$/, () => 'Open the game using the server address.'],
    [/^이 컴퓨터는 (http:\/\/[^ ]+) · 같은 Wi-Fi는 (http:\/\/[^ ]+)$/, (_, local, wifi) => `This computer: ${local} · Same Wi-Fi: ${wifi}`],
    [/^(.+?)님이 마지막 생존자로 승리했어요!$/, (_, name) => `${displayPlayerName(name)} is the last survivor and wins!`],
    [/^(.+?)님 승리!$/, (_, name) => `${displayPlayerName(name)} wins!`],
    [/^술래 교대! (.+?)님이 술래예요!$/, (_, name) => `Tagger changed! ${displayPlayerName(name)} is the tagger!`],
    [/^새 게임 시작! (.+?)님이 술래예요[.!]$/, (_, name) => `New game! ${displayPlayerName(name)} is the tagger.`],
    [/^빠른 매칭 완료! (.+?)님이 술래예요[.!]$/, (_, name) => `Match found! ${displayPlayerName(name)} is the tagger.`],
    [/^(.+?)님이 잡혀 탈락했어요!$/, (_, name) => `${displayPlayerName(name)} was caught and eliminated!`],
    [/^(.+?)님이 주먹에 맞아 탈락했어요!$/, (_, name) => `${displayPlayerName(name)} was hit by a fist and eliminated!`],
    [/^(.+?)님이 부메랑에 맞아 탈락했어요!$/, (_, name) => `${displayPlayerName(name)} was hit by a boomerang and eliminated!`],
    [/^(.+?)님이 방패가 공격을 막았어요!$/, (_, name) => `${displayPlayerName(name)}'s shield blocked an attack!`],
    [/^(.+?)님의 방패가 공격을 막았어요!$/, (_, name) => `${displayPlayerName(name)}'s shield blocked an attack!`],
    [/^(.+?)님이 나가 술래가 바뀌었어요\.$/, (_, name) => `${displayPlayerName(name)} left. The tagger changed.`],
    [/^(.+?)님이 (.+?)님과 자리를 바꿨어요!$/, (_, name, target) => `${displayPlayerName(name)} swapped places with ${displayPlayerName(target)}!`],
    [/^(.+?)님이 (.+?)(?:을|를) 사용했어요!$/, (_, name, item) => `${displayPlayerName(name)} used ${translateText(item)}!`],
    [/^(.+?)님이 (.+?)(?:을|를) 설치했어요\.$/, (_, name, item) => `${displayPlayerName(name)} placed ${translateText(item)}.`],
    [/^(.+?)님이 (.+?)(?:을|를) 펼쳤어요[.!]$/, (_, name, item) => `${displayPlayerName(name)} activated ${translateText(item)}.`],
    [/^(.+?)님이 (.+)로 순간 이동했어요\.$/, (_, name, item) => `${displayPlayerName(name)} teleported with ${translateText(item)}.`],
    [/^(.+?)님이 (.+?)를 놓았어요!$/, (_, name, item) => `${displayPlayerName(name)} placed ${translateText(item)}!`],
    [/^(.+?)님이 (.+)으로 빨라졌어요!$/, (_, name, item) => `${displayPlayerName(name)} sped up with ${translateText(item)}!`],
    [/^(.+?)님이 (.+)에 맞았어요!$/, (_, name, item) => `${displayPlayerName(name)} was hit by ${translateText(item)}!`],
    [/^(.+?)님이 용수철 덫에 걸렸어요!$/, (_, name) => `${displayPlayerName(name)} got caught in a spring trap!`],
    [/^(.+?)님과 자리를 바꿨어요!$/, (_, name) => `Swapped places with ${displayPlayerName(name)}!`],
    [/^(.+?)님의 시간 닻이 발동했어요!$/, (_, name) => `${displayPlayerName(name)}'s Time Anchor activated!`],
    [/^(.+?)님의 천둥 북이 (\d+)명을 멈췄어요!$/, (_, name, count) => `${displayPlayerName(name)}'s Thunder Drum stopped ${count} players!`],
    [/^(.+?)님의 폭풍 장갑이 주변 플레이어 (\d+)명을 밀어냈어요\.$/, (_, name, count) => `${displayPlayerName(name)}'s Storm Gauntlet pushed back ${count} nearby players.`]
  ];
  function translateText(text) {
    if (language !== 'en' || !text) return text;
    const leading = text.match(/^\s*/)?.[0] || '';
    const trailing = text.match(/\s*$/)?.[0] || '';
    const content = text.slice(leading.length, text.length - trailing.length || undefined);
    let translated = Object.hasOwn(ENGLISH_TEXT, content) ? ENGLISH_TEXT[content] : null;
    for (const [pattern, render] of ENGLISH_PATTERNS) {
      if (translated !== null) break;
      const match = content.match(pattern);
      if (match) translated = render(...match);
    }
    return translated === null ? text : `${leading}${translated}${trailing}`;
  }
  function displayPlayerName(name) {
    if (language !== 'en') return name;
    if (name === '훈련봇') return 'Training Bot';
    const bot = name.match(/^봇 (\d+)$/);
    return bot ? `Bot ${bot[1]}` : name;
  }
  const localizedSources = new WeakMap();
  const localizedRenders = new WeakMap();
  const attributeSources = new WeakMap();
  const attributeRenders = new WeakMap();
  function localizeTextNode(node) {
    if (node.parentElement?.closest('[data-no-translate]')) return;
    const current = node.nodeValue;
    const previous = localizedRenders.get(node);
    if (!localizedSources.has(node) || previous !== current) localizedSources.set(node, current);
    const value = translateText(localizedSources.get(node));
    localizedRenders.set(node, value);
    if (current !== value) node.nodeValue = value;
  }
  function localizeAttribute(element, name) {
    const current = element.getAttribute(name);
    let sources = attributeSources.get(element), renders = attributeRenders.get(element);
    if (!sources) { sources = new Map(); attributeSources.set(element, sources); }
    if (!renders) { renders = new Map(); attributeRenders.set(element, renders); }
    if (!sources.has(name) || renders.get(name) !== current) sources.set(name, current);
    const value = translateText(sources.get(name));
    renders.set(name, value);
    if (current !== value) element.setAttribute(name, value);
  }
  function localizeSubtree(root) {
    if (root.nodeType === Node.TEXT_NODE) localizeTextNode(root);
    if (root.nodeType === Node.ELEMENT_NODE) {
      for (const name of ['placeholder','title','aria-label']) if (root.hasAttribute(name)) localizeAttribute(root, name);
    }
    if (root.querySelectorAll) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) localizeTextNode(walker.currentNode);
      for (const element of root.querySelectorAll('[placeholder],[title],[aria-label]')) {
        for (const name of ['placeholder','title','aria-label']) if (element.hasAttribute(name)) localizeAttribute(element, name);
      }
    }
  }
  function setLanguage(nextLanguage) {
    language = nextLanguage === 'en' ? 'en' : 'ko';
    try { localStorage.setItem(LANGUAGE_KEY, language); } catch {}
    document.documentElement.lang = language;
    document.title = language === 'en' ? 'Tag Game' : '술레잡기 게임';
    updateSoundButton();
    $('languageToggle').textContent = language === 'ko' ? 'EN' : '한글';
    $('languageToggle').title = language === 'ko' ? 'Switch language to English' : '한국어로 언어 변경';
    $('languageToggle').setAttribute('aria-label', language === 'ko' ? 'Switch language to English' : '한국어로 언어 변경');
    localizeSubtree(document.body);
    syncPasswordVisibilityLabels();
    updatePracticeProfileDisplay();
    renderShop();
    updatePracticeActions();
    updatePracticePauseButton();
    updateDeviceControls();
    renderAccountDialog();
    if (!$('adminOverlay').hidden && accountProfile?.isAdmin) loadAdminPlayers();
    if (selectedMode) selectMode(selectedMode);
    if (gameOver) updateResultPanel();
    if (lastStatusMessage) status(lastStatusMessage);
    if (lastConnectionMessage) connection(lastConnectionOnline, lastConnectionMessage);
    $('toast').classList.remove('show');
  }
  const localizationObserver = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') localizeTextNode(record.target);
      else if (record.type === 'childList') for (const node of record.addedNodes) localizeSubtree(node);
      else if (record.type === 'attributes') localizeAttribute(record.target, record.attributeName);
    }
  });
  localizationObserver.observe(document.body, { subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:['placeholder','title','aria-label'] });
  const canvas = $('arena');
  const ctx = canvas.getContext('2d');
  const TURN_MS = 10000;
  const TAGGER_SPEED = 210;
  const RUNNER_SPEED = TAGGER_SPEED * 1.3;
  const OBSTACLE_SHAPES = [
    { width:78, height:34 }, { width:96, height:34 }, { width:48, height:82 },
    { width:88, height:34 }, { width:104, height:34 }
  ];
  function generateObstacleLayout() {
    const shuffle = items => {
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
      }
      return items;
    };
    const zones = shuffle([0, 1, 2, 3, 4, 5]).slice(0, OBSTACLE_SHAPES.length);
    const shapes = shuffle(OBSTACLE_SHAPES.slice());
    return zones.map((zone, index) => {
      const col = zone % 3, row = Math.floor(zone / 3), shape = shapes[index];
      const centerX = 140 + col * 260 + (Math.random() - .5) * 70;
      const centerY = 140 + row * 200 + (Math.random() - .5) * 70;
      return { x:centerX - shape.width / 2, y:centerY - shape.height / 2, ...shape };
    });
  }
  let OBSTACLES = generateObstacleLayout();
  const OBSTACLE_PASS_LIMIT = 10;
  const PRACTICE_PROFILE_KEY = 'tag-stickmen-practice-profile-v1';
  const SPECIAL_ITEMS = {
    shield:{ price:20, label:'수호 방패', enLabel:'Guardian Shield', icon:'🛡️', key:'Q', description:'2초 동안 보호막을 펼쳐 닿는 공격 한 번을 막아요. 재사용 7초.', enDescription:'Raise a shield for 2 seconds to block one hit. Cooldown: 7 seconds.', cooldown:7000 },
    punch:{ price:30, label:'날아가는 주먹', enLabel:'Flying Fist', icon:'👊', key:'Q', description:'바라보는 방향으로 주먹을 쏴 맞은 상대를 탈락시켜요. 비행 1.35초, 재사용 6.5초.', enDescription:'Fire a fist in the direction you face. A hit eliminates the target. Flight: 1.35 seconds. Cooldown: 6.5 seconds.', cooldown:6500 },
    boomerang:{ price:45, label:'회수형 부메랑', enLabel:'Returning Boomerang', icon:'🪃', key:'Q', description:'앞으로 날아간 뒤 플레이어에게 돌아와요. 맞은 상대는 탈락해요. 재사용 8.5초.', enDescription:'Throws forward, then returns to you. A hit eliminates the target. Cooldown: 8.5 seconds.', cooldown:8500 },
    blink:{ price:35, label:'번개 장화', enLabel:'Lightning Boots', icon:'⚡', key:'Q', description:'바라보는 방향으로 70~170픽셀 안의 빈 공간에 순간 이동해요. 재사용 7초.', enDescription:'Teleport 70–170 pixels in the direction you face, if the space is clear. Cooldown: 7 seconds.', cooldown:7000 },
    ice:{ price:40, label:'빙결탄', enLabel:'Frost Shot', icon:'❄️', key:'Q', description:'명중한 상대를 1.3초 얼리고, 이동 속도를 3.9초 동안 낮춰요. 재사용 7초.', enDescription:'Freeze a hit target for 1.3 seconds and slow them for 3.9 seconds. Cooldown: 7 seconds.', cooldown:7000 },
    smoke:{ price:50, label:'유령 연막탄', enLabel:'Ghost Smoke Bomb', icon:'🌫️', key:'Q', description:'3초 동안 술래가 나를 잡을 수 없고, 다른 화면에서도 희미하게 보여요. 재사용 12초.', enDescription:'The tagger cannot catch you for 3 seconds, and you appear faint to other players. Cooldown: 12 seconds.', cooldown:12000 },
    decoy:{ price:60, label:'도플갱어 미끼', enLabel:'Doppelganger Decoy', icon:'👥', key:'Q', description:'앞쪽 95 지점에 4.5초짜리 분신을 놓아요. 상대 플레이어를 혼란스럽게 해요. 재사용 11초.', enDescription:'Place a decoy 95 pixels ahead for 4.5 seconds to distract opponents. Cooldown: 11 seconds.', cooldown:11000 },
    gust:{ price:65, label:'폭풍 장갑', enLabel:'Storm Gauntlet', icon:'🌪️', key:'Q', description:'반경 220픽셀 안의 상대를 바깥쪽으로 밀어내요. 재사용 9초.', enDescription:'Push nearby opponents away within a 220-pixel radius. Cooldown: 9 seconds.', cooldown:9000 },
    thunder:{ price:70, label:'천둥 북', enLabel:'Thunder Drum', icon:'🥁', key:'Q', description:'반경 155픽셀 안의 상대를 1.35초 멈춰요. 재사용 11초.', enDescription:'Stop nearby opponents for 1.35 seconds within a 155-pixel radius. Cooldown: 11 seconds.', cooldown:11000 },
    spring:{ price:55, label:'용수철 덫', enLabel:'Spring Trap', icon:'🪤', key:'Q', description:'플레이어 앞이나 뒤에 9초간 덫을 놓아요. 24픽셀 안으로 온 상대를 밀고 0.65초 멈춰요. 재사용 9초.', enDescription:'Place a trap for 9 seconds. It knocks back and stops opponents who come within 24 pixels. Cooldown: 9 seconds.', cooldown:9000 },
    gravity:{ price:80, label:'중력 구슬', enLabel:'Gravity Orb', icon:'🌀', key:'Q', description:'던져 맞힌 곳에 반경 145픽셀, 3.6초 지속 중력장을 만들어요. 안의 상대를 끌어당겨요. 재사용 12초.', enDescription:'Create a gravity field where it lands. It pulls in opponents within 145 pixels for 3.6 seconds. Cooldown: 12 seconds.', cooldown:12000 },
    phase:{ price:65, label:'유령 망토', enLabel:'Ghost Cloak', icon:'👻', key:'Q', description:'술래일 때도 2.2초 동안 검은 장애물을 통과해요. 재사용 10초.', enDescription:'Pass through black obstacles for 2.2 seconds, even while you are the tagger. Cooldown: 10 seconds.', cooldown:10000 },
    haste:{ price:55, label:'혜성 운동화', enLabel:'Comet Sneakers', icon:'👟', key:'Q', description:'4.2초 동안 이동 속도가 1.65배가 돼요. 재사용 9초.', enDescription:'Move 1.65 times faster for 4.2 seconds. Cooldown: 9 seconds.', cooldown:9000 },
    anchor:{ price:85, label:'시간 닻', enLabel:'Time Anchor', icon:'⚓', key:'Q', description:'현재 위치를 표시하고 3초 뒤 그 자리로 돌아와요. 재사용 12초.', enDescription:'Mark your position and return to it after 3 seconds. Cooldown: 12 seconds.', cooldown:12000 },
    swap:{ price:100, label:'자리 바꾸개', enLabel:'Swap Charm', icon:'🔀', key:'Q', description:'260픽셀 안에 있는 가장 가까운 상대와 위치를 바꿔요. 술래가 장애물 안으로 이동하지는 않아요. 재사용 13초.', enDescription:'Swap places with the nearest opponent within 260 pixels. The tagger cannot be moved inside an obstacle. Cooldown: 13 seconds.', cooldown:13000 }
  };
  const itemLabel = data => language === 'en' ? data.enLabel : data.label;
  const itemDescription = data => language === 'en' ? data.enDescription : data.description;
  function loadPracticeProfile() {
    try {
      const saved = JSON.parse(localStorage.getItem(PRACTICE_PROFILE_KEY) || '{}');
      const owned = Array.isArray(saved.owned) ? saved.owned.filter(item => SPECIAL_ITEMS[item]) : [];
      return {
        coins:Number.isFinite(saved.coins) ? Math.max(0, Math.floor(saved.coins)) : 0,
        stage:Number.isFinite(saved.stage) ? Math.max(1, Math.floor(saved.stage)) : 1,
        owned:[...new Set(owned)],
        equipped:owned.includes(saved.equipped) ? saved.equipped : null
      };
    } catch { return { coins:0, stage:1, owned:[], equipped:null }; }
  }
  function savePracticeProfile() {
    try { localStorage.setItem(PRACTICE_PROFILE_KEY, JSON.stringify(practiceProfile)); } catch {}
    updatePracticeProfileDisplay();
    renderShop();
    updatePracticeActions();
  }
  async function accountRequest(path, method = 'GET', body = undefined) {
    const options = { method, credentials:'include', headers:{} };
    const token = readAccountToken();
    if (token) options.headers.Authorization = `Bearer ${token}`;
    if (body !== undefined) {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(body);
    }
    const response = await fetch(`${GAME_SERVER_URL}${path}`, options);
    const result = await response.json().catch(() => ({}));
    if (result.token) {
      try { localStorage.setItem(ACCOUNT_TOKEN_KEY, result.token); } catch {}
    }
    if (response.status === 401) {
      try { localStorage.removeItem(ACCOUNT_TOKEN_KEY); } catch {}
    }
    if (!response.ok) {
      const error = new Error(result.error || '계정 서버와 통신하지 못했어요.');
      error.status = response.status;
      throw error;
    }
    return result;
  }
  function applyAccountProfile(profile) {
    accountProfile = profile;
    practiceProfile = {
      coins:Math.max(0, Math.floor(profile.coins || 0)),
      stage:Math.max(1, Math.floor(profile.stage || 1)),
      owned:[...new Set((profile.owned || []).filter(item => SPECIAL_ITEMS[item]))],
      equipped:profile.owned?.includes(profile.equipped) ? profile.equipped : null
    };
    try { localStorage.setItem(PRACTICE_PROFILE_KEY, JSON.stringify(practiceProfile)); } catch {}
    updateIdentityDisplay();
    updatePracticeProfileDisplay();
    renderShop();
    updatePracticeActions();
    renderAccountDialog();
  }
  function setPasswordFieldVisibility(inputId, buttonId, visible) {
    const input = $(inputId);
    const button = $(buttonId);
    if (!input || !button) return;
    input.type = visible ? 'text' : 'password';
    button.textContent = language === 'en' ? (visible ? 'Hide' : 'Show') : (visible ? '숨기기' : '보기');
    button.setAttribute('aria-label', language === 'en'
      ? (visible ? 'Hide password' : 'Show password')
      : (visible ? '비밀번호 숨기기' : '비밀번호 보기'));
    button.setAttribute('aria-pressed', String(visible));
  }
  function setAccountPasswordVisibility(visible) {
    setPasswordFieldVisibility('accountPasswordInput', 'passwordVisibilityButton', visible);
  }
  function syncPasswordVisibilityLabels() {
    setAccountPasswordVisibility($('accountPasswordInput').type === 'text');
    for (const [inputId, buttonId] of [
      ['currentPasswordInput', 'currentPasswordVisibilityButton'],
      ['newPasswordInput', 'newPasswordVisibilityButton'],
      ['confirmPasswordInput', 'confirmPasswordVisibilityButton']
    ]) {
      setPasswordFieldVisibility(inputId, buttonId, $(inputId).type === 'text');
    }
  }
  function resetPasswordChangeVisibility() {
    for (const [inputId, buttonId] of [
      ['currentPasswordInput', 'currentPasswordVisibilityButton'],
      ['newPasswordInput', 'newPasswordVisibilityButton'],
      ['confirmPasswordInput', 'confirmPasswordVisibilityButton']
    ]) setPasswordFieldVisibility(inputId, buttonId, false);
  }
  function closePasswordChangeForm() {
    $('passwordChangeForm').reset();
    resetPasswordChangeVisibility();
    $('passwordChangeForm').hidden = true;
    $('passwordChangeOpenButton').hidden = !accountProfile;
    $('passwordChangeMessage').textContent = '';
    $('passwordChangeMessage').classList.remove('error');
    $('passwordChangeSubmitButton').disabled = false;
  }
  function openPasswordChangeForm() {
    if (!accountProfile) return;
    $('accountMessage').textContent = '';
    $('accountMessage').classList.remove('error');
    $('passwordChangeOpenButton').hidden = true;
    $('passwordChangeForm').hidden = false;
    resetPasswordChangeVisibility();
    $('passwordChangeMessage').textContent = '';
    $('passwordChangeMessage').classList.remove('error');
    $('currentPasswordInput').focus();
  }
  async function submitPasswordChange(event) {
    event.preventDefault();
    if (!accountProfile || passwordChangeBusy) return;
    const currentPassword = $('currentPasswordInput').value;
    const newPassword = $('newPasswordInput').value;
    const confirmPassword = $('confirmPasswordInput').value;
    const message = $('passwordChangeMessage');
    if (newPassword !== confirmPassword) {
      message.textContent = '새 비밀번호가 일치하지 않아요.';
      message.classList.add('error');
      return;
    }
    if (newPassword === currentPassword) {
      message.textContent = '새 비밀번호는 현재 비밀번호와 다르게 정해 주세요.';
      message.classList.add('error');
      return;
    }
    passwordChangeBusy = true;
    $('passwordChangeSubmitButton').disabled = true;
    message.textContent = '비밀번호를 바꾸는 중…';
    message.classList.remove('error');
    try {
      const result = await accountRequest('/api/account/change-password', 'POST', { currentPassword, newPassword });
      applyAccountProfile(result.profile);
      closePasswordChangeForm();
      $('accountMessage').textContent = '비밀번호 변경 완료';
      $('accountMessage').classList.remove('error');
    } catch (error) {
      message.textContent = translateText(error.message);
      message.classList.add('error');
    } finally {
      passwordChangeBusy = false;
      $('passwordChangeSubmitButton').disabled = false;
    }
  }
  function updateIdentityDisplay() {
    const input = $('nameInput');
    const label = $('identityLabel');
    $('adminOpenButton').hidden = !accountProfile?.isAdmin;
    input.readOnly = !!accountProfile;
    if (accountProfile) input.value = accountProfile.username;
    if (label) label.textContent = accountProfile ? '내 이름 · 계정 아이디' : '내 이름';
    input.placeholder = accountProfile ? '로그인한 계정 이름' : '예: 민지';
  }
  function refreshOnlineIdentity() {
    if (!socket || myId || matchmaking) return;
    socket.auth = { token:readAccountToken() };
    socket.disconnect();
    socket.connect();
  }
  function renderAccountDialog() {
    const loggedIn = !!accountProfile;
    $('adminOpenButton').hidden = !accountProfile?.isAdmin;
    $('accountOpenButton').textContent = loggedIn ? `${accountProfile.username} · 계정` : '로그인';
    $('accountModeTabs').hidden = loggedIn;
    $('accountForm').hidden = loggedIn;
    $('accountLoggedIn').hidden = !loggedIn;
    $('passwordChangeOpenButton').hidden = !loggedIn || !$('passwordChangeForm').hidden;
    if (!loggedIn) $('passwordChangeForm').hidden = true;
    $('accountTitle').textContent = loggedIn ? '계정 연결됨' : accountMode === 'register' ? '새 계정 만들기' : '코인 계정 로그인';
    $('accountDescription').textContent = loggedIn
      ? '계정 아이디가 온라인에서 내 이름으로 표시돼요. 코인과 장비도 이 계정에 저장돼요.'
      : accountMode === 'register'
        ? '사용하지 않은 이름(아이디)과 비밀번호로 계정을 만들어요.'
        : '이름(아이디)과 비밀번호로 본인을 확인해요. 로그인하면 코인·단계·장비도 저장돼요.';
    $('accountLoginModeButton').setAttribute('aria-pressed', String(accountMode === 'login'));
    $('accountRegisterModeButton').setAttribute('aria-pressed', String(accountMode === 'register'));
    $('accountSubmitButton').textContent = accountMode === 'register' ? '계정 만들기' : '로그인';
    $('accountPasswordInput').autocomplete = accountMode === 'register' ? 'new-password' : 'current-password';
    if (loggedIn) {
      $('accountUsernameLabel').textContent = accountProfile.username;
      $('accountCoinsLabel').textContent = String(accountProfile.coins);
      $('accountStageLabel').textContent = String(accountProfile.stage);
    }
  }
  async function restoreAccountSession() {
    renderAccountDialog();
    if (isFile) return;
    try {
      await accountRequest('/api/account/profile');
      const migrated = await accountRequest('/api/account/migrate', 'POST', { profile:practiceProfile });
      applyAccountProfile(migrated.profile);
      refreshOnlineIdentity();
    } catch (error) {
      if (error.status !== 401) $('accountMessage').textContent = '계정 서버에 연결할 수 없어요. 서버 상태를 확인해 주세요.';
    }
  }
  function openAccount() {
    if (isFile) {
      toast('계정 로그인은 서버 주소로 열어야 해요. http://localhost:3000을 사용해 주세요.');
      return;
    }
    setAccountPasswordVisibility(false);
    renderAccountDialog();
    $('accountMessage').textContent = '';
    $('accountMessage').classList.remove('error');
    $('accountOverlay').hidden = false;
  }
  function selectAccountMode(mode) {
    accountMode = mode;
    setAccountPasswordVisibility(false);
    $('accountMessage').textContent = '';
    $('accountMessage').classList.remove('error');
    renderAccountDialog();
  }
  async function submitAccountForm(event) {
    event.preventDefault();
    if (accountBusy) return;
    if (isFile) { $('accountMessage').textContent = '계정 기능은 서버 주소에서 이용할 수 있어요.'; return; }
    accountBusy = true;
    $('accountSubmitButton').disabled = true;
    $('accountMessage').textContent = accountMode === 'register' ? '계정을 만들고 있어요…' : '로그인 중…';
    $('accountMessage').classList.remove('error');
    try {
      const credentials = {
        username:$('accountUsernameInput').value.trim(),
        password:$('accountPasswordInput').value
      };
      const endpoint = accountMode === 'register' ? '/api/account/register' : '/api/account/login';
      await accountRequest(endpoint, 'POST', credentials);
      const migrated = await accountRequest('/api/account/migrate', 'POST', { profile:practiceProfile });
      applyAccountProfile(migrated.profile);
      refreshOnlineIdentity();
      $('accountPasswordInput').value = '';
      setAccountPasswordVisibility(false);
      $('accountMessage').textContent = '';
      $('accountOverlay').hidden = true;
      toast(myId ? '로그인 완료! 온라인 무기는 나갔다가 다시 참가하면 사용할 수 있어요.' : `로그인 완료! ${accountProfile.username} 계정으로 코인을 저장해요.`);
    } catch (error) {
      $('accountMessage').textContent = error.message;
      $('accountMessage').classList.add('error');
    } finally {
      accountBusy = false;
      $('accountSubmitButton').disabled = false;
    }
  }
  async function logoutAccount() {
    try { await accountRequest('/api/account/logout', 'POST'); }
    catch (error) { $('accountMessage').textContent = error.message; return; }
    if (socket?.connected) socket.emit('account-logout');
    closeAdminPanel();
    closePasswordChangeForm();
    try { localStorage.removeItem(ACCOUNT_TOKEN_KEY); } catch {}
    accountProfile = null;
    $('accountPasswordInput').value = '';
    setAccountPasswordVisibility(false);
    updateIdentityDisplay();
    refreshOnlineIdentity();
    renderAccountDialog();
    $('accountOverlay').hidden = true;
    toast('로그아웃했어요. 이 기기의 게스트 기록은 남아 있어요.');
  }
  function closeAdminPanel() {
    $('adminOverlay').hidden = true;
    if (adminPlayersRefreshTimer) clearInterval(adminPlayersRefreshTimer);
    adminPlayersRefreshTimer = 0;
  }
  function openAdminPanel() {
    if (!accountProfile?.isAdmin) return;
    $('adminTargetUsername').value ||= accountProfile.username;
    $('adminCoinMessage').textContent = '';
    $('adminCoinMessage').classList.remove('error');
    $('adminOverlay').hidden = false;
    loadAdminPlayers();
    loadAdminPowers();
    if (!adminPlayersRefreshTimer) adminPlayersRefreshTimer = setInterval(() => {
      if (!accountProfile?.isAdmin || $('adminOverlay').hidden) return;
      loadAdminPlayers();
    }, 5000);
  }
  function renderAdminPlayers(players, serverTime) {
    const list = $('adminPlayerList');
    list.replaceChildren();
    $('adminPlayerCount').textContent = String(players.length);
    $('adminPlayerMessage').textContent = players.length
      ? (language === 'en' ? `${players.length} connected` : `${players.length}명 접속 중`)
      : '접속한 플레이어가 없어요.';
    for (const player of players) {
      const row = document.createElement('li');
      const name = document.createElement('span');
      name.className = 'admin-player-name';
      name.dataset.noTranslate = 'true';
      name.textContent = player.username;
      const meta = document.createElement('span');
      meta.className = 'admin-player-meta';
      const seconds = Math.max(0, Math.floor((serverTime - player.connectedAt) / 1000));
      const duration = seconds >= 60
        ? (language === 'en' ? `${Math.floor(seconds / 60)}m ${seconds % 60}s` : `${Math.floor(seconds / 60)}분 ${seconds % 60}초`)
        : (language === 'en' ? `${seconds}s` : `${seconds}초`);
      const state = translateText(player.state);
      const room = player.roomCode ? `${language === 'en' ? 'Room' : '방'} ${player.roomCode}` : '';
      const connected = language === 'en' ? `${duration} connected` : `${duration} 접속`;
      meta.textContent = [state, room, connected].filter(Boolean).join(' · ');
      const info = document.createElement('div');
      info.className = 'admin-player-info';
      info.append(name, meta);
      const kick = document.createElement('button');
      kick.type = 'button';
      kick.className = 'admin-kick-button';
      kick.dataset.socketId = player.socketId || '';
      kick.dataset.playerName = player.username || '';
      const protectedPlayer = player.isAdmin || player.socketId === socket?.id;
      kick.disabled = protectedPlayer;
      kick.textContent = player.isAdmin ? '관리자' : protectedPlayer ? '나' : '추방';
      if (!player.socketId) kick.disabled = true;
      const select = document.createElement('button');
      select.type = 'button';
      select.className = 'admin-select-player';
      select.textContent = language === 'en' ? 'Select' : '선택';
      select.disabled = !player.accountUsername;
      select.dataset.username = player.accountUsername || '';
      row.append(info, select, kick);
      list.append(row);
    }
  }
  const TARGET_POWER_INPUTS = { speed:'targetSpeedToggle', invincible:'targetInvincibleToggle', aim:'targetAimToggle' };
  let loadedAdminTarget = null;
  let adminTargetBusy = false;
  function hasGamePower(power) {
    return !!accountProfile && (accountProfile.grantedPowers?.[power] === true || (accountProfile.isAdmin && adminPowerState[power] === true));
  }
  function displayAdminTarget(profile) {
    loadedAdminTarget = profile.username;
    $('adminTargetSummary').textContent = language === 'en'
      ? `${profile.username} · ${profile.coins.toLocaleString()} coins`
      : `${profile.username} · 보유 ${profile.coins.toLocaleString()} 코인`;
    for (const [power, id] of Object.entries(TARGET_POWER_INPUTS)) $(id).checked = profile.grantedPowers?.[power] === true;
    $('adminTargetPowers').disabled = false;
  }
  async function loadAdminTarget() {
    if (!accountProfile?.isAdmin || adminTargetBusy) return;
    const username = $('adminTargetUsername').value.trim();
    if (!username) { $('adminTargetMessage').textContent = translateText('대상 아이디를 입력해 주세요.'); return; }
    adminTargetBusy = true;
    loadedAdminTarget = null;
    $('adminTargetPowers').disabled = true;
    $('adminTargetLoadButton').disabled = true;
    $('adminTargetMessage').textContent = '';
    try {
      const result = await accountRequest(`/api/admin/account-powers?username=${encodeURIComponent(username)}`);
      if ($('adminTargetUsername').value.trim() !== username) return;
      displayAdminTarget(result.profile);
    } catch (error) {
      $('adminTargetMessage').textContent = translateText(error.message);
    } finally {
      adminTargetBusy = false;
      $('adminTargetLoadButton').disabled = false;
    }
  }
  async function saveTargetPowers(revoke = false) {
    if (!accountProfile?.isAdmin || adminTargetBusy || !loadedAdminTarget) return;
    const username = loadedAdminTarget;
    const powers = Object.fromEntries(Object.entries(TARGET_POWER_INPUTS).map(([power, id]) => [power, !revoke && $(id).checked]));
    adminTargetBusy = true;
    $('adminTargetPowers').disabled = true;
    $('adminTargetMessage').textContent = '';
    try {
      const result = await accountRequest('/api/admin/account-powers', 'POST', { username, powers });
      if (result.profile.id === accountProfile?.id) applyAccountProfile(result.profile);
      if (loadedAdminTarget === username) {
        displayAdminTarget(result.profile);
        $('adminTargetMessage').textContent = language === 'en'
          ? `${username}: powers ${revoke ? 'revoked' : 'updated'}.`
          : `${username}님의 핵 기능을 ${revoke ? '회수' : '변경'}했어요.`;
      }
    } catch (error) {
      $('adminTargetMessage').textContent = translateText(error.message);
    } finally {
      adminTargetBusy = false;
      $('adminTargetPowers').disabled = !loadedAdminTarget;
    }
  }
  const ADMIN_POWER_INPUTS = { speed:'adminSpeedToggle', invincible:'adminInvincibleToggle', aim:'adminAimToggle' };
  let adminPowerState = { speed:false, invincible:false, aim:false };
  let adminPowerSaveBusy = false;
  function writeAdminPowerInputs(powers = adminPowerState) {
    for (const [power, id] of Object.entries(ADMIN_POWER_INPUTS)) $(id).checked = powers[power] === true;
  }
  function setAdminPowerInputsDisabled(disabled) {
    for (const id of Object.values(ADMIN_POWER_INPUTS)) $(id).disabled = disabled || (!socket?.connected && !(practiceMode && accountProfile?.isAdmin));
  }
  function setAdminPowerMessage(message, error = false) {
    $('adminPowerMessage').textContent = message;
    $('adminPowerMessage').classList.toggle('error', error);
  }
  async function loadAdminPowers() {
    if (!accountProfile?.isAdmin) return;
    if (practiceMode) {
      writeAdminPowerInputs();
      setAdminPowerInputsDisabled(false);
      setAdminPowerMessage('연습장에서도 사용할 수 있어요.');
      return;
    }
    if (!socket?.connected) {
      setAdminPowerInputsDisabled(true);
      setAdminPowerMessage('관리자 게임 서버에 연결되지 않았어요.', true);
      return;
    }
    setAdminPowerInputsDisabled(true);
    setAdminPowerMessage('온라인과 연습장에서 사용할 수 있어요.');
    let loaded = false;
    try {
      const result = await accountRequest(`/api/admin/powers?socketId=${encodeURIComponent(socket.id)}`);
      adminPowerState = { speed:!!result.powers?.speed, invincible:!!result.powers?.invincible, aim:!!result.powers?.aim };
      writeAdminPowerInputs();
      loaded = true;
      setAdminPowerMessage('온라인과 연습장에서 사용할 수 있어요.');
    } catch (error) {
      setAdminPowerMessage(translateText(error.message), true);
    } finally {
      setAdminPowerInputsDisabled(!loaded || !socket?.connected);
    }
  }
  async function saveAdminPowers() {
    if (!accountProfile?.isAdmin || adminPowerSaveBusy) return;
    if (!socket?.connected && !practiceMode) {
      writeAdminPowerInputs();
      setAdminPowerMessage('관리자 게임 서버에 연결되지 않았어요.', true);
      return;
    }
    const nextPowers = Object.fromEntries(Object.entries(ADMIN_POWER_INPUTS).map(([power, id]) => [power, $(id).checked]));
    const changedPower = Object.keys(nextPowers).find(power => nextPowers[power] !== adminPowerState[power]);
    if (practiceMode) {
      adminPowerState = nextPowers;
      writeAdminPowerInputs();
      setAdminPowerInputsDisabled(false);
      setAdminPowerMessage('연습장에서도 사용할 수 있어요.');
      if (changedPower) {
        const labels = language === 'en'
          ? { speed:'Speed hack', invincible:'Tag immunity', aim:'Aim hack' }
          : { speed:'스피드 핵', invincible:'잡힘 방지', aim:'에임 핵' };
        toast(`${labels[changedPower]} ${nextPowers[changedPower] ? (language === 'en' ? 'on' : '켜짐') : (language === 'en' ? 'off' : '꺼짐')}`);
      }
      return;
    }
    adminPowerSaveBusy = true;
    setAdminPowerInputsDisabled(true);
    setAdminPowerMessage('관리자 능력 저장 중…');
    try {
      const result = await accountRequest('/api/admin/powers', 'POST', { socketId:socket.id, powers:nextPowers });
      adminPowerState = { speed:!!result.powers.speed, invincible:!!result.powers.invincible, aim:!!result.powers.aim };
      writeAdminPowerInputs();
      setAdminPowerMessage('관리자 능력 설정을 저장했어요.');
      if (changedPower) {
        const labels = language === 'en'
          ? { speed:'Speed hack', invincible:'Tag immunity', aim:'Aim hack' }
          : { speed:'스피드 핵', invincible:'잡힘 방지', aim:'에임 핵' };
        toast(`${labels[changedPower]} ${nextPowers[changedPower] ? (language === 'en' ? 'on' : '켜짐') : (language === 'en' ? 'off' : '꺼짐')}`);
      }
    } catch (error) {
      writeAdminPowerInputs();
      setAdminPowerMessage(translateText(error.message), true);
    } finally {
      adminPowerSaveBusy = false;
      setAdminPowerInputsDisabled(!socket?.connected);
    }
  }
  function toggleAdminPower(power) {
    const inputId = ADMIN_POWER_INPUTS[power];
    if (!accountProfile?.isAdmin || !inputId || adminPowerSaveBusy || (!socket?.connected && !practiceMode)) return;
    $(inputId).checked = !$(inputId).checked;
    saveAdminPowers();
  }
  async function kickAdminPlayer(button) {
    if (!accountProfile?.isAdmin || !button?.dataset.socketId || button.disabled) return;
    const playerName = button.dataset.playerName || '플레이어';
    const confirmed = window.confirm(language === 'en' ? `Kick ${playerName}?` : `${playerName}님을 추방할까요?`);
    if (!confirmed) return;
    button.disabled = true;
    button.textContent = '추방 중…';
    $('adminPlayerMessage').classList.remove('error');
    try {
      await accountRequest('/api/admin/kick', 'POST', { socketId:button.dataset.socketId });
      $('adminPlayerMessage').textContent = '플레이어를 추방했어요.';
      loadAdminPlayers();
    } catch (error) {
      $('adminPlayerMessage').textContent = translateText(error.message);
      $('adminPlayerMessage').classList.add('error');
      loadAdminPlayers();
    }
  }
  let adminPlayersRequestBusy = false;
  async function loadAdminPlayers() {
    if (!accountProfile?.isAdmin || adminPlayersRequestBusy) return;
    adminPlayersRequestBusy = true;
    $('adminPlayerMessage').textContent = '목록을 불러오는 중…';
    $('adminPlayerMessage').classList.remove('error');
    try {
      const result = await accountRequest('/api/admin/players');
      renderAdminPlayers(result.players || [], result.serverTime || Date.now());
    } catch (error) {
      $('adminPlayerMessage').textContent = translateText(error.message);
      $('adminPlayerMessage').classList.add('error');
      if (error.status === 401 || error.status === 403) {
        if (adminPlayersRefreshTimer) clearInterval(adminPlayersRefreshTimer);
        adminPlayersRefreshTimer = 0;
      }
    } finally {
      adminPlayersRequestBusy = false;
    }
  }
  async function grantAdminCoins(event) {
    event.preventDefault();
    if (!accountProfile?.isAdmin) return;
    const button = $('adminCoinSubmitButton');
    const revokeButton = $('adminCoinRevokeButton');
    const action = event.submitter?.value === 'revoke' ? 'revoke' : 'grant';
    const username = $('adminTargetUsername').value.trim();
    const amount = Number($('adminCoinAmount').value);
    if (!username) { $('adminCoinMessage').textContent = translateText('대상 아이디를 입력해 주세요.'); return; }
    if (button.disabled || revokeButton.disabled) return;
    button.disabled = true;
    revokeButton.disabled = true;
    $('adminCoinMessage').textContent = '';
    $('adminCoinMessage').classList.remove('error');
    try {
      const result = await accountRequest('/api/admin/coins', 'POST', { username, amount, action });
      if (result.profile.id === accountProfile?.id) applyAccountProfile(result.profile);
      const formatted = result.amount.toLocaleString(language === 'en' ? 'en-US' : 'ko-KR');
      $('adminCoinMessage').textContent = language === 'en'
        ? `${action === 'revoke' ? 'Revoked' : 'Granted'} ${formatted} coins: ${result.profile.username}.`
        : `${result.profile.username}님의 코인 ${formatted}개를 ${action === 'revoke' ? '회수' : '지급'}했어요.`;
      if (loadedAdminTarget === result.profile.username) displayAdminTarget(result.profile);
      loadAdminPlayers();
    } catch (error) {
      $('adminCoinMessage').textContent = translateText(error.message);
      $('adminCoinMessage').classList.add('error');
    } finally {
      button.disabled = false;
      revokeButton.disabled = false;
    }
  }
  const explosionBursts = [];
  const players = new Map();
  const held = new Set();
  const keyboardHeld = new Set();
  const joystick = $('touchJoystick');
  const joystickKnob = $('touchJoystickKnob');
  let joystickPointerId = null;
  let joystickVector = { x: 0, y: 0 };
  const palette = ['#8063e8','#f17e79','#48b995','#e4a43d','#4e9bd2','#dc71a8','#7983d8','#68aa66','#e47d54','#49a9a8','#bb76d7','#b6905e'];
  const movementKeys = { KeyW:'up', ArrowUp:'up', KeyS:'down', ArrowDown:'down', KeyA:'left', ArrowLeft:'left', KeyD:'right', ArrowRight:'right' };
  const DEVICE_MODE_KEY = 'tag-stickmen-device-mode-v1';
  let deviceMode = (() => { try { return localStorage.getItem(DEVICE_MODE_KEY) === 'mobile' ? 'mobile' : 'desktop'; } catch { return 'desktop'; } })();
  let deviceModeChosen = (() => { try { return ['desktop','mobile'].includes(localStorage.getItem(DEVICE_MODE_KEY)); } catch { return false; } })();
  const isFile = location.protocol === 'file:';
  let selectedMode = null;
  let socket = null;
  let myId = null;
  let nextTurnAt = 0;
  let lastFrameAt = 0;
  let lastMoveSentAt = 0;
  let lastHudUpdateAt = 0;
  const movementHistory = new MovementHistory();
  const networkClock = { serverTime:0, receivedAt:0, renderTime:0 };
  let lastStateTime = 0;
  let toastTimeout = 0;
  let practiceMode = false;
  let practicePaused = false;
  let practicePauseStartedAt = 0;
  let trainingMode = false;
  let practiceKind = 'challenge';
  let practiceProfile = loadPracticeProfile();
  let roundEquippedItem = null;
  let shopBusy = false;
  let accountProfile = null;
  let accountMode = 'login';
  let accountBusy = false;
  let passwordChangeBusy = false;
  let adminPlayersRefreshTimer = 0;
  let practiceRoundStage = 1;
  let practiceReward = 0;
  let practiceRewardGranted = false;
  let practiceProjectiles = [];
  let onlineProjectiles = [];
  let practiceTraps = [];
  let onlineTraps = [];
  let practiceFields = [];
  let onlineFields = [];
  let practiceDecoy = null;
  let onlineDecoys = [];
  let practiceAnchor = null;
  let specialCooldownUntil = 0;
  let lastWeaponCooling = false;
  let shieldActiveUntil = 0;
  let shieldGraceUntil = 0;
  let trainingAttackAt = 0;
  let practiceDummyDownUntil = 0;
  let trainingIncomingHits = 0;
  let shopOpenedAt = 0;
  let matchmaking = false;
  let myMatchReady = false;
  let practiceTurnAt = 0;
  let practiceTagAllowedAt = 0;
  let gameStarted = false;
  let gameOver = false;
  let winnerId = null;
  let obstaclePassCounts = OBSTACLES.map(() => 0);
  let obstaclesGone = false;
  let activeObstacleIndexes = new Set(OBSTACLES.map((_, index) => index));

  let lastStatusMessage = '게임에 참가해 주세요';
  let lastConnectionMessage = '연결 확인 중';
  let lastConnectionOnline = false;
  function status(message) { lastStatusMessage = message; $('statusLine').textContent = translateText(message); }
  function connection(online, message) {
    lastConnectionOnline = online;
    lastConnectionMessage = message;
    $('connectionLed').classList.toggle('online', online);
    $('connectionText').textContent = translateText(message);
  }
  function toast(message) {
    if (/술래예요|술래 교대/.test(message)) gameAudio.effect('tag');
    else if (/명중|맞아 탈락|잡혀 탈락/.test(message)) gameAudio.effect('hit');
    const element = $('toast');
    element.textContent = translateText(message);
    element.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => element.classList.remove('show'), 1800);
  }
  function refreshHeldDirections() {
    held.clear();
    for (const direction of keyboardHeld) held.add(direction);
  }
  function resetJoystick(releaseCapture = false) {
    const activePointerId = joystickPointerId;
    joystickPointerId = null;
    joystickVector = { x: 0, y: 0 };
    joystick.classList.remove('active');
    joystickKnob.style.setProperty('--joystick-x', '0px');
    joystickKnob.style.setProperty('--joystick-y', '0px');
    if (releaseCapture && activePointerId !== null) {
      try { joystick.releasePointerCapture(activePointerId); } catch {}
    }
  }
  function clearMovementInputs() {
    keyboardHeld.clear();
    resetJoystick(true);
    held.clear();
  }
  function syncEntryLayout() {
    const mobile = deviceMode === 'mobile' || window.matchMedia('(max-width:650px), (pointer:coarse)').matches;
    const entryOpen = !$('joinOverlay').hidden || !$('matchOverlay').hidden;
    document.documentElement.classList.toggle('mobile-layout', mobile);
    document.documentElement.classList.toggle('entry-menu-open', entryOpen);
    canvas.parentElement.classList.toggle('entry-open', entryOpen);
  }
  function scrollEntryMenu(event) {
    const button = event.target.closest('[data-menu-scroll]');
    if (!button) return;
    const menu = button.closest('.overlay');
    const direction = button.dataset.menuScroll;
    if (direction === 'end') {
      const target = menu.id === 'joinOverlay' ? $('joinButton') : $('matchReadyButton');
      target.scrollIntoView({ behavior:'auto', block:'center' });
      return;
    }
    const distance = (direction === 'up' ? -1 : 1) * Math.max(160, window.innerHeight * .55);
    if (menu.scrollHeight > menu.clientHeight + 1) menu.scrollTop += distance;
    else window.scrollBy({ top:distance, behavior:'auto' });
  }
  function keepEntryInputVisible() {
    const input = document.activeElement;
    if (!document.documentElement.classList.contains('mobile-layout') || !$('joinOverlay').contains(input) || !input?.matches('input')) return;
    input.scrollIntoView({ behavior:'auto', block:'center' });
  }
  function updateDeviceControls() {
    syncEntryLayout();
    $('touchControls').hidden = deviceMode !== 'mobile' || (!practiceMode && !myId) || matchmaking;
    if ($('touchControls').hidden) resetJoystick(true);
    $('keyboardControls').hidden = deviceMode === 'mobile';
    $('deviceSettingsButton').disabled = !!myId && !practiceMode;
    $('weaponControlTip').textContent = deviceMode === 'mobile'
      ? (language === 'en' ? 'Tap the weapon button on screen to use it' : '화면의 무기 버튼을 눌러 사용')
      : (language === 'en' ? 'Press Q or right-click to use' : 'Q 또는 우클릭으로 사용');
  }
  function updatePracticePauseButton() {
    const button = $('practicePauseButton');
    button.hidden = !practiceMode || gameOver;
    button.textContent = practicePaused ? (language === 'en' ? 'Resume' : '계속하기') : (language === 'en' ? 'Pause' : '일시정지');
    button.setAttribute('aria-pressed', String(practicePaused));
    $('pauseOverlay').hidden = !practicePaused;
    $('practiceShopButton').disabled = practicePaused;
    $('pauseOverlayTitle').textContent = language === 'en' ? 'Paused' : '일시정지됨';
    $('pauseOverlayDescription').textContent = language === 'en' ? 'Press Resume to continue.' : '계속하려면 계속하기를 눌러 주세요.';
  }
  function shiftPracticeTimeline(pausedMs) {
    if (!practiceMode || pausedMs <= 0) return;
    if (practiceTurnAt) practiceTurnAt += pausedMs;
    if (practiceTagAllowedAt) practiceTagAllowedAt += pausedMs;
    if (trainingAttackAt) trainingAttackAt += pausedMs;
    if (practiceDummyDownUntil) practiceDummyDownUntil += pausedMs;
    if (specialCooldownUntil) specialCooldownUntil += pausedMs;
    if (shieldActiveUntil) shieldActiveUntil += pausedMs;
    if (shieldGraceUntil) shieldGraceUntil += pausedMs;
    if (nextTurnAt) nextTurnAt += pausedMs;
    for (const effect of [...practiceTraps, ...practiceFields]) effect.expiresAt += pausedMs;
    if (practiceDecoy) practiceDecoy.expiresAt += pausedMs;
    if (practiceAnchor) practiceAnchor.returnAt += pausedMs;
    for (const burst of explosionBursts) burst.startedAt += pausedMs;
    for (const player of players.values()) {
      for (const key of ['hiddenUntil','frozenUntil','slowedUntil','phaseUntil','speedBoostUntil','shieldUntil','nextThinkAt','goalAt']) {
        if (player[key]) player[key] += pausedMs;
      }
    }
  }
  function updatePracticeProfileDisplay() {
    $('practiceCoinLabel').textContent = String(practiceProfile.coins);
    $('shopCoinLabel').textContent = String(practiceProfile.coins);
    $('practiceStageLabel').textContent = trainingMode ? (language === 'en' ? 'Training' : '훈련장') : language === 'en' ? `Stage ${practiceProfile.stage}` : `${practiceProfile.stage}단계`;
    $('practiceProfileSummary').textContent = language === 'en'
      ? `Stage ${practiceProfile.stage} · ${practiceProfile.coins} coins`
      : `${practiceProfile.stage}단계 · ${practiceProfile.coins} 코인`;
  }
  function ensureSpecialControls() {
    const shopItems = $('shopItems');
    const actionHost = $('specialActionHost');
    for (const [item, data] of Object.entries(SPECIAL_ITEMS)) {
      let shopButton = shopItems?.querySelector(`[data-shop-item="${item}"]`);
      if (!shopButton && shopItems) {
        const article = document.createElement('article');
        article.className = 'shop-item';
        const details = document.createElement('div');
        const title = document.createElement('strong');
        title.textContent = itemLabel(data);
        const description = document.createElement('small');
        description.textContent = `${data.key} · ${itemDescription(data)}`;
        shopButton = document.createElement('button');
        shopButton.type = 'button';
        shopButton.className = 'shop-item-button';
        shopButton.dataset.shopItem = item;
        details.append(title, description);
        article.append(details, shopButton);
        shopItems.append(article);
      }
      if (actionHost && !actionHost.querySelector(`[data-action-item="${item}"]`)) {
        const actionButton = document.createElement('button');
        actionButton.type = 'button';
        actionButton.className = 'special-action-button';
        actionButton.dataset.actionItem = item;
        actionButton.hidden = true;
        actionButton.textContent = `${itemLabel(data)} ${data.key}`;
        actionHost.append(actionButton);
      }
    }
  }
  function loadoutLocked() {
    return matchmaking || (!!myId && !gameOver);
  }
  function equippedItem() {
    return loadoutLocked() ? roundEquippedItem : practiceProfile.equipped;
  }
  function renderShop() {
    if (!$('shopCoinLabel')) return;
    ensureSpecialControls();
    $('shopCoinLabel').textContent = String(practiceProfile.coins);
    for (const item of Object.keys(SPECIAL_ITEMS)) {
      const button = $('shopItems').querySelector(`[data-shop-item="${item}"]`);
      const data = SPECIAL_ITEMS[item];
      const details = button.closest('.shop-item')?.querySelector('div');
      if (details) {
        details.querySelector('strong').textContent = itemLabel(data);
        details.querySelector('small').textContent = `${data.key} · ${itemDescription(data)}`;
      }
      const owned = practiceProfile.owned.includes(item);
      const equipped = practiceProfile.equipped === item;
      button.textContent = language === 'en'
        ? equipped ? 'Equipped' : owned ? 'Equip this item' : `${data.price} coins · Buy`
        : equipped ? '장착 중' : owned ? '이 장비로 변경' : `${data.price} 코인 · 구매`;
      button.setAttribute('aria-pressed', String(equipped));
      button.disabled = loadoutLocked() || shopBusy;
    }
  }
  function updatePracticeActions(time = performance.now()) {
    ensureSpecialControls();
    const onlineActive = !practiceMode && !!myId && gameStarted && !gameOver;
    const actionsVisible = practiceMode && (!gameOver || trainingMode) || onlineActive;
    $('practiceActions').hidden = !actionsVisible;
    $('practiceShopButton').hidden = !practiceMode || loadoutLocked();
    const item = equippedItem();
    $('practiceGearLabel').textContent = onlineActive && !accountProfile ? (language === 'en' ? 'Sign in to use online weapons' : '온라인 무기는 로그인 필요') : item ? itemLabel(SPECIAL_ITEMS[item]) : (language === 'en' ? 'No item equipped' : '장비 없음');
    const weaponIcon = $('equippedWeaponIcon');
    const visibleItem = onlineActive && !accountProfile ? null : item;
    weaponIcon.textContent = visibleItem ? SPECIAL_ITEMS[visibleItem].icon : onlineActive ? '🔒' : '—';
    weaponIcon.title = visibleItem ? `${language === 'en' ? 'Equipped' : '장착 중'}: ${itemLabel(SPECIAL_ITEMS[visibleItem])}` : onlineActive ? (language === 'en' ? 'Sign in to use weapons online' : '온라인 무기는 로그인해야 사용할 수 있어요') : (language === 'en' ? 'No weapon equipped' : '장착한 무기 없음');
    weaponIcon.setAttribute('aria-label', weaponIcon.title);
    const remainingMs = Math.max(0, specialCooldownUntil - time);
    const remaining = Math.ceil(remainingMs / 1000);
    if (actionsVisible && visibleItem && lastWeaponCooling && !remaining) gameAudio.effect('ready');
    lastWeaponCooling = !!visibleItem && remaining > 0;
    const secondsLabel = (remainingMs / 1000).toFixed(1);
    const charge = visibleItem ? Math.max(0, Math.min(100, (1 - remainingMs / SPECIAL_ITEMS[visibleItem].cooldown) * 100)) : 0;
    const track = $('weaponCooldownTrack');
    track.hidden = !visibleItem;
    track.setAttribute('aria-valuenow', String(Math.round(charge)));
    $('weaponCooldownFill').style.width = `${charge}%`;
    $('practiceGearLabel').closest('.weapon-status-card').classList.toggle('ready', !!visibleItem && !remaining);

    $('specialCooldownLabel').textContent = actionsVisible && item
      ? !practiceMode && !accountProfile ? (language === 'en' ? 'Sign in required' : '로그인 필요') : remaining ? (language === 'en' ? `Ready in ${secondsLabel}s` : `재사용까지 ${secondsLabel}초`) : (language === 'en' ? 'Ready' : '사용 가능')
      : '';
    const mobileSkillButton = $('mobileSkillButton');
    const mobileSkillIcon = $('mobileSkillIcon');
    const mobileSkillLabel = $('mobileSkillLabel');
    const mobileSkillCooldown = $('mobileSkillCooldown');
    mobileSkillButton.hidden = deviceMode !== 'mobile' || !actionsVisible;
    mobileSkillIcon.textContent = visibleItem ? SPECIAL_ITEMS[visibleItem].icon : '✦';
    mobileSkillLabel.textContent = visibleItem ? itemLabel(SPECIAL_ITEMS[visibleItem]) : language === 'en' ? 'SKILL' : '스킬';
    mobileSkillCooldown.textContent = !item
      ? (language === 'en' ? 'Equip' : '장착 필요')
      : !practiceMode && !accountProfile
        ? (language === 'en' ? 'Sign in' : '로그인 필요')
        : remaining ? `${secondsLabel}s` : (language === 'en' ? 'Ready' : '사용 가능');
    mobileSkillButton.setAttribute('aria-label', visibleItem
      ? `${language === 'en' ? 'Use skill' : '스킬 사용'}: ${itemLabel(SPECIAL_ITEMS[visibleItem])}`
      : (language === 'en' ? 'Skill button' : '스킬 버튼'));
    mobileSkillButton.disabled = !!item && (remaining > 0 || practicePaused);
    for (const button of $('specialActionHost').querySelectorAll('[data-action-item]')) {
      const key = button.dataset.actionItem;
      button.hidden = deviceMode === 'mobile' || !actionsVisible || item !== key || (!practiceMode && !accountProfile);
      if (item === key) {
        button.textContent = `${itemLabel(SPECIAL_ITEMS[item])} ${SPECIAL_ITEMS[item].key}`;
        button.disabled = remaining > 0 || practicePaused;
      }
    }
  }
  async function shopAction(item) {
    const data = SPECIAL_ITEMS[item];
    if (!data || shopBusy) return;
    if (loadoutLocked()) { toast('게임이나 매칭 대기 중에는 무기를 바꿀 수 없어요. 로비에서 장착해 주세요.'); return; }
    if (accountProfile) {
      shopBusy = true;
      renderShop();
      try {
        const alreadyOwned = practiceProfile.owned.includes(item);
        const endpoint = alreadyOwned ? '/api/account/equip' : '/api/account/purchase';
        const result = await accountRequest(endpoint, 'POST', { item });
        applyAccountProfile(result.profile);
        toast(language === 'en'
          ? alreadyOwned ? `Equipped ${itemLabel(data)}.` : `${itemLabel(data)} purchased! You can equip one item at a time.`
          : alreadyOwned ? `${itemLabel(data)}으로 장비를 바꿨어요.` : `${itemLabel(data)} 구매 완료! 한 번에 하나만 장착돼요.`);
      } catch (error) { toast(error.message); }
      finally { shopBusy = false; renderShop(); }
      return;
    }
    if (practiceProfile.owned.includes(item)) {
      practiceProfile.equipped = item;
      toast(language === 'en' ? `Equipped ${itemLabel(data)}. You can equip one item at a time.` : `${itemLabel(data)}으로 장비를 바꿨어요. 한 번에 하나만 장착됩니다.`);
    } else if (practiceProfile.coins < data.price) {
      toast(language === 'en' ? `Not enough coins. You need ${data.price} coins.` : `코인이 부족해요. ${data.price} 코인이 필요해요.`);
      return;
    } else {
      practiceProfile.coins -= data.price;
      practiceProfile.owned.push(item);
      practiceProfile.owned = [...new Set(practiceProfile.owned)];
      practiceProfile.equipped = item;
      toast(language === 'en' ? `${itemLabel(data)} purchased and equipped. You can equip one item at a time.` : `${itemLabel(data)} 구매 완료! 현재 장비 하나만 장착했어요.`);
    }
    savePracticeProfile();
  }
  function openShop() {
    if (loadoutLocked()) { toast('게임이나 매칭 대기 중에는 무기를 바꿀 수 없어요. 로비에서 장착해 주세요.'); return; }
    renderShop();
    shopOpenedAt = performance.now();
    $('shopOverlay').hidden = false;
  }
  function closeShop() {
    if ($('shopOverlay').hidden) return;
    const paused = performance.now() - shopOpenedAt;
    shiftPracticeTimeline(paused);
    shopOpenedAt = 0;
    $('shopOverlay').hidden = true;
    updatePracticeActions();
  }
  function addPlayer(data, index) {
    const difficulty = Math.min(.72, Math.max(0, practiceRoundStage - 1) * .05);
    players.set(data.id, {
      id: data.id, name: data.name, x: data.x, y: data.y,
      tx: data.x, ty: data.y, angle: data.angle || 0,
      vx: 0, vy: 0,
      snapshots:new SnapshotBuffer(), correctionX:0, correctionY:0,
      hiddenUntil:0, frozenUntil:0, slowedUntil:0, phaseUntil:0, speedBoostUntil:0, shieldUntil:0,
      snapVersion:data.snapVersion, equippedItem:data.equippedItem || null, anchor:null,
      obstacleInside: OBSTACLES.map(() => false), obstacleEntered: OBSTACLES.map(() => false),
      color: palette[index % palette.length], phase: Math.random() * 6,
      tagger: !!data.tagger, bot: !!data.bot, stationary:!!data.stationary, alive: data.alive !== false,
      aiStyle: data.bot ? {
        reaction:(260 + Math.random() * 300) * (1 - difficulty),
        randomness:Math.max(.04, .18 + Math.random() * .3 - difficulty * .35),
        safety:.85 + Math.random() * .3 + difficulty * .45,
        aimVariance:Math.max(4, 8 + Math.random() * 24 - difficulty * 30),
        switchChance:Math.min(.48, .08 + Math.random() * .14 + difficulty * .2)
      } : null,
      nextThinkAt:0,
      goalAt: 0, gx: data.x, gy: data.y
    });
  }
  function showGame() {
    gameAudio.result(null, false);
    $('joinOverlay').hidden = true;
    $('matchOverlay').hidden = true;
    $('resultPanel').hidden = true;
    matchmaking = false;
    $('practiceStageHud').hidden = !practiceMode;
    $('practiceCoinHud').hidden = !practiceMode;
    $('practiceActions').hidden = !practiceMode;
    $('leaveButton').hidden = false;
    $('leaveButton').disabled = false;
    updatePracticePauseButton();
    updateDeviceControls();
    canvas.focus({ preventScroll: true });
  }
  function showMatchmaking() {
    roundEquippedItem = practiceProfile.equipped;
    $('shopOverlay').hidden = true;
    matchmaking = true;
    myMatchReady = false;
    $('joinOverlay').hidden = true;
    $('matchOverlay').hidden = false;
    $('leaveButton').hidden = true;
    $('matchReadyButton').disabled = false;
    $('matchCancelButton').disabled = false;
    updateDeviceControls();
    $('matchReadyButton').textContent = '바로 시작하기';
    $('matchPlayerCount').textContent = '1';
    $('matchReadyCount').textContent = '0';
    $('matchTimer').textContent = '00:30';
    $('matchDescription').textContent = '최대 30초 동안 함께할 플레이어를 찾습니다.';
  }
  function returnToLobby() {
    clearMovementInputs();
    players.clear();
    movementHistory.reset();
    lastStateTime = 0;
    myId = null;
    practiceMode = false;
    practicePaused = false;
    practicePauseStartedAt = 0;
    gameStarted = false;
    gameOver = false;
    winnerId = null;
    matchmaking = false;
    myMatchReady = false;
    practiceMode = false;
    trainingMode = false;
    practiceProjectiles = [];
    onlineProjectiles = []; onlineTraps = []; onlineFields = []; onlineDecoys = [];
    practiceTraps = [];
    practiceFields = [];
    practiceDecoy = null;
    practiceAnchor = null;
    resetPracticeObstacles();
    nextTurnAt = 0;
    practiceTurnAt = 0;
    $('joinOverlay').hidden = false;
    $('matchOverlay').hidden = true;
    $('leaveButton').hidden = true;
    $('matchCancelButton').disabled = false;
    $('matchReadyButton').disabled = false;
    $('practiceActions').hidden = true;
    updatePracticePauseButton();
    updateDeviceControls();
    $('shopOverlay').hidden = true;
    $('copyBtn').disabled = true;
    $('roomLabel').textContent = '—';
    $('playerCount').textContent = '0';
    $('timer').textContent = '--:--';
    $('joinButton').disabled = !selectedMode;
    updateResultPanel();
    selectMode(selectedMode);
    connection(!!socket?.connected, socket?.connected ? '서버 연결됨' : isFile ? '연습 모드 가능' : '서버 연결 끊김');
    refreshOnlineIdentity();
    status('게임에서 나왔어요. 다시 참가할 수 있습니다.');
  }
  function updatePlayerCount() { $('playerCount').textContent = String([...players.values()].filter(player => player.alive).length); }
  function grantPracticeWin() {
    if (practiceRewardGranted || !practiceMode || trainingMode || winnerId !== myId) return;
    practiceRewardGranted = true;
    if (accountProfile) {
      const roundId = globalThis.crypto?.randomUUID?.() || `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
      accountRequest('/api/account/reward', 'POST', { roundId }).then(result => {
        practiceReward = result.reward;
        applyAccountProfile(result.profile);
        updateResultPanel();
        if (practiceReward) toast(`계정에 ${practiceReward} 코인을 저장했어요!`);
      }).catch(error => toast(`코인 저장 실패: ${error.message}`));
      return;
    }
    practiceReward = 15 + practiceRoundStage * 5;
    practiceProfile.coins += practiceReward;
    practiceProfile.stage = Math.max(practiceProfile.stage, practiceRoundStage + 1);
    savePracticeProfile();
  }
  function updateResultPanel() {
    gameAudio.result(gameOver ? `${practiceMode ? 'practice' : 'online'}:${winnerId || 'none'}` : null, winnerId === myId);
    $('resultPanel').hidden = !gameOver || trainingMode;
    $('resultShopButton').hidden = !gameOver || trainingMode;
    if (gameOver && practiceMode) {
      const didWin = winnerId === myId;
      $('resultTitle').textContent = didWin ? `${practiceRoundStage}단계 승리!` : '다시 도전해요';
      $('resultDescription').textContent = didWin
        ? `+${practiceReward} 코인! ${practiceProfile.stage}단계가 열렸어요.`
        : `${practiceRoundStage}단계에서 탈락했어요. 다시 도전해 보세요.`;
      $('restartButton').textContent = didWin ? `${practiceProfile.stage}단계 도전 ↻` : '다시 도전 ↻';
      updatePracticeProfileDisplay();
    } else if (gameOver) {
      const winner = players.get(winnerId);
      $('resultTitle').textContent = winner ? `${winner.name} 승리!` : '게임 종료';
      $('resultDescription').textContent = '다시 한 판 해볼까요?';
      $('restartButton').textContent = '다시 하기 ↻';
    }
  }
  function selectMode(mode) {
    selectedMode = mode;
    const isPractice = mode === 'practice';
    const isOnline = mode === 'online';
    const isMatch = mode === 'match';
    $('onlineModeButton').setAttribute('aria-pressed', String(isOnline));
    $('matchModeButton').setAttribute('aria-pressed', String(isMatch));
    $('practiceModeButton').setAttribute('aria-pressed', String(isPractice));
    $('roomField').hidden = !isOnline;
    $('roomInput').required = isOnline;
    $('practiceMenu').hidden = !isPractice;
    $('practiceStageHud').hidden = !practiceMode;
    $('practiceCoinHud').hidden = !practiceMode;
    $('challengeModeButton').setAttribute('aria-pressed', String(practiceKind === 'challenge'));
    $('trainingModeButton').setAttribute('aria-pressed', String(practiceKind === 'training'));
    $('joinButton').disabled = !mode;
    $('joinButton').textContent = isPractice ? (practiceKind === 'training' ? '훈련장 입장' : '단계 도전') : isOnline ? '온라인 방 참가' : isMatch ? '매칭 시작' : '모드 선택';
    if (isPractice) {
      updatePracticeProfileDisplay();
      $('joinDescription').textContent = practiceKind === 'training'
        ? '움직이지 않는 훈련봇 한 명에게 특수 무기를 시험해요.'
        : '연습에서 이길 때마다 코인을 받고, 단계가 오를수록 봇이 강해져요.';
      $('modeTip').textContent = practiceKind === 'training'
        ? '입장 전에 상점에서 장비 하나를 골라 장착하세요. 입장 후에는 무기를 바꿀 수 없어요.'
        : '입장 전에 상점에서 무기를 장착하세요. 단계 도전 중에는 무기를 바꿀 수 없어요.';
    } else if (isMatch && isFile) {
      $('joinDescription').textContent = '매칭은 게임 서버 주소로 접속해야 이용할 수 있어요.';
      $('modeTip').textContent = '서버 실행 후 http:// 주소로 게임을 열어 주세요.';
    } else if (isMatch) {
      $('joinDescription').textContent = '현재 매칭 대기 인원의 절반 이상이 동의하면 바로 시작해요.';
      $('modeTip').textContent = '대기 중 매칭 취소가 가능하고, 게임 중에도 나갈 수 있어요.';
    } else if (isOnline && isFile) {
      $('joinDescription').textContent = '온라인 게임은 서버 주소로 열어야 연결돼요.';
      $('modeTip').textContent = '이 컴퓨터는 http://localhost:3000 · 같은 Wi-Fi는 http://192.168.1.98:3000';
    } else if (isOnline) {
      $('joinDescription').textContent = '친구와 같은 방 코드를 입력해 함께 플레이하세요.';
      $('modeTip').textContent = '방 코드를 공유해 함께 플레이하세요. 온라인에서 무기를 쓰려면 계정 로그인과 장착이 필요해요.';
    } else {
      $('joinDescription').textContent = '온라인, 매칭 또는 연습 모드를 선택해 주세요.';
      $('modeTip').textContent = '연습 모드에는 AI 봇 3명이 참여합니다.';
    }
  }

  function startPractice(name) {
    roundEquippedItem = practiceProfile.equipped;
    $('shopOverlay').hidden = true;
    practiceMode = true;
    practicePaused = false;
    practicePauseStartedAt = 0;
    trainingMode = practiceKind === 'training';
    practiceRoundStage = practiceProfile.stage;
    gameStarted = true;
    gameOver = false;
    winnerId = null;
    myId = 'local-player';
    practiceReward = 0;
    practiceRewardGranted = false;
    practiceProjectiles = [];
    onlineProjectiles = []; onlineTraps = []; onlineFields = []; onlineDecoys = [];
    practiceTraps = [];
    practiceFields = [];
    practiceDecoy = null;
    practiceAnchor = null;
    specialCooldownUntil = 0;
    shieldActiveUntil = 0;
    shieldGraceUntil = 0;
    practiceDummyDownUntil = 0;
    trainingIncomingHits = 0;
    trainingAttackAt = performance.now() + 2200;
    OBSTACLES = trainingMode ? [] : generateObstacleLayout();
    resetPracticeObstacles();
    $('roomLabel').textContent = trainingMode ? '훈련' : `연습 ${practiceRoundStage}`;
    $('copyBtn').disabled = true;
    players.clear();
    const playerSpawn = trainingMode ? { x:190, y:240 } : safePracticeSpawn();
    addPlayer({ id:myId, name:name || '나', ...playerSpawn, tagger:!trainingMode }, 0);
    if (trainingMode) {
      addPlayer({ id:'practice-dummy', name:'훈련봇', x:520, y:240, bot:true, stationary:true }, 1);
    } else {
      const botCount = Math.min(3 + Math.floor((practiceRoundStage - 1) / 2), 10);
      for (let index = 0; index < botCount; index++) {
        const spawn = safePracticeSpawn(playerSpawn);
        addPlayer({ id:`practice-bot-${index + 1}`, name:`봇 ${index + 1}`, ...spawn, bot:true }, index + 1);
      }
    }
    nextTurnAt = Date.now() + TURN_MS;
    practiceTurnAt = performance.now() + TURN_MS;
    practiceTagAllowedAt = performance.now() + 1000;
    updatePracticeProfileDisplay();
    showGame();
    updatePlayerCount();
    updatePracticeActions();
    connection(false, '로컬 연습 모드');
    status(trainingMode ? '특수 기능 훈련장 — 움직이지 않는 훈련봇을 상대로 연습하세요.' : `연습 ${practiceRoundStage}단계 — 봇 ${players.size - 1}명과 함께 플레이합니다.`);
  }

  function installSocketClient() {
    if (isFile) {
      connection(false, '연습 모드 가능');
      $('joinDescription').textContent = '파일로 열면 연습 모드로 시작합니다.';
      $('modeTip').textContent = '온라인 플레이는 서버 주소(http://…)로 접속하세요.';
      return;
    }
    connection(false, '서버 연결 중…');
    const script = document.createElement('script');
    script.src = `${GAME_SERVER_URL}/socket.io/socket.io.js`;
    script.onload = () => {
      if (typeof window.io !== 'function') { connection(false, '서버 클라이언트를 찾을 수 없음'); return; }
      socket = window.io(GAME_SERVER_URL, {
        reconnection:true, timeout:8000, withCredentials:true,
        transports:['websocket','polling'], tryAllTransports:true,
        auth:{ token:readAccountToken() }
      });
      socket.on('connect', () => {
        connection(true, '서버 연결됨');
        if (accountProfile?.isAdmin && !$('adminOverlay').hidden) loadAdminPowers();
      });
      socket.on('disconnect', () => {
        connection(false, '서버 연결 끊김');
        if (!practiceMode) {
          adminPowerState = { speed:false, invincible:false, aim:false };
          writeAdminPowerInputs();
          setAdminPowerInputsDisabled(true);
        } else {
          setAdminPowerInputsDisabled(false);
        }
        if (matchmaking) {
          matchmaking = false;
          $('matchOverlay').hidden = true;
          $('joinOverlay').hidden = false;
          $('joinButton').disabled = false;
          status('연결이 끊겨 매칭 대기에서 나왔어요. 다시 시도해 주세요.');
        }
      });
      socket.on('connect_error', () => connection(false, '서버에 연결할 수 없음'));
      socket.on('notice', message => {
        status(message);
        $('joinButton').disabled = false;
        if (matchmaking) {
          matchmaking = false;
          $('matchOverlay').hidden = true;
          $('joinOverlay').hidden = false;
        }
      });
      socket.on('admin-kicked', () => {
        toast('관리자에 의해 접속이 종료되었어요.');
        returnToLobby();
      });
      socket.on('account-profile', data => {
        if (data.profile?.id === accountProfile?.id) applyAccountProfile(data.profile);
      });
      socket.on('joined', data => {
        movementHistory.reset();
        networkClock.renderTime = 0;
        lastStateTime = 0;
        myId = data.id;
        roundEquippedItem = practiceProfile.equipped;
        $('shopOverlay').hidden = true;
        practiceMode = false;
        trainingMode = false;
        gameStarted = !!data.started;
        gameOver = !!data.gameOver;
        winnerId = data.winnerId || null;
        players.clear();
        clearMovementInputs();
        onlineProjectiles = []; onlineTraps = []; onlineFields = []; onlineDecoys = [];
        specialCooldownUntil = 0;
        $('roomLabel').textContent = data.code;
        $('copyBtn').disabled = false;
        showGame();
        $('restartButton').disabled = false;
        updateResultPanel();
        status(data.gameOver ? '게임이 끝난 방에 입장했어요. 다시 하기를 눌러 새 게임을 시작하세요.' : data.matched ? '매칭 완료! WASD 또는 방향키로 움직이세요.' : '방에 참가했어요 — WASD 또는 방향키로 움직이세요.');
      });
      socket.on('matchmaking-state', state => {
        if (!matchmaking) showMatchmaking();
        myMatchReady = !!state.ready;
        $('matchPlayerCount').textContent = String(state.waitingCount);
        $('matchReadyCount').textContent = String(state.readyCount);
        $('matchReadyTotal').textContent = String(state.waitingCount);
        const seconds = Math.max(0, Math.ceil((state.deadlineAt - Date.now()) / 1000));
        $('matchTimer').textContent = `00:${String(seconds).padStart(2, '0')}`;
        $('matchReadyButton').textContent = myMatchReady ? '준비 취소' : '바로 시작하기';
        $('matchDescription').textContent = state.message || '현재 매칭 대기 인원의 절반 이상이 준비하면 즉시 시작해요.';
      });
      socket.on('left', returnToLobby);
      socket.on('obstacle-explode', triggerObstacleExplosion);
      socket.on('state', state => {
        if (practiceMode || !myId) return;
        const stateTime = Number.isFinite(state.serverTime) ? state.serverTime : Date.now();
        if (stateTime < lastStateTime) return;
        lastStateTime = stateTime;
        networkClock.serverTime = stateTime;
        networkClock.receivedAt = performance.now();
        nextTurnAt = Date.now() + Math.max(0, state.nextTurnAt - stateTime);
        gameStarted = !!state.started;
        gameOver = !!state.gameOver;
        winnerId = state.winnerId || null;
        if (Array.isArray(state.obstacles) && state.obstacles.length === OBSTACLE_SHAPES.length) {
          const changed = state.obstacles.some((obstacle, index) => {
            const current = OBSTACLES[index];
            return !current || current.x !== obstacle.x || current.y !== obstacle.y || current.width !== obstacle.width || current.height !== obstacle.height;
          });
          OBSTACLES = state.obstacles.map(obstacle => ({ ...obstacle }));
          if (changed) explosionBursts.length = 0;
        }
        const serverActiveIndexes = new Set(state.activeObstacleIndexes || OBSTACLES.map((_, index) => index));
        const newlyGone = [...activeObstacleIndexes].filter(index => !serverActiveIndexes.has(index));
        obstaclePassCounts = Array.isArray(state.obstaclePassCounts) ? state.obstaclePassCounts.slice() : obstaclePassCounts;
        if (newlyGone.length) triggerObstacleExplosion(newlyGone);
        activeObstacleIndexes = serverActiveIndexes;
        obstaclesGone = !!state.obstaclesGone;
        const wallNow = stateTime, perfNow = performance.now();
        onlineProjectiles = Array.isArray(state.projectiles) ? state.projectiles.map(projectile => ({ ...projectile, receivedAt:perfNow })) : [];
        onlineTraps = Array.isArray(state.traps) ? state.traps.map(effect => ({ ...effect, expiresAt:perfNow + Math.max(0, effect.expiresAt - wallNow) })) : [];
        onlineFields = Array.isArray(state.fields) ? state.fields.map(effect => ({ ...effect, expiresAt:perfNow + Math.max(0, effect.expiresAt - wallNow) })) : [];
        onlineDecoys = Array.isArray(state.decoys) ? state.decoys.map(effect => ({ ...effect, expiresAt:perfNow + Math.max(0, effect.expiresAt - wallNow) })) : [];
        const present = new Set();
        state.players.forEach((player, index) => {
          present.add(player.id);
          let view = players.get(player.id);
          if (!view) { addPlayer(player, index); view = players.get(player.id); }
          const wasAlive = view.alive;
          const wasTagger = view.tagger;
          view.name = player.name;
          view.alive = player.alive !== false;
          view.tagger = player.id === state.taggerId;
          if (player.id !== myId) view.angle = Number.isFinite(player.angle) ? player.angle : view.angle;
          view.equippedItem = player.equippedItem || null;
          if (player.id === myId) {
            roundEquippedItem = player.equippedItem || null;
            specialCooldownUntil = perfNow + Math.max(0, Number(player.specialCooldownMs || 0));
          }
          for (const [source, target] of [['shieldUntil','shieldUntil'], ['frozenUntil','frozenUntil'], ['slowedUntil','slowedUntil'], ['hiddenUntil','hiddenUntil'], ['phaseUntil','phaseUntil'], ['speedBoostUntil','speedBoostUntil']]) {
            view[target] = perfNow + Math.max(0, Number(player[source] || 0) - wallNow);
          }
          view.anchor = player.anchor ? { ...player.anchor, returnAt:perfNow + Math.max(0, player.anchor.returnAt - wallNow) } : null;
          const snapped = view.snapVersion !== player.snapVersion;
          view.tx = player.x; view.ty = player.y;
          if (player.id !== myId) {
            view.snapshots.push(stateTime, player.x, player.y, snapped);
            if (snapped) { view.x = player.x; view.y = player.y; }
          } else if (snapped || (!wasTagger && view.tagger)) {
            view.x = player.x; view.y = player.y;
            view.correctionX = view.correctionY = 0;
            movementHistory.clear();
          } else {
            const error = movementHistory.correction(player);
            if (error) {
              view.correctionX = Math.abs(error.x) > 1 ? error.x : 0;
              view.correctionY = Math.abs(error.y) > 1 ? error.y : 0;
            }
          }
          view.snapVersion = player.snapVersion;
          if (player.id === myId && wasAlive && !view.alive) {
            clearMovementInputs();
            status('잡혔어요! 관전 중입니다.');
            toast('잡혀서 탈락했어요. 남은 플레이어를 관전합니다.');
          }
        });
        for (const id of players.keys()) if (!present.has(id)) players.delete(id);
        updatePlayerCount();
        updatePracticeActions();
        if (gameOver) {
          const winner = players.get(winnerId);
          status(winner ? `${winner.name}님이 마지막 생존자로 승리했어요!` : '게임이 끝났어요.');
        } else if (!gameStarted) {
          status('다른 플레이어가 참가하면 게임이 시작돼요.');
        }
        updateResultPanel();
      });
      socket.on('toast', toast);
    };
    script.onerror = () => {
      connection(false, '게임 서버를 찾을 수 없음');
      $('joinDescription').textContent = '서버에 연결되지 않았어요. 서버를 실행하고 이 주소를 다시 열어 주세요.';
    };
    document.head.appendChild(script);
  }

  $('accountOpenButton').addEventListener('click', openAccount);
  $('adminOpenButton').addEventListener('click', openAdminPanel);
  $('adminCloseButton').addEventListener('click', closeAdminPanel);
  $('adminRefreshButton').addEventListener('click', loadAdminPlayers);
  $('adminCoinForm').addEventListener('submit', grantAdminCoins);
  $('adminTargetLoadButton').addEventListener('click', loadAdminTarget);
  $('adminTargetUsername').addEventListener('input', () => {
    loadedAdminTarget = null;
    $('adminTargetPowers').disabled = true;
    $('adminTargetSummary').textContent = translateText('계정을 조회하면 보유 코인과 핵 기능을 볼 수 있어요.');
    $('adminTargetMessage').textContent = '';
  });
  $('adminTargetSaveButton').addEventListener('click', () => saveTargetPowers(false));
  $('adminTargetRevokeButton').addEventListener('click', () => saveTargetPowers(true));
  for (const id of Object.values(ADMIN_POWER_INPUTS)) $(id).addEventListener('change', saveAdminPowers);
  $('adminPlayerList').addEventListener('click', event => {
    const select = event.target.closest('.admin-select-player');
    if (select && !select.disabled) {
      $('adminTargetUsername').value = select.dataset.username;
      loadedAdminTarget = null;
      $('adminTargetPowers').disabled = true;
      loadAdminTarget();
    }
    const button = event.target.closest('.admin-kick-button');
    if (button) kickAdminPlayer(button);
  });
  $('adminOverlay').addEventListener('click', event => {
    if (event.target === $('adminOverlay')) closeAdminPanel();
  });
  $('languageToggle').addEventListener('click', () => setLanguage(language === 'ko' ? 'en' : 'ko'));
  $('deviceSettingsButton').addEventListener('click', () => {
    if (practiceMode && !practicePaused && !gameOver) $('practicePauseButton').click();
    $('deviceSetupOverlay').hidden = false;
  });
  for (const button of document.querySelectorAll('[data-device-mode]')) {
    button.addEventListener('click', () => {
      deviceMode = button.dataset.deviceMode;
      deviceModeChosen = true;
      clearMovementInputs();
      try { localStorage.setItem(DEVICE_MODE_KEY, deviceMode); } catch {}
      $('deviceSetupOverlay').hidden = true;
      updateDeviceControls();
      toast(deviceMode === 'mobile' ? (language === 'en' ? 'Touch controls enabled.' : '핸드폰 터치 조작을 설정했어요.') : (language === 'en' ? 'Keyboard controls enabled.' : 'PC 키보드 조작을 설정했어요.'));
    });
  }
  $('accountLoginModeButton').addEventListener('click', () => selectAccountMode('login'));
  $('accountRegisterModeButton').addEventListener('click', () => selectAccountMode('register'));
  $('passwordVisibilityButton').addEventListener('click', () => {
    setAccountPasswordVisibility($('accountPasswordInput').type === 'password');
  });
  for (const [inputId, buttonId] of [
    ['currentPasswordInput', 'currentPasswordVisibilityButton'],
    ['newPasswordInput', 'newPasswordVisibilityButton'],
    ['confirmPasswordInput', 'confirmPasswordVisibilityButton']
  ]) {
    $(buttonId).addEventListener('click', () => {
      setPasswordFieldVisibility(inputId, buttonId, $(inputId).type === 'password');
    });
  }
  $('passwordChangeOpenButton').addEventListener('click', openPasswordChangeForm);
  $('passwordChangeCancelButton').addEventListener('click', closePasswordChangeForm);
  $('passwordChangeForm').addEventListener('submit', submitPasswordChange);
  $('accountForm').addEventListener('submit', submitAccountForm);
  $('accountLogoutButton').addEventListener('click', logoutAccount);
  $('accountCloseButton').addEventListener('click', () => {
    setAccountPasswordVisibility(false);
    closePasswordChangeForm();
    $('accountOverlay').hidden = true;
  });
  $('accountOverlay').addEventListener('click', event => {
    if (event.target === $('accountOverlay')) {
      setAccountPasswordVisibility(false);
      closePasswordChangeForm();
      $('accountOverlay').hidden = true;
    }
  });
  $('onlineModeButton').addEventListener('click', () => selectMode('online'));
  $('matchModeButton').addEventListener('click', () => selectMode('match'));
  $('practiceModeButton').addEventListener('click', () => selectMode('practice'));
  $('challengeModeButton').addEventListener('click', () => { practiceKind = 'challenge'; selectMode('practice'); });
  $('trainingModeButton').addEventListener('click', () => { practiceKind = 'training'; selectMode('practice'); });
  $('lobbyShopButton').addEventListener('click', openShop);
  $('practiceShopButton').addEventListener('click', openShop);
  $('resultShopButton').addEventListener('click', openShop);
  $('closeShopButton').addEventListener('click', closeShop);
  $('shopItems').addEventListener('click', event => {
    const button = event.target.closest('[data-shop-item]');
    if (button) shopAction(button.dataset.shopItem);
  });
  $('specialActionHost').addEventListener('click', event => {
    const button = event.target.closest('[data-action-item]');
    if (button) activateSpecialItem(button.dataset.actionItem);
  });
  $('mobileSkillButton').addEventListener('click', () => {
    if (!equippedItem()) {
      toast(!practiceMode && !accountProfile ? '온라인 무기를 쓰려면 먼저 계정에 로그인해 주세요.' : '상점에서 장비를 장착해 주세요.');
      return;
    }
    activateSpecialItem(equippedItem());
  });
  $('practicePauseButton').addEventListener('click', () => {
    if (!practiceMode || gameOver) return;
    if (!practicePaused) {
      practicePaused = true;
      practicePauseStartedAt = performance.now();
      clearMovementInputs();
      status('연습이 일시 정지됐어요.');
    } else {
      const now = performance.now();
      shiftPracticeTimeline(now - practicePauseStartedAt);
      practicePaused = false;
      practicePauseStartedAt = 0;
      lastFrameAt = now;
      status('연습을 계속합니다.');
    }
    updatePracticePauseButton();
    updatePracticeActions();
  });
  $('joinForm').addEventListener('submit', event => {
    event.preventDefault();
    if (shopBusy) { toast('상점 처리가 끝난 뒤 입장해 주세요.'); return; }
    if (!selectedMode) { status('온라인 또는 연습 모드를 먼저 선택해 주세요.'); return; }
    const name = accountProfile?.username || $('nameInput').value.trim().slice(0, 20) || '플레이어';
    const code = $('roomInput').value.trim().toUpperCase().slice(0, 12);
    if (selectedMode === 'practice') { startPractice(name); return; }
    if (isFile) {
      status(selectedMode === 'match'
        ? '매칭은 file:// 주소에서 이용할 수 없어요. 서버의 http:// 주소를 열어 주세요.'
        : '온라인 게임은 file:// 주소에서 접속할 수 없어요. 위에 표시된 http:// 주소를 열어 주세요.');
      return;
    }
    if (!accountProfile) {
      status('온라인과 매칭은 이름과 비밀번호로 로그인해야 참가할 수 있어요.');
      openAccount();
      return;
    }
    if (!socket || !socket.connected) {
      status('게임 서버에 연결할 수 없어요. 서버가 깨어날 때까지 잠시 기다린 뒤 다시 시도해 주세요.');
      return;
    }
    if (selectedMode === 'match') {
      $('joinButton').disabled = true;
      showMatchmaking();
      socket.emit('matchmake', { name });
      status('매칭 대기열에 참가하는 중…');
      return;
    }
    $('joinButton').disabled = true;
    status('방에 참가하는 중…');
    socket.emit('join', { name, code });
    setTimeout(() => { if ($('joinButton').disabled && $('joinOverlay').hidden === false) { $('joinButton').disabled = false; status('참가 응답이 없어요. 서버 연결을 확인해 주세요.'); } }, 5000);
  });

  $('copyBtn').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText($('roomLabel').textContent); toast('방 코드를 복사했어요.'); }
    catch { toast(`방 코드: ${$('roomLabel').textContent}`); }
  });
  $('matchReadyButton').addEventListener('click', () => {
    if (!socket?.connected) {
      $('matchDescription').textContent = '게임 서버에 연결할 수 없어요. 서버가 깨어날 때까지 잠시 기다린 뒤 다시 시도해 주세요.';
      return;
    }
    if (!matchmaking) return;
    socket.emit('match-ready', { ready:!myMatchReady });
  });
  $('matchCancelButton').addEventListener('click', () => {
    if (!socket?.connected) { returnToLobby(); return; }
    $('matchCancelButton').disabled = true;
    socket.emit('leave');
  });
  $('leaveButton').addEventListener('click', () => {
    clearMovementInputs();
    if (practiceMode || !socket?.connected) { returnToLobby(); return; }
    $('leaveButton').disabled = true;
    status('방에서 나가는 중…');
    socket.emit('leave');
  });
  function restartPracticeRound() {
    const name = accountProfile?.username || players.get(myId)?.name || $('nameInput').value.trim() || '나';
    startPractice(name);
  }
  $('restartButton').addEventListener('click', () => {
    if (practiceMode) { restartPracticeRound(); return; }
    if (!socket?.connected) { status('서버 연결이 끊겼어요. 다시 연결한 뒤 눌러 주세요.'); return; }
    $('restartButton').disabled = true;
    socket.emit('restart');
    status('새 게임을 준비하는 중…');
    setTimeout(() => { $('restartButton').disabled = false; }, 1200);
  });
  function handleKey(event, down) {
    const editing = event.target?.matches?.('input, textarea, [contenteditable="true"]');
    if (editing) return;
    if (down && !event.repeat && accountProfile?.isAdmin && event.shiftKey && !event.altKey && !event.ctrlKey && !event.metaKey) {
      const adminPower = { Digit1:'speed', Digit2:'invincible', Digit3:'aim' }[event.code];
      if (adminPower) {
        event.preventDefault();
        toggleAdminPower(adminPower);
        return;
      }
    }
    if ((practiceMode || myId) && down && !event.repeat) {
      if (event.code === 'KeyQ') {
        event.preventDefault();
        if (equippedItem()) activateSpecialItem(equippedItem());
        return;
      }
    }
    if (deviceMode === 'mobile' || !movementKeys[event.code]) return;
    if (!myId) return;
    event.preventDefault();
    if (down) keyboardHeld.add(movementKeys[event.code]); else keyboardHeld.delete(movementKeys[event.code]);
    refreshHeldDirections();
  }
  window.addEventListener('keydown', event => handleKey(event, true), true);
  window.addEventListener('keyup', event => handleKey(event, false), true);
  window.addEventListener('blur', clearMovementInputs);
  document.addEventListener('visibilitychange', () => { if (document.hidden) clearMovementInputs(); });
  joystick.addEventListener('pointerdown', event => {
    if ($('touchControls').hidden || joystickPointerId !== null) return;
    event.preventDefault();
    joystickPointerId = event.pointerId;
    joystick.classList.add('active');
    try { joystick.setPointerCapture(event.pointerId); } catch {}
    moveJoystickPointer(event);
  });
  function moveJoystickPointer(event) {
    if (event.pointerId !== joystickPointerId) return;
    event.preventDefault();
    const bounds = joystick.getBoundingClientRect();
    const knobBounds = joystickKnob.getBoundingClientRect();
    const radius = Math.max(1, Math.min(bounds.width, bounds.height) / 2 - Math.min(knobBounds.width, knobBounds.height) / 2 - 3);
    let offsetX = event.clientX - (bounds.left + bounds.width / 2);
    let offsetY = event.clientY - (bounds.top + bounds.height / 2);
    const distance = Math.hypot(offsetX, offsetY);
    if (distance > radius) {
      offsetX = offsetX / distance * radius;
      offsetY = offsetY / distance * radius;
    }
    const clampedDistance = Math.hypot(offsetX, offsetY);
    joystickVector = clampedDistance < 5
      ? { x: 0, y: 0 }
      : { x: offsetX / radius, y: offsetY / radius };
    joystickKnob.style.setProperty('--joystick-x', `${offsetX}px`);
    joystickKnob.style.setProperty('--joystick-y', `${offsetY}px`);
  }
  function releaseJoystickPointer(event) {
    if (event.pointerId !== joystickPointerId) return;
    resetJoystick();
  }
  joystick.addEventListener('pointermove', moveJoystickPointer);
  joystick.addEventListener('pointerup', releaseJoystickPointer);
  joystick.addEventListener('pointercancel', releaseJoystickPointer);
  joystick.addEventListener('lostpointercapture', releaseJoystickPointer);
  canvas.addEventListener('pointerdown', () => canvas.focus({ preventScroll: true }));
  canvas.addEventListener('contextmenu', event => {
    if (!practiceMode && !myId) return;
    event.preventDefault();
    activateSpecialItem(equippedItem());
  });

  function useOnlineSpecial(item) {
    if (!myId || !gameStarted || gameOver || !$('shopOverlay').hidden) { toast('게임이 시작된 뒤에 무기를 쓸 수 있어요.'); return; }
    if (!accountProfile) { toast('온라인 무기를 쓰려면 먼저 계정에 로그인해 주세요.'); return; }
    if (!SPECIAL_ITEMS[item] || equippedItem() !== item || !practiceProfile.owned.includes(item)) {
      toast('상점에서 보유한 무기를 장착해 주세요.'); return;
    }
    const now = performance.now();
    if (now < specialCooldownUntil) { toast('무기가 아직 충전 중이에요.'); return; }
    const player = players.get(myId);
    if (!player?.alive) return;
    specialCooldownUntil = now + 800;
    updatePracticeActions(now);
    socket.emit('use-special', { item, angle:Number.isFinite(player.angle) ? player.angle : 0 }, result => {
      if (!result?.ok) {
        specialCooldownUntil = 0;
        toast(result?.error || '무기를 사용할 수 없어요.');
        updatePracticeActions();
        return;
      }
      gameAudio.effect('skill');
      specialCooldownUntil = performance.now() + result.cooldownMs;
      updatePracticeActions();
    });
  }

  function activateShield() {
    if (!practiceMode || gameOver || !$('shopOverlay').hidden) return;
    if (equippedItem() !== 'shield') { toast('상점에서 방패를 구매하고 장착해 주세요.'); return; }
    const now = performance.now();
    if (now < specialCooldownUntil) { toast('방패가 아직 충전 중이에요.'); return; }
    specialCooldownUntil = now + SPECIAL_ITEMS.shield.cooldown;
    shieldActiveUntil = now + 2000;
    toast('방패를 펼쳤어요! 공격을 막을 수 있어요.');
    updatePracticeActions(now);
  }
  function getPracticeProjectileAim(player) {
    const canAim = practiceMode && hasGamePower('aim');
    const target = canAim
      ? [...players.values()].filter(other => other.alive && other.id !== player.id)
        .sort((a, b) => Math.hypot(a.x - player.x, a.y - player.y) - Math.hypot(b.x - player.x, b.y - player.y))[0]
      : null;
    const angle = target ? Math.atan2(target.y - player.y, target.x - player.x) : Number.isFinite(player.angle) ? player.angle : 0;
    return { angle, targetId:target?.id || null };
  }
  function launchPracticePunch() {
    if (!practiceMode || gameOver || !$('shopOverlay').hidden) return;
    if (equippedItem() !== 'punch') { toast('상점에서 날아가는 주먹을 구매하고 장착해 주세요.'); return; }
    const now = performance.now();
    if (now < specialCooldownUntil) { toast('주먹이 아직 충전 중이에요.'); return; }
    const player = players.get(myId);
    if (!player?.alive || gameOver) return;
    const { angle, targetId } = getPracticeProjectileAim(player);
    const speed = targetId ? 1000 : 540;
    practiceProjectiles.push({
      kind:'player', ownerId:myId, x:player.x + Math.cos(angle) * 16, y:player.y + Math.sin(angle) * 16,
      vx:Math.cos(angle) * speed, vy:Math.sin(angle) * speed, life:targetId ? 4 : 1.35, targetId
    });
    specialCooldownUntil = now + SPECIAL_ITEMS.punch.cooldown;
    toast('날아가는 주먹 발사!');
    updatePracticeActions(now);
  }
  function checkSpecialReady(item) {
    if (!practiceMode || gameOver || !$('shopOverlay').hidden) return null;
    if (equippedItem() !== item) {
      toast(language === 'en' ? `Equip ${itemLabel(SPECIAL_ITEMS[item])} from the shop.` : `상점에서 ${SPECIAL_ITEMS[item].label}을 장착해 주세요.`);
      return null;
    }
    const now = performance.now();
    if (now < specialCooldownUntil) { toast('특수 기능이 아직 충전 중이에요.'); return null; }
    const player = players.get(myId);
    if (!player?.alive) return null;
    return { player, now };
  }
  function launchPracticeProjectile(kind) {
    const item = kind === 'boomerang' ? 'boomerang' : 'ice';
    const ready = checkSpecialReady(item);
    if (!ready) return;
    const { player, now } = ready;
    const { angle, targetId } = getPracticeProjectileAim(player);
    const speed = targetId ? 1000 : kind === 'boomerang' ? 470 : 430;
    practiceProjectiles.push({
      kind, ownerId:myId, x:player.x + Math.cos(angle) * 16, y:player.y + Math.sin(angle) * 16,
      vx:Math.cos(angle) * speed, vy:Math.sin(angle) * speed,
      life:kind === 'boomerang' ? 2.4 : targetId ? 4 : 1.65, age:0, returning:false, targetId
    });
    specialCooldownUntil = now + SPECIAL_ITEMS[item].cooldown;
    toast(kind === 'boomerang' ? '부메랑을 던졌어요. 돌아오는 길도 조심하세요!' : '빙결탄 발사! 맞은 봇이 느려져요.');
    updatePracticeActions(now);
  }
  function activateBlink() {
    const ready = checkSpecialReady('blink');
    if (!ready) return;
    const { player, now } = ready;
    const angle = Number.isFinite(player.angle) ? player.angle : 0;
    let destination = null;
    for (let distance = 170; distance >= 70; distance -= 10) {
      const point = {
        x:Math.max(24, Math.min(776, player.x + Math.cos(angle) * distance)),
        y:Math.max(34, Math.min(446, player.y + Math.sin(angle) * distance))
      };
      const blockedByWall = player.tagger && overlapsObstacle(point.x, point.y);
      const overlapsPlayer = [...players.values()].some(other => other.alive && other.id !== player.id && Math.hypot(other.x - point.x, other.y - point.y) < 32);
      if (!blockedByWall && !overlapsPlayer && Math.hypot(point.x - player.x, point.y - player.y) >= 60) { destination = point; break; }
    }
    if (!destination) { toast('질주할 공간이 없어요. 방향을 바꿔 다시 시도해 주세요.'); return; }
    player.x = player.tx = player.gx = destination.x;
    player.y = player.ty = player.gy = destination.y;
    player.vx = player.vy = 0;
    specialCooldownUntil = now + SPECIAL_ITEMS.blink.cooldown;
    practiceTagAllowedAt = Math.max(practiceTagAllowedAt, now + 300);
    toast('번개처럼 질주했어요!');
    updatePracticeActions(now);
  }
  function activateSmoke() {
    const ready = checkSpecialReady('smoke');
    if (!ready) return;
    ready.player.hiddenUntil = ready.now + 3000;
    specialCooldownUntil = ready.now + SPECIAL_ITEMS.smoke.cooldown;
    toast('유령 연막! 3초 동안 봇과 술래가 나를 놓쳐요.');
    updatePracticeActions(ready.now);
  }
  function activateDecoy() {
    const ready = checkSpecialReady('decoy');
    if (!ready) return;
    const { player, now } = ready;
    const angle = Number.isFinite(player.angle) ? player.angle : 0;
    practiceDecoy = {
      x:Math.max(30, Math.min(770, player.x + Math.cos(angle) * 95)),
      y:Math.max(40, Math.min(440, player.y + Math.sin(angle) * 95)),
      expiresAt:now + 4500
    };
    specialCooldownUntil = now + SPECIAL_ITEMS.decoy.cooldown;
    toast('분신 미끼를 놓았어요. 술래 봇이 미끼를 쫓아요!');
    updatePracticeActions(now);
  }
  function activateGust() {
    const ready = checkSpecialReady('gust');
    if (!ready) return;
    const { player, now } = ready;
    let pushed = 0;
    for (const bot of players.values()) {
      if (!bot.alive || !bot.bot || bot.stationary) continue;
      const dx = bot.x - player.x, dy = bot.y - player.y;
      const distance = Math.hypot(dx, dy);
      if (distance > 220) continue;
      const direction = distance > 1 ? 1 / distance : 1;
      bot.gx = Math.max(35, Math.min(765, bot.x + dx * direction * 160));
      bot.gy = Math.max(45, Math.min(435, bot.y + dy * direction * 160));
      bot.nextThinkAt = Math.max(bot.nextThinkAt, now + 700);
      pushed++;
    }
    specialCooldownUntil = now + SPECIAL_ITEMS.gust.cooldown;
    toast(pushed ? `폭풍 장갑! 봇 ${pushed}명을 밀어냈어요.` : '폭풍 장갑! 주변 봇을 밀어내요.');
    updatePracticeActions(now);
  }
  function activateThunder() {
    const ready = checkSpecialReady('thunder');
    if (!ready) return;
    const { player, now } = ready;
    let stunned = 0;
    for (const bot of players.values()) {
      if (!bot.alive || !bot.bot || Math.hypot(bot.x - player.x, bot.y - player.y) > 155) continue;
      bot.frozenUntil = Math.max(bot.frozenUntil || 0, now + 1350);
      stunned++;
    }
    specialCooldownUntil = now + SPECIAL_ITEMS.thunder.cooldown;
    toast(stunned ? `천둥 북! 봇 ${stunned}명이 잠깐 멈췄어요.` : '천둥 북을 쳤어요! 가까운 봇이 멈춰요.');
    updatePracticeActions(now);
  }
  function activateSpringTrap() {
    const ready = checkSpecialReady('spring');
    if (!ready) return;
    const { player, now } = ready;
    const direction = Number.isFinite(player.angle) ? player.angle + (player.tagger ? 0 : Math.PI) : Math.PI;
    const x = Math.max(35, Math.min(765, player.x + Math.cos(direction) * 44));
    const y = Math.max(45, Math.min(435, player.y + Math.sin(direction) * 44));
    practiceTraps.push({ kind:'spring', x, y, expiresAt:now + 9000 });
    specialCooldownUntil = now + SPECIAL_ITEMS.spring.cooldown;
    toast('용수철 덫을 설치했어요. 밟은 봇을 튕겨내요!');
    updatePracticeActions(now);
  }
  function launchGravityOrb() {
    const ready = checkSpecialReady('gravity');
    if (!ready) return;
    const { player, now } = ready;
    const { angle, targetId } = getPracticeProjectileAim(player);
    practiceProjectiles.push({
      kind:'gravity', ownerId:myId, x:player.x + Math.cos(angle) * 16, y:player.y + Math.sin(angle) * 16,
      vx:Math.cos(angle) * (targetId ? 1000 : 360), vy:Math.sin(angle) * (targetId ? 1000 : 360), life:targetId ? 4 : 1.5, age:0, targetId
    });
    specialCooldownUntil = now + SPECIAL_ITEMS.gravity.cooldown;
    toast('중력 구슬 발사! 닿은 곳에 중력장이 생겨요.');
    updatePracticeActions(now);
  }
  function activatePhase() {
    const ready = checkSpecialReady('phase');
    if (!ready) return;
    ready.player.phaseUntil = ready.now + 2200;
    specialCooldownUntil = ready.now + SPECIAL_ITEMS.phase.cooldown;
    toast('유령 망토! 2초 동안 장애물을 통과해요.');
    updatePracticeActions(ready.now);
  }
  function activateHaste() {
    const ready = checkSpecialReady('haste');
    if (!ready) return;
    ready.player.speedBoostUntil = ready.now + 4200;
    specialCooldownUntil = ready.now + SPECIAL_ITEMS.haste.cooldown;
    toast('혜성 운동화! 4초 동안 빠르게 달려요.');
    updatePracticeActions(ready.now);
  }
  function activateAnchor() {
    const ready = checkSpecialReady('anchor');
    if (!ready) return;
    const { player, now } = ready;
    practiceAnchor = { x:player.x, y:player.y, returnAt:now + 3000 };
    specialCooldownUntil = now + SPECIAL_ITEMS.anchor.cooldown;
    toast('시간 닻을 놓았어요. 3초 뒤 이 자리로 돌아와요!');
    updatePracticeActions(now);
  }
  function activateSwap() {
    const ready = checkSpecialReady('swap');
    if (!ready) return;
    const { player, now } = ready;
    const target = [...players.values()]
      .filter(other => other.alive && other.bot && !other.stationary)
      .sort((a, b) => Math.hypot(a.x - player.x, a.y - player.y) - Math.hypot(b.x - player.x, b.y - player.y))[0];
    if (!target || Math.hypot(target.x - player.x, target.y - player.y) > 260) {
      toast('자리를 바꿀 봇이 가까이 없어요.');
      return;
    }
    if ((player.tagger && overlapsObstacle(target.x, target.y)) || (target.tagger && overlapsObstacle(player.x, player.y))) {
      toast('장애물 안으로 술래를 옮길 수 없어요.');
      return;
    }
    const playerSpot = { x:player.x, y:player.y };
    player.x = player.tx = player.gx = target.x;
    player.y = player.ty = player.gy = target.y;
    target.x = target.tx = target.gx = playerSpot.x;
    target.y = target.ty = target.gy = playerSpot.y;
    player.vx = player.vy = target.vx = target.vy = 0;
    specialCooldownUntil = now + SPECIAL_ITEMS.swap.cooldown;
    toast(`${target.name}님과 자리를 맞바꿨어요!`);
    updatePracticeActions(now);
  }
  function activateSpecialItem(item) {
    if (practicePaused) return;
    if (!practiceMode) { useOnlineSpecial(item); return; }
    const actions = {
      shield:activateShield, punch:launchPracticePunch,
      boomerang:() => launchPracticeProjectile('boomerang'), blink:activateBlink,
      ice:() => launchPracticeProjectile('ice'), smoke:activateSmoke,
      decoy:activateDecoy, gust:activateGust, thunder:activateThunder,
      spring:activateSpringTrap, gravity:launchGravityOrb, phase:activatePhase,
      haste:activateHaste, anchor:activateAnchor, swap:activateSwap
    };
    const previousCooldown = specialCooldownUntil;
    actions[item]?.();
    if (specialCooldownUntil > previousCooldown) gameAudio.effect('skill');
  }
  function updatePracticeEffects(time) {
    practiceTraps = practiceTraps.filter(trap => trap.expiresAt > time);
    practiceFields = practiceFields.filter(field => field.expiresAt > time);
    if (practiceDecoy?.expiresAt <= time) practiceDecoy = null;
    if (practiceAnchor && practiceAnchor.returnAt <= time) {
      const player = players.get(myId);
      if (player?.alive) {
        player.x = player.tx = player.gx = practiceAnchor.x;
        player.y = player.ty = player.gy = practiceAnchor.y;
        player.vx = player.vy = 0;
        practiceTagAllowedAt = Math.max(practiceTagAllowedAt, time + 350);
        toast('시간 닻이 발동해 원래 자리로 돌아왔어요!');
      }
      practiceAnchor = null;
    }
    for (let index = practiceTraps.length - 1; index >= 0; index--) {
      const trap = practiceTraps[index];
      const target = [...players.values()].find(bot => bot.alive && bot.bot && Math.hypot(bot.x - trap.x, bot.y - trap.y) < 24);
      if (!target) continue;
      if (trap.kind === 'spring') {
        const dx = target.x - trap.x, dy = target.y - trap.y, distance = Math.hypot(dx, dy) || 1;
        target.gx = Math.max(35, Math.min(765, target.x + dx / distance * 145));
        target.gy = Math.max(45, Math.min(435, target.y + dy / distance * 145));
        target.frozenUntil = Math.max(target.frozenUntil || 0, time + 650);
        target.nextThinkAt = time + 700;
        toast(`${target.name}님이 용수철 덫에 걸렸어요!`);
      }
      practiceTraps.splice(index, 1);
    }
  }
  function eliminatePracticePlayer(player, time, reason = '잡혀') {
    if (!player.alive) return;
    if (player.id === myId && hasGamePower('invincible')) {
      toast('관리자 보호가 공격을 막았어요!');
      return;
    }
    const wasTagger = player.tagger;
    player.alive = false;
    player.tagger = false;
    nextTurnAt = Date.now() + TURN_MS;
    toast(reason === '주먹에 맞아' ? `${player.name}님이 주먹에 맞아 탈락했어요!` : `${player.name}님이 잡혀 탈락했어요!`);
    if (player.id === myId) { clearMovementInputs(); status('잡혔어요! 관전 중입니다.'); }
    const remaining = [...players.values()].filter(item => item.alive);
    if (wasTagger && remaining.length > 1) {
      const nextTagger = remaining[Math.floor(Math.random() * remaining.length)];
      nextTagger.tagger = true;
      movePracticeOutsideObstacles(nextTagger);
      nextTagger.gx = nextTagger.x;
      nextTagger.gy = nextTagger.y;
      nextTagger.plannedTagger = undefined;
      practiceTurnAt = time + TURN_MS;
      practiceTagAllowedAt = time + 1000;
      toast(`${nextTagger.name}님이 새 술래예요!`);
    }
    updatePlayerCount();
    if (player.id === myId && practiceMode && !trainingMode) {
      gameOver = true;
      winnerId = null;
      clearMovementInputs();
      status(`${practiceRoundStage}단계에서 탈락했어요. 다시 도전할 수 있어요.`);
      updateResultPanel();
      return;
    }
    if (remaining.length === 1) {
      gameOver = true;
      winnerId = remaining[0].id;
      clearMovementInputs();
      status(`${remaining[0].name}님이 마지막 생존자로 승리했어요!`);
      if (winnerId === myId) grantPracticeWin();
      setTimeout(() => toast(`${remaining[0].name}님 승리!`), 450);
      updateResultPanel();
    }
  }
  function updatePracticeProjectiles(time, dt) {
    for (let index = practiceProjectiles.length - 1; index >= 0; index--) {
      const projectile = practiceProjectiles[index];
      projectile.age = (projectile.age || 0) + dt;
      if (projectile.kind === 'boomerang') {
        if (!projectile.returning && !projectile.targetId && projectile.age >= .78) {
          projectile.returning = true;
          projectile.targetId = null;
        }
      }
      if (projectile.targetId && !projectile.returning) {
        let target = players.get(projectile.targetId);
        if (!target?.alive || target.id === projectile.ownerId) {
          target = [...players.values()].filter(other => other.alive && other.id !== projectile.ownerId)
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
      if (projectile.returning) {
        const owner = players.get(projectile.ownerId);
        if (owner) {
          const dx = owner.x - projectile.x, dy = owner.y - projectile.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 18) { practiceProjectiles.splice(index, 1); continue; }
          projectile.vx = dx / distance * 560;
          projectile.vy = dy / distance * 560;
        }
      }
      const oldX = projectile.x, oldY = projectile.y;
      projectile.x += projectile.vx * dt;
      projectile.y += projectile.vy * dt;
      projectile.life -= dt;
      let remove = projectile.life <= 0 || projectile.x < 0 || projectile.x > 800 || projectile.y < 0 || projectile.y > 480;
      if (!remove) for (const target of players.values()) {
        if (!target.alive || target.id === projectile.ownerId) continue;
        const dx = projectile.x - oldX, dy = projectile.y - oldY;
        const lengthSquared = dx * dx + dy * dy;
        const projection = lengthSquared ? Math.max(0, Math.min(1, ((target.x - oldX) * dx + (target.y - oldY) * dy) / lengthSquared)) : 0;
        const distance = Math.hypot(target.x - (oldX + dx * projection), target.y - (oldY + dy * projection));
        if (distance > 20) continue;
        remove = true;
        if (target.id === myId && hasGamePower('invincible')) {
          toast('관리자 보호가 공격을 막았어요!');
        } else if (projectile.kind === 'training') {
          if (shieldActiveUntil > time || shieldGraceUntil > time) {
            shieldActiveUntil = 0;
            shieldGraceUntil = time + 700;
            toast('방패로 훈련봇의 공격을 막았어요!');
          } else {
            trainingIncomingHits++;
            toast('공격이 닿았어요. 다음 공격은 Q 방패로 막아 보세요.');
          }
        } else if (projectile.kind === 'gravity') {
          createGravityField(projectile.x, projectile.y, time);
          projectile.fieldCreated = true;
          toast('중력장이 생겼어요. 주변 봇이 끌려가요!');
        } else if (projectile.kind === 'ice') {
          target.frozenUntil = time + 1300;
          target.slowedUntil = time + 3900;
          toast(target.stationary ? '훈련봇이 얼었어요!' : `${target.name}님이 빙결탄에 맞아 느려졌어요!`);
        } else if (trainingMode && target.stationary) {
          target.alive = false;
          practiceDummyDownUntil = time + 900;
          trainingAttackAt = time + 1800;
          toast('명중! 훈련봇이 잠시 후 다시 일어나요.');
          updatePlayerCount();
        } else {
          eliminatePracticePlayer(target, time, '주먹에 맞아');
        }
        break;
      }
      if (remove) {
        if (projectile.kind === 'gravity' && !projectile.fieldCreated) {
          createGravityField(projectile.x, projectile.y, time);
          toast('중력장이 생겼어요. 주변 봇이 끌려가요!');
        }
        practiceProjectiles.splice(index, 1);
      }
    }
  }
  function createGravityField(x, y, time) {
    practiceFields.push({ x, y, radius:145, expiresAt:time + 3600 });
  }
  function moveTrainingRoom(time, dt) {
    const dummy = players.get('practice-dummy');
    const me = players.get(myId);
    if (dummy && !dummy.alive && time >= practiceDummyDownUntil) {
      dummy.alive = true;
      dummy.x = dummy.tx = dummy.gx = 520;
      dummy.y = dummy.ty = dummy.gy = 240;
      dummy.vx = dummy.vy = 0;
      toast('훈련봇이 다시 일어났어요.');
      updatePlayerCount();
    }
    if (dummy?.alive && dummy.frozenUntil <= time && me?.alive && me.hiddenUntil <= time && time >= trainingAttackAt) {
      const angle = Math.atan2(me.y - dummy.y, me.x - dummy.x);
      const speed = 250;
      practiceProjectiles.push({
        kind:'training', ownerId:dummy.id, x:dummy.x, y:dummy.y - 10,
        vx:Math.cos(angle) * speed, vy:Math.sin(angle) * speed, life:2.7
      });
      trainingAttackAt = time + 4800;
      toast('훈련봇의 공격! Q로 방패를 켜 보세요.');
    }
    updatePracticeProjectiles(time, dt);
  }
  function movePracticeBots(time, dt) {
    if (gameOver) return;
    if (trainingMode) { moveTrainingRoom(time, dt); return; }
    const all = [...players.values()];
    let alive = all.filter(player => player.alive);
    if (all.length < 2) return;
    if (alive.length <= 1) {
      gameOver = true;
      winnerId = alive[0]?.id || null;
      clearMovementInputs();
      const winner = players.get(winnerId);
      status(winner ? `${winner.name}님이 마지막 생존자로 승리했어요!` : '게임이 끝났어요.');
      toast(winner ? `${winner.name}님 승리!` : '게임 종료');
      if (winnerId === myId) grantPracticeWin();
      updateResultPanel();
      return;
    }
    const bots = alive.filter(player => player.bot);
    const currentTaggerForPlan = alive.find(player => player.tagger && player.hiddenUntil <= time);
    for (const bot of bots) {
      if (bot.frozenUntil > time) continue;
      const isChaser = bot.tagger;
      const style = bot.aiStyle;
      const roleChanged = bot.plannedTagger !== isChaser;
      if (!roleChanged && time < bot.nextThinkAt) continue;
      bot.plannedTagger = isChaser;
      bot.nextThinkAt = time + style.reaction * (.82 + Math.random() * .36);
      const targets = alive.filter(player => player.id !== (isChaser ? bot.id : currentTaggerForPlan?.id) && player.hiddenUntil <= time);
      let target = isChaser
        ? targets.sort((a, b) => chaseCost(bot, a) - chaseCost(bot, b))[0]
        : currentTaggerForPlan;
      if (isChaser && practiceDecoy && practiceDecoy.expiresAt > time) {
        const nearest = target ? Math.hypot(bot.x - target.x, bot.y - target.y) : Infinity;
        const decoyDistance = Math.hypot(bot.x - practiceDecoy.x, bot.y - practiceDecoy.y);
        if (decoyDistance < nearest + 105) target = { id:'practice-decoy', ...practiceDecoy, vx:0, vy:0, tagger:false };
      }
      if (isChaser && targets.length > 1 && Math.random() < style.switchChance) target = targets[1];
      if (!target) continue;
      if (isChaser) {
        // Mix interception with a small personal feint so bots do not trace the same line.
        const predicted = predictPlayer(target, .16 + Math.random() * .3);
        const angle = Math.random() * Math.PI * 2;
        const offset = Math.random() * style.aimVariance;
        const waypoint = findTaggerWaypoint(bot, predicted.x + Math.cos(angle) * offset, predicted.y + Math.sin(angle) * offset);
        bot.gx = waypoint.x;
        bot.gy = waypoint.y;
      } else {
        const escape = chooseEscapePoint(bot, target, alive, time, style);
        bot.gx = escape.x;
        bot.gy = escape.y;
      }
      bot.goalAt = bot.nextThinkAt;
    }
    for (const bot of bots) {
      const field = practiceFields.find(active => Math.hypot(bot.x - active.x, bot.y - active.y) < active.radius);
      if (field && bot.frozenUntil <= time) {
        bot.gx = field.x;
        bot.gy = field.y;
        bot.nextThinkAt = Math.max(bot.nextThinkAt, time + 260);
      }
    }
    for (const bot of bots) {
      if (bot.frozenUntil > time) { bot.vx = 0; bot.vy = 0; continue; }
      const oldX = bot.x, oldY = bot.y;
      let dx = bot.gx - bot.x, dy = bot.gy - bot.y;
      const length = Math.hypot(dx, dy) || 1;
      const stagePace = 1 + Math.min(.65, (practiceRoundStage - 1) * .035);
      const slowFactor = bot.slowedUntil > time ? .42 : 1;
      const botSpeed = (bot.tagger ? TAGGER_SPEED : RUNNER_SPEED) * stagePace * slowFactor;
      const nextX = Math.max(24, Math.min(776, bot.x + dx / length * Math.min(length, botSpeed * dt)));
      const nextY = Math.max(34, Math.min(446, bot.y + dy / length * Math.min(length, botSpeed * dt)));
      if (!bot.tagger) { bot.x = nextX; bot.y = nextY; }
      else {
        if (!overlapsObstacle(nextX, bot.y)) bot.x = nextX;
        if (!overlapsObstacle(bot.x, nextY)) bot.y = nextY;
      }
      bot.vx = dt > 0 ? (bot.x - oldX) / dt : 0;
      bot.vy = dt > 0 ? (bot.y - oldY) / dt : 0;
      if (!bot.tagger) countPracticeObstaclePasses(bot, oldX, oldY, bot.x, bot.y);
    }
    updatePracticeProjectiles(time, dt);
    if (gameOver) return;
    alive = [...players.values()].filter(player => player.alive);
    let tagger = alive.find(player => player.tagger);
    if (tagger && alive.length > 1 && time >= practiceTurnAt) {
      const current = alive.findIndex(player => player.tagger);
      alive.forEach(player => { player.tagger = false; });
      alive[(current + 1) % alive.length].tagger = true;
      tagger = alive[(current + 1) % alive.length];
      movePracticeOutsideObstacles(tagger);
      tagger.gx = tagger.x;
      tagger.gy = tagger.y;
      tagger.vx = 0;
      tagger.vy = 0;
      tagger.obstacleInside = OBSTACLES.map(() => false);
      tagger.obstacleEntered = OBSTACLES.map(() => false);
      practiceTurnAt = time + TURN_MS;
      nextTurnAt = Date.now() + TURN_MS;
      toast(`${tagger.name}님이 술래예요!`);
    }
    const currentTagger = [...players.values()].find(player => player.alive && player.tagger && player.hiddenUntil <= time);
    if (currentTagger && time >= practiceTagAllowedAt) for (const player of players.values()) {
      if (player.id === myId && hasGamePower('invincible')) continue;
      if (player.alive && player.id !== currentTagger.id && Math.hypot(player.x - currentTagger.x, player.y - currentTagger.y) < 26) {
        if (player.id === myId && (shieldActiveUntil > time || shieldGraceUntil > time)) {
          if (shieldActiveUntil > time) {
            shieldActiveUntil = 0;
            shieldGraceUntil = time + 900;
            toast('방패로 술래의 공격을 막았어요!');
          }
          practiceTagAllowedAt = time + 500;
          continue;
        }
        practiceTagAllowedAt = time + 900;
        nextTurnAt = Date.now() + TURN_MS;
        eliminatePracticePlayer(player, time);
        break;
      }
    }
  }

  function chaseCost(chaser, target) {
    const predicted = predictPlayer(target, .25);
    const route = findTaggerWaypoint(chaser, predicted.x, predicted.y);
    const firstLeg = Math.hypot(route.x - chaser.x, route.y - chaser.y);
    // Prefer isolated survivors when two targets are almost equally close.
    const nearbyBackup = [...players.values()].filter(player => player.alive && player.id !== target.id && player.id !== chaser.id)
      .some(player => Math.hypot(player.x - target.x, player.y - target.y) < 75);
    return firstLeg + (nearbyBackup ? 35 : 0);
  }

  function predictPlayer(player, seconds) {
    let vx = player.vx || 0, vy = player.vy || 0;
    const speed = Math.hypot(vx, vy);
    const cap = player.tagger ? TAGGER_SPEED : RUNNER_SPEED;
    if (speed > cap) { vx = vx / speed * cap; vy = vy / speed * cap; }
    return { x:Math.max(24, Math.min(776, player.x + vx * seconds)), y:Math.max(34, Math.min(446, player.y + vy * seconds)) };
  }

  function chooseEscapePoint(bot, chaser, alive, time, style) {
    const threat = predictPlayer(chaser, .45);
    const candidates = [];
    const baseAngle = Math.atan2(bot.y - threat.y, bot.x - threat.x);
    for (let i = 0; i < 28; i++) {
      const angle = baseAngle + (i - 13.5) * (Math.PI * 2 / 28) + (Math.random() - .5) * style.randomness;
      const distance = 105 + Math.random() * 145;
      const x = Math.max(42, Math.min(758, bot.x + Math.cos(angle) * distance));
      const y = Math.max(52, Math.min(428, bot.y + Math.sin(angle) * distance));
      const threatDistance = Math.hypot(x - threat.x, y - threat.y);
      const edgeDistance = Math.min(x - 24, 776 - x, y - 34, 446 - y);
      const crowdDistance = Math.min(...alive.filter(other => other.id !== bot.id && other.id !== chaser.id)
        .map(other => Math.hypot(x - other.x, y - other.y)), 180);
      const angleChange = Math.abs(Math.atan2(Math.sin(angle - (bot.escapeAngle || baseAngle)), Math.cos(angle - (bot.escapeAngle || baseAngle))));
      const score = threatDistance * style.safety + Math.min(edgeDistance, 120) * .4 +
        Math.min(crowdDistance, 100) * .12 - angleChange * (7 + style.randomness * 8) +
        (Math.random() - .5) * style.randomness * 65;
      candidates.push({ x, y, angle, score });
    }
    candidates.sort((a, b) => b.score - a.score);
    const pool = candidates.slice(0, 4);
    const pick = Math.random() < style.randomness ? Math.floor(Math.random() * pool.length) : 0;
    const best = pool[pick] || { x:bot.x, y:bot.y, angle:baseAngle };
    bot.escapeAngle = best.angle;
    return best;
  }

  // Breadth-first path on a coarse navigation grid. The tagger is blocked by walls,
  // so this gives it a real route around them instead of pushing into the obstacle.
  function findTaggerWaypoint(player, targetX, targetY) {
    const cell = (x, y) => ({ c:Math.max(0, Math.min(37, Math.round((x - 30) / 20))), r:Math.max(0, Math.min(20, Math.round((y - 40) / 20))) });
    const point = (c, r) => ({ x:30 + c * 20, y:40 + r * 20 });
    const id = (c, r) => r * 38 + c;
    const blocked = (c, r) => { const p = point(c, r); return overlapsObstacle(p.x, p.y); };
    const nearestOpen = (origin) => {
      let result = origin, distance = Infinity;
      for (let r = 0; r <= 20; r++) for (let c = 0; c <= 37; c++) {
        if (blocked(c, r)) continue;
        const d = (c - origin.c) ** 2 + (r - origin.r) ** 2;
        if (d < distance) { distance = d; result = { c, r }; }
      }
      return result;
    };
    const start = nearestOpen(cell(player.x, player.y));
    const goal = nearestOpen(cell(targetX, targetY));
    if (start.c === goal.c && start.r === goal.r) return { x:targetX, y:targetY };
    const queue = [id(start.c, start.r)];
    const previous = new Int16Array(38 * 21); previous.fill(-2);
    previous[queue[0]] = -1;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];
    let found = -1;
    for (let head = 0; head < queue.length && found < 0; head++) {
      const current = queue[head], c = current % 38, r = Math.floor(current / 38);
      for (const [dc, dr] of dirs) {
        const nc = c + dc, nr = r + dr;
        if (nc < 0 || nc > 37 || nr < 0 || nr > 20 || blocked(nc, nr)) continue;
        if (dc && dr && (blocked(c + dc, r) || blocked(c, r + dr))) continue;
        const next = id(nc, nr);
        if (previous[next] !== -2) continue;
        previous[next] = current;
        if (nc === goal.c && nr === goal.r) { found = next; break; }
        queue.push(next);
      }
    }
    if (found < 0) return point(start.c, start.r);
    const path = [];
    for (let step = found; step !== -1; step = previous[step]) path.push(step);
    path.reverse();
    // Aim several cells ahead to keep the chase smooth instead of stopping at
    // every tiny grid node while replanning.
    const segmentIsClear = (x1, y1, x2, y2) => {
      const length = Math.hypot(x2 - x1, y2 - y1);
      const steps = Math.max(1, Math.ceil(length / 4));
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        if (overlapsObstacle(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t)) return false;
      }
      return true;
    };
    let lookAheadIndex = Math.min(4, path.length - 1);
    while (lookAheadIndex > 0) {
      const destination = point(path[lookAheadIndex] % 38, Math.floor(path[lookAheadIndex] / 38));
      if (segmentIsClear(player.x, player.y, destination.x, destination.y)) break;
      lookAheadIndex--;
    }
    const lookAhead = path[lookAheadIndex];
    return point(lookAhead % 38, Math.floor(lookAhead / 38));
  }

  function overlapsObstacle(x, y) {
    const radius = 10;
    return [...activeObstacleIndexes].some(index => {
      const rect = OBSTACLES[index];
      return x + radius > rect.x && x - radius < rect.x + rect.width &&
        y + radius > rect.y && y - radius < rect.y + rect.height;
    });
  }
  function touchesObstacle(x, y, rect) {
    return x + 10 > rect.x && x - 10 < rect.x + rect.width && y + 10 > rect.y && y - 10 < rect.y + rect.height;
  }
  function segmentTouchesObstacle(x1, y1, x2, y2, rect) {
    const steps = Math.max(1, Math.ceil(Math.hypot(x2 - x1, y2 - y1) / 4));
    for (let step = 0; step <= steps; step++) {
      const t = step / steps;
      if (touchesObstacle(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, rect)) return true;
    }
    return false;
  }
  function countPracticeObstaclePasses(player, oldX, oldY, newX, newY) {
    if (!practiceMode || player.tagger || gameOver) return;
    for (let index = 0; index < OBSTACLES.length; index++) {
      if (!activeObstacleIndexes.has(index)) continue;
      const rect = OBSTACLES[index];
      const wasInside = player.obstacleInside[index];
      const isInside = touchesObstacle(newX, newY, rect);
      const touched = segmentTouchesObstacle(oldX, oldY, newX, newY, rect);
      if (!player.obstacleEntered[index] && !wasInside && touched) player.obstacleEntered[index] = true;
      if (player.obstacleEntered[index] && wasInside && !isInside) {
        player.obstacleEntered[index] = false;
        obstaclePassCounts[index]++;
      } else if (player.obstacleEntered[index] && !wasInside && !isInside && touched) {
        player.obstacleEntered[index] = false;
        obstaclePassCounts[index]++;
      }
      player.obstacleInside[index] = isInside;
      if (obstaclePassCounts[index] >= OBSTACLE_PASS_LIMIT) triggerObstacleExplosion([index]);
    }
  }
  function triggerObstacleExplosion(input) {
    const indexes = Array.isArray(input) ? input : Array.isArray(input?.indexes) ? input.indexes : [];
    const newlyGone = indexes.filter(index => Number.isInteger(index) && activeObstacleIndexes.has(index));
    if (!newlyGone.length) return;
    const now = performance.now();
    for (const index of newlyGone) {
      const rect = OBSTACLES[index];
      explosionBursts.push({ x:rect.x + rect.width / 2, y:rect.y + rect.height / 2, startedAt:now });
      activeObstacleIndexes.delete(index);
    }
    obstaclesGone = activeObstacleIndexes.size === 0;
    toast(newlyGone.map(index => `장애물 ${index + 1}번`).join(', ') + '이 10회 통과되어 폭발했어요!');
  }
  function resetPracticeObstacles() {
    obstaclePassCounts = OBSTACLES.map(() => 0);
    obstaclesGone = false;
    activeObstacleIndexes = new Set(OBSTACLES.map((_, index) => index));
    explosionBursts.length = 0;
  }
  function safePracticeSpawn(from = null) {
    for (let attempt = 0; attempt < 100; attempt++) {
      const point = { x:75 + Math.random() * 650, y:65 + Math.random() * 350 };
      const farEnough = !from || Math.hypot(point.x - from.x, point.y - from.y) >= 150;
      if (!overlapsObstacle(point.x, point.y) && farEnough) return point;
    }
    return { x:400, y:240 };
  }
  function movePracticeOutsideObstacles(player) {
    for (const obstacle of OBSTACLES) {
      if (!overlapsObstacle(player.x, player.y) ||
          player.x + 10 <= obstacle.x || player.x - 10 >= obstacle.x + obstacle.width ||
          player.y + 10 <= obstacle.y || player.y - 10 >= obstacle.y + obstacle.height) continue;
      const options = [
        { x:obstacle.x - 11, y:player.y },
        { x:obstacle.x + obstacle.width + 11, y:player.y },
        { x:player.x, y:obstacle.y - 11 },
        { x:player.x, y:obstacle.y + obstacle.height + 11 }
      ].map(point => ({ x:Math.max(10, Math.min(790, point.x)), y:Math.max(10, Math.min(470, point.y)) }))
        .filter(point => !overlapsObstacle(point.x, point.y))
        .sort((a, b) => Math.hypot(a.x - player.x, a.y - player.y) - Math.hypot(b.x - player.x, b.y - player.y));
      if (options[0]) { player.x = options[0].x; player.y = options[0].y; }
    }
  }

  function drawStick(player, time) {
    const moving = Math.hypot(player.vx || 0, player.vy || 0) > 2;
    player.phase += moving ? .2 : .06;
    const bob = moving ? Math.abs(Math.sin(player.phase * 2)) * 2.2 : Math.sin(time / 450 + player.phase) * .6;
    ctx.save();
    if (!player.alive) ctx.globalAlpha = .32;
    if (player.hiddenUntil > time) ctx.globalAlpha *= .24;
    ctx.translate(player.x, player.y + bob);
    ctx.fillStyle = '#24233512'; ctx.beginPath(); ctx.ellipse(0, 22, 11, 3.5, 0, 0, Math.PI * 2); ctx.fill();
    if (player.tagger) {
      ctx.strokeStyle = '#f1b84899'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, -3, 23 + Math.sin(time / 180) * 2, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#e4a43d'; ctx.font = '14px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('✦', 0, -30);
    }
    const visibleShieldUntil = player.id === myId && practiceMode ? shieldActiveUntil : player.shieldUntil;
    if (visibleShieldUntil > time) {
      ctx.strokeStyle = '#69bdf0c9'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(0, -2, 21 + Math.sin(time / 90) * 1.5, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#69bdf022'; ctx.fill();
    }
    if (player.frozenUntil > time) {
      ctx.strokeStyle = '#82d9ffe0'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(0, -2, 17 + Math.sin(time / 100) * 1.5, 0, Math.PI * 2); ctx.stroke();
    }
    if (player.speedBoostUntil > time) {
      ctx.strokeStyle = '#ffd15c'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(0, -2, 21 + Math.sin(time / 80) * 2, 0, Math.PI * 2); ctx.stroke();
    }
    if (player.anchor && player.anchor.returnAt > time) {
      ctx.strokeStyle = '#e4a43d'; ctx.lineWidth = 2; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.arc(player.anchor.x - player.x, player.anchor.y - player.y - 2, 18, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
    }
    if (player.hiddenUntil > time) {
      ctx.fillStyle = '#9b90b866'; ctx.beginPath(); ctx.arc(0, 7, 25 + Math.sin(time / 90) * 2, 0, Math.PI * 2); ctx.fill();
    }
    const stride = moving ? Math.sin(player.phase) * 5 : 0;
    ctx.strokeStyle = player.color; ctx.lineWidth = player.id === myId ? 3.2 : 2.7; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.arc(0, -10, 6, 0, Math.PI * 2);
    ctx.moveTo(0, -3); ctx.lineTo(0, 10);
    ctx.moveTo(0, 0); ctx.lineTo(-7, 5 + Math.sin(player.phase) * 1.2);
    ctx.moveTo(0, 0); ctx.lineTo(7, 5 - Math.sin(player.phase) * 1.2);
    ctx.moveTo(0, 10); ctx.lineTo(-5 + stride, 19);
    ctx.moveTo(0, 10); ctx.lineTo(5 - stride, 19); ctx.stroke();
    const name = displayPlayerName(player.name);
    const label = player.alive ? name : `${name} · ${language === 'en' ? 'Eliminated' : '탈락'}`;
    ctx.font = '12px system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.lineWidth = 3; ctx.strokeStyle = '#fff'; ctx.strokeText(label, 0, 37);
    ctx.fillStyle = '#454255'; ctx.fillText(label, 0, 37);
    if (player.id === myId) { ctx.fillStyle = '#7656e8'; ctx.font = '10px sans-serif'; ctx.fillText(language === 'en' ? 'Me' : '나', 0, 50); }
    ctx.restore();
  }

  function frame(timestamp) {
    gameAudio.paused = (practiceMode && practicePaused) || gameOver;
    if (practicePaused && practiceMode) timestamp = practicePauseStartedAt;
    const dt = Math.min((timestamp - (lastFrameAt || timestamp)) / 1000, .05);
    lastFrameAt = timestamp;
    const me = players.get(myId);
    const shopOpen = !$('shopOverlay').hidden || (practicePaused && practiceMode);
    if (practiceMode && !shopOpen) updatePracticeEffects(timestamp);
    const joystickMoving = Math.hypot(joystickVector.x, joystickVector.y) > 0;
    if (me?.alive && !gameOver && (held.size || joystickMoving) && !shopOpen && me.frozenUntil <= timestamp) {
      const oldX = me.x, oldY = me.y;
      let dx = joystickVector.x + Number(held.has('right')) - Number(held.has('left'));
      let dy = joystickVector.y + Number(held.has('down')) - Number(held.has('up'));
      const magnitude = Math.hypot(dx, dy) || 1;
      if (magnitude > 1) { dx /= magnitude; dy /= magnitude; }
      const boost = me.speedBoostUntil > timestamp ? 1.65 : 1;
      const slow = me.slowedUntil > timestamp ? .42 : 1;
      const adminSpeed = hasGamePower('speed') ? 2.5 : 1;
      const moveSpeed = (me.tagger ? TAGGER_SPEED : RUNNER_SPEED) * boost * slow * adminSpeed;
      const nextX = Math.max(24, Math.min(776, me.x + dx * moveSpeed * dt));
      const nextY = Math.max(34, Math.min(446, me.y + dy * moveSpeed * dt));
      if (!me.tagger || me.phaseUntil > timestamp) { me.x = nextX; me.y = nextY; }
      else {
        if (!overlapsObstacle(nextX, me.y)) me.x = nextX;
        if (!overlapsObstacle(me.x, nextY)) me.y = nextY;
      }
      if (dx || dy) me.angle = Math.atan2(dy, dx);
      me.vx = dx * moveSpeed;
      me.vy = dy * moveSpeed;
      if (practiceMode && !me.tagger) countPracticeObstaclePasses(me, oldX, oldY, me.x, me.y);
    } else if (me) { me.vx = 0; me.vy = 0; }
    if (!practiceMode && me?.alive && !gameOver) {
      const blend = 1 - Math.exp(-18 * dt);
      const correctionX = me.correctionX * blend, correctionY = me.correctionY * blend;
      me.x = Math.max(10, Math.min(790, me.x + correctionX));
      me.y = Math.max(10, Math.min(470, me.y + correctionY));
      me.correctionX -= correctionX; me.correctionY -= correctionY;
      // Send the latest position, including a stop, without queuing old movement.
      if (socket?.connected && timestamp - lastMoveSentAt >= 50) {
        const move = movementHistory.record(me.x, me.y);
        socket.volatile.emit('move', { ...move, angle:me.angle, snapVersion:me.snapVersion });
        lastMoveSentAt = timestamp;
      }
    }
    if (practiceMode && !shopOpen) movePracticeBots(timestamp, dt);
    ctx.clearRect(0, 0, 800, 480);
    ctx.fillStyle = '#fbfaff'; ctx.fillRect(0, 0, 800, 480);
    ctx.fillStyle = '#efedf5';
    for (let x = 20; x < 800; x += 40) for (let y = 20; y < 480; y += 40) { ctx.beginPath(); ctx.arc(x, y, 1.2, 0, Math.PI * 2); ctx.fill(); }
    for (const index of activeObstacleIndexes) {
      const obstacle = OBSTACLES[index];
      ctx.fillStyle = '#171620';
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      ctx.fillStyle = '#ffffffcc'; ctx.font = '10px ui-monospace,monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(`${obstaclePassCounts[index]}/${OBSTACLE_PASS_LIMIT}`, obstacle.x + obstacle.width / 2, obstacle.y + obstacle.height / 2);
      ctx.textBaseline = 'alphabetic';
    }
    for (const trap of (practiceMode ? practiceTraps : onlineTraps)) {
      ctx.fillStyle = trap.kind === 'spring' ? '#e4a43d' : '#69bdf0';
      ctx.beginPath(); ctx.arc(trap.x, trap.y, 10, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(trap.kind === 'spring' ? '↟' : '●', trap.x, trap.y + .5); ctx.textBaseline = 'alphabetic';
    }
    for (const field of (practiceMode ? practiceFields : onlineFields)) {
      const alpha = Math.max(.08, Math.min(.22, (field.expiresAt - timestamp) / 18000));
      ctx.fillStyle = `rgba(118,86,232,${alpha})`; ctx.strokeStyle = '#7656e877'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(field.x, field.y, field.radius, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
    const visibleDecoys = practiceMode ? (practiceDecoy ? [practiceDecoy] : []) : onlineDecoys;
    for (const decoy of visibleDecoys) {
      if (decoy.expiresAt <= timestamp) continue;
      const owner = players.get(decoy.ownerId);
      ctx.save(); ctx.globalAlpha = .62; ctx.translate(decoy.x, decoy.y);
      if (Number.isFinite(decoy.angle)) ctx.rotate(decoy.angle);
      ctx.strokeStyle = owner?.color || '#9b78ef'; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.setLineDash([4, 3]); ctx.beginPath(); ctx.arc(0, -10, 6, 0, Math.PI * 2);
      ctx.moveTo(0, -3); ctx.lineTo(0, 10); ctx.moveTo(0, 0); ctx.lineTo(-7, 5); ctx.moveTo(0, 0); ctx.lineTo(7, 5);
      ctx.moveTo(0, 10); ctx.lineTo(-5, 19); ctx.moveTo(0, 10); ctx.lineTo(5, 19); ctx.stroke(); ctx.setLineDash([]);
      ctx.strokeStyle = '#9b78ef'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(0, 2, 22 + Math.sin(timestamp / 110) * 2, 0, Math.PI * 2); ctx.stroke();
      ctx.rotate(Number.isFinite(decoy.angle) ? -decoy.angle : 0);
      ctx.fillStyle = '#454255'; ctx.font = '11px system-ui,sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(decoy.name ? displayPlayerName(decoy.name) : language === 'en' ? 'Decoy' : '분신', 0, 37); ctx.restore();
    }
    if (practiceAnchor) {
      ctx.strokeStyle = '#e4a43d'; ctx.lineWidth = 2; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.arc(practiceAnchor.x, practiceAnchor.y, 18, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
    }
    for (let i = explosionBursts.length - 1; i >= 0; i--) {
      const burst = explosionBursts[i];
      const progress = (timestamp - burst.startedAt) / 720;
      if (progress >= 1) { explosionBursts.splice(i, 1); continue; }
      ctx.save();
      ctx.globalAlpha = 1 - progress;
      ctx.strokeStyle = '#f09c38'; ctx.lineWidth = 4 - progress * 2;
      ctx.beginPath(); ctx.arc(burst.x, burst.y, 8 + progress * 48, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#ffd15c'; ctx.beginPath(); ctx.arc(burst.x, burst.y, 4 + (1 - progress) * 7, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
    for (const projectile of (practiceMode ? practiceProjectiles : onlineProjectiles)) {
      const lead = practiceMode ? 0 : Math.min(.09, Math.max(0, (timestamp - (projectile.receivedAt || timestamp)) / 1000));
      const projectileX = projectile.x + (projectile.vx || 0) * lead;
      const projectileY = projectile.y + (projectile.vy || 0) * lead;
      const color = projectile.kind === 'training' ? '#f17e79' : projectile.kind === 'ice' ? '#63c9ef' : projectile.kind === 'boomerang' ? '#e4a43d' : projectile.kind === 'gravity' ? '#7656e8' : '#7656e8';
      const symbol = projectile.kind === 'training' ? '!' : projectile.kind === 'ice' ? '❄' : projectile.kind === 'boomerang' ? '↪' : projectile.kind === 'gravity' ? '◉' : '✊';
      ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(projectileX, projectileY, projectile.kind === 'training' ? 7 : 9, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(symbol, projectileX, projectileY + .5);
      ctx.textBaseline = 'alphabetic';
    }
    for (const player of players.values()) {
      if (player.id !== myId && !player.bot) {
        const oldX = player.x, oldY = player.y;
        const renderTime = networkClock.serverTime + Math.max(0, timestamp - networkClock.receivedAt) - 100;
        networkClock.renderTime = Math.max(networkClock.renderTime, renderTime);
        const point = player.snapshots.sample(networkClock.renderTime) || { x:player.tx, y:player.ty };
        const blend = 1 - Math.exp(-24 * dt);
        player.x += (point.x - player.x) * blend;
        player.y += (point.y - player.y) * blend;
        player.vx = dt > 0 ? (player.x - oldX) / dt : 0;
        player.vy = dt > 0 ? (player.y - oldY) / dt : 0;
      }
      drawStick(player, timestamp);
    }
    if (trainingMode) {
      const attackSeconds = Math.max(0, Math.ceil((trainingAttackAt - timestamp) / 1000));
      $('timer').textContent = `00:${String(attackSeconds).padStart(2, '0')}`;
      $('timer').previousElementSibling.textContent = '훈련봇 공격';
    } else {
      const turnSeconds = practiceMode
        ? Math.max(0, Math.ceil((practiceTurnAt - timestamp) / 1000))
        : nextTurnAt ? Math.max(0, Math.ceil((nextTurnAt - Date.now()) / 1000)) : 0;
      $('timer').textContent = turnSeconds ? `00:${String(turnSeconds).padStart(2, '0')}` : '--:--';
      $('timer').previousElementSibling.textContent = '다음 술래 교대';
    }
    // Cooldown labels do not need a DOM rewrite for every animation frame.
    if (timestamp - lastHudUpdateAt >= 100) {
      updatePracticeActions(timestamp);
      updatePracticePauseButton();
      lastHudUpdateAt = timestamp;
    }
    requestAnimationFrame(frame);
  }

  function updateSoundButton() {
    $('soundToggle').textContent = gameAudio.enabled ? '🔊' : '🔇';
    $('soundToggle').setAttribute('aria-pressed', String(gameAudio.enabled));
    $('soundToggle').setAttribute('aria-label', gameAudio.enabled ? (language === 'en' ? 'Mute sound' : '소리 끄기') : (language === 'en' ? 'Enable sound' : '소리 켜기'));
    $('soundToggle').title = $('soundToggle').getAttribute('aria-label');
  }
  $('soundToggle').addEventListener('click', () => { gameAudio.toggle(); updateSoundButton(); });
  document.addEventListener('pointerdown', event => {
    if (!event.target.closest('#soundToggle')) gameAudio.unlock();
  }, { capture:true, passive:true });
  document.addEventListener('keydown', event => { if (!event.repeat) gameAudio.unlock(); }, { capture:true });
  document.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (button && !button.disabled && button.id !== 'soundToggle') gameAudio.effect('click');
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) gameAudio.context?.suspend().catch(() => {});
    else if (gameAudio.context) gameAudio.unlock();
  });
  window.addEventListener('pagehide', () => { gameAudio.context?.suspend().catch(() => {}); });
  const entryLayoutObserver = new MutationObserver(syncEntryLayout);
  for (const menu of [$('joinOverlay'), $('matchOverlay')]) {
    entryLayoutObserver.observe(menu, { attributes:true, attributeFilter:['hidden'] });
    menu.addEventListener('click', scrollEntryMenu);
  }
  $('joinForm').addEventListener('focusin', () => requestAnimationFrame(keepEntryInputVisible));
  window.addEventListener('resize', syncEntryLayout);
  window.visualViewport?.addEventListener('resize', keepEntryInputVisible);
  installSocketClient();
  selectMode(selectedMode);
  setLanguage(language);
  $('deviceSetupOverlay').hidden = deviceModeChosen;
  updateDeviceControls();
  updatePracticePauseButton();
  restoreAccountSession();
  // Reconcile account changes after reconnects and in local practice without a socket.
  let accountRefreshBusy = false;
  setInterval(async () => {
    if (!accountProfile || document.hidden || accountRefreshBusy) return;
    const accountId = accountProfile.id;
    accountRefreshBusy = true;
    try {
      const result = await accountRequest('/api/account/profile');
      if (accountProfile?.id === accountId) applyAccountProfile(result.profile);
    } catch {} finally { accountRefreshBusy = false; }
  }, 10000);
  requestAnimationFrame(frame);
})();
