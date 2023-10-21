
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  ground =new Ground(200,height-10,width,20);
  ball1 = new Ball(50,50,20,"red")
  ball2 = new Ball(100,60,10,"blue")
  ball3 = new Ball(150,80,30,"white")
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show()
  ball1.showBall()
  ball2.showBall()
  ball3.showBall()
}

