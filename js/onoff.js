$(function(){
    
    
        var imgname = "";
    var flag = true;
    $("#onoroff").click(function(){
        if(flag){
            imgname = "images/off.jpg"
            flag = false;
        }
        else{
            imgname = "images/on.jpg"
            flag = true;
        }
        $("img").attr("src",imgname);
  
    });
    /*button on off logic */
    
    $("#btnhide").click(function(){
        $("#randomtext").hide(1000);
    });
    
    $("#btnshow").click(function(){
        $("#randomtext").show(1000);
    });
    $("#btntoggle").click(function(){
        $("#randomtext").toggle(1000);
    });
    
    /* fade in out logic */
    $("#fadein").click(function(){
        $("#box").fadeIn();
    });
    
    $("#fadeout").click(function(){
        $("#box").fadeOut();
    });
    
     $("#fadetoggle").click(function(){
        $("#box").fadeToggle();
    });
    
});