var Y_AXIS = 1;
var c1, c2;
var nemotitle;
var time;
var gradientY;
var distance=10;
var karla;
var song;
// var time;
// // var nemo = [];

// var end_gradient_y = 500;

function preload() {
	nemotitle = loadImage ("../Final1/img/nemowhite.png");
	karla = loadFont("../Final1/Karla-Bold.ttf");
	song = loadSound("../Final1/music/start.m4a");
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
	marlin = new Marlin (-75, windowHeight/4*3, 70, 70, color(242, 104, 68) );
	dory = new Dory (500, 500, 80, 80, color(74, 136,199) );
	bruce = new Bruce (200, 400, 300, 300, color(115,191,234) );
	coral = new Coral (0, windowHeight+500, 400, 400, color(125, 176, 216));
	c1 = color(54, 162, 186);
	c2 = color(94,121,132);
	song.setVolume(0.1);
	song.play();
	fadeTitle(); // this is a javascript functon you made
	fadeOutTitle();
	fadeNext();
	// that is in main.js and uses jquery


}

function draw() {
	background(54, 162, 186);
	noStroke();


	setGradient(0, 0, windowWidth, windowHeight, c1, c2, Y_AXIS);

	 if (gradientY <=0 && gradientY >= -500) {
  		gradientY -= distance;
  	}

	noStroke();

	coral.draw();
	coral.move();

	if (millis() > 7000) {
		nemo.draw();
		nemo.move();
		nemo.text();
	}

	if (millis() > 24000) {
		marlin.draw();
		marlin.move();
		marlin.text();
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
		ellipse(this.x, this.y, this.w, this. h);

		fill(255);
		ellipse(this.x, this.y, this.w*0.65, this.h*0.65);

		fill(this.c);
		ellipse(this.x, this.y, this.w*0.35, this.h*0.35);
	}

	this.text = function() {
		if (millis() > 22000) {
		fill(255);
		textFont(karla);
		textSize(22);
		text('?', this.x + 15, this.y - 15);
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
		ellipse(this.x, this.y, this.w, this.h);

		fill(255);
		ellipse(this.x, this.y, this.w*0.75, this.h*0.75);

		fill(this.c);
		ellipse(this.x, this.y, this.w*0.45, this.h*0.45);
	}

	this.move = function() {
		if (this.x < this.hx) {
			this.dx = this.dx;
		}

		if (millis() > 24000 && millis() < 29000){
			this.dx = this.dx;
		}

		this.x += this.dx; 

		if (millis() >= 29000 && millis() <=31000) {
			this.dx = 0;
		} else if (millis() > 31000) {
			this.dx = 5;
		}

		if (this.x > windowWidth + 50) {
			print(millis());
		}

	}

	this.text = function() {
		
		if (millis() > 29000) {
		fill(255);
		textFont(karla);
		textSize(30);
		text('!', this.x + 30, this.y - 30);
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
		ellipse(this.x, this.y, this.w*1.31, this.h*1.31);

		fill(this.c);
		ellipse(this.x, this.y, this.w, this.h);

		fill(243, 228, 4);
		ellipse(this.x, this.y, this.w*0.69, this.h*0.69);

		fill(this.c);
		ellipse(this.x, this.y, this.w*0.41, this.h*0.41);
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

function Coral(_x, _y, _w, _h, _color) {
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.c = _color;
	this.height = windowHeight;
	this.dx = 2;

	this.draw = function() {
		fill(198, 71, 122);
		ellipse(this.x+185, this.y-180, this.w, this.h);

		fill(198,133,165);
		ellipse(this.x+240, this.y-30, this.w*1.2, this.h*1.2);

		fill(this.c);
		ellipse(this.x+45, this.y-150, this.w, this.h);

		fill(198, 71, 122);
		ellipse(this.x+170, this.y-5, this.w, this.h);

		fill(198,133,165);
		ellipse(this.x+35, this.y-50, this.w, this.h);

		fill(this.c);
		ellipse(this.x+20, this.y+40, this.w, this.h);
	}

	this.move = function() {
		if( this.y >= this.height ) { // is 100 > or equal to 400?
			this.y -= this.dx;
		}

				if( this.dx > 0 ) {
			this.dx -= .0001;	
		}
		// this.x += this.dx;
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








