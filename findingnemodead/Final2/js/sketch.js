var Y_AXIS = 1;
var c1, c2;
var time;
var gradientY;
var distance=10;
var karla;
var gradient;
var gradientimg;
var gradientstop = false;
var doryStop = false;
var doryAsked = false;
var timeToGo = false;

function preload() {
	gradientimg = loadImage("../Final2/img/gradienta.png");
	karla = loadFont("../Final2/Karla-Bold.ttf");
	song = loadSound("../Final2/music/lost.m4a");
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
	gradient = new Gradient(windowWidth, 0, 6100, windowHeight + 200);
	// nemo = new Nemo(-50, windowHeight/4 * 3, 35, 35, color(242, 104, 68) );
	marlin = new Marlin(windowWidth + 300, windowHeight/4*3, 70, 70, color(242, 104, 68) );
	dory = new Dory(windowWidth+100, 500, 80, 80, color(74, 136,199) );
	coral = new Coral(0, windowHeight, 400, 400, color(125, 176, 216));
	c1 = color(66, 175, 193);
	c2 = color(58,117,131);
	song.setVolume(0.1);
	song.play();

 // this is a javascript functon you made
	fadeOutNext();
	fadeNext();
	// that is in main.js and uses jquery
}

function draw() {
	background(54, 162, 186);
	noStroke();
	setGradient(0, 0, windowWidth, windowHeight, c1, c2, Y_AXIS);
	noStroke();
	coral.draw();
	coral.move();

	if (millis() > 1000) {
		gradient.draw();
		gradient.move();
		marlin.draw();
		marlin.move();
	}

	if (gradientstop == true && millis() > 1000) {
		dory.draw();
		dory.bump();
		dory.text();
		marlin.text();
	}

	// if (millis() > 20000) {
	// 	dory.move();

	// }

	// if (doryAsked == true) {
	// 	marlin.text();
	// }

 } 


function Marlin(_x, _y, _w, _h, _color) {
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.c = _color;
	this.dx = 4;
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
		if (this.x > windowWidth/2) {
			// this.dx = this.dx;
			//frameRate(15);
			this.y = random(windowHeight/17*8.5, windowHeight/17*9.5);
			//frameRate(60);
		} else if (this.x <= windowWidth/2) {
			this.dx = 0;
			this.y = random(windowHeight/13*6, windowHeight/13*8);
			this.x = random(windowWidth/2 - 5, windowWidth/2 + 5);
		}

		// if (this.dx =0) {
		// 	//frameRate(15);

		// }

		if (gradientstop == true && doryStop == true && millis() <= 20000) {
			this.y = windowHeight/2;
			this.x = windowWidth/2 - 150;
		}

		if (millis() > 20000 && this.x <= windowWidth + 100) {
			this.y = windowHeight/2;
			// this.x = windowWidth/2 - 150;
			this.dx = -4;

		}

		// if (timeToGo == true && millis()> 20000 && this.x < (windowWidth +100)) {
		// 	this.dx = -4;
		// }

		// if (millis() > 24000 && millis() < 29000){
		// 	this.dx = this.dx;
		// }

		this.x -= this.dx; 

		// if (millis() >= 29000 && millis() <=31000) {
		// 	this.dx = 0;
		// } else if (millis() > 31000) {
		// 	this.dx = 5;
		// }

		// if (this.x > windowWidth + 50) {
		// 	print(millis());
		// }

	}

	this.text = function() {
		
		if (millis() >= 14000 && millis() <= 16000) {
		fill(255);
		textFont(karla);
		textSize(30);
		text('?', this.x + 30, this.y - 30);
		}

		if (millis() >= 18000 && millis() <= 20000) {
		fill(255);
		textFont(karla);
		textSize(30);
		text('!', this.x + 30, this.y - 30);
		print(millis());

		}
	}
}

function Dory(_x, _y, _w, _h, _color) {
	this.x = _x;
	this.y = windowHeight/2;
	this.w = _w;
	this.h = _h;
	this.c = _color;
	this.dx = 6;

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

	this.bump = function() {
		if (this.x > windowWidth/2 + 100) {
			this.dx = 6;
		} 

		if (this.x <= windowWidth/2 + 100) {
			this.dx = 0;
			doryStop = true;
			print(millis());
		}

		if (millis() >= 20000 && this.x <= windowWidth + 200) {
			this.dx = -6;
		}
			this.x -= this.dx;

			// if (millis() > 20000) {
			// 	this.dx = -6;
			// }

	}

	this.text = function() {

		if (gradientstop == true && millis() >= 12800 && millis() <= 14000){
		fill(255);
		textFont(karla);
		textSize(32);
		text('?', this.x - 60, this.y - 40);
		}

		if (millis() >= 17000 && millis() <= 20000) {
		fill(255);
		textFont(karla);
		textSize(32);
		text('!', this.x - 60, this.y - 40);
		timetoGo = true;

		}
	}
}


function Coral(_x, _y, _w, _h, _color) {
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.c = _color;
	this.height = windowHeight;
	this.dx = 4;

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
		if( this.x >= -500 ) { // is 100 > or equal to 400?
			this.x -= this.dx;
		}

				if( this.dx > 0 ) {
			this.dx -= .0001;	
		}
		// this.x += this.dx;
}
}

function Gradient(_x, _y, _w, _h) {
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	this.dx = 20;

	this.draw = function() {
		image(gradientimg, this.x, this.y, this.w, this.h);
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








