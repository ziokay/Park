$(document).ready(function () {
    var h = $(window).height();
    var warp = $(".warp").height();
    var mar = (h - warp) / 3;
    $(".warp").css("margin-top", mar);

    $(".intro").animate({
        padding: '0',
        opacity: '1'
    }, 2000);
})