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