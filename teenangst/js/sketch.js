// points is an array that will hold our points
var points = [];
var r;
var g;
var b;


function windowResized() {
	resizeCanvas( windowWidth, windowHeight );
}

function setup() {
	createCanvas( windowWidth, windowHeight );

	// stroke will set the stroke color
	// 0 is just black
	// stroke( random(0,256), random(0,256), random(0,256) );
	// noStroke();

	// smooth will use anti-aliasing
	// a little more CPU is need, but we have powerful machines!
	smooth();

}

// function drawLines() {
// 	for( var i = 0; i < points.length - 1; i++ ) {
// 		// if there is no point skip it!
// 		if( points[i] != -1 ) {
// 		rectMode(CENTER);
// 			fill( random(0,256), random(0,256), random(0,256));
// 			rect( points[i].x, points[i].y, 10, 10);
// 		}
// 	}
// }

function drawLines() {
	for( var i = 0; i < points.length - 1; i++ ) {
		// if there is no point skip it!
		if( points[i] != -1 ) {
			var r= random(0,256);
			var g= random(0,256);
			var b= random(0,256);
			// beginShape();
			// vertex(mouseX, mouseY);
			// vertex(random(0,windowWidth), random(0,windowHeight));
			// vertex(random(0,windowWidth), random(0,windowHeight));
			// vertex(mouseX, mouseY);
			// endShape(CLOSE);


			// rect( points[i].x, points[i].y, 10, 10);
		}
	}
}

function draw() {
	// background(255, 255, 255);

	// now always draw
	// but if the mouse is pressed
	// add the point to points!
		drawLines();

	if( mouseIsPressed ) {
		var point = {
			x: mouseX,
			y: mouseY
		}

			noFill();
			stroke( r, g, b);
			beginShape();
			vertex(mouseX, mouseY);
			vertex(random(0,windowWidth), random(0,windowHeight));
			vertex(random(0,windowWidth), random(0,windowHeight));
			vertex(mouseX, mouseY);
			endShape(CLOSE);

		points.push( point );
	} else {
		// if mouse is not pressed put a -1 in there
		// that way we can skip the gaps!
		// cool!
		points.push(-1);
	}

	// we made this up
	// it will draw our lines

}

function keyPressed() {
	if(keyCode== RETURN) {
		background(255,255,255);
	}


}
