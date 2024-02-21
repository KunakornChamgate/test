let img;

function preload() {
  img = loadImage('Four.JPG');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  function draw() {
    background(206, 231, 230);

    stroke(0, 108, 103)
    strokeWeight(6)
    noFill()
    rectMode(CENTER)
    rect(windowWidth/2, windowHeight/2+290-20,700,180,15)

    noStroke()
    fill(0, 108, 103)
    textAlign(CENTER)
    textStyle(NORMAL)
    textFont('Courier new', 28)
    text("HELLO! MY NAME IS KUNAKORN CHAMGATE.",windowWidth/2, windowHeight/2+240)
    text("MY NICKNAME IS FOUR.",windowWidth/2, windowHeight/2+280)
    text("I'M AN INDUSTRIAL DESIGN STUDENT.",windowWidth/2, windowHeight/2+320)

    fill(0, 108, 103)
    textAlign(CENTER)
    textStyle(BOLD)
    textFont('Courier new', 45)
    text("PROFILE",windowWidth/2, windowHeight/6-50)

    fill(0, 108, 103)
    noStroke()
    rectMode(CENTER)
    rect(windowWidth/2, windowHeight/2-70, 320, 420, 15)

    imageMode(CENTER)
    image(img, windowWidth/2, windowHeight/2-70, 300, 400)
  }