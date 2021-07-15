const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');
const scale = 10;
const rows = canvas.height / scale;
const cols = canvas.width / scale; 

const canvasLeftEdge = 0;
const canvasRightEdge = canvas.width;
const canvasTopEdge = 0;
const canvasBottomEdge = canvas.height;

let snake;
let food;
let withBorders = false;

function setup() {
    snake = new Snake(canvasTopEdge, canvasRightEdge, canvasBottomEdge, canvasLeftEdge);
    food = new Food();

    food.pickLocation();

    

    const snakeInterval = window.setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        withBorders && this.drawEdges();
        food.draw();
        snake.update();
        snake.draw();

        if(snake.eat(food)) {
            food.pickLocation();
            this.updateScore()
        }

        if(snake.checkCollision(withBorders)) {
            clearInterval(snakeInterval);
        }
        
    }, 250)
};


window.addEventListener('keydown', event => {
    const newDirection = event.key.replace('Arrow', '');
    snake && snake.changeDirection(newDirection);
});

function startGame() {
    formValues();
    this.setup();
}

function updateScore() {
    document.querySelector('.scoreValue').innerHTML = snake.total * 100;
}

function drawEdges(){
    context.fillStyle = "black";
    // Top/Bottom Edge
    for(let i = scale; i < canvasRightEdge - scale; i++) {
        context.fillRect(i, canvasTopEdge, scale, scale);
        context.fillRect(i, canvasBottomEdge - scale, scale, scale);
    }

    // Left/Right Edge
    for(let i = 0; i < canvasBottomEdge; i++) {   
        context.fillRect(canvasRightEdge - scale, i, scale, scale);
        context.fillRect(canvasLeftEdge, i, scale, scale);
    }
}