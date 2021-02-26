//Game States
var PLAY=1;
var END=0;
var gameState=1;

var backgroundImg, knife, knifeImage ;
var apple, appleImg, pineapple, pineappleImg; 
var banana, bananaImg, watermelon, watermelonImg;
var bGroup, wGroup, pGroup, aGroup;
var monster, monsterImg, mGroup;

var cutSound, gameOverSound;
var gameOver, gameOverImg;

function preload(){
  
  backgroundImg = loadImage("download fruit ninja.jpg")
  knifeImage = loadImage("knife.png");
  appleImg = loadImage("gg.png");
  pineappleImg = loadImage("medhavi.png");
  bananaImg = loadImage("banana.png");
  watermelonImg = loadImage("watermelon.png");
  monsterImg = loadImage("monster.png");
  gameOverImg = loadImage("gmo.jpg");
  
  cutSound = loadSound("sound.mp3");
  gameOverSound = loadSound("preview.mp3")
}



function setup() {
  createCanvas(400, 400);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
   
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  
  //create fruit and monster Group variable here
  bGroup = new Group();
  wGroup = new Group();
  aGroup = new Group();
  pGroup = new Group();
  mGroup = new Group();
}

function draw() {
  background(backgroundImg);
  
  if(gameState===PLAY){
    
    //calling fruit and monster function
    spawnApple();
    spawnWatermelon();
    spawnBanana();
    spawnPineapple();
    spawnMonster();
    
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    // Increase score if knife touching fruit
    if(knife.isTouching(bGroup)){
      bGroup.destroyEach();
      score=score+1;
      cutSound.play();
     }
    else if(knife.isTouching(wGroup)){
      wGroup.destroyEach();
      score=score+1;
      cutSound.play();
     }
    else if(knife.isTouching(aGroup)){
      aGroup.destroyEach();
      score=score+1;
      cutSound.play();
     }
    else if(knife.isTouching(pGroup)){
      pGroup.destroyEach();
      score=score+1;
      cutSound.play();
     }
    // Go to end state if knife touching enemy
    if(knife.isTouching(mGroup)){
      gameState=END;
      gameOverSound.play();
     }
 }
  
  if(gameState===END){
    gameOver = createSprite(200,200);
    gameOver.addImage("gameover",gameOverImg);
    gameOver.scale=2.4;
    score=0;
  }
  
  drawSprites();
  
  //Display score
  fill("white");
  textSize(25);
  text("Score : "+ score,250,50);
}

function spawnWatermelon(){
  
if(frameCount%120===0){
    watermelon=createSprite(10,50,20,20); 
    watermelon.addImage("watermelon",watermelonImg);
    watermelon.velocityX=(4 + 3* score/10);
    watermelon.scale=0.1;
    watermelon.y=Math.round(random(80,340));
    watermelon.lifetime = 150;
    wGroup.add(watermelon);
     }
  
}
function spawnBanana(){
  
if(frameCount%80===0){
    banana=createSprite(10,50,20,20); 
    banana.addImage("banana",bananaImg);
    banana.velocityX=(4 + 3* score/10);
    banana.scale=0.1;
    banana.y=Math.round(random(80,340));
    banana.lifetime = 150;
    bGroup.add(banana);
     }
  
}
function spawnApple(){
  
if(frameCount%160===0){
    apple=createSprite(10,50,20,20); 
    apple.addImage("apple",appleImg);
    apple.velocityX=(4 + 3* score/10);
    apple.scale=0.02;
    apple.y=Math.round(random(80,340));
    apple.lifetime = 150;
    aGroup.add(apple);
     }
  
}
function spawnPineapple(){
  
if(frameCount%140===0){
    pineapple=createSprite(10,50,20,20); 
    pineapple.addImage("pineapple",pineappleImg);
    pineapple.velocityX=(4 + 3* score/10);
    pineapple.scale=0.1;
    pineapple.y=Math.round(random(80,340));
    pineapple.lifetime = 150;
    pGroup.add(pineapple);
     }
  
}
function spawnMonster(){
  
if(frameCount%150===0){
    monster=createSprite(10,50,20,20); 
    monster.addImage("monster",monsterImg);
    monster.velocityX=(4 + 3* score/10);
    monster.scale=0.1;
    monster.y=Math.round(random(80,340));
    monster.lifetime = 150;
    mGroup.add(monster);
     }
  
}