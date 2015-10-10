$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 109) {
            $(".navigation").css("background-color", "rgba(255, 255, 255, 1)");
            setTimeout(function() {
                $(".logo-holder").addClass("logo-sticky");
            }, 350);
        } else {
            $(".navigation").css("background-color", "rgba(255, 255, 255, .8)");
            setTimeout(function() {
                $(".logo-holder").removeClass("logo-sticky");
            }, 350);
        }
    });
});