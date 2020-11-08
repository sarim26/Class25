class Bird extends Baseclass{
    constructor(x, y) {
      super(x,y,50,50)
      this.Image=loadImage("sprites/bird.png")

    };
    display(){
      
      pos.x = mouseX;
      pos.y = mouseY;

      super.display()
    }
  }