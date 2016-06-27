$.fn.scrollView = function (selector) {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(selector).offset().top
    }, 1000);
  });
}
