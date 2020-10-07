var bullet,wall,thicknes,speed,weight;

function setup(){
    createCanvas(1600,400);

    speed=random(223,321);
    weight=random(30,52);
    thickness=random(22,83)

    bullet=createSprite(50,200,50,50);
    bullet.velocityX=speed;
    wall=createSprite(1200,200,thickness,height/2);
    wall.shapeColor=80,80,80;
}

function draw(){
  background("red");
  bullet.collide(wall);

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor=(255,0,0);

    }
    if(damage<10)
    {
      wall.shapeColor=(0,255,0);

    }
  }
  function hasCollided(){
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;

    if(bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }
    return false;
  }
  /*
  car.velocityX=speed;
  if (car.x -  wall.x <  wall.width/2 + car.width/2
    && wall.x - car.x <  wall.width/2 + car.width/2
    && car.y - wall.y <  wall.height/2 + car.height/2
    && wall.y -  car.y < wall.height/2 + car.height/2) {
  return true;
  }
  else {
  return false;
  }

  if(wall.x-car.x< (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
 }
 if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
 }
 if (deformation<100){
   car.shapeColor=color(0,255,0);
 }
}
 */
 // drawSprites();
  }
  



