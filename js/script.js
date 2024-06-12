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

  const graphicSlider = new Swiper('.graphic-slider', {
    speed: 500,
    loop: true,
    loopedSlides: 6,

    autoplay: { delay: 5000 },

    slideToClickedSlide: true,

    slidesPerView: 'auto',
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });

  const $menu = $('.gnb > li');
  const duration = 300;

  $menu.on('mouseenter', function () {
    $(this).addClass('hover');
  });

  $menu.on('mouseleave', function () {
    $(this).removeClass('hover');
  });

  $menu.on('click', function () {
    $menu.removeClass('active');
    $(this).addClass('active');
  });
});
