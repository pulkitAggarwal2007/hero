const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20;
var ball;
var chain;
var g;
var m,m1;

function preload(){
g = loadImage("images/GamingBackground.png");
m1 = loadImage("images/Monster-01.png");
h = loadImage("images/Superhero-01.png");
}

function setup() {
engine = Engine.create();
world = engine.world;
  createCanvas(3000,800);

  m = createSprite(1200,200,20,20);
  m.addImage(m1);
m.scale = 0.1;
ground = new Ground();
box1 = new Box(1020,550,70,70);
box2 = new Box(940,550,70,70);
box3 = new Box(860,550,70,70);
box4 = new Box(780,550,70,70);
box5 = new Box(700,550,70,70);

box6 = new Box(1020,480,70,70);
box7 = new Box(940,480,70,70);
box8 = new Box(860,480,70,70);
box9 = new Box(780,480,70,70);
box10 = new Box(700,480,70,70);

box11 = new Box(1020,410,70,70);
box12 = new Box(940,410,70,70);
box13 = new Box(860,410,70,70);
box14 = new Box(780,410,70,70);
box15 = new Box(700,410,70,70);

box16 = new Box(1020,340,70,70);
box17 = new Box(940,340,70,70);
box18 = new Box(860,340,70,70);
box19 = new Box(780,340,70,70);
box20 = new Box(700,340,70,70);

box21 = new Box(1020,270,70,70);
box22 = new Box(940,270,70,70);
box23 = new Box(860,270,70,70);
box24 = new Box(780,270,70,70);
box25 = new Box(700,270,70,70);

box26 = new Box(1020,200,70,70);
box27 = new Box(940,200,70,70);
box28 = new Box(860,200,70,70);
box29 = new Box(780,200,70,70);
box30 = new Box(700,200,70,70);

box31 = new Box(1020,130,70,70);
box32 = new Box(940,130,70,70);
box33 = new Box(860,130,70,70);
box34 = new Box(780,130,70,70);
box35 = new Box(700,130,70,70);

box36 = new Box(1020,60,70,70);
box37 = new Box(940,60,70,70);
box38 = new Box(860,60,70,70);
box39 = new Box(780,60,70,70);
box40 = new Box(700,60,70,70);

ball = new Ball();
rope = new Chain(ball.body,{x:450,y:50});
}

function draw() {
  background(g);  
Engine.update(engine);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
ball.display();
ground.display();
rope.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
box32.display();
box33.display();
box34.display();
box35.display();
box36.display();
box37.display();
box38.display();
box39.display();
box40.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}