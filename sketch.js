var car, wall;
var speed, weight;
var Deformation;
function setup() {
  createCanvas(800,400);
  wall = createSprite(700, 200, 50, 200);
  car = createSprite(100,200,50,30);
  speed = Math.round(random(40,100));
  weight = Math.round(random(900,1800));
  car.velocityX = 5;
}

function draw() {
  background(0,0,0);  
  
  console.log(Deformation);

  Collide();

  drawSprites();
}