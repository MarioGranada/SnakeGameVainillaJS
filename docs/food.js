function Food(foodProps) {
    const {scale, canvasWidth, canvasHeight, color} = foodProps;
    this.x;
    this.y;
    this.scale = scale;
    this.rows= canvasHeight / this.scale;
    this.cols = canvasWidth / this.scale;
    this.color = color; 
 
    this.pickLocation =  () => {
        this.x = (Math.floor(Math.random() * this.rows - 1 ) + 1) * this.scale;
        this.y = (Math.floor(Math.random() * this.cols - 1 ) + 1) * this.scale;
    }
    
    this.draw = (context) => {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.scale, this.scale);
    }
}
