$('#slick-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next')
});

$('#slick-slider_top').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
  appendDots: $('.slider-controls')
});