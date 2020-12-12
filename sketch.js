const Bodies = Matter.Bodies;
const Body = Matter.Bodies;
const Engine = Matter.Engine;
const World =Matter.World;

var walking;
var umbrella;
var maxDrops = 100;
var drop1,drop2,drop3,drop4,drop5,drop6,drop7,drop8,drop9,drop10,drop11,drop12,drop13,drop14,drop15,drop16,drop17,drop18,drop19,drop20;
var dropImg;
var engine,world;

function preload(){
    walking = loadAnimation("walking_1-300x300.png","walking_2-300x300.png","walking_3-300x300.png","walking_4-300x300.png","walking_5-300x300.png","walking_6-300x300.png","walking_7-300x300.png","walking_8-300x300.png");
    dropImg = loadImage("drop-removebg-preview-20x20.png")
}

function setup(){
   createCanvas(500,800)
   engine = Engine.create()
   world = engine.world;
   umbrella = new Umbrella(250,500,10,10)
  
  drop1 = new Drops(random(0,500),random(0,20),10,10)
  drop2 = new Drops(random(0,500),random(0,20),10,10)
  drop3 = new Drops(random(0,500),random(0,20),10,10)
  drop4 = new Drops(random(0,500),random(0,20),10,10)
  drop5 = new Drops(random(0,500),random(0,20),10,10)
  drop6 = new Drops(random(0,500),random(0,20),10,10)
  drop7 = new Drops(random(0,500),random(0,20),10,10)
  drop8 = new Drops(random(0,500),random(0,20),10,10)
  drop9 = new Drops(random(0,500),random(0,20),10,10)
  drop10 = new Drops(random(0,500),random(0,20),10,10)
  drop11 = new Drops(random(0,500),random(0,20),10,10)
  drop12 = new Drops(random(0,500),random(0,20),10,10)
  drop13 = new Drops(random(0,500),random(0,20),10,10)
  drop14 = new Drops(random(0,500),random(0,20),10,10)
  drop15 = new Drops(random(0,500),random(0,20),10,10)
  drop16 = new Drops(random(0,500),random(0,20),10,10)
  drop17 = new Drops(random(0,500),random(0,20),10,10)
  drop18 = new Drops(random(0,500),random(0,20),10,10)
  drop19 = new Drops(random(0,500),random(0,20),10,10)
  drop20 = new Drops(random(0,500),random(0,20),10,10)

}

function draw(){
    background("black")
    umbrella.display()
    
        if(frameCount%5===0){
            drop1.drawEllipse()
            drop1.updatePosition()
            drop2.drawEllipse()
            drop2.updatePosition()
            drop3.drawEllipse()
            drop3.updatePosition()
            drop4.drawEllipse()
            drop4.updatePosition()
            drop5.drawEllipse()
            drop5.updatePosition()
            drop6.drawEllipse()
            drop6.updatePosition()
            drop7.drawEllipse()
            drop7.updatePosition()
            drop8.drawEllipse()
            drop8.updatePosition()
            drop9.drawEllipse()
            drop9.updatePosition()
            drop10.drawEllipse()
            drop10.updatePosition()
            drop11.drawEllipse()
            drop11.updatePosition()
            drop12.drawEllipse()
            drop12.updatePosition()
            drop13.drawEllipse()
            drop13.updatePosition()
            drop14.drawEllipse()
            drop14.updatePosition()
            drop15.drawEllipse()
            drop15.updatePosition()
            drop16.drawEllipse()
            drop16.updatePosition()
            drop17.drawEllipse()
            drop17.updatePosition()
            drop18.drawEllipse()
            drop18.updatePosition()
            drop19.drawEllipse()
            drop19.updatePosition()
            drop20.drawEllipse()
            drop20.updatePosition()
            
        }

   drawSprites(); 
}   

