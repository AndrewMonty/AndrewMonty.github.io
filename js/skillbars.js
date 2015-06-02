// animate the skills bars once the page is scrolled to the about section

$(document).ready(function(){
	$(window).scroll(function() {

		scrolled = $('#about').hasClass('scrolled');
		if ( scrolled ) {
			// do nothing
		} else {
			animateBars();
		}

	});

	function animateBars() {

		var target = $('#about').offset().top; //get the offset top of the element
		var current = $(window).scrollTop(); // get the current location
		if ( current >= target ) {
			
			// add scrolled class to the target
			// we're checking for this in window.scroll so that the bars only animate once
			$('#about').addClass('scrolled'); 

			$('.skills li').each(function(){
				$(this).find('.bar').animate({
					width:$(this).attr('data-percent')
				},1500);
			});
		}
		
	}

});
