$(document).ready(() => {
  $(".project_item").first().click();
});
window.addEventListener("DOMContentLoaded", (event) => {
  let tl = gsap.timeline();
  let loadAnimate = () => {
    gsap.set(".page-loader", {
      display: "grid",
    });
    tl.to(".loading-bar", {
      duration: 2,
      ease: "power4.out",
      width: "100%",
    });
    tl.to(".loading-bar", {
      duration: 0.3,
      delay: 0.01,
      y: "100%",
    });
    tl.to(".loading-bar", {
      display: "none",
      duration: 0,
    });
    tl.fromTo(
      ".square",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.001,
        stagger: { amount: 0.8, from: "random" },
        onComplete: () => {
          $(".page-loader").css("display", "none");
        },
      }
    );
    tl.fromTo(
      ".heading-style-h3",
      { opacity: 0, x: "100%" },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        x: "0%",
      },
      "<+=0.5"
    );
    tl.fromTo(
      ".heading-style-big",
      {
        x: "-100%",
      },
      {
        ease: "power4.out",
        duration: 0.8,
        x: "0%",
      },
      "<"
    );
  };
  loadAnimate();

  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });
  let lineSplit = new SplitType("[line-split]", {
    types: "lines",
    tagName: "span",
  });
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      },
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play(),
    });
  }
  $("[words-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), {
      opacity: 0,
      delay: 0.3,
      yPercent: 50,
      duration: 0.6,
      ease: "expo.out",
      // ease: "back.inOut(2)",
      stagger: { amount: 1.5 },
    });
    createScrollTrigger($(this), tl);
  });
  $("[line-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".line"), {
      opacity: 0,
      delay: 0.5,
      yPercent: 100,
      duration: 0.8,
      ease: "power4.out",
      // ease: "back.inOut(2)",
      stagger: { amount: 1 },
    });
    createScrollTrigger($(this), tl);
  });
  $("[line-slide-right]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this), {
      opacity: 0,
      delay: 0.3,
      xPercent: -10,
      duration: 0.8,
      ease: "power4.out",
      // ease: "back.inOut(2)",
      // stagger: { amount: 1 },
    });
    createScrollTrigger($(this), tl);
  });
  $("[slide-left]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this), {
      opacity: 0,
      xPercent: -100,
      duration: 0.8,
      ease: "expo.out",
      // ease: "back.out(2)",
      // stagger: { amount: 0.5 },
    });
    createScrollTrigger($(this), tl);
  });
});
