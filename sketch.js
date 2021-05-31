var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = color(80, 80, 80);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "aqua";
  car.velocityX = speed;

}

function draw() {
  background("silver");
  console.log(car.x);
  if (wall.x - car.x < (car.width + wall.width) / 2) 
  {
    var deformation = 0.5 * weight * speed * speed / 22500;
    car.velocityX = 0;
    if (deformation > 180) 
    {
      car.shapeColor = color(255, 0, 0);
      textSize(40);
      fill("black");
      text("The red car is not safe for you", width / 3, height / 2);
      textSize(30);
      text("Press 'space' to Continue", width / 3 + 90, height / 2 + 80);
    }
    if (deformation < 180 && deformation > 100) 
    {
      car.shapeColor = color(230, 230, 0);
      fill("black");
      textSize(40);
      text("The yellow car good for you", width / 3, height / 2);
      textSize(30);
      fill("black");
      text("Press 'space' to Continue", width / 3 + 90, height / 2 + 80);
    }
    if (deformation < 100) 
    {
      car.shapeColor = color(0, 255, 0);
      textSize(40);
      fill("black");
      text("The green car is better for you", width / 3, height / 2);
    }
  }
  if(keyDown('space') && deformation > 180)
  {
    reset();
  }
  else if(keyDown('space') && (deformation < 180 && deformation > 100))
  {
    reset();
  }


  drawSprites();
}
function reset() {
  speed = random(55, 90);
  car.x = 50;
  car.velocityX = speed;
  car.shapeColor = "aqua";
}