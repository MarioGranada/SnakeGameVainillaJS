# Snake Game — Vanilla JavaScript — Working Memory

_Last updated: 2026-11-02_

## Current status

- Playable vanilla Snake game in `docs/`.
- Configuration form, scoring, pause/resume, and game-over handling are implemented.
- GitHub Pages link is still marked TBD in the README.

## Key decisions

- Kept the project dependency-free so it can be opened directly or served by GitHub Pages.
- Used `docs/` as the publish root to enable Pages without a build workflow.

## Known limitations and follow-ups

- No high-score persistence.
- Keyboard-only controls; no touch or gamepad support.
- No automated tests or CI workflow yet.

## Mistakes to avoid

- Do not assume a package manager exists — there is no `package.json`.
- Changing canvas dimensions after a round starts has no effect until restart.

## Next steps

- Confirm and document the GitHub Pages URL.
- Add an optional Pages workflow if built-in deployment is replaced.
- Consider `localStorage` high scores and mobile touch controls.

---

Keep this file under ~60 lines. Summarise or delete notes that no longer add value.
