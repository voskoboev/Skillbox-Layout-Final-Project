'use strict';

inputMask();
initSwiper();
moveHeaderElementsOnLoad();
moveOfferElementsOnHover();
scrollToServices();
scrollToPortfolio();
scrollToPrices();
scrollToTop();
manageModalWindow();
toggleMobileMenu();
closeMobileMenu();

function inputMask() {
  const telInput = document.querySelector('.modal-window__input-tel');
  const im = new Inputmask('+7 (999) 999-99-99');

  im.mask(telInput);
}

function initSwiper() {
  const slider = document.querySelector('.swiper-container');

  const mySwiper = new Swiper(slider, {
    speed: 400,
    initialSlide: 0,
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
        spaceBetween: 36,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });
}

function moveHeaderElementsOnLoad() {
  const decorBraces = document.querySelector('.header__decor-item--curly-braces');
  const decorSmallDiv = document.querySelector('.header__decor-item--small-div');
  const decorNum = document.querySelector('.header__decor-item--num');
  const decorBigDiv = document.querySelector('.header__decor-item--big-div');
  const decorTagBraces = document.querySelector('.header__decor-item--tag-braces');

  if (window.innerWidth > 1100) {
    window.onload = () => {
      setTimeout(() => {
        decorBraces.classList.add('curly-braces--active');
        decorSmallDiv.classList.add('small-div--active');
        decorNum.classList.add('num--active');
        decorBigDiv.classList.add('big-div--active');
        decorTagBraces.classList.add('tag-braces--active');
      }, 600);
    }
  }
}

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

  if (window.innerWidth > 1024) {
    servicesMenuItems.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 790,
          behavior: 'smooth'
        });
      });
    });
  }

  if (window.innerWidth > 901 && window.innerWidth <= 1024) {
    servicesMenuItems.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 800,
          behavior: 'smooth'
        });
      });
    });
  }

  if (window.innerWidth > 646 && window.innerWidth <= 900) {
    servicesMenuItems.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 500,
          behavior: 'smooth'
        });
      });
    });
  }

  if (window.innerWidth > 320 && window.innerWidth <= 645) {
    servicesMenuItems.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 780,
          behavior: 'smooth'
        });
      });
    });
  }

  if (window.innerWidth <= 320) {
    servicesMenuItems.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 670,
          behavior: 'smooth'
        });
      });
    });
  }
}

function scrollToPortfolio() {
  const portfolioMenuItem = document.querySelectorAll('.menu-item--portfolio');

  if (window.innerWidth > 1024) {
    portfolioMenuItem.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 1420,
          behavior: 'smooth'
        });
      });
    });
  }

  if (window.innerWidth > 901 && window.innerWidth <= 1024) {
    portfolioMenuItem.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 1680,
          behavior: 'smooth'
        });
      });
    });
  }

  if (window.innerWidth > 760 && window.innerWidth <= 900) {
    portfolioMenuItem.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 1400,
          behavior: 'smooth'
        });
      });
    });
  }

  if (window.innerWidth > 426 && window.innerWidth <= 759) {
    portfolioMenuItem.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 1700,
          behavior: 'smooth'
        });
      });
    });
  }

  if (window.innerWidth > 320 && window.innerWidth <= 425) {
    portfolioMenuItem.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 1870,
          behavior: 'smooth'
        });
      });
    });
  }

  if (window.innerWidth <= 320) {
    portfolioMenuItem.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 1550,
          behavior: 'smooth'
        });
      });
    });
  }
}

function scrollToPrices() {
  const servicesMenuItem = document.querySelectorAll('.menu-item--prices');

  if (window.innerWidth >= 425) {
    servicesMenuItem.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 2600,
          behavior: 'smooth'
        });
      });
    });
  }

  if (window.innerWidth > 320 && window.innerWidth < 425) {
    servicesMenuItem.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 2600,
          behavior: 'smooth'
        });
      });
    });
  }

  if (window.innerWidth <= 320) {
    servicesMenuItem.forEach(el => {
      el.addEventListener('click', () => {
        window.scrollTo({
          top: 3000,
          behavior: 'smooth'
        });
      });
    });
  }
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

