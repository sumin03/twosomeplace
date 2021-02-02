$(document).ready(function(e) {

    $(".toggle").click(function(){
        $(".mobile_menuBox").toggle();
    });

    $(".totalList > li").eq(1).mouseenter(function(){
        $(".menu_slide").slideDown();
    });

    $(".totalList > li").eq(1).mouseleave(function(){
        $(".menu_slide").slideUp();
    });


    $(".totalList > li").eq(4).mouseenter(function(){
        $(".event_slide").slideDown();
    });

    $(".totalList > li").eq(4).mouseleave(function(){
        $(".event_slide").slideUp();
    });



    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        
        
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        })

    
});