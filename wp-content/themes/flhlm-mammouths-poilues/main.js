document.querySelector(".banner__close").addEventListener("click", function () {
  let banner = document.querySelector(".nav__banniere");
  let nav = document.querySelector("nav");
  let main = document.querySelector("main");
  banner.style.transform = "translateY(-100%)";
  nav.style.top = "0";
  main.style.top = "-255px";
  setTimeout(function () {
    banner.style.display = "none";
    document.body.classList.add("banner-hidden");
  }, 0);
});

let btnVoirPlus = document.querySelector(".plus-info");
let gradiantTexte = document.querySelector(".gradiant");

btnVoirPlus.addEventListener("click", () => {
  btnVoirPlus.classList.add("active");
  gradiantTexte.classList.add("active");
});
