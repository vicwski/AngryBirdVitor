const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world
var ground, plataform, backgroundImg
var box1, box2, box3, box4, box5
var log1, log2, log3, log4
var pig1, pig2
var bird

var score = 0

function preload() {
  backgroundImg = loadImage('sprites/bg.png')
}

function setup() {
  var canvas = createCanvas(1200, 400)
  engine = Engine.create()
  world = engine.world

  ground = new Ground(width / 2, height - 10, width, 20)
  platform = new Ground(150, 305, 300, 170)

  box1 = new Box(700, 320, 70, 70)
  box2 = new Box(920, 320, 70, 70)
  box3 = new Box(700, 240, 70, 70)
  box4 = new Box(920, 240, 70, 70)
  box5 = new Box(810, 160, 70, 70)

  pig1 = new Pig(810, 350)
  pig2 = new Pig(810, 220)

  log1 = new Log(810, 260, 300, PI / 2)
  log2 = new Log(810, 180, 300, PI / 2)
  log3 = new Log(760, 120, 150, PI / 7)
  log4 = new Log(870, 120, 150, -PI / 7)

  bird = new Bird(100, 100)

  slingshot = new SlingShot(bird.body, { x: 200, y: 50 })

  getHour()
}

function draw() {
  background(backgroundImg)

  noStroke()
  textSize(35)
  fill('white')
  text('Score:  ' + score, width - 300, 50)

  Engine.update(engine)

  ground.display()
  platform.display()

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()

  pig1.display()
  pig1.score1()
  pig2.display()
  pig2.score2()

  log1.display()
  log2.display()
  log3.display()
  log4.display()

  bird.display()

  slingshot.display()
}

function mouseDragged() {
  Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  slingshot.fly()
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(bird.body)
  }
}
