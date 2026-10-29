# v25 — different map/weapon geometry and mobile input

2026-10-29

## Changes checked

- Ten arenas keep their different playable layouts and authoritative collision data while gaining distinct landmarks, silhouettes, surface details and lighting. The open range still contains no interior cover.
- Physical guns have type-specific furniture; 20 melee weapons use shaped blades/heads instead of a common cone. Fantasy guns have separate rail, chamber, crystal, orbital-ring, star-bow and Tesla models.
- Shop rendering fits visible geometry only and shows a clearer side profile. Hidden arms and muzzle flashes do not shrink the preview.
- Mobile joystick finger ownership, unrelated finger release, radial dead zone, analog walk/run, simultaneous movement and >360° look, stale coordinates after orientation change, preserved aim toggle, and touch detection fallback were exercised through the complete saved client.

## Validation

- `npm run check`: JavaScript syntax checks pass.
- `npm test`: 195 tests pass, including 9 new geometry/mobile regressions.
- Real Three.js geometry was built for all 36 weapons and 10 maps; firearm and melee pairs were rasterized into silhouette masks and checked for meaningful differences.
- Actual geometry was also projected into temporary CPU proof sheets for visual review. These are not browser screenshots.
- Build produces a bundled app, a standalone offline HTML, and a Node.js source ZIP containing the new modules and tests.

## Limits

No browser automation or physical phone was available. These checks execute real client events, movement, camera state and geometry with an inert renderer; they do not measure browser layout, real WebGL rendering, frame rate, device audio or physical touchscreen feel. The separate 200-run report describes v24 and is not relabeled as a fresh v25 run.
