const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var backgroundImage;
var canon, angle;
var Ball;
var myCannonBalls = [];
var ground;
var boat;
var myboats = [];

function preload() {
  backgroundImage = loadImage("./assets/background.gif");
}

function setup() {
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  // create tower
  tower = new Tower(150, 350, 150, 320);

  angle = -PI / 4;
  // create canon
  canon = new Canon(180, 100, 110, 50, angle);

  //create ground
  ground = new Ground(0, height, width * 2, 1);

  boat = new Boat(width, height, -100, 200, 200, -100);
}

function draw() {
  background(51);
  Engine.update(engine);

  //displaying background Image
  // image(which image loadded, x,y,w,h)
  image(backgroundImage, 0, 0, width, height);

  tower.show();
  canon.display();
  ground.show();

  //calling displayballs using for loop because balls are inside the myCannonBalls array
  for (var i = 0; i < myCannonBalls.length; i++) {
    displayballs(myCannonBalls[i], i);

    boat.display();

    Matter.Body.setVelocity(boat.body, { x: -0.9, y: 0 });
  }
}

function displayballs(Ball, index) {
  Ball.display();
  if (Ball.body.position.x >= width || Ball.body.position.y >= height - 100) {
  }
  World.remove(world, Ball.body);
  myCannonBalls.splice(index, 1);
  // console.log(Ball)
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    //create cannonball
    Ball = new CanonBall(canon.x, canon.y, 40);
    myCannonBalls.push(Ball);
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    myCannonBalls[myCannonBalls.length - 1].shoot();
    a; // console.log("releasing ball "+myCannonBalls) } }
  }
}
