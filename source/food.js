function Food(scale, canvasWidth, canvasHeight, foodColor) {
 this.x;
 this.y;
 this.scale = scale;
 this.rows= canvasHeight / this.scale;
 this.cols = canvasWidth / this.scale;
 this.color = foodColor; 
 
 this.pickLocation = function () {
     this.x = (Math.floor(Math.random() * this.rows - 1 ) + 1) * this.scale;
     this.y = (Math.floor(Math.random() * this.cols - 1 ) + 1) * this.scale;
 }

 this.draw = function ( ) {
     context.fillStyle = this.color;
     context.fillRect(this.x, this.y, this.scale, this.scale);
 }
}