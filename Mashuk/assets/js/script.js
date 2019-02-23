$(document).ready(function() {

$("#mobile_click").click(function(){
    $(".bg-dark").toggleClass("active");
});

  $('.owl-first').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1,
            nav: true
        }
    }
})

$('.owl-second').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3,
            nav: true
        }
    }
})
});