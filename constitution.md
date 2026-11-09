# Project Constitution — Snake Game — Vanilla JavaScript

This document defines the non-negotiable foundations for this repository. Read it before adding or changing features.

## Guiding Principles

- **Simplicity first** — prefer the smallest solution that solves the problem. If a change needs a long explanation, it is probably over-engineered.
- **No hardcoded secrets or endpoints** — configuration belongs in environment variables; visual design tokens belong in styles, not in `.env` files.
- **Traceability** — every value, dependency, and route should make its origin and purpose obvious.
- **Debuggability** — fail loudly and visibly; avoid silent fallbacks that hide broken data.
- **Official patterns** — use the documented API of each framework and library before inventing a workaround.
- **Portfolio clarity** — this repository is part of a public portfolio. Code should read as clean, intentional, and easy for a reviewer to follow.

## Technology Stack Foundations

| Layer | Choice | Rationale |
| --- | --- | --- |
| Language | Vanilla JavaScript (ES6) | No framework or build tool is needed for a small canvas game. |
| Rendering | HTML5 Canvas 2D | Fast, simple drawing surface for a grid-based game. |
| Styling | CSS3 | Plain stylesheet keeps the project dependency-free. |
| Hosting | GitHub Pages (`docs/`) | Static files can be served directly from the repository. |

**Rule of thumb:** a new dependency must solve a concrete problem that the current stack cannot solve cleanly. Justify it in the change that introduces it.

## Core Premises

### 1. Scope

A small, dependency-free browser game whose value is in clear vanilla JavaScript and canvas fundamentals. Do not introduce a framework, bundler, or backend unless the game genuinely needs it.

### 2. Environment Isolation

- This project has no runtime secrets. Do not introduce `.env` files unless a real secret or environment-specific URL appears.
- If configuration is added, use environment variables and document them in the README.
- Never commit keys, tokens, database URLs, or credentials.

### 3. Architecture

- Keep the four concerns separate: page markup, game loop, entities, and input.
- `docs/` is both the source and the deployable artifact; no generated `dist/` folder exists.
- Small, named functions are preferred over one large game file.

### 4. Data and State

- All state is in memory for the duration of the page session.
- There is no persistence layer. If a high score is added, use `localStorage` and handle unavailable storage gracefully.

### 5. Styling and UX

- Plain CSS lives in `docs/styles.css`.
- The configuration panel writes colours into the game at runtime; do not hardcode a second palette in the stylesheet.
- Keep the board readable at different sizes and respect the configured scale.

### 6. Quality Gates

- No automated tests or linter are configured.
- Before considering a change complete, manually verify movement, food collection, growth, wall and self collisions, pause/resume, game over, and restart.
- Test at least one non-default speed and board size.

### 7. Deployment

- The deployable artifact is the `docs/` folder on `main`.
- Prefer built-in GitHub Pages deployment; add a workflow only if the repository needs one.
- Never commit generated caches or editor files.

## What to Avoid

- Adding a framework or bundler for a game that fits comfortably in vanilla JavaScript.
- Storing game state in the DOM instead of JavaScript variables.
- Hardcoding board dimensions or colours in multiple places.
- Moving files out of `docs/` without updating the Pages configuration.

## Checklist Before Adding Anything New

- Does this solve a real problem for this project, or am I adding scope for its own sake?
- Is every new value configuration-driven rather than hardcoded?
- Does the change follow the existing folder and naming patterns?
- Is there a clear failure path when data, the network, or the environment is unavailable?
- Have I run the available lint/build/test command and fixed what it reports?
- Did I update `README.md` and `MEMORY.md` if behaviour or setup changed?

## Philosophy Statement

This repository exists to show thoughtful front-end engineering: clear structure, readable code, and deliberate trade-offs. The goal is not to use every tool available, but to make every file explain itself. Simplicity is the feature.
