// Create global variables for ball position, ball properties
let ballX, ballY;
let ballSpeedX, ballSpeedY;
let ballRadius;

// set up everything that doesn't change
function setup() {
  createCanvas(400, 400);
  background(225);
  frameRate(160);
  
  // Initialize ball position and properties
  ballX = width / 2;
  ballY = height / 2;
  ballSpeedX = 15;
  ballSpeedY = 1;
  ballRadius = 20;
}

// create a ball on a screen 
function draw() {
  background(0); // Clear the screen for each frame

  // Draw the ball
  fill('white');
  noStroke();
  ellipse(ballX, ballY, ballRadius * 12, ballRadius * 1);

  // move a ball continuously until it reaches the boundary of a screen
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // when the ball reaches the boundary, reverse the movement
  if (ballX + ballRadius > width || ballX - ballRadius < 0) {
    ballSpeedX *= -1;
  }
  if (ballY + ballRadius > height || ballY - ballRadius < 0) {
    ballSpeedY *= -1;
  }
}
