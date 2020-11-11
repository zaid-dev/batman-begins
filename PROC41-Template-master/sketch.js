const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop;

var engine, world;
var umbrella;

function preload(){}


function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

   // umbrella = new Umbrella(200,300);


    drop = new Drop(200,200);

}

function draw(){
    Engine.update(engine); 
    


    //umbrella.display();

    drop.display();
    drop.update();
}   