var Y_AXIS = 1;
var c1, c2;
var nemotitle;
var time;
var gradientY;
var distance=10;
var karla;
var song;
var gradientimg;
var darkgradientimg;

var nX, nY;
var targetnX = 300;
var targetnY = 300;

var dX, dY;
var targetdX = 500;
var targetdY = 500;

// var time;
// // var nemo = [];

// var end_gradient_y = 500;

function preload() {
	gradientimg = loadImage("../Final3/img/gradienta.png");
	darkgradientimg = loadImage("../Final3/img/gradient2.png");
	karla = loadFont("../Final3/Karla-Bold.ttf");
	song = loadSound("../Final3/music/deepshit.m4a");
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// this is the setup function
// p5js will call this automatically when the page loads
function setup() {
	// creatCanvas defines the canvas size of your sketch
	createCanvas( windowWidth, windowHeight );
	ellipseMode(CENTER);
	time = millis();
	//x, y, width, height, color
	gradient = new Gradient(-4000, 0, 6100, windowHeight + 200);
	marlin = new Marlin (windowWidth/2 - 150, windowHeight/2, 70, 70, color(242, 104, 68) );
	dory = new Dory (windowWidth/2 + 100, windowHeight/2, 80, 80, color(74, 136,199) );
	bruce = new Bruce (200, 400, 300, 300, color(115,191,234) );
	c1 = color(54, 162, 186);
	c2 = color(94,121,132);
	nX = new Tween(100, .1, .8);
	nY = new Tween(windowHeight/2, .1, .9);
	nX.target(targetnX);
	nY.target(targetnY);

	dX = new Tween(100, .1, .9);
	dY = new Tween(500, .1, 1);
	dX.target(targetdX);
	dY.target(targetdY);

	song.setVolume(0.1);
	song.play(); // this is a javascript functon you made
	fadeOutNext();
	fadeNext();
	// that is in main.js and uses jquery


}

function draw() {
	background(54, 162, 186);
	nX.update();
	nY.update();
	dX.update();
	dY.update();
	noStroke();
	setGradient(0, 0, windowWidth, windowHeight, c1, c2, Y_AXIS);
	noStroke();
	gradient.draw();
	gradient.overlay();
	gradient.move();
	marlin.draw();
	dory.draw();

	if( abs(nX.value - targetnX) < 2 && abs(nY.value - targetnY) < 2 ) {
		targetnX = random( targetnX - 5, targetnX + 70 );
		targetnY = random( targetnY - 20, targetnY + 20 );
		nX.target(targetnX);
		nY.target(targetnY);
	}

	if( abs(dX.value - targetdX) < 2 && abs(dY.value - targetdY) < 2 ) {
		targetdX = random( targetdX - 5, targetdX + 50 );
		targetdY = random( targetdY - 20, targetdY + 20 );
		dX.target(targetdX);
		dY.target(targetdY);
	}

	if (targetnX > windowWidth) {
		print(millis() + "hello");
	}

 } 

function Marlin(_x, _y, _w, _h, _color) {
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.c = _color;
	this.dx = 2;
	this.hx = windowWidth+100;


	this.draw = function() {
		fill(this.c);
		ellipse(nX.value, nY.value, this.w, this.h);

		fill(255);
		ellipse(nX.value, nY.value, this.w*0.75, this.h*0.75);

		fill(this.c);
		ellipse(nX.value, nY.value, this.w*0.45, this.h*0.45);
	}

	this.move = function() {


	}

	this.text = function() {
		

	}
}

function Dory(_x, _y, _w, _h, _color) {
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.c = _color;

	this.draw = function() {
		fill(0);
		ellipse(dX.value, dY.value, this.w*1.31, this.h*1.31);

		fill(this.c);
		ellipse(dX.value, dY.value, this.w, this.h);

		fill(243, 228, 4);
		ellipse(dX.value, dY.value, this.w*0.69, this.h*0.69);

		fill(this.c);
		ellipse(dX.value, dY.value, this.w*0.41, this.h*0.41);
	}
}

function Bruce(_x, _y, _w, _h, _color) {
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.c = _color;

	this.draw = function() {
		fill(this.c);
		ellipse(this.x, this.y, this.w, this.h);

		fill(255);
		ellipse(this.x, this.y, this.w*0.73, this.h*0.73);

		fill(132, 142, 143);
		ellipse(this.x, this.y, this.w*0.45, this.h*0.45);
	}
}

function Gradient(_x, _y, _w, _h) {
	this.x = windowWidth;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.dx = 20;

	this.draw = function() {
		image(gradientimg, -4000, this.y, this.w, this.h);
	}

	this.overlay = function() {
		image(darkgradientimg, this.x, this.y, this.w, this.h);
	}

	this.move = function (){
		if (this.x > -4000) {
			this.x -= this.dx;
		} if (this.x <= -4000) {
			gradientstop = true;
			print("please");
		}

	}

}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
 
  // else if (axis == X_AXIS) {  // Left to right gradient
  //   for (var i = x; i <= x+w; i++) {
  //     var inter = map(i, x, x+w, 0, 1);
  //     var c = lerpColor(c1, c2, inter);
  //     stroke(c);
  //     line(i, y, i, y+h);
  //   }
  // }

}








