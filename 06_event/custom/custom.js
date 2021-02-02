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
    
    /*bar_menu 클릭할 때, 색깔 바꾸기*/

    $(".bar_menu>li>a").click(function(){
        $(".bar_menu>li>a").removeClass("on");
        $(this).addClass("on");
    
    });

    $(".sub_menu>li").click(function(){
        $(".sub_menu>li").removeClass("click");
        $(this).addClass("click");
    });


    $(".bar_menu>li").eq(0).click(function(){
        $(".all_page>div").css("display","none");
        $(".event_now").css("display","flex");
    });

    $(".sub_menu>li").eq(0).click(function(){
        $(".all_page>div").css("display","none");
        $(".membership").css("display","flex");
    });


    $(".sub_menu>li").eq(1).click(function(){
        $(".all_page>div").css("display","none");
        $(".card").css("display","block");
    });



});