# AGENTS.md — Snake Game — Vanilla JavaScript

Compact guide for future OpenCode sessions. It records only the facts an agent is likely to miss or get wrong.

## Quickstart

| Command | Description |
| --- | --- |
| `open docs/index.html` | Play the game locally with no server. |
| `python3 -m http.server 8000 --directory docs` | Serve the publishable folder at http://localhost:8000. |

## Requirements

- A modern browser with Canvas and ES6 support.
- Optional: Python 3 or Node 18+ if you prefer a local static server. Opening `docs/index.html` directly also works.

## Environment

- No environment variables are required for local development.
- `docs/` is the GitHub Pages publish root. Do not move the game files out of it without updating the deployment setup.

## Architecture

- `docs/index.html` — canvas, score, and configuration form.
- `docs/main.js` — bootstrap and game loop.
- `docs/snake.js`, `docs/food.js`, `docs/controls.js` — entities and input.
- `docs/styles.css` — all page styling.
- No package.json, bundler, framework, or test runner exists.

## Commands and build order

- There is no build, lint, or test command. Edit the files and refresh the browser.
- Serve `docs/` with a static server when testing paths or preparing a Pages release.

## Conventions and gotchas

- The configuration form is only applied when a round starts; do not expect live updates.
- Arrow keys drive the snake; prevent page scrolling when changing input handling.
- Keep `index.html` script order intact because the modules share globals.

## Memory

- Read `MEMORY.md` first to understand the current status and decisions.
- Before changing behaviour, read `constitution.md` and keep the change aligned with it.
- After a task, update `MEMORY.md` with status, decisions, and mistakes to avoid. Keep it short.
- If a rule becomes permanent, move it into this file instead of leaving it in memory.
- Never store secrets, tokens, or personal data in `MEMORY.md`.
