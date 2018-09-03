function setup() {
	createCanvas(windowWidth, windowHeight);
	



}

function draw() {

	//create a variable
	// store a scaled mouseX to it

	// map function takes 5 arguments:
	// a value, an input range for that value,
	// and an output range for that argument.
	var scaledX = map(mouseX, 0, width, 0, 255); 
	
	// scaled mouseY
	var scaledY = map(mouseY, 0, height, 0, 255);
	
	//background color is now dependent on the location of the mouse at all times 
	background(scaledX,0,scaledY);
}