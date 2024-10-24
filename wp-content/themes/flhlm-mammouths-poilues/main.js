/*---------- BANNIÈRE ----------*/
let bannerClose = document.querySelector(".banner__close");
let banner = document.querySelector(".nav__banniere");
let bannerStorage = localStorage.getItem("banner");
  let nav = document.querySelector("nav");
  let main = document.querySelector("main");

  if(bannerStorage) {
    banner.style.display = "none";
    document.body.classList.add("banner-hidden");
    nav.style.top = "0";
    main.style.top = "-255px";
  }

bannerClose.addEventListener("click", function () {
  banner.style.display = "none";
  document.body.classList.add("banner-hidden");
  nav.style.top = "0";
  main.style.top = "-255px";
    localStorage.setItem('banner', true);
    console.log(bannerStorage);
});
/*---------- SET LOCAL STORAGE * ----------*/





/*--------------------------------------*/

/*---------- GSAP MENU BURGER* ----------*/
let burgerIcon = document.getElementById("burgerMenu");
let burgerAnim = gsap.timeline({
  paused: true
});

burgerAnim
  .to(".burgerAnim1", {
    scaleX: 0.8,
    duration: 0.3,
    ease: "power1.inOut", 
  })
  .to(".burgerAnim2", {
    scaleX: 0.6,
    duration: 0.3,
    ease: "power1.inOut", 
  }, "-=0.25")
  .to(".burgerAnim3", {
    scaleX: 0.7,
    duration: 0.3,
    ease: "power1.inOut", 
  }, "-=0.25");
  
burgerIcon.addEventListener("mouseenter", () => {
  burgerAnim.play();
});

burgerIcon.addEventListener("mouseleave", () => {
  burgerAnim.reverse();
});

/*--------------------------------------*/



/*

let btnVoirPlus = document.querySelector(".plus-info");
let gradiantTexte = document.querySelector(".gradiant");

console.log(btnVoirPlus);
console.log(gradiantTexte)

btnVoirPlus.addEventListener("click", () => {
  btnVoirPlus.classList.add("active");
  gradiantTexte.classList.add("active");
});


*/