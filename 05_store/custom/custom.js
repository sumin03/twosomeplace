
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByClassName("mySearching");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("li")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "flex";
        } else {
            li[i].style.display = "";
        }
    }
};



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

    


});

