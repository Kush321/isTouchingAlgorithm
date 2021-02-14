var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  isTouching();

  drawSprites();
}
function isTouching(object1, object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object1.width/2+object2.width/2
    &&object2.y-object1.y<object1.height/2+object2.height/2&&object1.y-object2.y<object1.height/2+object2.height/2){
    object1.shapeColor="red";
    object2.shapeColor="red";
  }
  else{  
  object2.shapeColor="green";
  object1.shapeColor="green";
  }
}