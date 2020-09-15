$(function() {

	// Custom JS

	// Toggle mobile nav
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".mobile-menu__nav").toggleClass("visible");
		$("body").toggleClass("cover-bg");
	});
	

	// Moble menu
	$(".mobile-menu__nav ul li ul.submenu").parent().addClass("item-children");
	$(".mobile-menu__nav li.item-children > a").on("click", function() {
		$(this).parent().toggleClass("active").siblings().removeClass("active");
		$(this).next("ul").slideToggle();
		$(this).parent().siblings().find("ul").slideUp();
		return false;
	});

	// Slider
	var owl = $(".slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 1500
	});
	
	$(".next").click(function() {
		owl.trigger("next.owl.carousel");
	});
	$(".prev").click(function() {
		owl.trigger("prev.owl.carousel");
	});

	// Count
	$('.calc').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// Equal heights for elements
	$(".reach__item").equalHeights();


});
