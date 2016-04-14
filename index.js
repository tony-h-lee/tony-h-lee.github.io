// Tony Hongjin Lee's Portfolio

$(document).ready(function() {

	/*
	 Preload images and set a randomized delay before looping through pictures
	 for each separate project.
	*/

	$(['stubs2.png','stubs3.png','stubs4.png','stubs5.png','hb1.png','hb2.png','hb3.png']).preload();

	$('#stubsSlides img:gt(0)').hide();

	$('#hbSlides img:gt(0)').hide();


	setTimeout(function() {

		loop();

	}, Math.random()*4000 + 1000 );



	setTimeout(function() {

		loop2();

	}, Math.random()*4000 + 1000 );



});



// Loop functions to generate new random interval. Performed recursively.

function loop() {

    var rand = Math.round(Math.random() * (6000)) + 3000;
    setTimeout(function() {

    		$('#stubsSlides :first-child').fadeOut()
	 			.next('img').fadeIn()
	 			.end().appendTo('#stubsSlides');

            loop();  
    }, rand);

}

function loop2() {

    var rand2 = Math.round(Math.random() * (6000)) + 3000;

    setTimeout(function() {

    		$('#hbSlides :first-child').fadeOut()
	 			.next('img').fadeIn()
	 			.end().appendTo('#hbSlides');

            loop2();  
    }, rand2);

}

// Image Preload on StackOverflow

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}