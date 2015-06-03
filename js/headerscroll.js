// add a scrolled class to the header when it's scrolled past the log
// this resizes it to more of a traditional menu bar with the logo floated left

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 150,
            header = $('header');
        if (distanceY > shrinkOn) {
            header.addClass('scrolled');
        } else {
            if ( distanceY < shrinkOn ) {
                header.removeClass('scrolled');
            }
        }
    });
}

window.onload = init();