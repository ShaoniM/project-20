var car, wall;
var weight, speed;



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
speed=random(55,90);
weight=random(1000,2500);
car=createSprite(200,200,300,100);
wall=createSprite(1500,200,60,200);
car.velocityX= speed;

}

function draw() {
  background(255,255,255);  
  if (car.x - wall.x < wall.width/2 +car.width/2
    && wall.x -car.x < wall.width/2 + car.width/2){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22500

if(deformation>180){
car.shapeColor=color(255,0,0);
  }
if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
}
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
}
  drawSprites();

}