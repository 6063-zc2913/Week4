function setup() {
  createCanvas(windowWidth, windowHeight);

  fill(0);
}

let xPos = 0;
let xVelocity = 10;

function draw() {
  background("orange");
  ellipse(xPos, 50, 50, 50);
  xPos = xPos + xVelocity;

  if(xPos > width){
  xVelocity = -10;

  }
  if(xPos < 0){
    xVelocity = 10;
  }
  

}
