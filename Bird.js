class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50)
    this.image = loadImage('sprites/bird.png')
    this.smokeImg = loadImage('sprites/smoke.png')
    this.trajectory = [] // x e y
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display()
  }
}
