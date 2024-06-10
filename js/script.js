$(function () {
  const projectText = new Swiper('.project-text', {
    speed: 500,
    loop: true,
    loopedSlides: 6,
    direction: 'vertical',

    autoplay: { delay: 5000 },

    // centeredSlides: true,

    slideToClickedSlide: true,

    slidesPerView: 'auto',
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.btn-up',
      prevEl: '.btn-down',
    },
  });
});
