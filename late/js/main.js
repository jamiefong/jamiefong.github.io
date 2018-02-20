var excuses = [
  [
    "I’m just late.",
    "Life happens.",
    "I slept in.",
    "I hit snooze too many times.",
    "I didn’t really want to be here.",
    "I was deciding what to wear.",
    "I was taking a shit.",
    "That’s just who I am as a person.",
    "Better late than never they say.",
    "I was having a dream where I didn’t have to be here.",
    "I couldn’t find my socks.",
    "I couldn't find my keys.",
    "Well it’s -whatever time you were supposed to be there- somewhere.",
    "I don’t know.",
    "I plead the Fifth.",
    "My dog was playing outside and wouldn’t come back in after going potty.",
    "I really had to get this cup of coffee or the only issue you’d have with me isn’t about being late.",
    "People got in my way.",
    "I set my alarm for 7 pm instead of 7 am.",
    "I haven’t done my laundry in weeks and I was trying to find clean underwear.",
    "I got distracted by Netflix.",
    "I thought I had enough time.",
    "I live in New Jersey.",
    "I guess hindsight 20/20.",
    "It’s a personal choice.",
    "I try to be fashionably late.",
    "I'm jetlagged.",
    "I'm hungover.",
    "I was on a Tinder date.",
    "It’s too nice outside to be in here.",
    "I couldn’t find matching socks.",
    "I couldn't find clean underwear.",
    "I couldn't understand where my Uber driver said he was.",
    "I didn't expect my morning bagel to take me so long.",
    "I spent too long singing in the shower.",
    "Be glad I’m even here.",
    "I died for a bit.",
    "I got shat on by a bird.",
    "I slipped and fell back into my slumber.",
    "My Uber driver got lost.",
    "I’m early for tomorrow.",
    "Time is a man-made construct.",
    "I broke down on the way here.",
    "I got lost trying to find the fucks I give.",
    "This guy/girl was hitting me.",
    "I was lying in bed thinking about the crushing weight of being alive.",
    "I couldn't find anything to wear.",
    "Sorry man.",
    "Someone was trying to convert me to Christianity.",
    "I was taking a smoke break.",
    "This guy/girl was hitting on me.",
    "I would think of an excuse but I don’t really care.",
    "Am I late or are you early?",
    "I was trying to think of an excuse.",
    "Beats me.",
    "I wonder why I’m late everyday too.",
    "I had to go back to turn off the stove.",
    "Sorry. I was busy talking about my feelings and killing people.",
    "I prefer chronologically challenged."
  ],
  [
    "I’ve been sick.",
    "I overslept.",
    "My alarm didn’t go off.",
    "My car broke down.",
    "There was traffic.",
    "The -insert whatever line- train didn’t work.",
    "The cab broke down.",
    "There was an accident on the way.",
    "The bus broke down.",
    "My car broke down.",
    "I couldn’t find my socks.",
    "I couldn't find my keys.",
    "I had really bad cramps.",
    "I was working on that proposal.",
    "I had a really bad stomachache.",
    "The train was running late.",
    "The bus was running late.",
    "I was caught in the rain.",
    "I live on Staten Island.",
    "If you care, just be honest.",
    "I needed to get my kid sister/brother to daycare.",
    "My cat was missing.",
    "I live in New Jersey.",
    "I've been running a fever.",
    "I live in Queens.",
    "My relatives are visiting and I had to show them where to go.",
    "I had to redo my makeup/hair.",
    "I had to send my friend off.",
    "I got splashed by a puddle and had to go back to change.",
    "I had to accompany my mother to the doctor’s.",
    "I couldn’t find matching socks.",
    "I couldn't find clean underwear.",
    "I couldn't understand where my Uber driver said he was.",
    "I was in an argument with my mother.",
    "My dog died.",
    "I had allergies.",
    "I got held up at a prior engagement.",
    "I got shat on by a bird.",
    "My shower wasn’t working.",
    "My Uber driver got lost.",
    "I couldn’t hear my alarm go off.",
    "I had some roommate problems.",
    "I just broke up and had to move out.",
    "I was waiting for the elevators."
  ]

]

var quotes = ['<h2>"Time is an illusion."<br>Albert Einstein</h2>', 
                '<h2>"Better late than never."<br>Matthew Henry</h2>', 
                '<h2>"Time you enjoy wasting is not wasted time."<br>Marthe Troly-Curtin</h2>',
                '<h2>"How did it get so late so soon?"<br>Dr. Seuss</h2>',
                '<h2>"Time flies like an arrow; fruit flies like a banana."<br>Anthony G. Oettinger</h2>',
                '<h2>“Nothing is too late, till the tired heart shall cease to palpitate.” <br>Henry Wadsworth Longfellow</h2>',
                '<h2>"It is never too late or too soon. It is when it is supposed to be." <br>Mitch Albom</h2>',
                '<h2>"The trouble with being punctual is that nobody is there to appreciate it."<br>Franklin P. Jones</h2>',
                '<h2>"I have been on a calendar but never on time."<br>Marilyn Monroe</h2>',
                '<h2>"If you are there before it is over, you are on time. "<br>James J. Walker</h2>',
                '<h2>"Punctuality is the virtue of the bored. "<br>Evelyn Waugh</h2>',
                '<h2>"Punctuality is the thief of time."<br>Oscar Wilde</h2>']

var text = "<h1>Excuses for you because you're already late.</h1>"

$(document).ready(function() {
  // setInterval(function(){
  //   changeQuote();
  // }, 1500);
  changeQuoteInterval();
  changeTitle();
  linkScale();
})


function changeQuoteInterval(){
    var timer = null;
    var r = Math.floor(Math.random()*quotes.length);
    function startSetInterval(){
        timer = setInterval(changeQuote, 1500);    
    };

    startSetInterval();

    function changeQuote(){  
    var r = Math.floor(Math.random()*quotes.length);

    $('.quotes').html(quotes[r]);
    };

    $('.quotes').hover(function(){
        $(this).css( 'cursor', 'pointer' );
        clearInterval(timer);
    }, function(){
        startSetInterval();
    });

}


function linkScale(){
$(".gif").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
  console.log("link scale");
});
}

function changeQuote(){
  var r = Math.floor(Math.random()*quotes.length);
  // console.log(r)
  $('.quotes').html(quotes[r]);
}

function changeTitle(){

    $('.gif').mouseenter(function(){
        $(this).css( 'cursor', 'pointer' );
        $('.title').fadeTo(0, "easeOutSine", function(){
            $(this).html("<h1>Tick tock, tick tock...</h1>");
            console.log("fadeto");
        });
    }); 

    $('.gif').mouseleave(function(){

        $('.title').fadeTo(0, "easeOutSine", function(){
            $(this).html(text);
            console.log("fadeleave");
        });

        console.log('leave');
    });
    console.log("changetitle");

}

// function quoteLoad(){
//   // for (var i=0; i<)

//   setTimeout(function(){

//       $('#yesno').delay(250).animate({
//         opacity: 1
//       })

//   }, 1000);
// }











