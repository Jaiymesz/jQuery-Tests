var catImages = [
    "http://www.cheatsheet.com/wp-content/uploads/2017/06/sulky-cat.jpg",
    "https://c.files.bbci.co.uk/151AB/production/_111434468_gettyimages-1143489763.jpg",
    "http://i0.kym-cdn.com/photos/images/facebook/000/012/445/lime-cat.jpg",
    "https://uniquelycats.com/wp-content/uploads/2017/06/CatNutrition.jpg",
    "https://e3.365dm.com/18/01/750x563/skynews-cat-istock_4199673.jpg?20180106154111"
];

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
        $("#cat").slideDown(1000);
    });

    $("#button4").click(function(){
        $("#button1, #button2, #button3").removeAttr("disabled");
        $("#cat").slideUp(function(){
            $("#button3").fadeOut(function(){
                $("#button2").fadeOut();
            });
        });
    });

    $("#cat > img").click(function(){
        $(this).attr("src",catImages[Math.floor(Math.random() * 5)]);
    })
});