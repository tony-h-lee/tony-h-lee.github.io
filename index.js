$(document).ready(function() {



  $(['stubs3.png', 'stubs5.png','hb1.png','hb2.png','hb3.png']).preload();


  /*
   * Tab and content
   */

	$('#cpu #tab-links .tab-link a').on('click', function(e)  {

        var currentAttrValue = jQuery(this).attr('href');

 
        // Show/Hide Tabs
        $('.tab-content ' + currentAttrValue).fadeIn(400).siblings().hide();


       	if(currentAttrValue == "#aboutContent") {
       		$(".skillsContentWire, .projectsContentWire").hide();
       		$(".aboutContentWire").fadeIn(1000);
   
       	}

       	else if(currentAttrValue == "#skillsContent") {
       		$(".aboutContentWire, .projectsContentWire").hide();
       		$(".skillsContentWire").fadeIn(1000);
       	}

       	else if(currentAttrValue == "#projectsContent") {
       		$(".skillsContentWire, .aboutContentWire").hide();
       		$(".projectsContentWire").fadeIn(1000);
       	}
 
        // Change/remove current tab to active
        $(this).parent('.tab-link').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();


    });



    /*
     * Modal
     */
    $("#stubs").on('click', function() {
        $("#stubModal").fadeIn(400);
    });


    $("#lots").on('click', function() {
        $("#lotsModal").fadeIn(400);
    });


    $("#bee").on('click', function() {
        $("#hbModal").fadeIn(400);
    });



    $(".close").on('click', function() {
        $('#youtube')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $(".modal").fadeOut(200);
    });

    window.onclick = function(event) {
        if ($(event.target).hasClass("modal")) {
            $('#youtube')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            $(event.target).fadeOut(200);
        }
    }




});


$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}