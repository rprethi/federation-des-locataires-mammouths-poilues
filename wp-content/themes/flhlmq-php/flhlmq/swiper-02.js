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
function openModal(name, desc, event) {
  // Vérifiez si le clic provient d'un swiper-slide actif
  const activeSlide = document.querySelector(".swiper-slide-active"); // Sélectionne le slide actif

  if (activeSlide) {
    // Vérifiez si l'élément sur lequel on clique est un enfant du slide actif
    const clickedElement = event.currentTarget; // L'élément sur lequel l'événement a été déclenché
    
    // Ensure the modal containers exist
    let nomContainer = document.getElementById("modal-name");
    let descriptionContainer = document.getElementById("modal-description");

    if (nomContainer && descriptionContainer) {
      // Set the name and description in the modal
      nomContainer.textContent = name;
      descriptionContainer.textContent = desc;

      // Assurez-vous que l'élément cliqué est l'active slide
      if (activeSlide.contains(clickedElement)) {
        // Show the modal
        document.getElementById("modal").style.display = "block"; 
        // Prevent page scrolling when the modal is open
        document.body.style.overflow = "hidden"; 
      }
    } else {
      console.error("Modal containers not found in the DOM.");
    }
  }
}

// Function to close the modal
function closeModal() {
  document.getElementById("modal").style.display = "none"; // Hide the modal
  document.body.style.overflow = ""; // Re-enable page scroll
}
/*------------------------------------------------------------------------------------------*/

/*---------- FIN MODALE SECTION ÉQUIPE  ----------*/

/*------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------*/

/*---------- DÉBUT SLIDER SECTION ÉQUIPE  ----------*/

/*------------------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------------------*/

/*---------- FIN SLIDER SECTION ÉQUIPE  ----------*/

