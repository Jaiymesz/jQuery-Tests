$(document).ready(function() {
    $("#button2, #button3, #cat").hide();

    $("#button1").click(function(){
        $(this).attr("disabled",true);
        $("#button2").fadeIn();
    });  
    
    $("#button2").click(function(){
        $(this).attr("disabled",true);
        $("#button3").fadeIn();
    });

    $("#button3").click(function(){
        $(this).attr("disabled",true);
        $("#cat").slideDown();
    });

    $("#button4").click(function(){
        $("#button1, #button2, #button3").removeAttr("disabled");
        $("#cat").slideUp();
        $("#button3, #button2").fadeOut();
    });
});