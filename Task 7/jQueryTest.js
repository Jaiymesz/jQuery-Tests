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
        
        setTimeout(function(){
            if(!$("#button5").length){
                $("#button4").after("&nbsp; <button id='button5'>I prefer dogs</button");
                $(document).on("click","#button5", function(){                    
                    $("#cat > img").attr("src","https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_samoyed_desktop.jpg?h=475&la=en&w=825&hash=141A7757B0B0C4925227669C085DDA69");
                });
            }
        }, 5000);
    });

    $("#button4").click(function(){
        $("#button1, #button2, #button3").removeAttr("disabled");
        $("#cat").slideUp(function(){
            $("#button3").fadeOut(function(){
                $("#button2").fadeOut();
            });
            $("#cat > img").attr("src","https://c.files.bbci.co.uk/151AB/production/_111434468_gettyimages-1143489763.jpg");
        });
    });

    $("#cat > img").click(function(){
        $(this).attr("src",catImages[Math.floor(Math.random() * 5)]);
    })
});