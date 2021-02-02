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

    

   
    $(".information > a").stop().click(function(e) {
        e.preventDefault();
        if ($(".information_box").css("display") != "flex") {
          $(".information > a").css("transform", "rotate(180deg)");
          $(".information_box").css("display", "flex");
        } else if ($(".information_box").css("display") == "flex") {
          $(".information > a").css("transform", "rotate(180deg)");
          $(".information_box").css("display", "none");
        }
      });

    
    


});