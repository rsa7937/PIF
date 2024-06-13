$(function () {
  gsap.registerPlugin(ScrollTrigger);
  // LOGO Animation
  const $btnSkip = $('.btn-skip');
  const $logoAniWrap = $('.logo-ani-wrap');

  // gsap.from('#container', { width: '100%', duration: 3, backgroundColor: '#ffffff' });

  gsap.set('#header', { xPercent: -500 });

  $('.btn-skip').on('click', function () {
    const skipTL = gsap.timeline();

    skipTL.to($btnSkip, { y: -20, rotation: 10, autoAlpha: 1, duration: 3, ease: 'elastic.out(1,0.3)' });
    skipTL.to($btnSkip, { y: 300, rotation: -10, autoAlpha: 0, duration: 3, ease: 'bounce.out' }, '-=2.5');
    skipTL.to($logoAniWrap, { yPercent: -200, duration: 3, ease: 'power4.inOut' }, '-=2');
    skipTL.from('.total-wrap', { marginTop: 1000, duration: 3, ease: 'power4.inOut' }, '<');

    setTimeout(function () {
      $('.logo-ani-wrap').hide();
    }, 6000);

    skipTL.from('.visual-video', {
      // transformOrigin: 'right top',
      duration: 3,
      scale: 1.2,
      width: '100%',
      backgroundColor: '#143021',
      ease: 'power4.inOut',
      top: '50%',
    });
    skipTL.from(
      '.visual-con',
      {
        transformOrigin: 'top center',
        duration: 3,
        // scale: ,
        // width: '1920px',
        // backgroundColor: '#143021',
        ease: 'power4.inOut',
      },
      '-=3'
    );
    skipTL.from(
      '#section1',
      {
        transformOrigin: 'top center',
        duration: 2,
        marginTop: 1000,
        ease: 'power4.inOut',
        // width: '1920px'
      },
      '-=2.5'
    );
    // skipTL.to('#container', { paddingLeft: 384, duration: 2.5, width: '80%', ease: 'power4.inOut' });

    skipTL.to(
      '#header',
      {
        xPercent: 0,
        duration: 2.5,
        ease: 'power4.inOut',
        onComplete: () => introIcoAni(),
      },
      '<'
    );

    skipTL.to('#container', {
      backgroundColor: '#fafafa',
      duration: 1,
      ease: 'power4.inOut',
    });
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

      start: 'top 0%',
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

  function introIcoAni() {
    iconAni1();
    iconAni2();
    iconAni3();
    iconAni4();
    iconAni5();
  }

  function iconAni1() {
    const iconTL1 = gsap.timeline({ repeat: -1, yoyo: true });

    iconTL1.set('.icon-ani1 .icon-ani1-sec1', { transformOrigin: 'left center' });
    iconTL1.set('.icon-ani1 .icon-ani1-sec2', { transformOrigin: 'left center' });

    iconTL1.to('.icon-ani1 .icon-ani1-sec1', { rotate: 90, duration: 1, ease: 'elastic.inOut(1,0.7)' });
    iconTL1.to('.icon-ani1 .icon-ani1-sec2', { rotate: -90, duration: 1, ease: 'elastic.inOut(1,0.7)' });
    iconTL1.to('.icon-ani1 .icon-ani1-sec1', { xPercent: 100, duration: 1, ease: 'elastic.inOut(1,0.7)' });
    iconTL1.to('.icon-ani1 .icon-ani1-sec2', { xPercent: -100, duration: 1, ease: 'elastic.inOut(1,0.7)' });
    iconTL1.to('.icon-ani1 .icon-ani1-sec1', { rotate: 0, duration: 1, ease: 'elastic.inOut(1,0.7)' });
    iconTL1.to('.icon-ani1 .icon-ani1-sec2', { rotate: 0, duration: 1, ease: 'elastic.inOut(1,0.7)' });
  }

  function iconAni2() {
    const iconTL2 = gsap.timeline({ repeat: -1, yoyo: true });
    iconTL2.to('.icon-ani2 span', { rotate: -90, duration: 2, ease: 'elastic.inOut(1,0.7)' });
    iconTL2.to('.icon-ani2 span', { rotate: -180, duration: 2, ease: 'elastic.inOut(1,0.7)' });
    iconTL2.to('.icon-ani2 span', { rotate: -270, duration: 2, ease: 'elastic.inOut(1,0.7)' });
    iconTL2.to('.icon-ani2 span', { rotate: -360, duration: 2, ease: 'elastic.inOut(1,0.7)' });
  }

  function iconAni3() {
    const iconTL3 = gsap.timeline({ repeat: -1, yoyo: true });
    iconTL3.set('.icon-ani3 span', { scale: 0.8 });
    iconTL3.to('.icon-ani3 span', { scale: 1, duration: 1, ease: 'elastic.inOut(1,0.5)' });
    iconTL3.to('.icon-ani3 span', { rotate: 90, duration: 3, ease: 'elastic.inOut(1,0.5)' });
    iconTL3.to('.icon-ani3 span', { scale: 0.8, duration: 1, ease: 'elastic.inOut(1,0.5)' });
  }

  function iconAni4() {
    const iconTL4 = gsap.timeline({ repeat: -1 });
    iconTL4.to('.icon-ani4-sec1', { xPercent: 100, duration: 2, ease: 'elastic.inOut(1,1)' });
    iconTL4.to('.icon-ani4-sec2', { yPercent: 100, duration: 2, ease: 'elastic.inOut(1,1)' }, '<');
    iconTL4.to('.icon-ani4-sec4', { xPercent: -100, duration: 2, ease: 'elastic.inOut(1,1)' }, '<');
    iconTL4.to('.icon-ani4-sec3', { yPercent: -100, duration: 2, ease: 'elastic.inOut(1,1)' }, '<');
    iconTL4.to('.icon-ani4-sec1', { yPercent: 100, duration: 2, ease: 'elastic.inOut(1,1)' });
    iconTL4.to('.icon-ani4-sec2', { xPercent: -100, duration: 2, ease: 'elastic.inOut(1,1)' }, '<');
    iconTL4.to('.icon-ani4-sec4', { yPercent: -100, duration: 2, ease: 'elastic.inOut(1,1)' }, '<');
    iconTL4.to('.icon-ani4-sec3', { xPercent: 100, duration: 2, ease: 'elastic.inOut(1,1)' }, '<');
  }

  function iconAni5() {
    const iconTL5 = gsap.timeline({ repeat: -1, yoyo: true });

    iconTL5.set('.icon-ani5-sec1', { transformOrigin: 'center bottom' });
    iconTL5.set('.icon-ani5-sec2', { transformOrigin: 'center top' });

    iconTL5.to('.icon-ani5-sec1', { xPercent: -50, duration: 1, ease: 'elastic.inOut(1,1)' });
    iconTL5.to('.icon-ani5-sec2', { rotate: -90, duration: 1, ease: 'elastic.inOut(1,1)' });
    iconTL5.to('.icon-ani5-sec1', { rotate: 90, duration: 1, ease: 'elastic.inOut(1,1)' });
    iconTL5.to('.icon-ani5-sec2', { yPercent: -100, duration: 1, ease: 'elastic.inOut(1,1)' });
    iconTL5.to('.icon-ani5-sec1', { yPercent: 100, duration: 1, ease: 'elastic.inOut(1,1)' });
    iconTL5.to('.icon-ani5-sec2', { rotate: 0, duration: 1, ease: 'elastic.inOut(1,1)' });
    iconTL5.to('.icon-ani5-sec1', { rotate: 0, duration: 1, ease: 'elastic.inOut(1,1)' });
    iconTL5.to('.icon-ani5-sec1', { xPercent: 0, duration: 1, ease: 'elastic.inOut(1,1)' });
  }
});
