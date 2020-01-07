$(document).ready(function() {
    $(".menu-mobile").on("click", function() {
        if ($(".section").hasClass("active")) {
            $(".section").removeClass("active");
            $(".menu-mobile").html("<i class='fa fa-bars'></i>");
        } else {
            $(".section").addClass("active");
            $(".menu-mobile").html("<i class='fa fa-times'></i>");
        }
    });

    $(".section").on("click", function() {
        $(".section").removeClass("active");
        $(".menu-mobile").html("<i class='fa fa-bars'></i>");
    })

});