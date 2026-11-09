# Snake Game — Vanilla JavaScript

A classic Snake game built entirely with plain JavaScript, HTML, and CSS. Before a round starts, the player can configure the speed, board size and scale, colours, and whether the walls are deadly.

The game runs directly in the browser with no build step, no framework, and no dependencies. The `docs/` folder is the publishable site and is ready for GitHub Pages.

## Live demo

| | |
| --- | --- |
| **Live site** | https://mariogranada.github.io/SnakeGameVainillaJS/ |
| **Repository** | https://github.com/MarioGranada/SnakeGameVainillaJS |
| **Portfolio summary** | Configurable Snake game in plain JavaScript, HTML and CSS — no framework, no build step — with adjustable speed, board size, colours and deadly-wall mode. |

## Features

- Classic snake gameplay on an HTML5 canvas.
- Configurable snake speed, board width and height, and cell scale.
- Custom colours for the board, snake, food, and borders.
- Optional wall collisions for an extra challenge.
- Live score, pause/resume, game-over state, and restart.
- Keyboard controls with the arrow keys.

## Tech stack

| Layer | Technology |
| --- | --- |
| Language | Vanilla JavaScript (ES6) |
| Rendering | HTML5 Canvas 2D |
| Styling | CSS3 |
| Hosting | GitHub Pages (`docs/`) |

## Project structure

```text
SnakeGameVainillaJS/
├── docs/                 # Publishable site (GitHub Pages root)
│   ├── index.html        # Markup, score, and configuration form
│   ├── styles.css        # Page and board styling
│   ├── main.js           # Bootstrap and game loop
│   ├── snake.js          # Snake model and movement
│   ├── food.js           # Food placement
│   └── controls.js       # Keyboard input
├── LICENSE
└── README.md
```

## Getting started

### Requirements

- A modern browser with Canvas and ES6 support.
- Optional: Python 3 or Node 18+ if you prefer a local static server. Opening `docs/index.html` directly also works.

### 1. Install dependencies

```bash
# No dependencies or build step
git clone https://github.com/MarioGranada/SnakeGameVainillaJS.git
cd SnakeGameVainillaJS
```

### 2. Run locally

**Option A — open the file directly**

```bash
open docs/index.html
```

On Linux use `xdg-open docs/index.html`; on Windows open the file from Explorer.

**Option B — serve the folder locally**

```bash
python3 -m http.server 8000 --directory docs
```

Open http://localhost:8000.

A server is closer to the GitHub Pages environment, but is not required.

## How it works

`docs/index.html` contains the canvas, score display, and the configuration form. The form values are read when a round starts.

`main.js` wires the modules together and owns the game loop; `snake.js` and `food.js` hold the game entities; `controls.js` translates arrow-key presses into direction changes.

There is no bundler or package manager. Every file is loaded as a classic script, so the order in `index.html` matters.

## Deployment

- Target: GitHub Pages, serving the `docs/` folder from `main`. This is the built-in Pages option and needs no workflow.
- An optional GitHub Actions workflow can publish `docs/` with `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages` if the repository moves to workflow-based Pages.
- **Live:** https://mariogranada.github.io/SnakeGameVainillaJS/ (Pages source `main` / `/docs`; every push to `main` redeploys it).

## Notes and limitations

- The game state lives only in memory; reloading the page resets the score.
- Board dimensions and colours are read at the start of a round, so change them before pressing Start.
- The online play link in the README is a placeholder until the Pages deployment is confirmed.

---

**Author:** Mario Granada
