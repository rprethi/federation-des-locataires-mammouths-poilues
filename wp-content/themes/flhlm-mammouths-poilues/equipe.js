var swiper = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 5,
    slideShadows: true,
  },
  loop: true,
});

function openModal(description) {
  document.getElementById("modal-description").textContent = description;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slider = document.querySelector(".slider");

function goToNextSlide() {
  let slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
}

function goToPrevSlide() {
  let slides = document.querySelectorAll(".slides");
  slider.insertBefore(slides[slides.length - 1], slides[0]);
}

setInterval(goToNextSlide, 8000);
next.addEventListener("click", goToNextSlide);
prev.addEventListener("click", goToPrevSlide);
