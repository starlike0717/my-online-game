#!/bin/zsh
cd "$(dirname "$0")" || exit 1
if ! command -v node >/dev/null 2>&1; then
  print 'Node.js 22 이상을 설치한 뒤 이 파일을 다시 실행하세요.'
  read 'reply?Enter 키를 누르면 닫힙니다.'
  exit 1
fi
if [[ ! -d node_modules/ws ]]; then
  npm ci --omit=dev || exit 1
fi
print '브라우저에서 http://localhost:4317 을 열어주세요.'
print '같은 네트워크의 친구는 이 컴퓨터의 IP 주소:4317 로 접속하세요.'
node server.mjs
