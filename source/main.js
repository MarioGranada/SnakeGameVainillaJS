

let snake;
let food;
// let withBorders = false;
// let scate;
let context;

function setup(speed, canvasScale, canvasWidth, canvasHeight, withBorders, canvasColor, snakeColor, foodColor, bordersColor) {
    const canvas = document.querySelector('.canvas');
    context = canvas.getContext('2d');

    console.log(speed, canvasScale, canvasWidth, canvasHeight, withBorders, canvasColor);

    canvas.width = parseInt(canvasWidth);
    canvas.height = parseInt(canvasHeight);
    canvas.style['background-color'] = canvasColor;
    
    const canvasLeftEdge = 0;
    const canvasRightEdge = canvasWidth;
    const canvasTopEdge = 0;
    const canvasBottomEdge = canvasHeight;

    snake = new Snake(canvasTopEdge, canvasRightEdge, canvasBottomEdge, canvasLeftEdge, canvasWidth, canvasHeight, canvasScale, snakeColor);
    food = new Food(canvasScale, canvasWidth, canvasHeight, foodColor);

    food.pickLocation();    

    const snakeInterval = window.setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        withBorders && this.drawEdges(canvasScale, canvasTopEdge, canvasRightEdge, canvasBottomEdge, canvasLeftEdge, bordersColor);
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
        
    }, parseInt(speed))
};


window.addEventListener('keydown', event => {
    const newDirection = event.key.replace('Arrow', '');
    snake && snake.changeDirection(newDirection);
});

function startGame() {
    const {speed, canvasScale, canvasWidth, canvasHeight, withBorders, canvasColor, snakeColor, foodColor, bordersColor} = formValues();
    
    this.setup(speed, canvasScale, canvasWidth, canvasHeight, withBorders, canvasColor, snakeColor, foodColor, bordersColor);
}

function updateScore() {
    document.querySelector('.scoreValue').innerHTML = snake.total * 100;
}

function drawEdges(scale, topEdge, rightEdge, bottomEdge, leftEdge, bordersColor){
    context.fillStyle = bordersColor;
    // Top/Bottom Edge
    for(let i = scale; i < rightEdge - scale; i++) {
        context.fillRect(i, topEdge, scale, scale);
        context.fillRect(i, bottomEdge - scale, scale, scale);
    }

    // Left/Right Edge
    for(let i = 0; i < bottomEdge; i++) {   
        context.fillRect(rightEdge - scale, i, scale, scale);
        context.fillRect(leftEdge, i, scale, scale);
    }
}