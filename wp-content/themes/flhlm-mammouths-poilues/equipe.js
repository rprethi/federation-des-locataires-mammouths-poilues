var swiper = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 0,
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

let currentIndex = 6; // Number of articles to show at a time
let filteredArticles = []; // This will hold the filtered and sorted articles

function sortArticles() {
  const sortOrder = document.getElementById("sortOrder").value;
  const actualitesList = document.getElementById("actualitesList");
  const articleElements = Array.from(actualitesList.getElementsByTagName("li"));

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

  // Filter and sort articles based on the selected sort order
  filteredArticles = articleElements.sort((a, b) => {
    const dateA = a.querySelector(".actualite__item__date").textContent.trim().split(/\s+/);
    const dateB = b.querySelector(".actualite__item__date").textContent.trim().split(/\s+/);

    const formattedDateA = new Date(`${months[dateA[1]]} ${dateA[0]}, ${new Date().getFullYear()}`);
    const formattedDateB = new Date(`${months[dateB[1]]} ${dateB[0]}, ${new Date().getFullYear()}`);

    return sortOrder === "recent" ? formattedDateB - formattedDateA : formattedDateA - formattedDateB;
  });

  currentIndex = 6; // Reset index to show the first 6 articles
  displayArticles(); // Display the first set of articles
  toggleLoadMoreButton(); // Show/hide the button based on the current state
}

function displayArticles() {
  const actualitesList = document.getElementById("actualitesList");
  actualitesList.innerHTML = ''; // Clear the list before re-adding articles

  // Check if filteredArticles is empty
  if (filteredArticles.length === 0) {
    console.warn("No articles to display!");
    return; // Exit if there are no articles
  }

  // Show only the first `currentIndex` articles
  filteredArticles.slice(0, currentIndex).forEach(article => {
    actualitesList.appendChild(article);
  });
}

function toggleLoadMoreButton() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (currentIndex >= filteredArticles.length) {
    loadMoreBtn.style.display = 'none'; // Hide if no more articles
  } else {
    loadMoreBtn.style.display = 'block'; // Show if more articles are available
  }
}

function loadMoreArticles() {
  currentIndex += 6; // Increase the index to load 6 more articles
  displayArticles(); // Update the displayed articles
  toggleLoadMoreButton(); // Update button visibility
}

// Event listener for the "Voir plus" button
document.getElementById("loadMoreBtn").addEventListener("click", loadMoreArticles);

// Call the sorting function when the page loads or the filter changes
document.getElementById("sortOrder").addEventListener("change", sortArticles);

// Initial call to sort and display articles
sortArticles();
