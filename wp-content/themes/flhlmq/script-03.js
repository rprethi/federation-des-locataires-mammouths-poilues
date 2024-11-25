/*---------- DÉBUT SECTION NOUVELLE RÉCENTE - ANCIENNE / AFFICHAGE TOGGLE NOUVELLES ----------*/
      /*Nouvelles de ancienne à récente ne fonctionne pas quand on le reload,
       Erreur approuvé par Marie-Michelle*/
      
       let currentIndex = 6; // Nombre d'articles à afficher à la fois
       let filteredArticles = []; // Cela contiendra les articles filtrés et triés
       
       // Fonction pour trier et afficher les articles
       function sortArticles() {
         // Vérifie si l'élément "sortOrder" existe
         const sortOrderElement = document.getElementById("sortOrder");
         if (!sortOrderElement) {
           console.log("L'élément 'sortOrder' n'existe pas.");
           return; // Sort de la fonction si l'élément n'existe pas
         }
       
         const sortOrder = sortOrderElement.value; // Récupère la valeur de tri
       
         // Vérifie si l'élément "actualitesList" existe
         const actualitesList = document.getElementById("actualitesList");
         if (!actualitesList) {
           console.log("L'élément 'actualitesList' n'existe pas.");
           return; // Sort de la fonction si l'élément n'existe pas
         }
       
         // Récupère les éléments d'articles
         const articleElements = Array.from(actualitesList.getElementsByTagName("li"));
         if (articleElements.length === 0) {
           console.log("Aucun article trouvé dans 'actualitesList'.");
           return; // Sort de la fonction si aucun article n'est trouvé
         }
       
         // Ajoute ici la logique de tri pour articleElements
         // (Ne pas oublier de gérer le tri selon sortOrder)
       
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
       // Sélectionne le bouton par son ID
       let loadMoreBtn = document.getElementById("loadMoreBtn");
       
       // Vérifie si l'élément existe avant d'ajouter l'écouteur d'événements
       if (loadMoreBtn) {
         loadMoreBtn.addEventListener("click", () => {
           loadMoreArticles(); // Charger plus d'articles lorsque le bouton est cliqué
         });
       } else {
         console.log("Le bouton 'loadMoreBtn' n'existe pas."); // Message affiché si le bouton n'existe pas
       }
       
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
     