$(function () {
  gsap.registerPlugin(ScrollTrigger);

  function mainInit() {
    // 문서 새로고침했을 때, 스크롤을 최상단으로 보내기
    $(document).ready(function () {
      gsap.set($btnTop, { autoAlpha: 0 });
    });

    // $(window).on('load', function () {
    //   $('html').scrollTop(0);
    // });

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
      loadTL.addLabel('back');
      loadTL.from(
        '.visual-video',
        {
          // transformOrigin: 'right top',
          duration: 1.2,
          scale: 1.15,
          // width: '100%',
          // backgroundColor: '#143021',
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

      loadTL.from(
        '#header',
        { xPercent: -500, duration: 1.2, ease: 'power4.inOut', onComplete: () => introIcoAni() },
        '<'
      );

      loadTL.to('#container', { backgroundColor: '#fafafa', duration: 1, ease: 'power4.inOut' });
    }
    // Visual 비디오 재생 함수
    function visualVideoPlay() {
      const $visualVideo = $('.visual-video').find('video');
      $visualVideo.get(0).play();
    }

    // 비디오가 다 재생된 후,
    $('.logo-ani video').on('ended', () => {
      loadAni();
      $('html').css('overflowY', 'auto');
      $('html').scrollTop(0);
      ㄴㄷㅅ;
    });
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
      $('html').css('overflowY', 'auto');
      $('html').scrollTop(0);
    });

    // Main Visual Icon animation
    function introIcoAni() {
      iconAni1();
      iconAni2();
      iconAni3();
      iconAni4();
      iconAni5();
      iconAni6();
      visualVideoPlay();
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

    // 헤더의 메뉴 클릭시 스타일 활성화
    console.log(sectionEl);
    sectionEl.forEach((sec, index) => {
      ScrollTrigger.create({
        trigger: sec,
        // markers: true,
        start: 'top 60%',
        end: 'bottom 60%',
        toggleClass: { targets: liEl[index], className: 'active' },
      });
    });

    // Main : About [01] introduction
    ScrollTrigger.create({
      trigger: '.introduce',
      // markers: true,
      id: 'red points',
      start: 'top 50%',
      toggleClass: {
        targets: ['.introduce-img p:first-of-type', '.introduce-img p:last-of-type'],
        className: 'active',
      },
    });

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
        // markers: true,
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
          // markers: true,
          start: 'top 100%',
          end: 'bottom 60%',
          toggleActions: 'play none restart none',
          scrub: 1,
        },
      });
    });
  }
  // Main : Portfolio [01] Project
  const projectText = new Swiper('.project-text', {
    speed: 500,
    loop: true,
    loopedSlides: 6,
    direction: 'vertical',

    autoplay: { delay: 5000, disableOnInteraction: false },

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

  // Main : Portfolio [02] Graphic
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
  // 그래픽 갤러리 모달
  const $graphicGallery = $('.graphic-slider .swiper-slide');
  const $dim = $('.dim');
  const $popup = $('.popup');
  const $btnClose = $('.btn-close');
  const $graphicCon = $('.graphic-con');

  $graphicGallery.on('click', function () {
    $dim.fadeIn();
    $popup.addClass('active');

    // 선택한 이미지의 정보를 가져와서 변수에 담기
    const $imgEl = $(this).find('figure img');

    // 선택한 이미지의 속성별 정보를 가져와서 변수에 담기
    const imgSrc = $imgEl.attr('src');
    // const imgTitle = $imgEl.attr('alt');
    // const videoSrc = $imgEl.attr('data-link');
    // const videoSrc = $imgEl.data('link');
    $graphicCon.html(`<img src="${imgSrc}">`);
    // console.log($graphicCon.find('img').innerHeight(), $window.innerHeight());
    $popup.css('width', $window.innerWidth() / 2);
    $graphicCon.find('img').css('borderRadius', '1rem');
    // $graphicCon.prepend(`<div class="gallery-title">${imgTitle}</div>`);
  });

  $btnClose.add($dim).on('click', function () {
    $dim.fadeOut();
    $popup.removeClass('active');

    // 0.5초 후에 갤러리 콘텐츠를 초기화
    setTimeout(function () {
      $graphicCon.html('');
    }, 500);

    // $galleryContent.html(`<iframe src="">`);
  });

  // Main : Contact
  var params = {
    container: document.getElementById('lottie-tree'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    // animationData: animationData,
    path: './data/contact.json',
  };

  var anim;

  anim = lottie.loadAnimation(params);

  // 마우스 커서, 커스텀되는 커서 관련 스크립트
  const $window = $(window);
  const $cursor = $('.cursor');

  //마우스 좌표값
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;

  let speed = 0.08;

  $window.on('mousemove', function (e) {
    x = e.pageX;
    y = e.pageY;
  });

  function cursorMoving() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    $cursor.css({ left: mx, top: my });

    requestAnimationFrame(cursorMoving);
  }

  cursorMoving();
  // $window.on('mousemove', function (e) {
  //   gsap.to('.cursor', {
  //     x: e.clientX,
  //     y: e.clientY,

  //     // duration: 2,
  //     ease: 'power4.inOut',
  //   });
  // });

  // 비주얼영역 커스텀 커서
  $('.visual-video')
    .add('.visual-con')
    .add('.ani-wrap')
    .on('mouseenter', () => {
      $('.cursor').addClass('visual-cursor');
      $('.cursor').html('<span>Scroll Down</span>');
    });

  $('.visual-video')
    .add('.visual-con')
    .add('.ani-wrap')
    .on('mouseleave', () => {
      $('.cursor').removeClass('visual-cursor');
      $('.cursor').html('');
    });

  //포트폴리오 영역 커스텀 커서
  $('.graphic-list-wrap .swiper-slide')
    .add('.project-img-wrap')
    .on('mouseenter', () => {
      $('.cursor').addClass('portfolio-cursor');
      $('.cursor').html('<span>View More</span>');
      $('body').add($('a')).css('cursor', 'none');
    });

  $('.graphic-list-wrap .swiper-slide')
    .add('.project-img-wrap')
    .on('mouseleave', () => {
      $('.cursor').removeClass('portfolio-cursor');
      $('.cursor').html('');
      $('body').add($('a')).css('cursor', 'auto');
    });

  // TOP 버튼
  const $btnTop = $('.btn-top');

  $btnTop.on('click', () => {
    $('html')
      .stop()
      .animate({ scrollTop: 0 }, function () {
        gsap.to('btn-top', {
          autoAlpha: 0,
          duration: 0.5,
        });
      });
  });

  gsap.from($('.btn-top'), {
    autoAlpha: 0,
    duration: 0.5,
    y: 30,
    scrollTrigger: {
      trigger: 'section:nth-of-type(2)',
      start: 'top 20%',
      // markers: true,
      id: 'btn-top',
      toggleActions: 'play none reverse reverse',
    },
  });

  //페이지 트랜지션
  // Barba.js 초기화
  // barba.init({
  //   transitions: [
  //     {
  //       name: 'cover-slide-transition',
  //       async leave(data) {
  //         const done = this.async();
  //         // 커버 요소 생성
  //         const cover = $('<div class="cover"></div>');
  //         $('body').append(cover);

  //         // 커버 요소 애니메이션: 화면 전체를 덮으면서 오른쪽에서 왼쪽으로 이동
  //         cover.animate({ right: '0%' }, 700, 'swing', done);
  //       },
  //       enter(data) {
  //         const cover = $('.cover');
  //         // 새로운 페이지가 보여지고 커버 요소가 왼쪽으로 나가면서 애니메이션
  //         $(data.next.container).css({ right: '100%' });
  //         $(data.next.container).animate({ right: '0%' }, 600, 'swing');

  //         cover.animate({ right: '-100%' }, 500, 'swing', function () {
  //           cover.remove(); // 애니메이션 완료 후 커버 요소 제거
  //         });
  //       },
  //       afterEnter(data) {
  //         mainInit(); // 플러그인 초기화
  //         introIcoAni();
  //       },
  //     },
  //   ],
  // });
  mainInit();

  // Sub Page

  // 서브페이지 인트로 브랜드 로고 넣기
  const $logoImg = $('.title h2');
  const logoImgSrc = $logoImg.data('url');
  // $logoImg.css('backgroundImage', `url(${logoImgSrc})`);

  // 서브페이지 인트로 링크 버튼 색 입히기
  // const $btnLink = $('.info a');
  // const subColor = $btnLink.data('color');
  // $btnLink.css('backgroundColor', subColor);

  // $btnLink.on('mouseenter', () => {
  //   $btnLink.css('backgroundColor', '#fff');
  //   $btnLink.css('color', subColor);
  // });
  // $btnLink.on('mouseleave', () => {
  //   $btnLink.css('backgroundColor', subColor);
  //   $btnLink.css('color', '#fff');
  // });
});
