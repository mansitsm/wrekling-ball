const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,chain;
var boxes=[];
var box;
var gameState = "onSling";
var score=0;
function preload() {
   
    
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
    ball=new Ball(500,40,100);
chain=new SlingShot(ball.body,{x:500,y:40});
    for(var i=0;i<7;i++){
        box= new BaseClass(900,100,70,70);
        boxes.push(box);
        box=new BaseClass(800,100,70,70);
        boxes.push(box);
        box=new BaseClass(700,100,70,70);
        boxes.push(box);
    }

    //log6 = new Log(230,180,80, PI/2);
   
}

function draw(){
    
    background("white");
    
    Engine.update(engine);
    //strokeWeight(4);
   ground.display();
   ball.display();   
chain.display();
for(var i=0;i<21;i++){
    boxes[i].display();
}
}

function mouseDragged(){
    // if (gameState!=="launched"){
       Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


// function mouseReleased(){
//     slingshot.fly();
//     gameState = "launched";
// }

// function keyPressed(){
//     if(keyCode === 32){
//        // slingshot.attach(bird.body);
//     }
//}
