$('.responsive').slick({
  // dots: true,
  prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
  nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
  infinite: true,
  speed: 300,
  accessibility: true,
  slidesToScroll: 1,
  slidesToShow: 2,
  adaptiveHeight: true,
  variableWidth: true,
  dots: true,
  lazyLoad: 'ondemand',
  respondTo: 'window',
  swipe: true,
  swipeToSlide: true,
  // centerMode: true,
  // обовязково додається, щоб частина картки заходило за вьюпорт

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },

    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 5,
      },

    },
  ],
});