var cat, ca;
var mouse,ma;
var gardenImage;
var catImg3;
var mouseImg3;

function preload() {
  
  ca = loadAnimation("tomOne.png","tomTwo.png","tomThree.png","tomFour.png");
 
  ma = loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png");
  
  
  gardenImage = loadImage("garden.png");
  
  catImg3 = loadImage("tomThree.png");
  mouseImg3 = loadImage("jerryThree.png");
}

function setup() {
  createCanvas(1000, 1000);
  
  cat = createSprite(800,900,400,400);
  cat.setCollider("rectangle",0,0,cat.width,10);
 
  
  cat.addAnimation("cat",ca);
  cat.scale=0.1;
    
  mouse=createSprite(400,900,400,400);
  mouse.setCollider("rectangle",0,0,mouse.width,10);
  mouse.addAnimation("mouse",ma);
  mouse.scale=0.1;
  
 
  
  
  
}

function draw() {
  background(gardenImage);
  
  if(cat.x - mouse.x <(cat.width - mouse.width)/2)
  {
                            cat.addAnimation("catLastImage",catImg3);
 cat.changeAnimation("catLastImage");

 mouse.addAnimation("mouseLastImage",mouseImg3);
 mouse.changeAnimation("mouseLastImage");
   
    textSize(100);
    text("done",500,500);
    cat.velocityX =0;
  }
  
  drawSprites();
  
}

function keyPressed(){
  
if(keyCode === LEFT_ARROW){  
   cat.velocityX = -2;
  
  cat.addAnimation("catLastImage",catImg3);
  cat.changeAnimation("catLastImage");
      
}    
    
  
}
