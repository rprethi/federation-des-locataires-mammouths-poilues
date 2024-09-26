document.querySelector('.banner__close').addEventListener('click', function() {
    let banner = document.querySelector('.nav__banniere')
    let nav = document.querySelector('nav')
    banner.style.transform = 'translateY(-100%)';
    nav.style.top = '0';
    setTimeout(function() {
        banner.style.display = 'none';
        document.body.classList.add('banner-hidden');
    }, 0); 
});

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });