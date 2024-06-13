$(function () {
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
