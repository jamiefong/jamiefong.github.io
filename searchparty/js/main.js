$(window).load(function() {
	$("#wrapper").animate({
		opacity: 1
	});
});
var video;
var leos = ["leo1", "leo2", "leo3", "leo4"];
var last_class;
$(document).ready(function() {
	$("#squares .square").on({
		'mouseenter': function() {
			last_class = leos[getRandomInt(0,leos.length)];			
			$(this).addClass(last_class);

				if (last_class==leos[3]) {
					$(this).html('<video loop autoplay nocontrols width=100% height=100%> <source src="./video/video.mp4" type="video/mp4" ></video>')
					video = $(".square.leo4")[0];
					vid.play();

				}
		},

		'mouseleave': function() {
			$(this).removeClass(last_class);
			$(this).html("");
			vid.pause();
		}
	})
});