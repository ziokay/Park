$(document).ready(function () {
    var h = $(window).height();
    var warp = $(".warp").height();
    var mar = (h - warp) / 3;
    $(".warp").css("margin-top", mar);

    var value=$("#btn").css("font-size","3rem");
    
    $("#btn").click(function(){
        $("#section4").css("display","block");
    })

    $(".yes1").click(function(){
        $(".section1").css("height","200px");
        $(".none1").css("display","block");    
    })
    $(".yes2").click(function(){
        $(".section2").css("height","200px");
        $(".none2").css("display","block");
    })
    $(".yes3").click(function(){
        alert("无车位！");
    })
    $(".yes4").click(function(){
        $(".section4").css("height","200px");
        $(".none4").css("display","block");
    })

    
        // var beginh2=$("#beginh2").find('option:selected').text();
        // var beginm2=$("#begin2").val();
        // var endh2=$("#end2").text();
        // var endm2=$("#end2").val();
        // console.log(beginh2);
        // var sum=(endh2-beginh2)*5+((endm2-beginm2)/6)*5;
        // console.log(sum);
        // var span2=$(".span2");
        // span2.html(sum);
    

})