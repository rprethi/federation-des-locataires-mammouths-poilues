/*------------------------------------------------------------------------------------------*/

/*---------- DÉBUT SWIPER SECTION ÉQUIPE  ----------*/

/*------------------------------------------------------------------------------------------*/

// Initialisation du Swiper pour la classe "mySwiper2"
var swiper = new Swiper(".mySwiper2", {
  // Définir l'effet de transition entre les diapositives
  effect: "coverflow", // Utilise l'effet "coverflow" pour un effet 3D lors du défilement

  // Options d'interaction
  grabCursor: true, // Change le curseur pour indiquer que l'utilisateur peut faire glisser les diapositives
  centeredSlides: true, // Centre la diapositive active dans la vue

  // Configuration des diapositives visibles
  slidesPerView: "auto", // Permet de définir le nombre de diapositives visibles automatiquement selon l'espace disponible

  // Diapositive initiale à afficher au démarrage
  initialSlide: 0, // Commence avec la première diapositive

  // Configuration spécifique de l'effet coverflow
  coverflowEffect: {
    rotate: 0, // Rotation des diapositives en angle
    stretch: 0, // Espace entre les diapositives
    depth: 100, // Profondeur de l'effet coverflow
    modifier: 5, // Modificateur de l'effet, influence la perspective
    slideShadows: true, // Active les ombres sur les diapositives
  },

  // Option de boucle
  loop: true, // Permet à la galerie de faire une boucle infinie
});

/*------------------------------------------------------------------------------------------*/

/*---------- FIN SWIPER SECTION ÉQUIPE  ----------*/

/*------------------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------------------*/

/*---------- DÉBUT MODALE SECTION ÉQUIPE  ----------*/

/*------------------------------------------------------------------------------------------*/

// Fonction pour ouvrir la modale
function openModal(description) {
  // Vérifiez si le clic provient d'un swiper-slide actif
  const activeSlide = document.querySelector(".swiper-slide-active"); // Sélectionne le slide actif

  if (activeSlide) {
    // Vérifiez si l'élément sur lequel on clique est un enfant du slide actif
    const clickedElement = event.currentTarget; // L'élément sur lequel l'événement a été déclenché

    // Assurez-vous que l'élément cliqué est l'active slide
    if (activeSlide.contains(clickedElement)) {
      const name = description.split(":")[0]; // Extrait le nom de la description
      document.getElementById("modal-name").textContent = name; // Affiche le nom dans la modale
      document.getElementById("modal-description").textContent = description
        .substring(name.length + 1)
        .trim(); // Affiche la description sans le nom
      document.getElementById("modal").style.display = "block"; // Affiche la modale
      document.body.style.overflow = "hidden"; // Empêche le défilement de la page
    }
  }
}

// Fonction pour fermer la modale
function closeModal() {
  document.getElementById("modal").style.display = "none"; // Cache la modale
  document.body.style.overflow = ""; // Réactive le défilement de la page
}
/*------------------------------------------------------------------------------------------*/

/*---------- FIN MODALE SECTION ÉQUIPE  ----------*/

/*------------------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------------------*/

/*---------- DÉBUT SLIDER SECTION ÉQUIPE  ----------*/

/*------------------------------------------------------------------------------------------*/

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

/*------------------------------------------------------------------------------------------*/

/*---------- FIN SLIDER SECTION ÉQUIPE  ----------*/

/*------------------------------------------------------------------------------------------*/


/*---------- DÉBUT SECTION NOUVELLE RÉCENTE - ANCIENNE / AFFICHAGE TOGGLE NOUVELLES ----------*/
/*Nouvelles de ancienne à récente ne fonctionne pas quand on le reload,
 Erreur approuvé par Marie-Michelle*/

let currentIndex = 6; // Nombre d'articles à afficher à la fois
let filteredArticles = []; // Cela contiendra les articles filtrés et triés

// Fonction pour trier et afficher les articles
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

  // Trier les articles basés sur l'ordre de tri sélectionné
  filteredArticles = articleElements.sort((a, b) => {
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

  currentIndex = 6; // Réinitialiser l'index pour afficher les 6 premiers articles
  displayArticles(); // Afficher le premier ensemble d'articles
  toggleLoadMoreButton(); // Afficher/cacher le bouton selon l'état actuel
}

// Fonction pour afficher les articles
function displayArticles() {
  const actualitesList = document.getElementById("actualitesList");
  actualitesList.innerHTML = ""; // Vider la liste avant de réajouter les articles

  // Afficher uniquement les premiers `currentIndex` articles
  filteredArticles
    .slice(0, currentIndex)
    .forEach((article) => actualitesList.appendChild(article));
}

// Fonction pour basculer la visibilité du bouton "Voir plus"
function toggleLoadMoreButton() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (currentIndex >= filteredArticles.length) {
    loadMoreBtn.style.display = "none"; // Masquer le bouton s'il n'y a plus d'articles
  } else {
    loadMoreBtn.style.display = "block"; // Afficher le bouton s'il reste des articles
  }
}

// Fonction pour charger plus d'articles
function loadMoreArticles() {
  currentIndex += 6; // Augmenter l'index pour charger 6 articles supplémentaires
  displayArticles(); // Mettre à jour les articles affichés
  toggleLoadMoreButton(); // Mettre à jour la visibilité du bouton

  // Masquer le bouton après avoir cliqué si tous les articles sont chargés
  if (currentIndex >= filteredArticles.length) {
    document.getElementById("loadMoreBtn").style.display = "none"; // Masquer le bouton après avoir chargé tous les articles
  }
}

// Écouter l'événement pour le bouton "Voir plus"
document.getElementById("loadMoreBtn").addEventListener("click", () => {
  loadMoreArticles(); // Charger plus d'articles lorsque le bouton est cliqué
});

// Appeler la fonction de tri lors du chargement de la page
sortArticles();
function displayArticles() {
  const actualitesList = document.getElementById("actualitesList");
  actualitesList.innerHTML = ""; // Vider la liste avant de réajouter les articles

  // Afficher uniquement les premiers `currentIndex` articles
  filteredArticles.slice(0, currentIndex).forEach((article, index) => {
    actualitesList.appendChild(article);
  });

  // Retirer la classe spéciale de tous les articles
  filteredArticles.forEach((article) =>
    article.classList.remove("first-article")
  );

  // Appliquer la classe spéciale au premier article si disponible
  if (filteredArticles.length > 0) {
    const firstArticle = filteredArticles[0];
    firstArticle.classList.add("first-article"); // Ajouter la classe au premier article
  }
}
/*------------------------------------------------------------------------------------------*/

/*---------- FIN SECTION NOUVELLE RÉCENTE - ANCIENNE / AFFICHAGE TOGGLE NOUVELLES ----------*/

/*------------------------------------------------------------------------------------------*/