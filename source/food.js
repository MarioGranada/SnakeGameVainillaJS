function Food() {
 this.x;
 this.y;
 
 this.pickLocation = function () {
     this.x = (Math.floor(Math.random() * rows - 1 ) + 1) * scale;
     this.y = (Math.floor(Math.random() * cols - 1 ) + 1) * scale;
 }

 this.draw = function ( ) {
     context.fillStyle = "red";
     context.fillRect(this.x, this.y, scale, scale);
 }
}