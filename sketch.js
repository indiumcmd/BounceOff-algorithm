
var fixedRect, movingRect;
var gameObject1, gameObject2;
var gameObject3, gameObject4;
var gameObject5, gameObject6;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  gameObject1 = createSprite(100,200,45,45);
  gameObject1.shapeColor = "yellow";
  
  gameObject2 = createSprite(300,200,45,45);
  gameObject2.shapeColor = "pink";

  gameObject3 = createSprite(100,500,70,45);
  gameObject3.shapeColor = "orange";
  gameObject3.velocityX = 4;
  
  gameObject4 = createSprite(1000,500,70,70);
  gameObject4.shapeColor = "brown";
  gameObject4.velocityX = -4;

  gameObject5 = createSprite(600,50,70,45);
  gameObject5.shapeColor = "orange";
  gameObject5.velocityY = 4;
  
  gameObject6 = createSprite(600,700,70,70);
  gameObject6.shapeColor = "brown";
  gameObject6.velocityY = -4;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }

    if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "blue";
   gameObject1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    gameObject1.shapeColor = "yellow"
  }


  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "blue";
   gameObject2.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    gameObject2.shapeColor = "pink"
  }

 

  bounceOff(gameObject3,gameObject4);
  bounceOff(gameObject5,gameObject6);
  drawSprites();
 
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


function bounceOff(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2 ){
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object1.height/2 + object2.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2 ){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
}