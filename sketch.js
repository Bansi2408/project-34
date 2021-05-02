const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;

var myEngine, myWorld;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

}

function draw() {
  background(0);
 
  Engine.update(myEngine);


}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body,{x:mouseX , y:mouseY});
}