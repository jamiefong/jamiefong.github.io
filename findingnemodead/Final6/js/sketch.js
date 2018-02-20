var nemoendtitle;
var time;
var gradientY;
var distance=10;
var karla;
var song;
var finalgradientimg;

var nX, nY;
var targetnX = 900;
var targetnY = 450;

var letGo = false;
var deg = 0;

// var time;
// // var nemo = [];

// var end_gradient_y = 500;

function preload() {
	karla = loadFont("../Final6/Karla-Bold.ttf");
	song = loadSound("../Final6/music/foundnemodead.m4a");
	finalgradientimg = loadImage("../Final6/img/gradient3.png")
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
	nemo = new Nemo (-50, windowHeight/4 * 3, 35, 35, color(242, 104, 68) );
	gradient = new Gradient(0, -500, windowWidth, 7000);

	nX = new Tween(windowWidth/4*3, .1, .1);
	nY = new Tween(windowHeight/2, .1, .1);
	nX.target(targetnX);
	nY.target(targetnY);

	song.setVolume(0.1);
	song.play(); // this is a javascript functon you made
	fadeOutNext();
	fadeNext();
	fadeTitle();
	// that is in main.js and uses jquery


}

function draw() {
	background(255);
	nX.update();
	nY.update();
	noStroke();
	gradient.draw();
	gradient.move();

// var targetnX = 1200;
// var targetnY = 600;

// var targetmX = 100;
// var targetmY = 400;

// var targetdX = 200;
// var targetdY = 500;

// var targetbX = 1200;
// var targetbY = 500;

	nX.target(targetnX);
	nY.target(targetnY);

		targetnX = windowWidth/4*3;
		targetnY = windowHeight/2;

		nemo.rotate();

		if (millis() > 6000) {
			targetnX = windowWidth/4*3;
			targetnY = windowHeight/3*2;
		}

	

 } 

function Nemo(_x, _y, _w, _h, _color) {

	this.x = _x; // this is 100
	this.dx = 2.5;
	this.hx = windowWidth+100; // this is 400
	this.lx = this.x - 100;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.c = _color;
	this.easing = 0.0005;
	this.mX;
	this.mY;
	this.direction = 90;



	this.move = function() {
		if( this.x > this.hx ) { // is 100 > or equal to 400?
			this.dx = this.dx;
		// } else if ( this.x < this.lx ) {
		// 	this.dx = -this.dx;
		}

		this.x += this.dx;

		if (millis() > 15000 && millis() < 22000) {
			this.dx = 0;
			this.x = mouseX;
			this.mX = (mouseX - this.x) - 10;
  			this.x += this.mX * this.easing;

  			this.y = mouseY;
			this.mY = (mouseY - this.y) + 10;
  			this.y += this.mY * this.easing;

		} else if (millis() > 22000 && this.x < windowWidth+100) {
				this.dx = 4;
		}

		
		// if( this.dx > 0 ) {
		// 	this.dx -= .03;	
		// }
	}

	this.draw = function() {

		fill(this.c);
		arc(nX.value, nY.value, 35, 35, PI/2, PI*3/2, PIE);

		fill(255);
		arc(nX.value, nY.value, 35*0.65, 35*0.65, PI/2, PI*3/2, PIE);


		fill(this.c);
		arc(nX.value, nY.value, 35*0.35, 35*0.35, PI/2, PI*3/2, PIE);


	}

		this.rotate = function() {

		fill(this.c);
		arc(nX.value, nY.value, 35, 35, PI*11/6, PI*5/6, PIE);

		fill(255);
		arc(nX.value, nY.value, 35*0.65, 35*0.65, PI*11/6, PI*5/6, PIE);


		fill(this.c);
		arc(nX.value, nY.value, 35*0.35, 35*0.35, PI*11/6, PI*5/6, PIE);


	}

	this.text = function() {
		if (millis() > 1000 && millis() < 1000) {
		fill(255);
		textFont(karla);
		textSize(22);
		text('!', nX.value - 25, nY.value - 15);
		}
	}

}



function Gradient(_x, _y, _w, _h) {
	this.x = _x;
	this.y = _y; //-5000
	this.w = _w;
	this.h = _h;
	this.dy = 2;

	this.draw = function() {
		image(finalgradientimg, this.x, this.y, this.w, this.h);
	}

	this.move = function (){
		if (this.y < windowHeight/3*2) {
			this.y += this.dy;
		}

		if (this.y >= windowHeight/3*2) {
			print(millis() + "end title");
		}

	}

}






