
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var  bobObject1,bobObject2,bobObject4,bobObject5;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(407,100,400,50);
	bobObject1 = new Bob(260,400,20);
	bobObject2 = new Bob(330,400,20);
	bobObject3 = new Bob(400,400,20);
	bobObject4 = new Bob(470,400,20);
	bobObject5 = new Bob(540,400,20);
	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
}



