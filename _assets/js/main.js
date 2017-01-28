new WOW().init();

$(document).ready(function() {
	$('.menu-button').click(function(event) {
		event.preventDefault(event);
		$('header').toggleClass('active');
		$(this).children('.rocket').toggleClass('entypo-cancel-squared').toggleClass('entypo-rocket');
	});
});

$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

var bodyEl = $("body");
$(window).on("scroll", function() {
    var scrollTop = $(this).scrollTop();
    $("section").each(function() {
        var el = $(this),
            className = el.attr("id");
        if (el.offset().top < scrollTop) {
            bodyEl.addClass(className);  
        } else {
            bodyEl.removeClass(className);
        }
    });
});