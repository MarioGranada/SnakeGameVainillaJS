

let snake;
let food;
let context;
let snakeInterval;

function setup(setupProps) {
    let {
        speed,
        canvasScale,
        canvasWidth,
        canvasHeight,
        withBorders,
        canvasColor,
        snakeColor,
        foodColor,
        bordersColor
    } = setupProps;

    const canvas = document.querySelector('.canvas');
    context = canvas.getContext('2d');

    console.log(speed, canvasScale, canvasWidth, canvasHeight, withBorders, canvasColor, snakeColor, foodColor,bordersColor);

    canvasWidth = parseInt(canvasWidth);
    canvasHeight = parseInt(canvasHeight);

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style['background-color'] = canvasColor;
    
    const canvasLeftEdge = 0;
    const canvasRightEdge = canvasWidth;
    const canvasTopEdge = 0;
    const canvasBottomEdge = canvasHeight;

    snake = new Snake({
        canvasTopEdge, 
        canvasRightEdge, 
        canvasBottomEdge, 
        canvasLeftEdge, 
        canvasWidth, 
        canvasHeight, 
        canvasScale, 
        color: snakeColor
    });

    food = new Food({scale: canvasScale, canvasWidth, canvasHeight, color: foodColor});

    food.pickLocation();    

    this.snakeInterval = window.setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        withBorders && this.drawEdges(
            canvasScale,
            canvasTopEdge,
            canvasRightEdge,
            canvasBottomEdge,
            canvasLeftEdge,
            bordersColor
        );
        food.draw();
        snake.update();
        snake.draw();

        if(snake.eat(food)) {
            food.pickLocation();
            this.updateScore()
        }

        if(snake.checkCollision(withBorders)) {
            this.stopGame();
        }
        
    }, parseInt(speed))
};


window.addEventListener('keydown', event => {
    event.preventDefault();
    const newDirection = event.key.replace('Arrow', '');
    snake && snake.changeDirection(newDirection);
});

function startGame() {
    const {
        speed,
        canvasScale,
        canvasWidth,
        canvasHeight,
        withBorders,
        canvasColor,
        snakeColor,
        foodColor,
        bordersColor
    } = formValues();

    const gameValues = {
        speed: speed || 250,
        canvasScale: canvasScale || 10,
        canvasWidth: canvasWidth || 500,
        canvasHeight: canvasHeight || 500,
        withBorders: withBorders || false,
        canvasColor: canvasColor ||  "#FFF000",
        snakeColor: snakeColor || "#0FEF0B",
        foodColor: foodColor || "#D9F505",
        bordersColor: bordersColor || "#000000"
    }
    
    this.setup(gameValues);
}

function stopGame() {
    clearInterval(this.snakeInterval);
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
