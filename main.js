/* ----------- ACCUEIL BANNIÈRE ----------- */
document.getElementById('closeBanner').addEventListener('click', function() {
    let banner = document.getElementById('banniere');
    banner.style.transform = 'translateY(-100%)';
    setTimeout(function() {
        banner.style.display = 'none';
        document.body.classList.add('banner-hidden'); 
    }, 0);
});
/* ----------------------------------------- */