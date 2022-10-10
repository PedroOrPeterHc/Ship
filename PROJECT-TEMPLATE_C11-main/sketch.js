var ship,ocean;
function preload(){
shipImg1= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImg=loadImage("sea.png")


}

function setup(){
  createCanvas(400,400);
  
ship = createSprite(200,200,20,20);
ship.addAnimation("shipImg1",shipImg1);
ship.scale=0.3;
//shipImg=loadImage("ship-1.png")

ocean = createSprite(400,200,20,20);
ocean.scale=0.5;
ocean.addImage(seaImg);

ocean.setvelocityX=-3;


}

function draw() {
 background("blue");
console.log(ship.x)

ocean.depth = ship.depth
ship.depth = ship.depth +1;

if (ocean.x <0){

ocean.x = ocean.width/2;
}


 drawSprites();
}
