var thickness,wall;
var weight,speed,bullet;

function setup() {
  
var canvas = createCanvas(1600,400)
speed = random(223,321);
weight = random(30,52);
thickness=random(22,83);

bullet = createSprite(50, 200, 50, 20);
wall = createSprite(1200, 200, thickness,200);
bullet.shapeColor="white";

}

function draw() {
  background(0,0,0);  
   bullet.velocityX = speed;
   bullet.collide(wall);
  if(wall.x-bullet.x < bullet.width+wall.width/2){
    bullet.velocityx=0
    var deformation=0.5 *weight* speed* speed/22509;
  {
    bullet.shapeColor=color(255,0,0)
  }
  if(deformation<180&&deformation>100)
  {
    bullet.shapeColor=color(230,230,0)
  }
  if(deformation<100)
  {
    bullet.shapeColor=color(0,255,0)
  }
  }
  if(hasCollided(wall,bullet)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  console.log(damage);
  }
  if(damage>10)
 {
   wall.shapeColor="red"
 }

 if (damage<10)
 {
   wall.shapeColor="green"
 }
  
  drawSprites();
}
function hasCollided(lwall,lbullet){

  bulletRightEdge=lbullet.x+lbullet+width
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}
