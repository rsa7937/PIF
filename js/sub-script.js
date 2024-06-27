$(function () {
  gsap.registerPlugin(ScrollTrigger);
  // 로딩 페이지
  const $window = $(window);
  const $body = $('body');

  const $loading = $('.loading');
  const $progressBar = $('.progress-bar');

  // $body.imagesLoaded(function () {
  //   alert('로딩 완료');
  // });

  const imgLoad = imagesLoaded($body);

  const imgTotal = imgLoad.images.length;
  console.log(imgTotal);

  // 현재 로딩된 이미지 수
  let imgLoaded = 0;

  // 부드러운 진행률을 위한 변수
  let current = 0;

  // 이미지를 로딩할 때마다 imgLoaded를 증가
  imgLoad.on('progress', function () {
    imgLoaded++;
    console.log(imgLoaded);

    // updateProgress();
  });

  function updateProgress() {
    // 계속 반복되어서 계산이 되어야함
    let percent = `${(imgLoaded / imgTotal) * 100}`;

    // 부드러운 갱신
    current += (percent - current) * 0.05;

    // 진행정보를 업데이트
    $progressBar.css('width', Math.floor(current) + '%');

    if (current >= 100) {
      clearInterval(progressTimer);
      const TL = gsap.timeline();

      // TL.set($('.loading'), { transformOrigin: 'right' });

      TL.to($('.loading'), { width: '0%', duration: 2, ease: 'power4.inOut' });
      TL.to($('.progress-wrap'), { xPercent: 100, autoAlpha: 0, duration: 1, ease: 'power4.inOut' }, '-=1.5');
      TL.to($('.loading span'), { xPercent: 100, autoAlpha: 0, duration: 1, ease: 'power4.inOut' }, '<');
    }
    if (current >= 99.9) current = 100;
  }
  const progressTimer = setInterval(updateProgress, 1000 / 60);

  // gsap.set('.processpage figure img', { autoAlpha: 0 });

  $(window).on('load', () => {
    const projectTL = gsap.timeline();
    projectTL.from('.main-wrap', { autoAlpha: 0, duration: 2, ease: 'power4.inOut' });
    projectTL.from('.main-wrap', { yPercent: 100, duration: 1.5, ease: 'power4.inOut' }, '<');
    // projectTL.from('.main-wrap', { yPercent: 100, duration: 1.5, ease: 'power4.inOut' }, '<');
  });

  // 마우스 커서, 커스텀되는 커서 관련 스크립트
  // const $window = $(window);
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
});
