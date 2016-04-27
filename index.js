var word = [];
var current = {val: "abt"};


$(document).ready(function() {

    spell(current);

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
            current.val = "abt";
   
       	}

       	else if(currentAttrValue == "#skillsContent") {
       		$(".aboutContentWire, .projectsContentWire").hide();
       		$(".skillsContentWire").fadeIn(1000);
            current.val = "skl";
       	}

       	else if(currentAttrValue == "#projectsContent") {
       		$(".skillsContentWire, .aboutContentWire").hide();
       		$(".projectsContentWire").fadeIn(1000);
            current.val = "prj";
       	}

        word = [];
 
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









}); // End on Ready



function spell(current) {

    console.log(current);
    console.log(word);

    resetBits();

    // SPELL ABOUT

    if(current.val =="abt") {

        if(word.indexOf('t') != -1 && word.length == 5) {
            word = [];
        }

        if(word.indexOf('u') != -1 && word.length == 4) {
            //spell t
            $('#bit3').text("1");
            $('#bit5').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('t');
        }

        if(word.indexOf('o') != -1 && word.length == 3) {
            //spell u
            $('#bit1').text("1");
            $('#bit3').text("1");
            $('#bit5').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('u');
        }

        if(word.indexOf('b') != -1 && word.length == 2) {
            //spell o
            $('#bit1').text("1");
            $('#bit2').text("1");
            $('#bit3').text("1");
            $('#bit4').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('o');
        }

        if(word.indexOf('A') != -1 && word.length == 1) {
            //spell b
            $('#bit2').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('b');
        }

        if(word.length == 0) {
            //spell A
            $('#bit2').text("1");
            $('#bit7').text("1");
            word.push('A');
        }

    }


    // SPELL SKILLS

    if(current.val == "skl") {

        if(word.indexOf('s') != -1 && word.length == 6) {
            word = [];
        }

        if(word.indexOf('l') != -1 && word.length == 5) {
            //spell s
            $('#bit1').text("1");
            $('#bit2').text("1");
            $('#bit5').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('s');
        }

        if(word.indexOf('l') != -1 && word.length == 4) {
            //spell l
            $('#bit3').text("1");
            $('#bit4').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('l');
        }

        if(word.indexOf('i') != -1 && word.length == 3) {
            //spell l
            $('#bit3').text("1");
            $('#bit4').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('l');
        }

        if(word.indexOf('k') != -1 && word.length == 2) {
            //spell i
            $('#bit1').text("1");
            $('#bit4').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('i');
        }

        if(word.indexOf('S') != -1 && word.length == 1) {
            //spell k
            $('#bit1').text("1");
            $('#bit2').text("1");
            $('#bit4').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('k');
        }

        if(word.length == 0) {
            //spell S
            $('#bit1').text("1");
            $('#bit2').text("1");
            $('#bit5').text("1");
            $('#bit7').text("1");
            word.push('S');
        }
    }

    // SPELL PROJECT

    if (current.val == "prj") {

        if(word.indexOf('s') != -1 && word.length == 8) {
            word = [];
        }

        if(word.indexOf('t') != -1 && word.length == 7) {
            //spell s
            $('#bit1').text("1");
            $('#bit2').text("1");
            $('#bit5').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('s');
        }

        if(word.indexOf('c') != -1 && word.length == 6) {
            //spell t
            $('#bit3').text("1");
            $('#bit5').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('t');
        }

        if(word.indexOf('e') != -1 && word.length == 5) {
            //spell c
            $('#bit1').text("1");
            $('#bit2').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('c');
        }

        if(word.indexOf('j') != -1 && word.length == 4) {
            //spell e
            $('#bit1').text("1");
            $('#bit3').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('e');
        }

        if(word.indexOf('o') != -1 && word.length == 3) {
            //spell j
            $('#bit2').text("1");
            $('#bit4').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('j');
        }

        if(word.indexOf('r') != -1 && word.length == 2) {
            //spell o
            $('#bit1').text("1");
            $('#bit2').text("1");
            $('#bit3').text("1");
            $('#bit4').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('o');
        }

        if(word.indexOf('P') != -1 && word.length == 1) {
            //spell r
            $('#bit2').text("1");
            $('#bit5').text("1");
            $('#bit6').text("1");
            $('#bit7').text("1");
            word.push('r');
        }

        if(word.length == 0) {
            //spell P
            $('#bit5').text("1");
            $('#bit7').text("1");
            word.push('P');
        }

    }

    setTimeout(function() {
        spell(current);
    }, 3000);

}

function resetBits() {
    $('#bit1').text("0");
    $('#bit2').text("0");
    $('#bit3').text("0");
    $('#bit4').text("0");
    $('#bit5').text("0");
    $('#bit6').text("0");
    $('#bit7').text("0");
    $('#bit8').text("0");
    $('#bit9').text("0");
    $('#bit10').text("0");
    $('#bit11').text("0");
    $('#bit12').text("0");
    $('#bit13').text("0");
}


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