//To remove the animation of featured img from mobile
$(document).ready(function () {
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize() {
        var newWindowWidth = $(window).width();
        //if the width is less than 600(Mobile Screen)
        if (newWindowWidth < 600) {
            $(".feature").removeClass("animate__animated");//remove animation of featured img
            $(".backToTop").css('display', 'none');//hide backToTop button
            $(".whyUs .col-md-3").attr('data-aos', 'fade-in');//to avoid screen drop in whyus section
        }
    }
});
//To animate the backToTop button in scroll
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $(".backToTop").css('bottom', '3%');
        } else {
            $(".backToTop").css('bottom', '-15%');
        }
    });
});



