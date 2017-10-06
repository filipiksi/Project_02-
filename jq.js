$(document).ready(function(){ // -- FOR ABOU ME LOGO --
	//
	var controller = new ScrollMagic.Controller();
	
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#sec-me',
		duration: '65%',
		triggerHook: 0.2,
		//reverse: false
	})
	.setClassToggle('.me-cl', 'fade-in')
	/*.addIndicators({
		name: 'logo ABOUT ME',
		colorTigger: 'none',
		indent: 300,
		colorStart: '#75C695', // 
		colorEnd:'green'
	})*/
	.addTo(controller);
	var controller55 = new ScrollMagic.Controller(); // This is ABOUT ME SCROLL HOLD !!!
	
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.logo-about-me',
		duration: '65%',
		triggerHook: 0.2,
		//reverse: false
	})
	.setClassToggle('.logo-about-me', 'fade-in')
	/*.addIndicators({
		name: 'uuuuuussssssssssaaaaaaaa',
		colorTigger: 'white',
		indent: 100,
		colorStart: '#75C695',
		colorEnd:'green'
	})*/
	.setPin('.logo-about-me')
	.addTo(controller55);
	// za BG 
	var controller1 = new ScrollMagic.Controller();
	
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.start',
		duration: '550%',
		triggerHook: 0.7,
		//reverse: false
	})
	.setClassToggle('#za-bg', 'fade-in')
	/*.addIndicators({
		name: 'za bg za bg',
		colorTigger: 'white',
		indent: 300,
		colorStart: '#75C695',
		colorEnd:'green'
	})*/
	.addTo(controller1);
	// Logo skills 
	var controller3 = new ScrollMagic.Controller();
	
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.logo-skills',
		duration: '380%',
		triggerHook: 0.9,
		//reverse: false
	})
	.setClassToggle('.logo-skills', 'fade-in')
	/*.addIndicators({
		name: 'oo------------------------------oo',
		colorTigger: 'green',
		indent: 300,
		colorStart: '#75C695',
		colorEnd:'greent'
	})*/
	.addTo(controller3);
});
//
$(window).scroll(function(){ // FOR TEXT PARALLAX BOXES   momentalno !!!!! <<<<>>>>
	
	var meScroll = $(this).scrollTop();
	
	$('.conect').css({
		'transform' : 'translate(0px, '+ meScroll /4 +'%)'
	});
	$('.bg-b12').css({
		'transform' : 'translate(0px, -'+ meScroll /12 +'%)'
	});
});
//
$(window).scroll(function(){ // FOR TEXT PARALLAX BOXES   momentalno !!!!! <<<<>>>>
	
	var meScroll2 = $(this).scrollTop();
	
	$('.boot').css({
		'transform' : 'translate(0px, -'+ meScroll2 /8 +'%)'
	});
	$('.seo').css({
		'transform' : 'translate(0px, -'+ meScroll2 /6 +'%)'
	});
	$('.angul').css({
		'transform' : 'translate(0px, -'+ meScroll2 /4  +'%)'
	});
	$('.bg-b123').css({
		'transform' : 'translate(0px, '+ meScroll2 /2  +'%)'
	});
});
//new Slider skils
$(document).ready(function(){
	$(function () { // wait for document ready
		// init
		var controller5 = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		// get all slides
		var slides = document.querySelectorAll(".panel");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i])
			/*	.addIndicators() */// add indicators (requires plugin)
				.addTo(controller5);
		}
	});
});
//animation 
//TweenMax.to(".lh1", 6, {left:600});
// DESNO ooooooooooo
$(window).scroll(function(){ // FOR DESNOO !!!
	
	var meScroll = $(this).scrollTop();
	
	$('.desno').css({
		'transform' : 'translate(0px, -'+ meScroll /9 +'%)'
	});
});
//