$(document).ready(function() {
    $("#button2, #button3, #cat").hide();

    $("#button1").click(function(){
        $(this).attr("disabled",true);
        $("#button2").show();
    });  
    
    $("#button2").click(function(){
        $(this).attr("disabled",true);
        $("#button3").show();
    });

    $("#button3").click(function(){
        $(this).attr("disabled",true);
        $("#cat").show();
    });

    $("#button4").click(function(){
        $("#button1, #button2, #button3").removeAttr("disabled");
        $("#button2, #button3, #cat").hide();
    });
});