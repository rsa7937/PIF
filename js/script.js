$(function () {
  gsap.registerPlugin(ScrollTrigger);
  // LOGO Animation
  const $btnSkip = $('.btn-skip');
  const $logoAniWrap = $('.logo-ani-wrap');

  $('.btn-skip').on('click', function () {
    const skipTL = gsap.timeline();
    gsap.set('#container', { paddingLeft: 0, width: '100%', backgroundColor: '#ffffff' });
    gsap.set('#header', { xPercent: -500 });

    skipTL.to($btnSkip, { y: -20, rotation: 10, autoAlpha: 1, duration: 3, ease: 'elastic.out(1,0.3)' });
    skipTL.to($btnSkip, { y: 300, rotation: -10, autoAlpha: 0, duration: 3, ease: 'bounce.out' }, '-=2.5');
    skipTL.to($logoAniWrap, { yPercent: -200, duration: 3, ease: 'power4.inOut' }, '-=2');
    skipTL.from('.total-wrap', { marginTop: 1000, duration: 3, ease: 'power4.inOut' }, '<');

    setTimeout(function () {
      $('.logo-ani-wrap').hide();
    }, 6000);

    skipTL.to('#container', { paddingLeft: 384, duration: 2.5, width: '80%', ease: 'power4.inOut' });
    skipTL.to('#header', { xPercent: 0, duration: 2.5, ease: 'power4.inOut' }, '<');
    skipTL.to('#container', { backgroundColor: '#fafafa', duration: 1, ease: 'power4.inOut' });
  });

  // Header : Anchor
  const $menu = $('.gnb > li');
  const duration = 300;

  $menu.on('mouseenter', function () {
    $(this).addClass('hover');
  });

  $menu.on('mouseleave', function () {
    $(this).removeClass('hover');
  });

  // $menu.on('click', function () {
  //   $menu.removeClass('active');
  //   $(this).addClass('active');
  // });
  gsap.to('#section0', {
    scrollTrigger: {
      trigger: '#section0',
      markers: true,

      start: 'top 50%',
      end: 'bottom 50%',

      toggleClass: { targets: '.gnb > li:nth-child(1)', className: 'active' },
    },
  });
  gsap.to('#section1', {
    scrollTrigger: {
      trigger: '#section1',
      markers: true,
      start: 'top 50%',
      end: 'bottom 50%',

      toggleClass: { targets: '.gnb > li:nth-child(2)', className: 'active' },
    },
  });
  gsap.to('#section2', {
    scrollTrigger: {
      trigger: '#section2',
      markers: true,
      start: 'top 50%',
      end: 'bottom 50%',

      toggleClass: { targets: '.gnb > li:nth-child(3)', className: 'active' },
    },
  });
  gsap.to('#section3', {
    scrollTrigger: {
      trigger: '#section3',
      markers: true,
      start: 'top 50%',
      end: 'bottom 50%',

      toggleClass: { targets: '.gnb > li:nth-child(4)', className: 'active' },
    },
  });

  // Main : Portfolio Swiper
  const projectText = new Swiper('.project-text', {
    speed: 500,
    loop: true,
    loopedSlides: 6,
    direction: 'vertical',

    autoplay: { delay: 5000 },

    centeredSlides: true,

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

    slideToClickedSlide: true,

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
});
