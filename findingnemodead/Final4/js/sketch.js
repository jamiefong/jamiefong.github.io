var Y_AXIS = 1;
var c1, c2;
var nemotitle;
var time;
var gradientY;
var distance=10;
var karla;
var song;

var nX, nY;
var targetnX = 1200;
var targetnY = 550;

var mX, mY;
var targetmX = 100;
var targetmY = 350;

var dX, dY;
var targetdX = 200;
var targetdY = 450;

var bX, bY;
var targetbX = 1650;
var targetbY = 450;

// var time;
// // var nemo = [];

// var end_gradient_y = 500;

function preload() {
	karla = loadFont("../Final4/Karla-Bold.ttf");
	song = loadSound("../Final4/music/bitten.m4a");
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
	marlin = new Marlin (windowWidth/2 - 150, windowHeight/2, 70, 70, color(242, 104, 68) );
	dory = new Dory (windowWidth/2 + 100, windowHeight/2, 80, 80, color(74, 136,199) );
	bruce = new Bruce (200, 400, 300, 300, color(115,191,234) );
	c1 = color(54, 162, 186);
	c2 = color(94,121,132);

	nX = new Tween(4000, .4, .1);
	nY = new Tween(450, .5, .1);
	nX.target(targetnX);
	nY.target(targetnY);

	mX = new Tween(-100, .1, .2);
	mY = new Tween(windowHeight/2 - 50, .5, .1);
	mX.target(targetmX);
	mY.target(targetmY);

	dX = new Tween(-100, .1, .2);
	dY = new Tween(windowHeight/4*3 - 50, .5, .1);
	dX.target(targetdX);
	dY.target(targetdY);

	bX = new Tween(8000, .4, .6);
	bY = new Tween(450, .5, .1);
	bX.target(targetbX);
	bY.target(targetbY);

	song.setVolume(0.1);
	song.play(); // this is a javascript functon you made
	fadeOutNext();
	fadeNext();
	// that is in main.js and uses jquery


}

function draw() {
	background(49, 57, 59);
	nX.update();
	nY.update();
	mX.update();
	mY.update();
	dX.update();
	dY.update();
	bX.update();
	bY.update();
	noStroke();
	noStroke();
	nemo.draw();
	marlin.draw();
	dory.draw();
	bruce.draw();
	nemo.text();
	marlin.text();
	dory.text();

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
	mX.target(targetmX);
	mY.target(targetmY);
	dX.target(targetdX);
	dY.target(targetdY);
	bX.target(targetbX);
	bY.target(targetbY);

	if (millis () >= 1000 && millis()<= 3000) {
		targetmX = 100;
		targetmY = 350;
		targetnX = 1200;
		targetnY = 550;
		targetdX = 200;
		targetdY = 450;
		targetbX = 1650;
		targetbY = 450;

	}

	if (millis() > 3000 && millis() < 7000) {
		targetnX = 1000;
		targetnY = 450;
		targetmX = 500;
		targetmY = 450;
	}

	if (millis() > 7000 && millis() < 9000) {
		targetnX = 900;
		targetnY = 450;

		targetbX = 1150;
		targetbY = 450;
	}

	if (millis() > 10000) {
		targetbX = 1050;
		targetmX = random( targetmX - 3, targetmX + 3 );
		targetmY = random( targetmY - 3, targetmY + 3 );
		// targetdX = random( targetdX - 3, targetmX + 3 );
		targetdY = random( targetdY - 3, targetdY + 3 );
		// targetbX = random( targetbX - 2, targetX + 2 );
		// targetbY = random( targetbY - 2, targetmY + 2 );


		// mX.target(targetmX);
		// mY.target(targetmY);

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
		ellipse(nX.value, nY.value, this.w, this. h);

		fill(255);
		ellipse(nX.value, nY.value, this.w*0.65, this.h*0.65);

		fill(this.c);
		ellipse(nX.value, nY.value, this.w*0.35, this.h*0.35);
	}

	this.text = function() {
		if (millis() > 3000 && millis() < 6000) {
		fill(255);
		textFont(karla);
		textSize(22);
		text('!', nX.value - 25, nY.value - 15);
		}
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
		ellipse(mX.value, mY.value, this.w, this.h);

		fill(255);
		ellipse(mX.value, mY.value, this.w*0.75, this.h*0.75);

		fill(this.c);
		ellipse(mX.value, mY.value, this.w*0.45, this.h*0.45);
	}

	this.move = function() {
	}

	this.text = function() {
		
	if (millis() > 3000 && millis() < 6000) {
		fill(255);
		textFont(karla);
		textSize(30);
		text('!', mX.value + 35, mY.value - 30);
		}

	if (millis() > 7000 && millis() < 10000) {
		fill(255);
		textFont(karla);
		textSize(30);
		text('!!', mX.value + 35, mY.value - 30);
	}

	if (millis() > 10000) {
		fill(255);
		textFont(karla);
		textSize(30);
		text('!!!', mX.value + 35, mY.value - 30);
	}

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

	this.text = function() {
		
	if (millis () >= 2000 && millis()<= 3000) {
		fill(255);
		textFont(karla);
		textSize(32);
		text('!', dX.value + 60, dY.value - 40);
		}

	if (millis () >= 7000 && millis()<= 10000) {
		fill(255);
		textFont(karla);
		textSize(32);
		text('!!', dX.value + 60, dY.value - 40);
		}

	if (millis () >= 10000) {
		fill(255);
		textFont(karla);
		textSize(32);
		text('!!!', dX.value + 60, dY.value - 40);
		}

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
		ellipse(bX.value, bY.value, this.w, this.h);

		fill(255);
		ellipse(bX.value, bY.value, this.w*0.73, this.h*0.73);

		fill(132, 142, 143);
		ellipse(bX.value, bY.value, this.w*0.45, this.h*0.45);
	}
}








