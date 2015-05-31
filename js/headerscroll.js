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