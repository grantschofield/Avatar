
var ball = {
  x: 300,
  y: 200,
  xvelocity: 9,
  yvelocity: -7
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(40);
  move()
  bounce()
 ellipse(ball.x, ball.y, 50, 50);
}



function move() {
  ball.x = ball.x + ball. xvelocity;
  ball.y = ball.y + ball.yvelocity;
}



function bounce() {
  if (ball.x > width ) {
    ball.xvelocity = ball. xvelocity * -1
  }
  if (ball.x < 0) {
     ball.xvelocity = ball. xvelocity * -1
  }
  if (ball.y > height ) {
    ball.yvelocity = ball.yvelocity * -1 
  }
  if (ball.y < 0) {
     ball.yvelocity = ball.yvelocity * -1 
  }










}
