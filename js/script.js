$(function () {
  gsap.registerPlugin(ScrollTrigger);
  $(document).ready(function () {
    $('html').scrollTop(0);
  });

  $(window).on('load', function () {
    $('html').scrollTop(0);
  });

  // LOGO Animation

  // 비디오가 다 재생된 후, 또는 비디오를 스킵한 후 플레이되는 로딩(헤더와 메인이 뜨는) 애니메이션 함수
  function loadAni() {
    const $logoAniWrap = $('.logo-ani-wrap');
    const loadTL = gsap.timeline();

    loadTL.to($logoAniWrap, { yPercent: -200, duration: 1.2, ease: 'power4.inOut' }, '<');
    loadTL.from('.total-wrap', { marginTop: 1000, duration: 1.2, ease: 'power4.inOut' }, '<');

    setTimeout(function () {
      $('.logo-ani-wrap').hide();
    }, 6000);

    loadTL.from(
      '.visual-video',
      {
        // transformOrigin: 'right top',
        duration: 1.2,
        scale: 1.15,
        // width: '100%',
        backgroundColor: '#143021',
        ease: 'power4.inOut',
        // top: '50%',
      },
      '-=0.5'
    );

    loadTL.from(
      '.visual-con',
      {
        transformOrigin: 'top center',
        duration: 1.2,
        // scale: ,
        // width: '1920px',
        // backgroundColor: '#143021',
        ease: 'power4.inOut',
      },
      '<'
    );
    loadTL.from(
      '#section1',
      {
        transformOrigin: 'top center',
        duration: 1.2,
        marginTop: 1000,
        ease: 'power4.inOut',
        // width: '1920px'
      },
      '<'
    );
    // skipTL.to('#container', { paddingLeft: 384, duration: 2.5, width: '80%', ease: 'power4.inOut' });

    loadTL.from(
      '#header',
      { xPercent: -500, duration: 1.2, ease: 'power4.inOut', onComplete: () => introIcoAni() },
      '<'
    );
    loadTL.to('#container', { backgroundColor: '#fafafa', duration: 1, ease: 'power4.inOut' });
  }
  // 비디오가 다 재생된 후,
  $('.logo-ani video').on('ended', loadAni);

  // 비디오를 스킵한 후
  const $btnSkip = $('.btn-skip');
  $('.btn-skip').on('click', function () {
    const skipTL = gsap.timeline();
    skipTL.to($btnSkip, {
      y: -20,
      rotation: 10,
      autoAlpha: 1,
      duration: 1,
      ease: 'elastic.out(1,0.8)',
      onComplete: loadAni,
    });
    skipTL.to($btnSkip, { y: 300, rotation: -10, autoAlpha: 0, duration: 1, ease: 'bounce.out' }, '-=.5');
  });

  // Header : Anchor
  const $menu = $('.gnb > li');
  const sectionEl = gsap.utils.toArray('section');
  const liEl = gsap.utils.toArray('.gnb > li');

  $menu.on('mouseenter', function () {
    $(this).addClass('hover');
  });

  $menu.on('mouseleave', function () {
    $(this).removeClass('hover');
  });

  console.log(sectionEl);
  sectionEl.forEach((sec, index) => {
    ScrollTrigger.create({
      trigger: sec,
      markers: false,
      start: 'top 60%',
      end: 'bottom 60%',
      toggleClass: { targets: liEl[index], className: 'active' },
    });
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

    slidesPerView: 6,
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

  // Main Visual Icon animation
  function introIcoAni() {
    iconAni1();
    iconAni2();
    iconAni3();
    iconAni4();
    iconAni5();
    iconAni6();
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

  function iconAni6() {
    gsap.to('.visual-con h2 b', { y: -10, duration: 0.5, repeat: -1, ease: 'power4.inOut', yoyo: true });
  }

  // Main : About [02] profile
  const arrTL = gsap.timeline();
  arrTL.from('.name-deco span', {
    xPercent: -100,
    yPercent: 100,
    autoAlpha: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: '.profile',
      markers: true,
      start: 'top 100%',
      end: 'bottom 60%',
      toggleActions: 'play none restart none',
      scrub: 1,
    },
  });

  // lvBarEl.forEach(index)

  const lvBarEl = gsap.utils.toArray('.info2 ul li .levelbar-wrap .levelbar');
  console.log(lvBarEl);

  lvBarEl.forEach((item, index) => {
    const lvWidthArr = ['26rem', '24rem', '20rem', '20rem', '21rem', '22rem', '16rem', '24rem', '20rem'];
    // lvBarEl[index].css('width', lvWidthArr[index]);
    console.log(lvBarEl[index]);
    $(lvBarEl[index]).css('width', `${lvWidthArr[index]}`);

    gsap.from(lvBarEl[index], {
      width: 0,
      duration: 0.2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.profile',
        markers: true,
        start: 'top 100%',
        end: 'bottom 60%',
        toggleActions: 'play none restart none',
        scrub: 1,
      },
    });
  });
});
