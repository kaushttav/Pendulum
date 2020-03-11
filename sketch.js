
var pendulum;
var pendulum_image;
var wall1;
var wall2;
var string;
var holder;


function preload(){
  pendulum_image= loadImage("pendulum.png");
}
function setup() {
  createCanvas(800,400);
  pendulum = createSprite(400, 300, 50, 50);
  pendulum.addImage(pendulum_image)
  pendulum_image.resize(35,35);
  pendulum.velocityX = 5;
  wall1 = createSprite(250,10,20,800);
  wall1.visible = false;
  wall2 = createSprite(550,10,20,800);
  wall2.visible = false;
  
  string = createSprite(200,140,1,290);
  string.shapeColor = "white";
}

function draw() {
  background("black");  
  pendulum.bounceOff(wall1);
  pendulum.bounceOff(wall2);
  string.x = pendulum.x ;
  
  drawSprites();
}