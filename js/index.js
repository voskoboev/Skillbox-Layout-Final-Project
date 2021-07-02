'use strict'

inputMask()
initSwiper()
moveHeaderElementsOnLoad()
moveOfferElementsOnHover()
scrollToServices()
scrollToPortfolio()
scrollToPrices()
scrollToTop()
manageModalWindow()
toggleMobileMenu()
closeMobileMenu()

function inputMask() {
  const telInput = document.querySelector('.modal-window__input-tel')
  const im = new Inputmask('+7 (999) 999-99-99')

  im.mask(telInput)
}

function initSwiper() {
  const slider = document.querySelector('.swiper-container')

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
  })
}

function moveHeaderElementsOnLoad() {
  const
    decorBraces = document.querySelector('.header__decor-item--curly-braces'),
    decorSmallDiv = document.querySelector('.header__decor-item--small-div'),
    decorNum = document.querySelector('.header__decor-item--num'),
    decorBigDiv = document.querySelector('.header__decor-item--big-div'),
    decorTagBraces = document.querySelector('.header__decor-item--tag-braces')

  const activateElements = () => {
    setTimeout(() => {
      decorBraces.classList.add('curly-braces--active')
      decorSmallDiv.classList.add('small-div--active')
      decorNum.classList.add('num--active')
      decorBigDiv.classList.add('big-div--active')
      decorTagBraces.classList.add('tag-braces--active')
    }, 600)
  }

  if (window.innerWidth > 1100) {
    window.addEventListener('load', activateElements)
  }

  if (window.innerWidth <= 1100) {
    window.removeEventListener('load', activateElements)
  }
}

function moveOfferElementsOnHover() {
  const
    offer = document.querySelector('.offer'),
    offerElements = document.querySelectorAll('.offer__decor-item')

  const activateElements = () => {
    offerElements.forEach(el => {
      el.classList.add('offer__decor-item--active')
    })
  }

  const inactivateElements = () => {
    offerElements.forEach(el => {
      el.classList.remove('offer__decor-item--active')
    })
  }

  offer.addEventListener('mouseenter', activateElements)
  offer.addEventListener('mouseleave', inactivateElements)

  if (window.innerWidth < 1200) {
    offer.removeEventListener('mouseenter', activateElements)
    offer.removeEventListener('mouseleave', inactivateElements)
  }
}

function scrollToServices() {
  const servicesMenuItems = document.querySelectorAll('.menu-item--services')

  // if (window.innerWidth > 1024) {
  servicesMenuItems.forEach(el => {
    el.addEventListener('click', () => {
      window.scrollTo({
        top: 790,
        behavior: 'smooth'
      })
    })
  })
  // }

}

function scrollToPortfolio() {
  const portfolioMenuItem = document.querySelectorAll('.menu-item--portfolio')

  // if (window.innerWidth > 1024) {
  portfolioMenuItem.forEach(el => {
    el.addEventListener('click', () => {
      window.scrollTo({
        top: 1420,
        behavior: 'smooth'
      })
    })
  })
  // }

}

function scrollToPrices() {
  const servicesMenuItem = document.querySelectorAll('.menu-item--prices')

  // if (window.innerWidth >= 425) {
  servicesMenuItem.forEach(el => {
    el.addEventListener('click', () => {
      window.scrollTo({
        top: 2600,
        behavior: 'smooth'
      })
    })
  })
  // }

}

function scrollToTop() {
  const
    scrollBtn = document.querySelector('.scroll-up-btn'),
    offsetY = 600

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop

  window.addEventListener('scroll', () => {
    if (getTop() > offsetY) {
      scrollBtn.classList.add('scroll-up-btn--active')
    } else {
      scrollBtn.classList.remove('scroll-up-btn--active')
    }
  })

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}

