
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roofObject1=new Roof(500,600,50,100);

	bobObject1=new bob(250,300)
	bobObject2=new bob(300,300)
	bobObject3=new bob(350,300)
	bobObject4=new bob(400,300)
	bobObject5=new bob(450,300)
	



rope1=new rope(bobObject1.Body,roofObject1.Body,-100,0);
World.add(world,rope1)
rope2=new rope(bobObject2.Body,roofObject1.Body,-50,0);
World.add(world,rope2)
rope3=new rope(bobObject3.Body,roofObject1.Body,0,0);
World.add(world,rope3)
rope4=new rope(bobObject4.Body,roofObject1.Body,+50,0);
World.add(world,rope4)
rope5=new rope(bobObject5,roofObject1.body,+100,0);
World.add(world,rope5)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

roofObject1.display();






}




