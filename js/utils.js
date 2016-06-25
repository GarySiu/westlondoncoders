
  $.fn.scrollView = function ($elem) {
	  return this.each(function () {
	    $('html, body').animate({
	      scrollTop: $elem.offset().top
	    }, 1000);	
	  });
	}

