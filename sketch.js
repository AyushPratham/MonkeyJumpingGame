var backImage,backgr, monkey, monkey_running, ground,ground_img

var gameOver;
var score=0;

var stoneGroup,stoneImg
var bananaGroup,bananaImg



function preload(){
  backImage=loadImage("jungle.jpg");
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImg=loadImage("banana.png");
 stoneImg=loadImage("stone.png"); 
  

  
  
}

function setup() {
  createCanvas(800,300);
  
  backgr=createSprite(0,0,800,300);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  monkey = createSprite(100,250,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,250,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  
  bananaGroup = new Group();
  stoneGroup = new Group();
  
  score = 0;
}

function draw() {
  
  background(255);
  
   if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
   
  if(monkey.isTouching(stoneGroup)){
    monkey.destroy();
    stoneGroup.velocityX = 0;
    bananaGroup.velocityX = 0;
    backgr.velocityX = 0;
     
} 
  
  
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
   if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
 
    monkey.collide(ground);
   
  spawnbananas();
  spawnstones();
  
  
  drawSprites();
 
 
}

function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var banana = createSprite(800,200,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImg);
    banana.scale = 0.04;
    banana.velocityX = -7;
    banana.lifetime = 200;
    bananaGroup.add(banana);
    if (monkey.isTouching(bananaGroup)) {
    bananaGroup.destroyEach();  
}
  }
  
}

function spawnstones() {
  if(frameCount % 70 === 0) {
    var stone = createSprite(750,220,10,40);
    stone.addImage(stoneImg);
    stone.velocityX = -7;
    stone.scale = 0.2;
    stone.lifetime = 300;
    stoneGroup.add(stone);
  }
}