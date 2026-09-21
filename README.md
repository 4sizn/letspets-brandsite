# letspets — Make room for play.

독립 운영을 위한 렛츠펫츠 브랜드 사이트. 미완성 제품 화면, 제품 목록, 다운로드 버튼은 포함하지 않습니다.

## Run

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 4173 --strictPort
npm run build
npm run test:sites
```

## Scope

- Studio / Approach / Our spirit / Say hello의 단일 페이지 브랜드 소개
- 고정 내비게이션과 모바일 메뉴, 앵커 이동, 스크롤 문장 강조, 등장 애니메이션
- 포인터에 반응하는 히어로 스티커, 흐르는 브랜드 문구, 버튼·키보드·스와이프 캐러셀
- 이메일 링크 / 이메일 주소 복사 / GitHub 연결
- 시스템의 동작 줄이기 설정 및 페이지 내 움직임 정지 버튼
- 모든 폰트·이미지 로컬 제공, 별도 로그인·쿠키·분석 SDK·백엔드 없음

현재 운영 도메인을 수정하거나 배포하지 않은 독립 시안입니다. 이후 제품이 준비되면 프로젝트별 경로와 Work 섹션을 추가할 수 있습니다. 현재 버전에는 빈 제품 자리나 출시 예정 카드도 노출하지 않습니다.

## Sources

- Visual and interaction reference: https://hidee.app/ (captured 2026-09-21)
- Brand facts: https://www.letspets.co.kr/ (independent creative studio, owner 4sizn, contact 4sizn@naver.com)
- Product Design URL-to-code workflow; adapted to the user's brand-first direction.
- `reference/`: desktop/mobile reference captures. `qa/`: rendered implementation evidence.
- `public/assets/`: generated original artwork, self-hosted fonts, reference arrow controls. Provenance in `ASSETS.md`.

## Delivery boundary

The Vite/React project is self-contained and separate from Cloud Minesweeper. The production build emits static files in `dist/client` and a Sites-compatible Worker in `dist/server`. No external publish or domain change has been performed.

## Existing-site migration

The project now includes six project pages, `/studio`, `/privacy`, notes, updates, and the existing public app-ads record. `npm run build` prerenders nine public pages. Run `npm run test:migration` after building. See [MIGRATION.md](MIGRATION.md) for preserved routes, image provenance and production cutover status.
