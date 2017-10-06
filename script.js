TweenLite.set(".ul", {visibility: "visible"})
var tl = new TimelineMax();

	tl.staggerFrom(".li-one", 1,{
	opacity: 0,
	cycle:{
	rotationY:[-90, 90]
	},
	delay:3,
	}, 0.1);
	
	tl.staggerFrom(".li-two", 1,{
	opacity: 0,
	cycle:{
	rotationY:[-90, 90]
	}
	}, 0.1);

	tl.staggerFrom(".li-three", 1,{
	opacity: 0,
	cycle:{
	rotationY:[-90, 90]
	}
	}, 0.1);


TweenLite.from(".logo-box", 4, {autoAlpha:0, ease:Power2.easeIn, delay:0.4});

$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();
	
	$('.li-one').css({
		'transform' : 'translate(0px, -'+ wScroll /8 +'%)'
	});
	$('.li-two').css({
		'transform' : 'translate(0px, '+ wScroll /12 +'%)'
	});
	$('.li-three').css({
		'transform' : 'translate(0px, -'+ wScroll /8 +'%)'
	});
});
//
/*$(window).scroll(function(){
	
	var fScroll = $(this).scrollTop();
	
		console.log(fScroll);
});*/
//
/*var text = $('.typewriter').text();

var length = text.length;
var timeOut;
var character = 0;

(function typeWriter() { 
    timeOut = setTimeout(function() {
        character++;
        var type = text.substring(0, character);
        $('.typewriter').text(type);
        typeWriter();

        if (character == length) {
            clearTimeout(timeOut);
        }
    }, 10);
}());*/
//
