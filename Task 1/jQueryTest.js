$(document).ready(function() {
    $("#button2, #button3, #cat").hide();

    $("#button1").click(function(){
        $("#button2").show();
    });  
    
    $("#button2").click(function(){
        $("#button3").show();
    });

    $("#button3").click(function(){
        $("#cat").show();
    });

    $("#button4").click(function(){
        $("#button2, #button3, #cat").hide();
    });
});