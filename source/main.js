const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');
const scale = 10;
const rows = canvas.height / scale;
const cols = canvas.width / scale; 

let snake;
let food;

(function setup() {
    snake = new Snake();
    food = new Food();

    food.pickLocation();

    const snakeInterval = window.setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        food.draw();
        snake.update();
        snake.draw();

        if(snake.eat(food)) {
            food.pickLocation();
            updateScore()
        }

        snake.checkCollision() && clearInterval(snakeInterval);
    }, 250)
})();


window.addEventListener('keydown', event => {
    const newDirection = event.key.replace('Arrow', '');
    snake.changeDirection(newDirection);
});

function startGame() {
    console.log('in here start game')
}

function updateScore() {
    document.querySelector('.score-value').innerHTML = snake.total * 100;
}
