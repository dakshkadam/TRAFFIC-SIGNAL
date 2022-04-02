var red,yellow,green;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background("lightblue");
  fill("black");
  rect(100, 50, 100, 300); 
  rect(140, 350, 20, 300);
}


function draw() {
  
  red = new Signal(150, 100, "red");
  red.appear();
  text ("STOP",250,100)
  yellow = new Signal(150, 200,"yellow");
  yellow.appear();
  text ("GET READY", 250,200);
  green = new Signal(150, 300,"green");
  green.appear();
  text ("GO", 250,300);

  //Create objects for Green and yellow lights :
}
    

