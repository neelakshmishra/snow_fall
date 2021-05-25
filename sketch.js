var engine,world;
var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,rope
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,bg

function preload(){
 bg = loadImage("snow3.jpg")
}
function setup(){
createCanvas(700,700)
engine=Matter.Engine.create()
world = engine.world
ground= new Ground(1,680,855,20)
box1 = new Box(random(0,700),50)
box2 = new Box(random(0,700),50)
box3 = new Box(random(0,700),50)
box4 = new Box(random(0,700),50)
box5 = new Box(random(0,700),50)
box6 = new Box(random(0,700),50)
box7 = new Box(random(0,700),50)
box8 = new Box(random(0,700),50)
box9 = new Box(random(0,700),50)
box10 = new Box(random(0,700),50)
box11 = new Box(random(0,700),50)
box12 = new Box(random(0,700),50)
box13 = new Box(random(0,700),50)
box14 = new Box(random(0,700),50)
box15 = new Box(random(0,700),50)
box16 = new Box(random(0,700),50)
box17 = new Box(random(0,700),50)
box18 = new Box(random(0,700),50)
box19 = new Box(random(0,700),50)
box20 = new Box(random(0,700),50)


}
function draw(){
    Matter.Engine.update(engine)
background (bg)
//ground.display();
box1.show();
box2.show();
box3.show();
box4.show();
box5.show();
box6.show();
box7.show();
box8.show();
box9.show();
box10.show();
box11.show();
box12.show();
box13.show();
box14.show();
box15.show();
box16.show();
box17.show();
box18.show();
box19.show();
box20.show();


}

