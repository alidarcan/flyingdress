jQuery(function($) {
    $(window).on('scroll', function() {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top');
		}
	});
	
	function adjustNav() {
		var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');
		
		if (winWidth >= 768) {
			dropdown.on('mouseenter', function() {
				$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
			});
			
			dropdown.on('mouseleave', function() {
				$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}
	
	$(window).on('resize', adjustNav);
	
	adjustNav();
}); 

// Owl Carousel Activation
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 4,
      },
      600: {
        items: 6,
      },
      990: {
        items: 7,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
  
  // Tooltip Activation
  $(document).ready(function () {
    $("body").tooltip({ selector: "[data-bs-toggle=tooltip]" });
  });
  