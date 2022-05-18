class Pig extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50)
    this.image = loadImage('sprites/enemy.png')
    this.vibility = 255
  }

  display() {


    if (this.body.speed < 3) {
      super.display()
    } else {
      World.remove(world, this.body)
      push()
      this.vibility -= 5
      tint(255, this.vibility)
      pop()
    }
  }

  score1() {
    if (this.vibility < 0 && this.vibility > -1005) {
      score++
    }
  }

  score2() {
    if (this.vibility < 0 && this.vibility > -1005) {
      score +=2
    }
  }
}
