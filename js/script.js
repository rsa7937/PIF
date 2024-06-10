$(function () {
  const projectText = new Swiper('.project-text', {
    speed: 500,
    loop: true,
    loopedSlides: 6,
    direction: 'vertical',

    // autoplay: { delay: 5000 },

    // centeredSlides: true,

    slideToClickedSlide: true,

    slidesPerView: 'auto',
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.btn-down',
      prevEl: '.btn-up',
    },
  });
  const projectImg = new Swiper('.project-img', {
    speed: 500,
    loop: true,
    loopedSlides: 6,
    direction: 'vertical',

    // autoplay: { delay: 5000 },

    // centeredSlides: true,

    // slideToClickedSlide: true,

    slidesPerView: 1,
    spaceBetween: 20,
    // Navigation arrows
  });

  projectImg.controller.control = projectText;
  projectText.controller.control = projectImg;
});
