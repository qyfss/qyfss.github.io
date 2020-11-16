$(function() {

	// Custom JS

	// Preloader
$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

	// Toggle mobile nav
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".mobile-menu__nav").toggleClass("visible");
		$("body").toggleClass("cover-bg");
	});

	$("ul.sf-menu").superfish();
	

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


// Equal heights for elements
	$(".reach__item").equalHeights();

// Partners carousel
$(".partners").owlCarousel({
	loop: true,
	smartSpeed: 700,
	dots: false,
	nav: true,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	responsiveClass: true,
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 2
		},
		992: {
			items: 3
		},
		1200: {
			items: 4
		}
	}
});

// Button to top
$(window).scroll(function () {
	if ($(this).scrollTop() > $(this).height()) {
		$('.top').addClass('active');
	}  else {
		$('.top').removeClass('active');
	}
});

// To top button
$('.top').click(function () {
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
})

// Reviews
$('.reviews').owlCarousel({
	loop: true,
	autoplay: true,
	items: 1,
	smartSpeed: 250,
	autoplayHoverPause: true,
	nav: false
});

//  Masonry 
var $container = $(".masonry-container");

	$container.imagesLoaded(function () {
		$container.masonry({
			itemSelector: ".item",
			columnWidth: ".item"
		});
	});

$('.grid-container').masonry({
	itemSelector: '.grid-item',
	columnWidth: 260,
	gutter: 10
})

});


