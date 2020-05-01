$(document).ready(function(){
    if($(window).width()<=992){
        $('.discover_content ').slick({
            dots: false,
            arrows: false,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                dots: false,
                                // infinite: true,
                            }
                        },
                        {
                            breakpoint: 465,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false,
                                // infinite: true,
                            }
                        },
                    ]
        });
    }
});
    
 
// slick end
// see all 
$(document).on('click', '.seeALL', function(){
    $('.contentForSee').show()
    $(this).removeClass('seeALL').addClass('seeLess')
    $(this).text('Show less letter')
})
$(document).on('click', '.seeLess', function(){
    $('.contentForSee').hide()
    $(this).removeClass('seeLess').addClass('seeALL')
    $(this).text('Show all letter')
})
// scroll tab 
$(".section1").click(function() {
	$('html, body').animate({
	scrollTop: $(".excepture1").offset().top
	}, 1000);
	});
	$(".section2").click(function() {
	$('html, body').animate({
	scrollTop: $(".excepture2").offset().top
	}, 1000);
	});
	$(".section3").click(function() {
	$('html, body').animate({
	scrollTop: $(".excepture3").offset().top
	}, 1000);
	});
// scroll tab end


// Sidebar Start

$('.navbar-toggler').click(function() {
    if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
    $("body").css('height', 'auto');
    $(".header").css("background", 'transparent');
    $('.navbar-expand-md .navbar-collapse').css('right', '-250px');
    $('.navbar-expand-md .navbar-collapse').css('width', '0%')
    } else {
    $("body").css('height', '538px');
    $(".header").css("background", '#004c97');
    $('.navbar-expand-md .navbar-collapse').css('right', '0px');
    $('.navbar-expand-md .navbar-collapse').css('width', '100%');
    }
    });

// Sidebar End

// Navbar Button Style Start

$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });
});

// Navbar Button Style End


// VideoPlayback 
var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


$(document).on('click', 'video', function(){
    var id = $(this).data('id');
    vid = document.getElementById("bgvid"+id);
  vid.classList.toggle("stopfade");
  
  if (vid.paused) {
    // vid.play();
    // $(".polinaPlay"+id).hide()
    // pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    $(".polinaPlay"+id).show()
    // pauseButton.innerHTML = "play";
  }
})

$(document).on('click', '.virtualArea button', function(){
    var id = $(this).data('id');
    vid = document.getElementById("bgvid"+id);
  vid.classList.toggle("stopfade");
  
  if (vid.paused) {
    vid.play();
    $(".polinaPlay"+id).hide()
    // pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    $(".polinaPlay"+id).show()
    // pauseButton.innerHTML = "play";
  }
})

// VideoPlayback ended

// slick 
$('.prolftSlick').slick({
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
});

// slick end

  
// slick

$('.slicky').slick({
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 5,
    // centerPadding: '20%',
    // centerMode: true,
    adaptiveHeight: false,
    responsive: [
        {
            breakpoint: 1416,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                // dots: false,
                infinite: true,
                
            }
        }, 
    {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                // dots: false,
                infinite: true,
                
            }
        }, 
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                // dots: false,
                infinite: true,
                
            }
        }, 
        {
            breakpoint: 618,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // dots: false,
                infinite: true,
                
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // dots: false,
                infinite: true,
                
            }
        },
    ]
});

// slick end
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1300);
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/

 
// accordian
$(document).ready(function() {
    $(".set > a").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                .siblings(".content")
                .slideDown(200);
        }
    });
});

// accordian end
$(document).ready(function() {
    $(".seto > a").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".contentHead")
                .slideUp(200);
            $(".seto > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $(".seto > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $(".seto > a").removeClass("active");
            $(this).addClass("active");
            $(".contentHead").slideUp(200);
            $(this)
                .siblings(".contentHead")
                .slideDown(200);
        }
    });
});

 
//information session slick

$('.session_slicky').slick({
    dots: false,
    arrows: true,
    // autoplay: true,
    autoplaySpeed: 1000,
    infinite: false,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 2,
    adaptiveHeight: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        },
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
        },
    },
    
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        },
    },
    ]
});

//information session slick end

//pdf download
$(function () {

    var specialElementHandlers = {
    '#editor': function (element,renderer) {
    return true;
    }
    };
    $('.down_pdf').click(function () {
    var doc = new jsPDF();
    doc.fromHTML($('#enrollmnet').html(), 15, 15, {
    'width': 170,'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
    });
    });
// pdf download end 


// Animation
AOS.init({
    duration: 1200,
    easing: 'ease-in-out-back'
  });
// animation end 

