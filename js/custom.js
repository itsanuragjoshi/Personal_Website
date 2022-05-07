//Tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

//Page Scroll Indicator
$(document).ready(function() {
  $(window).scroll(function() {
    var wintop = $(window).scrollTop(); 
    var docheight = $(document).height();
    var winheight = $(window).height();
    var scrolled = (wintop/(docheight-winheight))*100;
    $('.progress-bar').css('width', (scrolled + '%'));
  });
});

//Hamburger Menu
$(document).ready(function() {
  $('.icon-ham').click(function() {
    $('nav').fadeToggle(300);
    $('.icon-ham').toggleClass('active'); 
  });
});
