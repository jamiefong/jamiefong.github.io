var string = "";

$(document).ready(function() {


	 var entryCount = 0;
	  var displayCount = 0;
  //capture key presses
  $(document).on("keypress", function(e) {
    //translate unicode to characters  

    e.preventDefault();
    entryCount ++;  
    displayCount ++;    
    var char = String.fromCharCode(e.which);
     console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
     // saveCharacter(char);
    createElement(char);
    calculateStrobe();
    checkString();
    //check string, onpageload 
  });

  $(document).on("keydown", function(e) {
	if (e.which == 8){
      e.preventDefault();
      entryCount ++;
	  displayCount --;
	  if (displayCount<0) {
	  	displayCount=0;
	  }
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
      calculateStrobe();
    }
  });


});

function checkString() {
  if (string="can you see") {
    setTimeout(window.location="./type.html",
     100);
  }
};

function makeNewPosition(){    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 100;
    var w = $(window).width() - 100;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    $('.aura').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
};

function strobe(){
  $('.strobe').addClass("strobeStart");
};

function calculateStrobe(){
  var count = 0;
  for(var i=0; i < string.length; i++) {
    if (string.charAt(i) == "u" || string.charAt(i) == "U"){
      count++;
    }
  }
  $("#strobe").removeClass();
  $("#strobe").addClass("strobe");

  if(count == 0){

  } else if(count == 1){
    $("#strobe").addClass("strobe1");
  } else if(count == 2){
    $("#strobe").addClass("strobe2");
  } else if(count == 3){
    $("#strobe").addClass("strobe3");    
  } else {
    $("#strobe").addClass("strobe4");
  }

}

// function calculateAura(){
//   var count = 0;
//   for(var i=0; i < string.length; i++) {
//     if (string.charAt(i) == "e" || string.charAt(i) == "E"){
//       count++;
//     }
//   }
//   $("#aura").removeClass();
//   $("#aura").addClass("strobe");

//   if(count == 0){

//   } else if(count == 1){
//     $("#strobe").addClass("aura1");
//   } else if(count == 2){
//     $("#strobe").addClass("aura2");
//   } else if(count == 3){
//     $("#strobe").addClass("aura3");    
//   } else {
//     $("#strobe").addClass("aura4");
//   }

// }


// var inputString= ""

// function saveCharacter(c) {
//   inputString = inputString + c;
//   console.log(inputString);
// }

// var dictionary = {
//   "sdf" :"a"
// }

// function searchForString(s){
//   var keyArray = Object.keys(dictionary)
// }
var U = false;

function createElement(k) {
  console.log(U);

  var elem = $('#cursor');
  // if (k == "a" || k == "A") { elem.before('<span class="inner">A</span>'); }
  if (k == "a" || k == "A") { 
    elem.before('<img src="./img/A.svg" class="letter">'); 
    animateDiv();
  }
  if (k == "b" || k == "B") { elem.before('<img src="./img/B.svg" class="letter">'); }
  if (k == "c" || k == "C") { elem.before('<img src="./img/C.svg" class="letter">'); }
  if (k == "d" || k == "D") { elem.before('<img src="./img/D.svg" class="letter">'); }
  if (k == "e" || k == "E") { 
    elem.before('<img src="./img/E.svg" class="letter">'); 
    animateDiv();
  }
  if (k == "f" || k == "F") { elem.before('<img src="./img/F.svg" class="letter">'); }
  if (k == "g" || k == "G") { elem.before('<img src="./img/G.svg" class="letter">'); }
  if (k == "h" || k == "H") { elem.before('<img src="./img/H.svg" class="letter">'); }
  if (k == "i" || k == "I") { elem.before('<img src="./img/I.svg" class="letter">'); }
  if (k == "j" || k == "J") { elem.before('<img src="./img/J.svg" class="letter">'); }
  if (k == "k" || k == "K") { elem.before('<img src="./img/K.svg" class="letter">'); }
  if (k == "l" || k == "L") { elem.before('<img src="./img/L.svg" class="letter">'); }
  if (k == "m" || k == "M") { elem.before('<img src="./img/M.svg" class="letter">'); }
  if (k == "n" || k == "N") { elem.before('<img src="./img/N.svg" class="letter">'); }
  if (k == "o" || k == "O") { 
    elem.before('<img src="./img/O.svg" class="letter">'); }
  if (k == "p" || k == "P") { elem.before('<img src="./img/P.svg" class="letter">'); }
  if (k == "q" || k == "Q") { elem.before('<img src="./img/Q.svg" class="letter">'); }
  if (k == "r" || k == "R") { elem.before('<img src="./img/R.svg" class="letter">'); }
  if (k == "s" || k == "S") { elem.before('<img src="./img/S.svg" class="letter">'); }
  if (k == "t" || k == "T") { elem.before('<img src="./img/T.svg" class="letter">'); }
  if (k == "u" || k == "U") { 
    elem.before('<img src="./img/U.svg" class="letter">');
    strobe();
    U = true;
  }
  if (k == "v" || k == "V") { elem.before('<img src="./img/V.svg" class="letter">'); 
U=false;}
  if (k == "w" || k == "W") { elem.before('<img src="./img/W.svg" class="letter">'); }
  if (k == "x" || k == "X") { elem.before('<img src="./img/X.svg" class="letter">'); }
  if (k == "y" || k == "Y") { elem.before('<img src="./img/Y.svg" class="letter">'); }
  if (k == "z" || k == "Z") { elem.before('<img src="./img/Z.svg" class="letter">'); }
  if (k == "." || k == ".") { elem.before('<img src="./img/period.svg" class="letter">'); }
  if (k == "-" || k == "-") { elem.before('<img src="./img/dash.svg" class="letter">'); }
  if (k == "," || k == ",") { elem.before('<img src="./img/comma.svg" class="letter">'); }
  if (k == "?" || k == "?") { elem.before('<img src="./img/question.svg" class="letter">'); }
  if (k == " ") { elem.before('<span class="inner"> </span>'); }

  string += k;
}
function deleteElement() {
  $(".letter").last().remove();
  string = string.slice(0, -1);
  // if (U==true) {
  //   $(".strobe").removeClass("strobeStart");
  //   // for (i=200; i<200; i-50){
  //   // $(".strobe").css("animation-duration", i );      
  // } else {
  //   $(".strobe").addClass("strobeStart");
  // }

}
