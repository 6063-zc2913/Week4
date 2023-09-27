function setup() {
  createCanvas(windowWidth, windowHeight);
  background("gold");
  fill(0);
}

function draw() {

}

function mouseClicked() {
  fill(random(100,200),0,0);
  rect(mouseX, mouseY, 80, 80);

}
function mouseMoved(){
  stroke(0);
  line (mouseX, mouseY, 0,0);

}

function keyPressed(){
  if(key == "s"){
    saveCanvas("my canvas","jpg");
  } else if(key == "r"){
    background("gold");
  }

}