function manageModalWindow() {
  showModalWindow();
  closeModalWindow();
  submitFormAndShowSuccessMessage();

  function showModalWindow() {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const modalWindow = document.querySelector('.modal-window');
    const btn = document.querySelectorAll('.button');

    btn.forEach(el => {
      el.addEventListener('click', ev => {
        ev.preventDefault();

        html.style.overflowX = 'visible';
        body.classList.add('stop-scroll');
        modalWindow.classList.add('modal-window--active');
      });
    });
  }

  function closeModalWindow() {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const modalWindow = document.querySelector('.modal-window');
    const closeBtn = document.querySelector('.modal-window__close-btn');
    const warning = document.querySelector('.modal-window__warning');

    closeBtn.addEventListener('click', ev => {
      ev.preventDefault();

      html.style.overflowX = 'hidden';
      body.classList.remove('stop-scroll');
      modalWindow.classList.remove('modal-window--active');
      warning.classList.remove('modal-window__warning--active');

      document.querySelector('.modal-window__input-name').value = '';
      document.querySelector('.modal-window__input-tel').value = '';
    });
  }

  function submitFormAndShowSuccessMessage() {
    const body = document.querySelector('body');
    const modalWindow = document.querySelector('.modal-window');
    const form = document.querySelector('.modal-window__form');
    const submitBtn = document.querySelector('.modal-window__submit-btn');
    const formSuccess = document.querySelector('.modal-window__form-success');

    submitBtn.addEventListener('click', () => {
      const inputNameValue = document.querySelector('.modal-window__input-name').value;
      const inputTelValue = document.querySelector('.modal-window__input-tel').value;
      const warning = document.querySelector('.modal-window__warning');

      if (inputNameValue === '' || inputTelValue === '') {
        if (warning.classList.contains('modal-window__warning--active')) {
          return;
        } else {
          warning.classList.add('modal-window__warning--active');
        }

        return;
      }

      let formData = new FormData(form);

      fetch('../php/mail.php', {
        method: 'POST',
        body: formData
      })
        .then(data => {
          console.log(data);
          console.log('Отправлено');

          form.reset();

          form.style.display = 'none';
          formSuccess.classList.add('modal-window__form-success--active');

          setTimeout(fadeOut, 1000);

          function fadeOut() {
            body.classList.remove('stop-scroll');
            modalWindow.classList.remove('modal-window--active');
            form.style.display = 'flex';
            formSuccess.classList.remove('modal-window__form-success--active');
            warning.classList.remove('modal-window__warning--active');
          }
        });
    });
  }
}

function toggleMobileMenu() {
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  const nav = document.querySelector('.header__nav');
  const mobileMenuBtn = document.querySelector('.header__burger-menu-btn');
  const mobileMenuBtnLine = document.querySelector('.header__burger-menu-btn-line');

  mobileMenuBtn.addEventListener('click', () => {
    html.style.overflowX = 'visible';
    body.classList.toggle('stop-scroll');
    nav.classList.toggle('header__nav--active');
    mobileMenuBtn.classList.toggle('header__burger-menu-btn--active');
    mobileMenuBtnLine.classList.toggle('header__burger-menu-btn-line--active');
  });
}

function closeMobileMenu() {
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  const nav = document.querySelector('.header__nav');
  const menuItem = document.querySelectorAll('.menu-item');
  const mobileMenuBtnLine = document.querySelector('.header__burger-menu-btn-line');

  menuItem.forEach(el => {
    el.addEventListener('click', () => {
      html.style.overflowX = 'hidden';
      body.classList.remove('stop-scroll');
      nav.classList.remove('header__nav--active');
      mobileMenuBtnLine.classList.remove('header__burger-menu-btn-line--active');
    });
  });
}