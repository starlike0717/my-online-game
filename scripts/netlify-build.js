'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const configuredServer = String(process.env.GAME_SERVER_URL || '').trim();

if (!configuredServer) {
  throw new Error('Set GAME_SERVER_URL to the public HTTPS URL of the game server before deploying to Netlify.');
}

let gameServerUrl;
try {
  const parsed = new URL(configuredServer);
  if (parsed.protocol !== 'https:') throw new Error('HTTPS is required.');
  gameServerUrl = parsed.origin;
} catch (error) {
  throw new Error(`GAME_SERVER_URL must be a valid HTTPS origin: ${error.message}`);
}

fs.rmSync(output, { recursive:true, force:true });
fs.mkdirSync(output, { recursive:true });
for (const file of ['index.html', 'game.js', 'style.css']) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}
fs.writeFileSync(
  path.join(output, 'game-config.js'),
  `window.GAME_SERVER_URL = ${JSON.stringify(gameServerUrl)};\n`,
  'utf8'
);

console.log(`Prepared static Netlify site for ${gameServerUrl}`);
