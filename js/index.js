'use strict';

initSwiper();

// moveHeaderElementsOnLoad();

moveOfferElementsOnHover();

scrollToServices();
scrollToPortfolio();
scrollToPrices();
scrollToTop();

showModalWindow();
closeModalWindow();
submitFormAndShowSuccessMessage();

toggleMobileMenu();
closeMobileMenu();

function initSwiper() {
  const slider = document.querySelector('.swiper-container');

  const mySwiper = new Swiper(slider, {
    speed: 400,
    initialSlide: 0,
    // centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    slideClass: 'swiper-slide',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      970: { 
        slidesPerView: 2,
        // centeredSlides: 'true',
        spaceBetween: 36,

      },
      1280: { // 1024
        slidesPerView: 3,
        spaceBetween: 30,
      }
    
    }
  });

}

// function moveHeaderElementsOnLoad() {
//   const decorBraces = document.querySelector('.header__decor-item--curly-braces');
//   const decorSmallDiv = document.querySelector('.header__decor-item--small-div');
//   const decorNum = document.querySelector('.header__decor-item--num');
//   const decorBigDiv = document.querySelector('.header__decor-item--big-div');
//   const decorTagBraces = document.querySelector('.header__decor-item--tag-braces');

//   if (window.innerWidth > 1024) {
//     window.onload = () => {
//       decorBraces.classList.add('curly-braces--active');
//       decorSmallDiv.classList.add('small-div--active');
//       decorNum.classList.add('num--active');
//       decorBigDiv.classList.add('big-div--active');
//       decorTagBraces.classList.add('tag-braces--active');
//     }
//   }
// }

function moveOfferElementsOnHover() {
  const offer = document.querySelector('.offer');
  const offerElements = document.querySelectorAll('.offer__decor-item');

  offer.addEventListener('mouseover', () => {
    offerElements.forEach(el => {
      el.classList.add('offer__decor-item--active');
    });
  });

  offer.addEventListener('mouseout', () => {
    offerElements.forEach(el => {
      el.classList.remove('offer__decor-item--active');
    });
  });
}

function scrollToServices() {
  const servicesMenuItems = document.querySelectorAll('.menu-item--services');

  servicesMenuItems.forEach(el => {
    el.addEventListener('click', () => {
      window.scrollTo({
        top: 760,
        behavior: 'smooth'
      });
    });
  });
}

function scrollToPortfolio() {
  const portfolioMenuItem = document.querySelectorAll('.menu-item--portfolio');

  portfolioMenuItem.forEach(el => {
    el.addEventListener('click', () => {
      window.scrollTo({
        top: 1420,
        behavior: 'smooth'
      });
    });
  });
}

function scrollToPrices() {
  const servicesMenuItem = document.querySelectorAll('.menu-item--prices');

  servicesMenuItem.forEach(el => {
    el.addEventListener('click', () => {
      window.scrollTo({
        top: 2500,
        behavior: 'smooth'
      });
    });
  });
}

function scrollToTop() {
  const offsetY = 600;
  const scrollBtn = document.querySelector('.scroll-up-btn');

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offsetY) {
      scrollBtn.classList.add('scroll-up-btn--active');
    } else {
      scrollBtn.classList.remove('scroll-up-btn--active');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function showModalWindow() {
  const body = document.querySelector('body');
  const modalWindow = document.querySelector('.modal-window');
  const btn = document.querySelectorAll('.button');

  btn.forEach(el => {
    el.addEventListener('click', ev => {
      ev.preventDefault();
      body.classList.add('stop-scroll');
      modalWindow.classList.add('modal-window--active');
    });
  });
}

function closeModalWindow() {
  const body = document.querySelector('body');
  const modalWindow = document.querySelector('.modal-window');
  const closeBtn = document.querySelector('.modal-window__close-btn');

  closeBtn.addEventListener('click', ev => {
    ev.preventDefault();
    body.classList.remove('stop-scroll');
    modalWindow.classList.remove('modal-window--active');
  });
}

function submitFormAndShowSuccessMessage() {
  const body = document.querySelector('body');
  const modalWindow = document.querySelector('.modal-window');
  const form = document.querySelector('.modal-window__form');
  const submitBtn = document.querySelector('.modal-window__submit-btn');
  const formSuccess = document.querySelector('.modal-window__form-success');

  submitBtn.addEventListener('click', () => {
    form.style.display = 'none';
    formSuccess.classList.add('modal-window__form-success--active');

    setTimeout(fadeOut, 1000);

    function fadeOut() {
      body.classList.remove('stop-scroll');
      modalWindow.classList.remove('modal-window--active');
      form.style.display = 'flex';
      formSuccess.classList.remove('modal-window__form-success--active');
    }
  });
}

function toggleMobileMenu() {
  const body = document.querySelector('.body');
  const nav = document.querySelector('.header__nav');
  const mobileMenuBtn = document.querySelector('.header__burger-menu-btn');
  const mobileMenuBtnLine = document.querySelector('.header__burger-menu-btn-line');

  mobileMenuBtn.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    nav.classList.toggle('header__nav--active');
    mobileMenuBtn.classList.toggle('header__burger-menu-btn--active');
    mobileMenuBtnLine.classList.toggle('header__burger-menu-btn-line--active');
  });
}

function closeMobileMenu() {
  const body = document.querySelector('.body');
  const nav = document.querySelector('.header__nav');
  const menuItem = document.querySelectorAll('.menu-item');
  const mobileMenuBtnLine = document.querySelector('.header__burger-menu-btn-line');

  menuItem.forEach(el => {
    el.addEventListener('click', () => {
      body.classList.remove('stop-scroll');
      nav.classList.remove('header__nav--active');
      mobileMenuBtnLine.classList.remove('header__burger-menu-btn-line--active');
    });
  });
}