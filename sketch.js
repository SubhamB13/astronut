var bg,sleep,brush,gym,eat,bath,move,drink;
var astronaut;

function preload(){
  bg = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2,png");
  move = loadAnimation("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png")
}

function setup() {
  createCanvas(600,500);
  astronaut = createSprite(300, 230);
  astronaut.addImage("sleeping",sleep);
  astronaut.scale = 0.1;

}

function draw() {
  background(bg);  
  drawSprites();

  textSize(20);
  fill("white");
  text("Instructions ",20,35);
  textSize(15);
  text("UP Arrow = Brushing ",20,55);
  text("DOWN Arrow = Gymming ",20,70);
  text("LEFT Arrow = Bathing ",20,85);
  text("RIGHT Arrow = Eating ",20,100);
  text("M Key = Moving ",20,115);

  edges = createEdgeSprites()
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("Brushing",brush);
    astronaut.changeAnimation("Brushing")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gymming",gym);
    astronaut.changeAnimation("Gymming")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Bathing",bath);
    astronaut.changeAnimation("Bathing")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Eating",eat);
    astronaut.changeAnimation("Eating")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("Moving",move);
    astronaut.changeAnimation(move)
    //astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}