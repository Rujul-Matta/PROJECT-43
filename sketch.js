var hr, sec, min;
var hrAngle,minAngle, secAngle;
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  fill(225)
  textSize(50);
  text("!! Clock is running !!", width/2 - 225, 75)
  translate(width/2,height/2);
  


  hr = hour();
  min = minute();
  sec = second();
  hrAngle = map(hour(),0,60,0,360);
  minAngle = map(min,0,60,0,360);
  secAngle = map(sec,0,60,0,360);

  // Hour hand starts
  push();
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(10);
  line(0,0,75,0);
  pop();

  noFill();
  stroke(0,255,0);
  strokeWeight(10);
  arc(0,0,250,250,25,hrAngle);
  //Hour hand Finish

  //Minute Hand starts 
  push();
  rotate(minAngle);
  stroke('red');
  strokeWeight(10);
  line(0,0,100,0);
  pop();

  noFill();
  stroke('red');
  strokeWeight(10);
  arc(0,0,275,275,25,minAngle);
  //Minute Hand Finish

  //Second Hand Starts
  push();
  rotate(secAngle);
  stroke(3,254,247);
  strokeWeight(10);
  line(0,0,125,0);
  pop();

  noFill();
  stroke(3,254,247);
  strokeWeight(10);
  arc(0,0,300,300,25,secAngle);
  //Second Hand finishes
  // drawSprites();

 
}

