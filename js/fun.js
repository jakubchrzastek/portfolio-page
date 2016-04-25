$(document).ready(function(){
    
$('#toggle').click(function() {
$(this).toggleClass('active');
$('#overlay').toggleClass('open');
});
    
$("#arrow-down").click(function() {
    $('html, body').animate({
        scrollTop: $("#whoami").offset().top
    }, 900);
});

$("#scrolltop").click(function() {
    $('html, body').animate({
        scrollTop: $("html").offset().top
    }, 1500);
});

$(window).scroll(function(){
    var windowScroll = $(window).scrollTop();
    if(windowScroll > 300)
    {
      $('#scrolltop').show();
    }
    else
    {
      $('#scrolltop').hide();
    }
  });
    
});  
