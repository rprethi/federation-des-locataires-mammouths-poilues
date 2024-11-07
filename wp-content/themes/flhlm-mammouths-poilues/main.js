/*---------- BANNIÈRE ----------*/
let bannerClose = document.querySelector(".banner__close");
let banner = document.querySelector(".nav__banniere");
let bannerStorage = localStorage.getItem("banner");
let nav = document.querySelector("nav");
let main = document.querySelector("main");

if (bannerStorage) {
  banner.style.display = "none";
  document.body.classList.add("banner-hidden");
  nav.style.top = "0";
  main.style.top = "-255px";
}
/*---------- SET LOCAL STORAGE * ----------*/
bannerClose.addEventListener("click", function () {
  banner.style.display = "none";
  document.body.classList.add("banner-hidden");
  nav.style.top = "0";
  main.style.top = "-255px";
  localStorage.setItem("banner", true);
  console.log(bannerStorage);
});

/*--------------------------------------*/
/*---------- MENU HOVER ----------*/
let dropdowns = document.querySelectorAll(".nav-link");
let dropdownMenus = document.querySelectorAll(".dropdown-menu");

dropdowns.forEach((dropdown, i) => {
  let menu = dropdownMenus[i];

  //Fonctions pour ajouter ou retier la classe "Show"
  let addClass = function() {
    dropdown.classList.add("show");
    menu.classList.add("show");
// Utilisation de AI pour aider avec le setAttribute pour le data-bs-popper
    menu.setAttribute("data-bs-popper", "static");
  }

  let removeClass = function() {
    dropdown.classList.remove("show");
    menu.classList.remove("show");
// Utilisation de AI pour aider avec le setAttribute pour le data-bs-popper
    menu.removeAttribute("data-bs-popper");
  }


  dropdown.addEventListener("mouseover", () => {
    addClass();
  });
  dropdown.addEventListener("mouseleave", () => {
    removeClass();
  });
  menu.addEventListener("mouseover", () => {
    addClass();
  });
  menu.addEventListener("mouseleave", () => {
    removeClass();
  });
});
/*---------- GSAP MENU BURGER* ----------*/
let burgerIcon = document.getElementById("burgerMenu");
let burgerAnim = gsap.timeline({
  paused: true,
});

burgerAnim
  .to(".burgerAnim1", {
    scaleX: 0.8,
    duration: 0.3,
    ease: "power1.inOut",
  })
  .to(
    ".burgerAnim2",
    {
      scaleX: 0.6,
      duration: 0.3,
      ease: "power1.inOut",
    },
    "-=0.25"
  )
  .to(
    ".burgerAnim3",
    {
      scaleX: 0.7,
      duration: 0.3,
      ease: "power1.inOut",
    },
    "-=0.25"
  );

burgerIcon.addEventListener("mouseenter", () => {
  burgerAnim.play();
});

burgerIcon.addEventListener("mouseleave", () => {
  burgerAnim.reverse();
});

/*--------------------------------------*/

let btnVoirPlus = document.querySelector(".plus-info");
let gradiantTexte = document.querySelector(".gradiant");

// Vérifie si les éléments existent avant d'exécuter le code
if (btnVoirPlus) {
  console.log(btnVoirPlus);

  btnVoirPlus.addEventListener("click", () => {
    // Vérifie si gradiantTexte existe avant d'ajouter la classe
    if (gradiantTexte) {
      console.log(gradiantTexte);
      btnVoirPlus.classList.add("active");
      gradiantTexte.classList.add("active");
    } else {
      console.log("L'élément .gradiant n'existe pas.");
    }
  });
} else {
  console.log("L'élément .plus-info n'existe pas.");
}
