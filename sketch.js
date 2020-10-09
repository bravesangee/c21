var fixedR
var movingR
var ob1,ob2;
function setup() {
  createCanvas(800,400);
 movingR =createSprite(400, 200, 50, 50);
  fixedR=createSprite(600, 200, 50, 50);
  movingR.shapeColor="green"
  fixedR.shapeColor="green"
movingR.velocityX=4;
fixedR.velocityX=-4;
ob1=createSprite(300,200,20,20)
ob1.shapeColor="blue"
ob1.velocityY=-3;
ob2=createSprite(300,100,20,20)
ob2.shapeColor="yellow"
ob2.velocityY=3;
}

function draw() {
  background(255,255,255);  
  //movingR.y=World.mouseY
  //movingR.x=World.mouseX
  
    bounce(movingR,fixedR);
    bounce(ob1,ob2)
  drawSprites();
}

