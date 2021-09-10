
let snake;
let food;
let canvas;
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

    this.canvas = getElementByClassname('canvas');
    this.context = this.canvas.getContext('2d');

    canvasWidth = parseInt(canvasWidth);
    canvasHeight = parseInt(canvasHeight);

    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    this.canvas.style['background-color'] = canvasColor;
    
    const canvasLeftEdge = 0;
    const canvasRightEdge = canvasWidth;
    const canvasTopEdge = 0;
    const canvasBottomEdge = canvasHeight;

    this.snake = new Snake({
        topEdge: canvasTopEdge, 
        rightEdge: canvasRightEdge, 
        bottomEdge: canvasBottomEdge, 
        leftEdge: canvasLeftEdge, 
        canvasWidth, 
        canvasHeight, 
        scale: canvasScale, 
        color: snakeColor
    });

    this.food = new Food({
        scale: canvasScale,
        canvasWidth,
        canvasHeight,
        color: foodColor
    });

    this.food.pickLocation();    

    this.snakeInterval = window.setInterval(() => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        withBorders && this.drawEdges(
            canvasScale,
            canvasTopEdge,
            canvasRightEdge,
            canvasBottomEdge,
            canvasLeftEdge,
            bordersColor
        );
        this.food.draw(this.context);
        this.snake.update();
        this.snake.draw(this.context);

        if(this.snake.eat(this.food)) {
            this.food.pickLocation();
            this.updateScore();
        }

        if(this.snake.checkCollision(withBorders)) {
            this.stopGame();
        }
        
    }, parseInt(speed))
};


window.addEventListener('keydown', event => {
    event.key.startsWith('Arrow') && event.preventDefault();
    const newDirection = event.key.replace('Arrow', '');
    this.snake && this.snake.changeDirection(newDirection, event);
});

function startGame() {
    let gameValues = {}
    const formValues = getFormValues();

    formInputs.map(item => {
        gameValues = {
            ...gameValues,
            [item]: formValues[item] || gameDefaults[item]
        }
    })
    
    this.setup(gameValues);
    toggleButton('startGame', true);
    toggleButton('clearForm', false);
}

function stopGame() {
    clearInterval(this.snakeInterval);
    toggleButton('startGame', false);
}

function clearGame() {
    clearBoard();
    clearForm();
}

function clearBoard() {
    this.snake.reset();
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.food.pickLocation();
    this.snake.draw(this.context);
    this.food.draw(this.context);
    this.updateScore();
}

function updateScore() {
    getElementByClassname('scoreValue').innerHTML = this.snake.total * 100;
}

function drawEdges(scale, topEdge, rightEdge, bottomEdge, leftEdge, bordersColor){
    this.context.fillStyle = bordersColor;
    // Top/Bottom Edge
    for(let i = scale; i < rightEdge - scale; i++) {
        this.context.fillRect(i, topEdge, scale, scale);
        this.context.fillRect(i, bottomEdge - scale, scale, scale);
    }

    // Left/Right Edge
    for(let i = 0; i < bottomEdge; i++) {   
        this.context.fillRect(rightEdge - scale, i, scale, scale);
        this.context.fillRect(leftEdge, i, scale, scale);
    }
}
