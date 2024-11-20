/* GSAP PAGE 404*/
let erreurAnim = gsap.timeline();
erreurAnim.fromTo(".erreurAnimTitle", {
    x: -100,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 1
  })
  .fromTo(".erreurAnimPara", {
      x: -100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 1
    },
    "-=0.5"
  )
  .fromTo(".erreurAnimBtn", {
      x: -100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 1
    },
    "-=0.5"
  );

/*--------------------------------------*/