const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

gsap.to("#logo h1", {
  scale: 3,
  delay: 2,
  duration: 2,
  rotate: 360,
  x: 290,
  y: 360,
  scrollTrigger: {
    trigger: "#logo h1",
    scroller: "body",
    // markers:true,
    start: "top 10%",
    end: "top 30%",
  },
});

gsap.from("#name h1", {
  // scale:0,
  delay: 2,
  duration: 2,
  x: 1800,
});

gsap.from("#name-description h4", {
  scale: 0,
  delay: 2,
  duration: 2,
  // x:1800
  y: 800,
});

gsap.from("#dropdown", {
  scale: 0,
  delay: 2,
  duration: 2,
  // x:1800
  y: -800,
});
