const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gamestate="onsling";
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var ground1;
var ground2;
var ground3;
var sling ;
var score=0;
var launcher,launcherImage,backGroungImg;

async function getTime() {

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json()
    console.log(responseJSON);
    var daytime=responseJSON.datetime;
    var hour= daytime.slice(11,13)
    console.log(hour)
    if (hour>06 && hour<18){

        backgroundImg = loadImage("bg.png");

    }
    else{

        backgroundImg = loadImage("bg2.png");

    }
}

function preload() {

    launcherImage=loadImage("polygon.png")

     getTime();
}



function setup() {

    const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


    engine = Engine.create(580,350,600,10);
	world = engine.world;

	Engine.run(engine);  

block1= new Block (300,275,30,40);
block2= new Block (330,275,30,40);
block3= new Block (360,275,30,40);
block4= new Block (390,275,30,40);
block5= new Block (420,275,30,40);
block6= new Block (450,275,30,40);
block7= new Block (480,275,30,40);
block8= new Block (330,235,30,40);
block9= new Block (360,235,30,40);
block10= new Block (390,235,30,40);
block11= new Block (420,235,30,40);
block12= new Block (450,235,30,40);
block13= new Block (360,195,30,40);
block14= new Block (390,195,30,40);
block15= new Block (420,195,30,40);
block16= new Block (390,155,30,40);

ground1 = new Ground (590,400,1100,10);
ground2 = new Ground (700,200,200,10);
ground3 = new Ground (390,300,250,10);


launcher = Bodies.rectangle(200,111,50,50)
World.add(world,launcher)
sling = new SlingShot (launcher,{ x: 200, y:50});

} 

function draw() {


    if (backgroundImg){
        background(backgroundImg);
        }

    text("Score  " + score, width-300, 50)

    createCanvas(600,800)  

drawSprites()

ground1.display();
ground2.display();
ground3.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display(); 

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();

sling.display(); 
image(launcherImage,launcher.position.x,launcher.position.y,50,50)
}

function mouseDragged(){
    if(gamestate!=="launched"){
    Matter.Body.setPosition(launcher, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    sling.fly();
    gamestate="launched";
}

function keyPressed(){

    if (keyCode===32) {
    
    sling.attach(launcher.body);
}  
} 