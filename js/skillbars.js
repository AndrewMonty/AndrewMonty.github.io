// animate the skills bars once the page is scrolled to the about section

$(document).ready(function(){
	$(window).scroll(function() {
		var target = $('#about').offset().top; //get the offset top of the element
		var current = $(window).scrollTop(); // get the current location
		console.log(target,current);
		if ( current >= target ) {
			$('.skills li').each(function(){
				$(this).find('.bar').animate({
					width:$(this).attr('data-percent')
				},1500);
			});
		}
	});
});
