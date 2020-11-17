var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight  = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);
  
  if(wall.x-car.x < (car.width+wall.width)/2)
   {
   car.velocityX= 0;
   var deformation = 0.5*weight*speed*speed/22509;
   if(deformation>180)
   {
     car.shapeColor = color(255,0,0);
     fill("red");
     textSize(30);
     text("LETHAL",750,200);
   }
   if(deformation<180 && deformation>100){
     car.shapeColor = color(230,230,0);
     fill("yellow");
     textSize(30);
     text("AVERAGE",750,200);

   }
   if(deformation<100){
     car.shapeColor = color(0,255,0);
     fill("green");
     textSize(30);
     text("GOOD",750,200);
   }


   }
  drawSprites();
}