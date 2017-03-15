$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).load(function() {
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });
    
    $(window).scroll( function(){

        /* Check the location of each desired element */
        if($(window).scrollTop() <= 9000){
                  $(".doit").css("-webkit-animation-play-state", "running")
                }
        if($(window).scrollTop() <= 6700){
                  $(".dedication").css("-webkit-animation-play-state", "running")
                }
        if($(window).scrollTop() <= 5300){
                  $(".risk").css("-webkit-animation-play-state", "running")
                }
        if($(window).scrollTop() <= 4100){
                  $(".will").css("-webkit-animation-play-state", "running")
                }
        if($(window).scrollTop() <= 2800){
                  $(".stop").css("-webkit-animation-play-state", "running")
                }
        if($(window).scrollTop() <= 1300){
                  $(".push").css("-webkit-animation-play-state", "running")
                }
        if($(window).scrollTop() <= 300){
                  $(".triumph").css("-webkit-animation-play-state", "running")
                }
    });
});
