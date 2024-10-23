var swiper3 = new Swiper(".mySwiper3", {
  centeredSlides: true,
  effect: "creative",
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

var swiper = new Swiper(".temoin", {
  effect: "cards",
  grabCursor: true,
  on: {
    slideChange: function () {
      // Retire la classe de toutes les cartes
      this.slides.forEach((slide) => {
        slide.classList.remove("active-card");
      });

      // Ajoute la classe à la carte active
      this.slides[this.activeIndex].classList.add("active-card");
    },
  },
});

const swiperNouv = new Swiper(".swiperNouvelles", {
  slidesPerView: 0.89,
  direction: "horizontal",
  grabCursor: true,
  375: {
    slidesPerView: 0.9,
    slidesPerGroup: 6,
    spaceBetween: 25,
    centeredSlides: true,
    centeredSlidesBounds: true
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 25,
      centeredSlides: true,
      centeredSlidesBounds: true
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 25,
      centeredSlides: true,
      centeredSlidesBounds: true
    },
  },
}, );

document.addEventListener("DOMContentLoaded", function () {
  const voirPlusButtons = document.querySelectorAll(".voir-plus");

  voirPlusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const commentaire = this.previousElementSibling;
      const hiddenText = commentaire.querySelector(".hidden-text");

      if (hiddenText.classList.contains("show")) {
        hiddenText.classList.remove("show");
        this.textContent = "Voir Plus";
        commentaire
          .querySelector(".gradient-text")
          .classList.remove("black-text");
      } else {
        hiddenText.classList.add("show");
        this.textContent = "Voir Moins";
        commentaire.querySelector(".gradient-text").classList.add("black-text");
      }
    });
  });
});