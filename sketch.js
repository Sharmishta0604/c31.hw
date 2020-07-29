const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var engine,world;
var divisions=[];
var plinkos=[];
var particles=[];
var divisionHeight=300;
function setup() {
  var canvas =createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  floor=new Ground(240, 790, 480, 10);
  
  
  for(var k=0; k<=width; k+=80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var k=40; k<=width; k+=50){
    plinkos.push(new Plinko(k,75,10,divisionHeight));
  }

  for(var k=15; k<=width; k+=50){
    plinkos.push(new Plinko(k,175,10,divisionHeight));
  }

  for(var k=40; k<=width; k+=50){
    plinkos.push(new Plinko(k,275,10,divisionHeight));
  }

  for(var k=15; k<=width; k+=50){
    plinkos.push(new Plinko(k,375,10,divisionHeight));
  }

  
}

function draw() {
  background(0,0,0);
  Engine.update(engine); 
  floor.display(); 
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var k=0; k<plinkos.length; k++){
    plinkos[k].display();
  }



for(var k=0; k<divisions.length; k++){
  divisions[k].display();
}

for(var k=0; k<particles.length; k++){
  particles[k].display();
}
console.log(mouseY);

}