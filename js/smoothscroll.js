// resize the home section to be the full height of the viewport
// sticking this here because it's the first script to load

$(document).ready(function(){

  $('#home').css({'min-height':$(window).height() + 'px'});
  console.log($(window).height());

});

// add smooth scrolling to links

$(document).ready(function(){
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

