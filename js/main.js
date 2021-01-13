(function ($) {
	"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.hibo-mobile-menu',
	meanScreenWidth: "1200",
	onePage: true
});


// Menu Nav
function smoothSctollTop() {
	$('.main-menu ul > li > a[href^="#"],.mean-nav ul > li > a[href^="#"]').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 100
			}, 1000);
		}
	});
}
smoothSctollTop();	

// menu active class
$('.main-menu ul li:first-child > a').addClass('active');

//for menu active class
$('.main-menu ul li > a').on('click',function () {
	$('.basic-menu li a').removeClass("active");
	$(this).addClass("active");
});

// scroll
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 50) {
		$("#header-sticky").removeClass("header-sticky");
	} else {
		$("#header-sticky").addClass("header-sticky");
	}
});


// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// // owlCarousel
// $('.testimonial-active').owlCarousel({
//     loop:true,
//     margin:30,
// 	items:1,
//     nav:false,
//     arrows: false,
// 	dots:false,
//     responsive:{
//         0:{
// 			items:1,
// 			nav: false,
//         },
//         767:{
//             items:2
//         },
//         992:{
//             items:2
//         },
//         1200:{
//             items:3
//         }
//     }
// })


// owlCarousel
$('.testimonial-active').owlCarousel({
    loop:true,
    margin:30,
	items:1,
	// navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
	navText: ["<img src='img/arrow/02.png'>","<img src='img/arrow/01.png'>"],
    nav:true,
	dots:false,
    responsive:{
        0:{
			items:1,
			nav: false,
        },
        767:{
            items:2
        },
        992:{
            items:3
        }
    }
})

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

// isotop
$('.grid').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: 1
	  }
	});

	// filter items on button click
	$('.button-group').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

});

// data - background
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// data - background
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})



// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-chevron-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();

//counterUp Start
$('.counter').counterUp({
 	delay: 10,
 	time: 1000
});

// side-bar
$('.bar').on("click", function() {
	$('.btn-menu-main').addClass('btn-menu-main-right');
});
$('.crose').on("click", function() {
	$('.btn-menu-main').removeClass('btn-menu-main-right');
});


})(jQuery);