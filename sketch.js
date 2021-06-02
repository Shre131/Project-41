const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var batmanImage,batman;
var drops=[];
var maxDrops=100;
var engine,world;





function preload(){
    batmanImage=loadAnimation("images/Walking Frame/w1.png","images/Walking Frame/w2.png","images/Walking Frame/w3.png","images/Walking Frame/w4.png","images/Walking Frame/w5.png","images/Walking Frame/w6.png","images/Walking Frame/w7.png","images/Walking Frame/w8.png")
}

function setup(){
    createCanvas(400,605);
    engine=Engine.create();
    world=engine.world;

batman=createSprite(200,500,50,50);   
 batman.addAnimation("bruce",batmanImage);
 batman.scale=0.3;   
 if(frameCount%150===0){
     for(var i=0;i<maxDrops;i++){
         drops.push(new DROPS(random(0,400),random(0,200)));
     }
 }

}

function draw(){
 
    background(0);
    Engine.update(engine);
    for(var i=0;i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
    }
    batman.display();   
}   