function manageModalWindow() {
  const showModalWindow = () => {
    const
      html = document.querySelector('html'),
      body = document.querySelector('body'),
      modalWindow = document.querySelector('.modal-window'),
      btn = document.querySelectorAll('.button')

    btn.forEach(el => {
      el.addEventListener('click', ev => {
        ev.preventDefault()

        html.style.overflowX = 'visible'
        body.classList.add('stop-scroll')
        modalWindow.classList.add('modal-window--active')
      })
    })
  }

  showModalWindow()

  const closeModalWindow = () => {
    const
      html = document.querySelector('html'),
      body = document.querySelector('body'),
      modalWindow = document.querySelector('.modal-window'),
      inputName = document.querySelector('.modal-window__input-name'),
      inputTel = document.querySelector('.modal-window__input-tel'),
      closeBtn = document.querySelector('.modal-window__close-btn'),
      warning = document.querySelector('.modal-window__warning')

    const clearInputValues = (input) => {
      input.value = ''
    }

    closeBtn.addEventListener('click', ev => {
      ev.preventDefault()

      html.style.overflowX = 'hidden'
      body.classList.remove('stop-scroll')
      modalWindow.classList.remove('modal-window--active')
      warning.classList.remove('modal-window__warning--active')

      clearInputValues(inputName)
      clearInputValues(inputTel)
    })
  }

  closeModalWindow()

  const submitFormAndShowSuccessMessage = () => {
    const
      body = document.querySelector('body'),
      modalWindow = document.querySelector('.modal-window'),
      form = document.querySelector('.modal-window__form'),
      submitBtn = document.querySelector('.modal-window__submit-btn'),
      formSuccess = document.querySelector('.modal-window__form-success')

    submitBtn.addEventListener('click', () => {
      const
        inputNameValue = document.querySelector('.modal-window__input-name').value,
        inputTelValue = document.querySelector('.modal-window__input-tel').value,
        warning = document.querySelector('.modal-window__warning')

      if (!inputNameValue || !inputTelValue) {
        if (warning.classList.contains('modal-window__warning--active')) {
          return
        } else {
          warning.classList.add('modal-window__warning--active')
        }

        return
      }

      const formData = new FormData(form)

      fetch('../php/mail.php', {
        method: 'POST',
        body: formData
      })
        .then(data => {
          form.reset()
          form.style.display = 'none'
          formSuccess.classList.add('modal-window__form-success--active')

          setTimeout(fadeOut, 1000)

          function fadeOut() {
            body.classList.remove('stop-scroll')
            modalWindow.classList.remove('modal-window--active')
            form.style.display = 'flex'
            formSuccess.classList.remove('modal-window__form-success--active')
            warning.classList.remove('modal-window__warning--active')
          }
        })
    })
  }

  submitFormAndShowSuccessMessage()
}

function toggleMobileMenu() {
  const
    html = document.querySelector('html'),
    body = document.querySelector('body'),
    nav = document.querySelector('.header__nav'),
    mobileMenuBtn = document.querySelector('.header__burger-menu-btn'),
    mobileMenuBtnLine = document.querySelector('.header__burger-menu-btn-line')

  mobileMenuBtn.addEventListener('click', () => {
    html.style.overflowX = 'visible'
    body.classList.toggle('stop-scroll')
    nav.classList.toggle('header__nav--active')
    mobileMenuBtn.classList.toggle('header__burger-menu-btn--active')
    mobileMenuBtnLine.classList.toggle('header__burger-menu-btn-line--active')
  })
}

function closeMobileMenu() {
  const
    html = document.querySelector('html'),
    body = document.querySelector('body'),
    nav = document.querySelector('.header__nav'),
    menuItem = document.querySelectorAll('.menu-item'),
    mobileMenuBtnLine = document.querySelector('.header__burger-menu-btn-line')

  menuItem.forEach(el => {
    el.addEventListener('click', () => {
      html.style.overflowX = 'hidden'
      body.classList.remove('stop-scroll')
      nav.classList.remove('header__nav--active')
      mobileMenuBtnLine.classList.remove('header__burger-menu-btn-line--active')
    })
  })
}
