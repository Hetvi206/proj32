const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg='mor.jpg';

function preload(){
  polygon_img=loadImage("hexayel.png");
  //backgroundImg = loadImage(bg);
   getTime();
}

function setup() {
  createCanvas(1200,550);
  engine = Engine.create();
  world = engine.world;

  //create blocks
  block1 = new Box1(700,280,30,40);
  block2 = new Box1(730,280,30,40);
  block3 = new Box1(760,280,30,40);
  block4 = new Box1(670,280,30,40);
  block5 = new Box1(640,280,30,40);
  block6 = new Box1(610,280,30,40);
  block7 = new Box1(780,280,30,40);

  block8 = new Box3(700,240,30,40);
  block9 = new Box3(730,240,30,40);
  block10 = new Box3(760,240,30,40);
  block11 = new Box3(670,240,30,40);
  block12 = new Box3(640,240,30,40);

  block13 = new Box2(730,200,30,40);
  block14 = new Box2(700,200,30,40);
  block15 = new Box2(670,200,30,40);

  block16 = new Box4(700,160,30,40);

  block17 = new Box1(1000,180,30,40);
  block18 = new Box1(1030,180,30,40);
  block19 = new Box1(1060,180,30,40);
  block20 = new Box1(970,180,30,40);
  block21 = new Box1(940,180,30,40);

  block22 = new Box2(1000,140,30,40);
  block23 = new Box2(1030,140,30,40);
  block24 = new Box2(970,140,30,40);

  block25 = new Box3(1000,100,30,40);

   //create ground and base;
   ground = new Ground(600,500,1200,20);
  
   base1  = new Ground(700,300,270,20);
   base2  = new Ground(1000,200,210,20);
 
   //ball
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

//launcher
launcher=new Launcher(this.ball,{x:200,y:200});

}

function draw() {
  
  if(backgroundImg)
background(backgroundImg);

  Engine.update(engine);

//getTime();

  fill("yellow");
  textSize(20);
  text("Drag the hexagonal stone and release it to launch it towards the tower blocks and destroy them and also press space for another try", 10, 50);
 
  textSize(25);
  text("All the best", 400, 80);
 
  ground.display();
  base1.display();
  base2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  //hexagon.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,50,40);

  launcher.display();
 
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}
function keyPressed(){
  if(keyCode===32)
  launcher.attach(this.ball);
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
console.log(responseJSON)
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(datetime);
  console.log(hour);
  if(hour>=06 && hour<=18){
      bg = 'mor.jpg';
  }
  else{
      bg = 'nit.jpg';
  }

  backgroundImg = loadImage(bg);}