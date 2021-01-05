var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var particle;
var turn=0;
var gameState="start";
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

  

    
}
 


function draw() {
  background("black");
  textSize(20)
text("Score : "+score,20,30);
text("500",25,600);
text("500",100,600);
text("500",175,600);
text("500",275,600);
text("500",355,600);
text("100",425,600);
text("100",500,600);
text("100",575,600);
text("200",650,600);
text("200",725,600);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   */
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   strokeWeight(3);
stroke("yellow");
line(0,450,800,450);
text(mouseX,mouseX,mouseY);
if(particle!=null){
  particle.display();
  if(particle.body.position.y>760){
  if(particle.body.position.x>0 && particle.body.position.x<410){
    score=score+500;
    particle=null;
    if(turn>=5)gameState="end";
  }
  else if(particle.body.position.x>410 && particle.body.position.x<600){
    score=score+100;
    particle=null;
    if(turn>=5)gameState="end";
  }
  else if(particle.body.position.x>600 && particle.body.position.x<800){
    score=score+200;
    particle=null;
    if(turn>=5)gameState="end";
  }
}
console.log(gameState);
 console.log(turn)
 console.log(particle)
}
if(gameState==="end"){
  textSize(35);
  text("GAME OVER",300,400);
}
}
function mouseReleased(){
  console.log("yup");
  if(gameState!=="end"){
    turn++;
    particle=new Particle(mouseX,10,10,10);
  }
}