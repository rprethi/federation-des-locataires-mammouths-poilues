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

function sortArticles() {
  const sortOrder = document.getElementById("sortOrder").value;
  const actualitesList = document.getElementById("actualitesList");
  const articles = Array.from(actualitesList.getElementsByTagName("li"));

  const months = {
    janvier: "January",
    février: "February",
    mars: "March",
    avril: "April",
    mai: "May",
    juin: "June",
    juillet: "July",
    août: "August",
    septembre: "September",
    octobre: "October",
    novembre: "November",
    décembre: "December",
  };

  articles.sort((a, b) => {
    const dateA = a
      .querySelector(".actualite__item__date")
      .textContent.trim()
      .split(/\s+/);
    const dateB = b
      .querySelector(".actualite__item__date")
      .textContent.trim()
      .split(/\s+/);

    const formattedDateA = new Date(
      `${months[dateA[1]]} ${dateA[0]}, ${new Date().getFullYear()}`
    );
    const formattedDateB = new Date(
      `${months[dateB[1]]} ${dateB[0]}, ${new Date().getFullYear()}`
    );

    return sortOrder === "recent"
      ? formattedDateB - formattedDateA
      : formattedDateA - formattedDateB;
  });

  articles.forEach((article) => actualitesList.appendChild(article));
}
