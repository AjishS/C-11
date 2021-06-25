
var trex ,trex_running;
var ground;
var groundImage;
var invisibleGround;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);

  trex.scale = 0.5;
  trex.x = 50;
  edges = createEdgeSprites();

  //create ground sprite
  ground = createSprite(300,180,600,20);
  ground.addImage("ground",groundImage);
  //console.log("trex runner")
  ground.velocityX = -2
  ground.x = ground.width/2;

  // creating invisible ground
  invisibleGround = createSprite(300,190,600,20);
  invisibleGround.visible = false;
}

function draw(){
  // set background color to white
  background("white");

  console.log(trex.y)

  // jump when space bar is pressed
  if(keyDown("space")&&trex.y>155){
    trex.velocityY = -10;
  }

  //infinite ground
  if(ground.x<0){
    ground.x = ground.width/2
  }

  // adding gravity
  trex.velocityY = trex.velocityY + 0.5;

  // stop trex from falling
  trex.collide(invisibleGround)


  drawSprites();

}









