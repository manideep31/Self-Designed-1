//create all global variables needed in the program
var bg,bgImg;
var chef;
var chefImage,dish1,invisibleline,costo1,custo2,custo3,custo4;
var custo1img,custo2img,custo3img,custo4img;
var invisibleline2,burger,burgerimg,juice,juiceimg,bread,breadimg,pizza,pizzaimg;

//load all images and sound files to the variables
function preload(){
  
  chefImage=loadImage("chefstanding.jpg");
  chefstanding=loadImage("chefstanding.jpg");
  chefright=loadImage("chefright.jpg");
  chefleft=loadImage("chefleft.jpg");
  bgImg=loadImage("bg.png");
    custo1img=loadImage("customer1.png");
    custo2img=loadImage("customer2.png");
    custo3img=loadImage("customer3.png");
    custo4img=loadImage("customer4.png");

  
}

//initialize the sprites fot PC,NPC backgroound
function setup() {
  
  createCanvas(1000,600)
  
  bg=createSprite(500,300,1000,600);
  bg.addImage(bgImg)
  
  chef=createSprite(200,400,20,20);
  chef.addImage(chefImage);
  chef.scale=2;
  
  custo1=createSprite(580,50,10,10);
  custo2=createSprite(700,50,10,10);
  custo3=createSprite(820,50,10,10);
  custo4=createSprite(940,50,10,10);
  
  custo1.addImage(custo1img);
  custo1.scale=0.3;
  
  custo2.addImage(custo2img);
  custo2.scale=0.3;

  
  custo3.addImage(custo3img);
  custo3.scale=0.3;

  
  custo4.addImage(custo4img);
  custo4.scale=0.3;

  custo1.debug=true
  
  burger=createSprite(700,500,20,20);
  burger.visible=false;
  
  juice=createSprite(580,500,20,20);
  juice.visible=false
  
  bread=createSprite(820,500,20,20);
  bread.visible=false
  
  pizza=createSprite(940,500,20,20);
  pizza.visible=false
  
  invisibleline=createSprite(110,310,5,445);
  invisibleline2=createSprite(710,180,485,5);
  
  invisibleline.visible=false
  invisibleline2.visible=false
  
  burger.shapeColor="blue"
  
  
}


//Movements or the Action for the PC and NPC
function draw() {
  background(220);
  
  
    
  
  
  
  if(keyDown(RIGHT_ARROW)){
    chef.x+=5
    chef.addImage(chefright);
  }
  
  
  if(keyDown(UP_ARROW)){
    chef.y-=5
    chef.addImage(chefstanding)
    
  }
  
  
  if(keyDown(DOWN_ARROW)){
    chef.y+=5
    chef.addImage(chefstanding)
  }
  
  
  if(keyDown(LEFT_ARROW)){
    chef.x-=5
    chef.addImage(chefleft)
  }
  
  drawSprites();
  
  if(mouseIsOver(custo1)){
    //console.log("inside")  
    textSize(20);
    text("juice",40,30);
    chef.x=580
    chef.y=220
    juice.visible=true
  }
  
  if(mouseIsOver(custo2)){
   // console.log("inside")  
    textSize(20);
    text("burger",40,30);
    chef.x=700
    chef.y=220
    burger.visible=true
  }
  
  if(mouseIsOver(custo3)){
    //console.log("inside")  
    textSize(20);
    text("bread",40,30);
    chef.x=820
    chef.y=220
    bread.visible=true
  }
  
  if(mouseIsOver(custo4)){
   // console.log("inside")  
    textSize(20);
    text("pizza",40,30);
    chef.x=940
    chef.y=220
    pizza.visible=true
  }
  
  if(chef.isTouching(burger)){
    burger.y=chef.y-60
    //burger.x=chef.x-120
  }
  
  
  if(custo2.isTouching(burger)){
    custo2.velocityY=-2;
    custo2.lifetime=20;
  }
  
  
  if(chef.isTouching(invisibleline2)){
    burger.velocityY=-2
  }
  
  
  
  
  chef.collide(invisibleline);
  chef.collide(invisibleline2);
    
  
  
}
