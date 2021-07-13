
const DIRECTIONS = { 
    UP: 'UP', 
    DOWN: 'DOWN', 
    LEFT: 'LEFT', 
    RIGHT: 'RIGHT'
}

function Snake () {
    this.x = 0;
    this.y = 30;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail=[];
    this.currentDirection = DIRECTIONS.RIGHT;

    

    this.draw = function() {
        context.fillStyle = '#FFF';

        this.tail.map(item=> {
            context.fillRect(item.x, item.y, scale, scale);
        })
        context.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function() {
        this.tail.map((item, index) => {
            if(index < this.tail.length - 1){
                this.tail[index] = this.tail[index+1];
            } 
        })


        this.tail[this.total - 1] = {x: this.x, y: this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > canvas.width - 1) {
            this.x = 0;
        }
        if(this.y > canvas.height - 1 ) {
            this.y = 0;
        }
        if(this.x < 0) {
            this.x = canvas.width;
        }
        if(this.y < 0) {
            this.y = canvas.height;
        }
    }

    this.changeDirection = function(newDirection) {
        switch(newDirection.toUpperCase()) {
            case DIRECTIONS.UP: 
                if(this.currentDirection !== DIRECTIONS.DOWN) {
                    this.xSpeed = 0;
                    this.ySpeed = -scale * 1;
                    this.currentDirection = DIRECTIONS.UP;
                }
                break;
            case DIRECTIONS.RIGHT:
                if(this.currentDirection !== DIRECTIONS.LEFT) {
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                    this.currentDirection = DIRECTIONS.RIGHT;
                }
                break;
            case DIRECTIONS.DOWN:
                if(this.currentDirection !== DIRECTIONS.UP) {
                    this.xSpeed = 0;
                    this.ySpeed = scale * 1;
                    this.currentDirection = DIRECTIONS.DOWN;
                }
                break;
            case DIRECTIONS.LEFT: 
                if(this.currentDirection !== DIRECTIONS.RIGHT) {
                    this.xSpeed = -scale * 1;
                    this.ySpeed = 0;
                    this.currentDirection = DIRECTIONS.LEFT;
                }
                break;
            default: 
                break;
        }
    }

    this.eat = function(food) {
        const isEating = this.x === food.x && this.y === food.y;
        isEating && this.total++;
        return isEating

    }

    this.checkCollision = function () {
        return !!this.tail.find(item => {
            return this.x === item.x && this.y === item.y
        })
    }
}
