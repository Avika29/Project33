const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "play";
var particle;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var turn = 0;
var count = 0;

function setup() {
  createCanvas(900, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);


   for (var k = 0; k <=900; k = k + 100) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175,10));
    }

    for (var j = 50; j <width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10));
    }

     for (var j = 40; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275,10));
    }

     for (var j = 20; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375,10));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);

  textSize(20)
  text("Score : "+score,20,30);

 
  textSize(20)
  text("500",50,550);
  
  textSize(20)
  text("500",150,550);

  textSize(20)
  text("500",250,550);

  textSize(20)
  text("100",350,550);

  textSize(20)
  text("100",450,550);

  textSize(20)
  text("100",550,550);

  text("200",650,550);

  text("200",750,550);

  text("200",850,550);

  if(particle!=null){
    particle.display();

     if(particle.body.position.y>500){
       if(particle.body.position.x>600 && particle.body.position.x<900){
         score = score+200;
         particle=null;
       }     
       else if(particle.body.position.x<300){
          score = score+500;
          particle=null;
        }     
       else if(particle.body.position.x>301 && particle.body.position.x<600){
          score = score+100;
          particle=null;
        }
        if(count>=5)gameState="end";
  }
}


    
  

  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed()
{
  if(gameState!=="end"){
     count++;
     particle = new Particle(mouseX,10,10,10)
  }
    else{
      textSize(20);
      text("Game Over",400,400)
    }

}