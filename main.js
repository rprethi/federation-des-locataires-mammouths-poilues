/* ----------- ACCUEIL BANNIÈRE ----------- */
document.getElementById('closeBanner').addEventListener('click', function() {
    var banner = document.getElementById('banner');
    banner.style.margin = '0 0';
    setTimeout(function() {
        banner.style.display = 'none';
        document.body.classList.add('banner-hidden'); 
    }, 0); 
});
/* ----------------------------------------- */