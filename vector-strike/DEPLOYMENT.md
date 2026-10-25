# VECTOR 배포

- 게임 / Node.js + Socket.IO 서버: https://vector-strike-sid.onrender.com
- Render 서비스: `vector-strike-sid`, 무료 웹 서비스, Singapore
- GitHub: https://github.com/starlike0717/my-online-game (main)
- 게임 소스 경로: `vector-strike/`
- 설치 명령: `npm --prefix vector-strike ci --omit=dev`
- 시작 명령: `node vector-strike/server.mjs`
- 점검 경로: `/api/health`
- 환경: `NODE_VERSION=24`, `HOST=0.0.0.0`, `NODE_ENV=production`, 포트는 Render의 `PORT` 사용

이 폴더는 별도 Sites 소스 저장소에도 연결되어 있습니다. Sites helper로 빌드·저장·배포한 커밋을 GitHub의 게임 폴더로 내보내고 main에 올립니다. 통합 저장소 루트의 다른 게임 파일은 변경하지 않습니다. Render가 자동 배포를 시작한 경우 수동 배포를 중복 실행하지 않습니다. `live` 상태와 실제 HTTP/Socket.IO 응답을 확인한 뒤 완료로 보고합니다.

계정 데이터 `.data/`, 실행 상태 `.runtime/`, 도구 `.tools/`, 인증 정보는 올리지 않습니다. 무료 Render 파일 시스템은 영구 저장소가 아니므로 서버 재시작·잠자기·재배포 시 계정·코인·구매 기록이 초기화될 수 있습니다. 영구 보존에는 별도의 영구 저장소가 필요합니다. 단일 HTML 오프라인 플레이의 로컬 기록은 브라우저에 보관됩니다.
