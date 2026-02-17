# Snake Game - Vanilla JS

A customizable, classic Snake Game built entirely with Vanilla JavaScript, HTML, and CSS.

## Features

- **Classic Gameplay**: Navigate the snake to eat food and grow longer.
- **Fully Customizable**: Tweak the game to your liking with extensive settings:
  - **Speed**: Adjust the snake's speed (delay in milliseconds).
  - **Visuals**: Customize colors for the board, snake, food, and borders.
  - **Dimensions**: Set your preferred board width, height, and scale.
  - **Borders**: Toggle board borders on or off for an extra challenge.
- **Score Tracking**: Keep track of your score in real-time.
- **Pause/Resume**: Stop and restart the game at any time.

## How to Play

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MarioGranada/SnakeGameVainillaJS.git
    ```
2.  **Open the game:**
    Navigate to the `source` folder and open `index.html` in your web browser.

3.  **Start the game:**
    - Use the configuration panel to set your desired options.
    - Click the **Start** button.

4.  **Controls:**
    - use the **Arrow Keys** (Up, Down, Left, Right) to change the snake's direction.

## Customization Options

- **Snake delay (ms)**: Controls how fast the snake moves. Lower numbers mean faster speed.
- **Board Color**: Background color of the game area.
- **Board Width/Height**: Size of the game canvas in pixels.
- **Board Scale**: Size of the grid cells.
- **With borders?**: Check this box to enable collision with the walls.
- **Colors**: Set custom colors for the Snake, Food, and Borders.

## Deployment to GitHub Pages

You can easily deploy this game to GitHub Pages so it can be played online.

### Option 1: Serve from `/docs` folder (Recommended for clean URL)

1.  Rename the `source` folder to `docs`.
2.  Commit and push the changes to GitHub.
3.  Go to your repository on GitHub.
4.  Navigate to **Settings** > **Pages**.
5.  Under **Build and deployment** > **Source**, select **Deploy from a branch**.
6.  Under **Branch**, select `main` (or `master`) and change the folder from `/ (root)` to `/docs`.
7.  Click **Save**.
8.  Your game will be live at `https://<your-username>.github.io/<repository-name>/`.

### Option 2: Deploy as is

1.  Push your code to GitHub.
2.  Go to **Settings** > **Pages**.
3.  Select **Deploy from a branch**, choose `main`, and keep folder as `/ (root)`.
4.  Click **Save**.
5.  Your game will be available at `https://<your-username>.github.io/<repository-name>/source/`.

## License

[MIT](LICENSE)
