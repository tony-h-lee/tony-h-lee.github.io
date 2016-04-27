$(document).ready(function() {



  $(['stubs3.png', 'stubs5.png','hb1.png','hb2.png']).preload();


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



    // Handle modals for projects


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



    // Click on email, copy to clipboard
    $("#mailCopy").on("click", function() {
        copyToClipboard("#mailCopy");
        $(".cpuMailHeader").text("Copied!");

        setTimeout(function() {
            $(".cpuMailHeader").text("Click email to copy!");
        }, 1300);
    });
    








  });

copyToClipboard = function (element) {
    var $temp = $("<input />");
    $("body").append($temp);
    $temp.val($(element).text()).select();

    var result = false;
    try {
        result = document.execCommand("copy");
    } catch (err) {
        console.log("Error copying email to clipboard! "+err);
    }

    $temp.remove();
    return result;
}



$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}