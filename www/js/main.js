$(document).ready(function(){
    //navigation
    $(window).scroll(function() {
        if ($(this).scrollTop() > 109) {
            $(".navigation").addClass("navigation-sticky");
            setTimeout(function() {
                $(".logo-holder").addClass("logo-sticky");
            }, 350);
        } else {
            $(".navigation").removeClass("navigation-sticky");
            setTimeout(function() {
                $(".logo-holder").removeClass("logo-sticky");
            }, 350);
        }
    });

    //subscribe
    $("#subscribe-form").submit(function() {
        var a = $(this).attr("action");
        $("#message1").slideUp(750, function() {
            $("#message1").hide();
            $("#submit-phone").attr("disabled", "disabled");
            $.post(a, {
                phone: $("#subscribe-form #subscribe-phone").val()
            }, function(a) {
                document.getElementById("message1").innerHTML = a;
                $("#message1").slideDown("slow");
                $("#submit-phone").removeAttr("disabled");
                if (null != a.match("success")) $("#subscribe-form").slideDown("slow");
            });
        });
        return false;
    });
    $("#subscribe-form input, #subscribe-form textarea").keyup(function() {
        $("#message1").slideUp(1500);
    });


    // contact form rent
    $("#contactformrent").submit(function() {
        var a = $(this).attr("action");
        $("#message2").slideUp(750, function() {
            $("#message2").hide();
            $("#submit-rent").attr("disabled", "disabled");
            $.post(a, {
                name: $("#contactformrent #rent-name").val(),
                phone: $("#contactformrent #rent-phone").val(),
                type: $("#contactformrent #rent-type").val(),
                price: $("#contactformrent #rent-price").val(),
                comments: $("#contactformrent #rent-addinfo").val()
            }, function(a) {
                document.getElementById("message2").innerHTML = a;
                $("#message2").slideDown("slow");
                $("#submit-rent").removeAttr("disabled");
                if (null != a.match("success")) $("#contactformrent").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactformrent input, #contactformrent textarea").keyup(function() {
        $("#message2").slideUp(1500);
    });

    // contact form hire
    $("#contactformhire").submit(function() {
        var a = $(this).attr("action");
        $("#message3").slideUp(750, function() {
            $("#message3").hide();
            $("#submit-hire").attr("disabled", "disabled");
            $.post(a, {
                name: $("#contactformhire #hire-name").val(),
                phone: $("#contactformhire #hire-phone").val(),
                type: $("#contactformhire #hire-type").val(),
                district: $("#contactformhire #hire-district").val(),
                price: $("#contactformhire #hire-price").val(),
                comments: $("#contactformhire #hire-addinfo").val()
            }, function(a) {
                document.getElementById("message3").innerHTML = a;
                $("#message3").slideDown("slow");
                $("#submit-hire").removeAttr("disabled");
                if (null != a.match("success")) $("#contactformrent").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactformhire input, #contactformhire textarea").keyup(function() {
        $("#message3").slideUp(1500);
    });
    // contacts form
    $("#contactsform").submit(function() {
        var a = $(this).attr("action");
        $("#message4").slideUp(750, function() {
            $("#message4").hide();
            $("#submit-contacts").attr("disabled", "disabled");
            $.post(a, {
                name: $("#contacts-form #contacts-form-name").val(),
                email: $("#contacts-form #contacts-form-email").val(),
                phone: $("#contacts-form #contacts-form-phone").val(),
                comments: $("#contacts-form #contacts-form-message").val()
            }, function(a) {
                document.getElementById("message4").innerHTML = a;
                $("#message4").slideDown("slow");
                $("#submit-contacts").removeAttr("disabled");
                if (null != a.match("success")) $("#contactsform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactsform input, #contactsform textarea").keyup(function() {
        $("#message4").slideUp(1500);
    });

    // info
    $(".expand").on("click", function () {
        if($(".expand-content").is(":hidden")){
            $(".expand-content").slideDown("slow");
        }else{
            $(".expand-content").slideUp("slow");
        }
    });

    //navigation-mini
    $(".navigation-mini-holder").on("click", function () {
        if ( $(".nav-menu").is(":hidden") ){
            $(".nav-menu").fadeIn("slow");
        }else{
            $(".nav-menu").fadeOut("slow");
        }
    })
});

