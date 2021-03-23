const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;

function preload(){
  
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(680,210,210,10);

  ball = new Polygon(100,100);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(315,235,30,40);
  block9 = new Block(345,235,30,40);
  block10 = new Block(375,235,30,40);
  block11 = new Block(405,235,30,40);
  block12 = new Block(435,235,30,40);
  block13 = new Block(465,235,30,40)
  //level three
  block14 = new Block(330,195,30,40);
  block15 = new Block(360,195,30,40);
  block16 = new Block(390,195,30,40);
  block17 = new Block(420,195,30,40);
  block18 = new Block(450,195,30,40);
  //level four
  block19 = new Block(360,155,30,40);
  block20 = new Block(390,155,30,40);
  block21 = new Block(420,155,30,40);
  //top
  block22 = new Block(390,115,30,40);
  
  //second tower
  
  //level one
  block23 = new Block(605,185,30,40);
  block24 = new Block(635,185,30,40);
  block25 = new Block(665,185,30,40);
  block26 = new Block(695,185,30,40);
  block27 = new Block(725,185,30,40);
  block28 = new Block(755,185,30,40);
  //level two
  block29 = new Block(620,145,30,40);
  block30 = new Block(650,145,30,40);
  block31 = new Block(680,145,30,40);
  block32 = new Block(710,145,30,40);
  block33 = new Block(740,145,30,40);
  //level three
  block34 = new Block(650,105,30,40);
  block35 = new Block(680,105,30,40);
  block36 = new Block(710,105,30,40);
  //top
  block37 = new Block(680,65,30,40);
  
  sling = new Sling(ball.body,{x:100,y:100});





  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("white");

  text("Press space to try again",20,20);
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display()
  fill("turquoise");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("grey");
  block19.display();
  block20.display();
  block21.display();
  fill("green");
  block22.display();
  
  fill("red");
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("blue");
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  fill(150,0,150);
  block34.display();
  block35.display();
  block36.display();
  fill("orange");
  block37.display();

  ball.display();

  sling.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
 
  if(keyCode === 32){

   Matter.Body.setPosition(ball.body,{x:100,y:300});
   sling.attach(ball.body);;
  }


}

