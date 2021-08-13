var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage,orange,orangeImage,redLeaves,redLeavesImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage=loadImage("apple.png");
  redLeavesImage=loadImage("redImage.png");
  orangeImage=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  var rand=Math.round(random(1,3));
  if(frameCount%80==0){
    if(rand==1){
      createApple();
    }
    else if(rand=2){
      createOrange();
    }
    else{createRed();}
  }
}
function createApple(){
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImage);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}
function createOrange(){
  orange = createSprite(random(50, 350),40, 10, 10);
  orange.addImage(orangeImage);
  orange.scale=0.07;
  orange.velocityY = 3;
  orange.lifetime = 150;
}
function createRed(){
  red = createSprite(random(50, 350),40, 10, 10);
  red.addImage(redLeavesImage);
  red.scale=0.07;
  red.velocityY = 3;
  red.lifetime = 150;
}