$(document).ready(function(e){
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


    $(".mySearching > a").click(function(){
        $(".modal").css("display","block");
    });

    $(".modal-content-top >a").click(function(){
        $(".modal").css("display","none");
    });


    $(".bar_menu > li").eq(1).mouseover(function(){
        $(".sub_menu").css("display","flex")
    });

    $(".sub_menu").mouseleave(function(){
        $(".sub_menu").css("display","none")
    });


    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
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