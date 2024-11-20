# Accueil
<!-- Définition des informations liées à la page d'accueil -->

## TYPE DE CONTENU (POST TYPE)
### home

## MODÈLE (TEMPLATE)
### Accueil

## COMPOSANTES DE LA PAGE
### NOM DU PARTIAL
- `accueilParallax.php`
- `heroSwiper.php`
- `listeNouvelles.php`
- `listeService.php`

### CHAMPS PERSONNALISÉS
- **Image** : héros
- **Groupe/Liste** : Lien nouvelles (actualité)

## AUTRES CHAMPS PERSONNALISÉS
- **Title** : titre
- **Url** : page original
- **Image** : parallax
- **Group/List** : témoignage
- **Text** : description

---

# À propos
<!-- Informations spécifiques à la page "À propos" -->

## TYPE DE CONTENU (POST TYPE)
### about

## MODÈLE (TEMPLATE)
### aPropos

## COMPOSANTES DE LA PAGE
### NOM DU PARTIAL
- `about.php`
- `heroGenerique.php`

### CHAMPS PERSONNALISÉS (CUSTOM FIELDS)
- **Text** : description
- **Icon** : icône PDF
- **Link** : lien vers le PDF
- **Gallery/Image** : héros

---

# Nous joindre
<!-- Configuration de la page de contact -->

## TYPE DE CONTENU (POST TYPE)
### contactus

## MODÈLE (TEMPLATE)
### contactUs

## COMPOSANTES DE LA PAGE
### NOM DU PARTIAL
- `contactUs.php`

### CHAMPS PERSONNALISÉS (CUSTOM FIELDS)
- **Email** : courriel
- **Title** : titre
- **Text Area** : message
- **Google Maps** : adresse
- **Link** : téléphone
- **Link** : adresse
- **Link** : courriel

---

# Service
<!-- Détails liés à la page des services -->

## TYPE DE CONTENU (POST TYPE)
### service

## MODÈLE (TEMPLATE)
### Service

## COMPOSANTES DE LA PAGE
### NOM DU PARTIAL
- `pageServices.php`

### CHAMPS PERSONNALISÉS
- **Text** : description
- **Image** : héros
- **Title** : titre

## AUTRES CHAMPS PERSONNALISÉS
- **Image** : parallax
- **Link** : `service-hub.php`
- **Group/List** : services cliquables
- **Icon** : icône

---

# 404
<!-- Configuration pour la page d'erreur -->

## TYPE DE CONTENU (POST TYPE)
### error

## MODÈLE (TEMPLATE)
### Erreur

## COMPOSANTES DE LA PAGE
### NOM DU PARTIAL
- `erreurs.php`

## AUTRES CHAMPS PERSONNALISÉS
- **Title** : titre
- **Text** : description
- **Image** : animation

---

# Services-hub
<!-- Détails pour le hub des services -->

## TYPE DE CONTENU (POST TYPE)
### servicehub

## MODÈLE (TEMPLATE)
### listeService

## COMPOSANTES DE LA PAGE
### NOM DU PARTIAL
- `listeServices.php`

### CHAMPS PERSONNALISÉS
- **Text** : description
- **Icon** : icône
- **Title** : titre
- **Group/List** : cartes services -> page service

---

# News-hub
<!-- Informations spécifiques au hub des actualités -->

## TYPE DE CONTENU (POST TYPE)
### newshub

## MODÈLE (TEMPLATE)
### listeNouvelle

## COMPOSANTES DE LA PAGE
### NOM DU PARTIAL
- `listeNouvelle.php`
- `heroGenerique.php`

### CHAMPS PERSONNALISÉS
- **Select** : ordre des nouvelles
- **Text** : texte
- **Title** : titre
- **Group/List** : lien vers une page nouvelle
- **Image/Gallery** : héros

---

# News article
<!-- Configuration pour une page d'article -->

## TYPE DE CONTENU (POST TYPE)
### article

## MODÈLE (TEMPLATE)
### Actualite

## COMPOSANTES DE LA PAGE
### NOM DU PARTIAL
- `pageNouvelle.php`

### CHAMPS PERSONNALISÉS
- **Text** : description
- **Image** : héros
- **Title** : titre

## AUTRES CHAMPS PERSONNALISÉS
- **Image** : parallax
- **Group/List** : articles
- **Link** : nouvelle précédente et suivante

---

# Teams
<!-- Informations sur la page d'équipe -->

## TYPE DE CONTENU (POST TYPE)
### team

## MODÈLE (TEMPLATE)
### Equipe

## COMPOSANTES DE LA PAGE
### NOM DU PARTIAL
- `team.php`
- `heroGenerique.php`

### CHAMPS PERSONNALISÉS
- **Group/List** : membres de l'équipe
- **Text** : description
- **Title** : titre
- **Image** : photo de profil des membres
