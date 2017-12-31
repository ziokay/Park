$(document).ready(function () {
    var h=$(window).height();
    var w=$(window).width();
    var btnw=$("#btn").width();
    var container=$("#container").height();
    var mar=(h-container)/3;
    var marl=(w-btnw)/2;
    var afterCon=((w-550)/35);
    var aftersea=afterCon*2;
    $(".warp").css("margin-top",mar);
    $("#btn").css("margin-left",marl);
    $("#btn").click(function(){
        alert("行程结束！");
    })
})