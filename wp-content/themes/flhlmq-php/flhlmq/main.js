window.onload = function() {
  myOrder('asc');  
};

/*---------- BANNIÈRE ----------*/
let bannerClose = document.querySelector(".banner__close");
let banner = document.querySelector(".nav__banniere");
let bannerStorage = localStorage.getItem("banner");
let nav = document.querySelector("nav");
let main = document.querySelector("main");


//vérifie si la banner est dans le local storage
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

//Ajout d'eventlistener sur le hover pour ajouter ou retirer la classe
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
/*--------------------------------------*/



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

/*---------- ARTICLES ----------*/
function myOrder(order) {
  let url = `https://mammouths-poilues.tim-momo.com/index.php/wp-json/wp/v2/posts/?_embed&order=${order}&orderby=date`; // Sorting by date

  document.querySelector('#actualitesList').innerHTML = "";  

  fetch(url)
      .then(data => data.json())  
      .then(posts => {
          const maxPosts = 6;
          let count = 0;

          posts.forEach((post, index) => {
              if (count >= maxPosts) return;  

              let titre = post.title.rendered;
              let auteur = post.acf.auteur;
              let description = post.acf.description_carte;
              let jour = post.acf.jour;
              let mois = post.acf.mois;
              let content = post.content.rendered;
              let lien = post.link;
              let imageUrl = post._embedded["wp:featuredmedia"][0].source_url;

              let postHTML = `
                  <li>
                      <a href="${lien}" class="actualite__item item">
                          <span class="actualite__item__date date">${jour}<br />${mois}</span>
                          <hr />
                          <span class="actualite__item__title title">${titre}
                              <p class="actualite__item__text">${description}</p>
                          </span>
                          <img src="${imageUrl}" alt="manifestation" class="actualite__item__img img" />
                      </a>
                  </li>
              `;
              const elementArticle = document.createElement('div');
              elementArticle.innerHTML = postHTML;

              if (index === 0) {
                  elementArticle.querySelector('.actualite__item').classList.add('first-article');
              }

              document.querySelector('#actualitesList').appendChild(elementArticle);

              count++;  
          });
      })
      .catch(error => console.error("erreur post:", error));  
}



function sortArticles() {
  let sortOrder = document.getElementById('sortOrder').value;

  if (sortOrder === 'recent') {
      myOrder('desc');  
  } else if (sortOrder === 'oldest') {
      myOrder('asc');  
  }
}