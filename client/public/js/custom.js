$(document).ready(function () {
	"use strict";
	
	//Search
	$('.search-trigger').on('click', function (e) {
		e.preventDefault();
		$('.search-wrap').animate({opacity: 'toggle'}, 500);
		$('.nav-search, #search-close').addClass("open");
	});
	$('.search-close').on('click', function (e) {
		e.preventDefault();
		$('.search-wrap').animate({opacity: 'toggle'}, 500);
		$('.nav-search, #search-close').removeClass("open");
	});
	function closeSearch() {
		$('.search-wrap').fadeOut(200);
		$('.nav-search, #search-close').removeClass("open");
	}
	$(document.body).on('click', function (e) {
		closeSearch();
	});
	$(".search-trigger, .main-search-input").on('click', function (e) {
		e.stopPropagation();
	});
	

	// scroll body to 0px on click
	$('#back-top a').on('click', function (e) {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
	});

	
	//Course Carousel
	$(".course-slide").owlCarousel({
		loop: true,
		items : 3,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				nav: false
			},
			992: {
				items: 3,
				nav: true,
				loop: false
			}
		}
    });
	
	//Teachers Carousel
	$(".teachers-carousel").owlCarousel({
		loop: true,
		items : 4,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 3,
				nav: true
			},
			992: {
				items: 4,
				nav: true,
				loop: true
			}
		}
    });
	
	//Testimonial Carousel
	$(".testimonial-carousel").owlCarousel({
		loop: true,
		items : 2,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		margin: 30,
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				nav: false
			},
			992: {
				items: 2,
				nav: true,
				loop: false
			}
		}
    });
	
	//Testimonial Carousel02
	$(".testimonial-carousel02").owlCarousel({
		loop: true,
		items : 1,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 1,
				nav: false
			},
			992: {
				items: 1,
				nav: true,
				loop: false
			}
		}
    });
	
	//Testimonial Carousel Style 02
	$(".testimonial-items").owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 10,
        URLhashListener: true,
        startPosition: 'URLHash',
		animateOut: "slideOutUp",
		animateIn: "fadeInUp",
		responsiveClass: true,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1,
				loop: false
			}
		}
    });
	
	//Tabpane Carousel
	$(".tabpane-carousel").owlCarousel({
        items: 1,
        loop: false,
        center: true,
		responsiveClass: true,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1,
				loop: false
			}
		}
    });
	
	//Course Carousel (.course-slider03)
	$(".course-slider03").owlCarousel({
		loop: true,
		items : 4,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 4,
				nav: true,
				loop: false
			}
		}
    });
	
	//Publication Carousel
	$(".publication-carousel").owlCarousel({
		loop: true,
		items : 4,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 4,
				nav: true,
				loop: false
			}
		}
    });
	
	//Publication Carousel 02
	$(".publication-carousel02").owlCarousel({
		loop: true,
		items : 3,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true,
				loop: false
			}
		}
    });
	
	//Blog Post Carousel
	$(".blog-posts-carousel").owlCarousel({
		loop: true,
		items : 3,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true,
				loop: false
			}
		}
    });
	
	//Blog Post Carousel
	$(".blog07-wrapper").owlCarousel({
		loop: true,
		items : 3,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		margin: 30,
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true,
				loop: false
			}
		}
    });
	
	//Clients Logo Slider
	$(".clients-logo-slider").owlCarousel({
		loop: true,
		items : 7,
		nav : false,
		margin: 30,
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 2,
				nav: false
			},
			480: {
				items: 2,
				nav: false
			},
			768: {
				items: 6,
				nav: false
			},
			992: {
				items: 7,
				nav: false,
				loop: false
			}
		}
    });
	
	//Course08 Carousel
	$(".course08-carousel").owlCarousel({
		loop: true,
		items : 2,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 2,
				nav: true,
				loop: false
			}
		}
    });
	
	// Dance Category Carousel
	$(".dance-category-carousel").owlCarousel({
		loop: true,
		items : 3,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: true
			},
			768: {
				items: 3,
				nav: true
			},
			992: {
				items: 3,
				nav: true,
				loop: false
			}
		}
    });
	
	// Dance Teacher Carousel
	$(".dance-teacher-carousel").owlCarousel({
		loop: true,
		items : 4,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: true
			},
			768: {
				items: 3,
				nav: true
			},
			992: {
				items: 4,
				nav: true,
				loop: false
			}
		}
    });
	
	// Driving Teacher Carousel
	$(".driving-teacher").owlCarousel({
		loop: true,
		items : 4,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		margin: 30,
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: true
			},
			768: {
				items: 3,
				nav: true
			},
			992: {
				items: 4,
				nav: true,
				loop: false
			}
		}
    });
	
	// Driving Blog Carousel
	$(".driving-blog").owlCarousel({
		loop: true,
		items : 3,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true,
				loop: false
			}
		}
    });
	
	// Driving Blog Carousel
	$(".instructor-carousel").owlCarousel({
		loop: true,
		items : 4,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		margin: 30,
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: true
			},
			768: {
				items: 3,
				nav: true
			},
			992: {
				items: 4,
				nav: true,
				loop: false
			}
		}
    });
	
	// Course Carousel Main
	$(".course-carousel-main").owlCarousel({
		loop: true,
		items : 3,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true,
				loop: false
			}
		}
    });
	
	// Kindergarten Testimonial
	$(".testimonial-kg").owlCarousel({
		loop: true,
		items : 3,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true,
				loop: false
			}
		}
    });
	
	// Related Course Slider
	$(".related-course-slide").owlCarousel({
		loop: true,
		items : 2,
		nav : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		dots: true,
		margin: 30,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 2,
				nav: true
			},
			992: {
				items: 2,
				nav: true,
				loop: false
			}
		}
    });
	
	//Revolution Slider
	jQuery('#rev_slider_1').show().revolution({
		/* Options are 'auto', 'fullwidth' or 'fullscreen' */
		sliderLayout: 'auto',
		gridwidth: 1140,
		gridheight: 750,
		/* Navigation arrows and bullets */
		navigation: {
			arrows: {
				enable: true,
				style: 'zeus',
				tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
				hide_onleave: false,
				hide_onmobile: true,
				hide_under: 480
			}
		}
	});
	
	//Revolution Slider 02
	jQuery('#rev_slider_2').show().revolution({
		/* Options are 'auto', 'fullwidth' or 'fullscreen' */
		sliderLayout: 'auto',
		gridwidth: 1140,
		gridheight: 750,
		/* Navigation arrows and bullets */
		navigation: {
			arrows: {
				enable: true,
				style: 'zeus',
				tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
				hide_onleave: false,
				hide_onmobile: true,
				hide_under: 480
			}
		}
	});
	
	//Revolution Slider 03
	jQuery('#rev_slider_3').show().revolution({
		/* Options are 'auto', 'fullwidth' or 'fullscreen' */
		sliderLayout: 'auto',
		gridwidth: 1140,
		gridheight: 800,
		delay: 9999999999,
		/* Navigation arrows and bullets */
		navigation: {
			arrows: {
				enable: true,
				style: 'persephone',
				hide_under: 480
			}
		}
	});
	
	//Revolution Slider 04
	jQuery('#rev_slider_4').show().revolution({
		/* Options are 'auto', 'fullwidth' or 'fullscreen' */
		sliderLayout: 'auto',
		gridwidth: 1140,
		gridheight: 750,
		/* Navigation arrows and bullets */
		navigation: {
			arrows: {
				enable: true,
				style: 'zeus',
				tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
				hide_onleave: false,
				hide_onmobile: true,
				hide_under: 480
			},
			bullets: {
				enable: false
			}
		}
	});
	
	//Revolution Slider Kindergarten 2
	jQuery('#rev_slider_5').show().revolution({
		/* Options are 'auto', 'fullwidth' or 'fullscreen' */
		sliderLayout: 'auto',
		gridwidth: 1140,
		gridheight: 800,
		/* Navigation arrows and bullets */
		navigation: {
			arrows: {
				enable: true,
				style: 'persephone',
				hide_under: 480
			}
		}
	});
	
	//Custom Buttons
	$('.plus').on('click', function (e) {
		var $this = $(this);
		$this.hide();
		$this.closest('.plus-btn').find('.minus').show();
		$this.closest('.plus-btn').find('.display-social').css({'opacity': '1'});
	});
	$('.minus').on('click', function (e) {
		var $this = $(this);
		$this.hide();
		$this.closest('.plus-btn').find('.plus').show();
		$this.closest('.plus-btn').find('.display-social').css({'opacity': '0'});
	});
	
	//Magnific Popup
	$('.video-iframe').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				  '</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'http://www.youtube.com/embed/%id%?autoplay=1'
				}
			},
			srcAction: 'iframe_src'
		}
	});
	
	// Simple Timer
	$('#timer-wrapper').syotimer({
		year: 2019,
		month: 4,
		day: 1,
		hour: 12,
		minute: 30
	});
	
	// Sticky JS
	$(".main-menu").sticky({topSpacing: 0});
	
	//Map Pointer
	$('.contact-map').on('click', function (e) {
			$(this).find('iframe').css('pointer-events', 'auto');
		}).mouseleave(function (e) {
			$(this).find('iframe').css('pointer-events', 'none');
	});

	
	// Course Gallery
	var sync1 = $("#sync1");
	var sync2 = $("#sync2");
	var slidesPerPage = 5; //Globally define number of elements per page
	var syncedSecondary = true;

	sync1.owlCarousel({
		items : 1,
		slideSpeed : 2000,
		nav: true,
		autoplay: true,
		dots: true,
		loop: true,
		responsiveRefreshRate : 200,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	}).on('changed.owl.carousel', syncPosition);
	sync2.owlCarousel({
		items: 5,
		margin: 6,
		nav: false
	}).on('initialized.owl.carousel', function () {
		sync2.find(".owl-item").eq(0).addClass("current");
	}).owlCarousel({
		items: slidesPerPage,
		dots: true,
		nav: true,
		smartSpeed: 200,
		slideSpeed : 500,
		slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
		responsiveRefreshRate : 100
	}).on('changed.owl.carousel', syncPosition2);
	function syncPosition(el) {
		//if you set loop to false, you have to restore this next line
		//var current = el.item.index;

		//if you disable loop you have to comment this block
		var count = el.item.count - 1;
		var current = Math.round(el.item.index - (el.item.count / 2) - .5);

		if (current < 0) {
			current = count;
		}
		if (current > count) {
			current = 0;
		}

		//end block
		sync2
		  .find(".owl-item")
		  .removeClass("current")
		  .eq(current)
		  .addClass("current");
		var onscreen = sync2.find('.owl-item.active').length - 1;
		var start = sync2.find('.owl-item.active').first().index();
		var end = sync2.find('.owl-item.active').last().index();

		if (current > end) {
		  sync2.data('owl.carousel').to(current, 100, true);
		}
		if (current < start) {
		  sync2.data('owl.carousel').to(current - onscreen, 100, true);
		}
	}
	function syncPosition2(el) {
		if (syncedSecondary) {
		  var number = el.item.index;
		  sync1.data('owl.carousel').to(number, 100, true);
		}
	}
	sync2.on("click", ".owl-item", function (e) {
		e.preventDefault();
		var number = $(this).index();
		sync1.data('owl.carousel').to(number, 300, true);
	});
	
	
	// Synced Testimonial
	var sync3 = $("#testimonial-sync1");
	var sync4 = $("#testimonial-sync2");
	var slidesPerPage = 7; //Globally define number of elements per page
	var syncedSecondary = true;

	sync3.owlCarousel({
		items : 1,
		slideSpeed : 2000,
		nav: true,
		autoplay: true,
		dots: true,
		loop: true,
		responsiveRefreshRate : 200,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	}).on('changed.owl.carousel', syncPosition);
	sync4.owlCarousel({
		items: 7,
		margin: 6,
		nav: false,
		center: true
	}).on('initialized.owl.carousel', function () {
		sync4.find(".owl-item").eq(0).addClass("current");
	})
	.owlCarousel({
		items : slidesPerPage,
		dots: true,
		nav: true,
		smartSpeed: 200,
		slideSpeed: 500,
		slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
		responsiveRefreshRate : 100
	}).on('changed.owl.carousel', syncPosition2);
	function syncPosition(el) {
		//if you set loop to false, you have to restore this next line
		//var current = el.item.index;

		//if you disable loop you have to comment this block
		var count = el.item.count - 1;
		var current = Math.round(el.item.index - (el.item.count / 2) - .5);

		if (current < 0) {
		  current = count;
		}
		if (current > count) {
		  current = 0;
		}

		//end block
		sync4
		  .find(".owl-item")
		  .removeClass("current")
		  .eq(current)
		  .addClass("current");
		var onscreen = sync4.find('.owl-item.active').length - 1;
		var start = sync4.find('.owl-item.active').first().index();
		var end = sync4.find('.owl-item.active').last().index();

		if (current > end) {
		  sync4.data('owl.carousel').to(current, 100, true);
		}
		if (current < start) {
		  sync4.data('owl.carousel').to(current - onscreen, 100, true);
		}
	}
	function syncPosition2(el) {
		if(syncedSecondary) {
		  var number = el.item.index;
		  sync3.data('owl.carousel').to(number, 100, true);
		}
	}
	sync4.on("on", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).index();
		sync3.data('owl.carousel').to(number, 300, true);
	});
	
	//Preloader
	$(window).on('load', function (e) { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow':'visible'});
		
		//Sticky Nav
		$("#main-nav").sticky({ topSpacing: 0 });
	});
		
	//Testimonial Carousel (Slick)
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		variableWidth: false,
		arrows: false
	});
	
	//Mean Menu
	jQuery('header #edulight-navbar-collapse').meanmenu({
		meanScreenWidth: "767"
	});
	
	
});

