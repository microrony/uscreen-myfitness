let heroProgressBar = document.querySelector('.hero-progress-bar');

var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      heroProgressBar.classList.remove('animate');
      heroProgressBar.classList.remove('active');
      heroProgressBar.classList.add('animate');
      heroProgressBar.classList.add('active');
    },
    slideChangeTransitionStart: function () {
      heroProgressBar.classList.remove('animate');
      heroProgressBar.classList.remove('active');
      heroProgressBar.classList.add('active');
    },
    slideChangeTransitionEnd: function () {
      heroProgressBar.classList.add('animate');
    },
  },
});

let aboutSectionProgressBar = document.querySelector(
  '.about-section-progress-bar'
);

var swiper = new Swiper('.about-swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  grabCursor: true,
  on: {
    init: function () {
      aboutSectionProgressBar.classList.remove('animate');
      aboutSectionProgressBar.classList.remove('active');
      aboutSectionProgressBar.classList.add('animate');
      aboutSectionProgressBar.classList.add('active');
    },
    slideChangeTransitionStart: function () {
      aboutSectionProgressBar.classList.remove('animate');
      aboutSectionProgressBar.classList.remove('active');
      aboutSectionProgressBar.classList.add('active');
    },
    slideChangeTransitionEnd: function () {
      aboutSectionProgressBar.classList.add('animate');
    },
  },
});

var swiper = new Swiper('.testimonials-swiper-container', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  speed: 500,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.about-page-swiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  spaceBetween: 40,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 500,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

(function () {
  const galleryTab = () => {
    const galleryTabsList = document.querySelector('.gallery-tabs-list');
    const galleryTabs = document.querySelectorAll('.gallery-tab');
    const galleryContents = document.querySelectorAll('.gallery-tab-content');

    if (galleryTabsList && galleryTabs && galleryContents) {
      galleryTabsList.addEventListener('click', toggleTabs);

      function toggleTabs(e) {
        if (e.target && e.target.nodeName === 'LI') {
          //change tabs
          for (let i = 0; i < galleryTabs.length; i++) {
            galleryTabs[i].classList.remove('active');
          }
          e.target.classList.toggle('active');

          //change contents
          for (let i = 0; i < galleryContents.length; i++) {
            galleryContents[i].classList.remove('active');
          }

          const tabID = `#${e.target.dataset.tabId}`;

          document.querySelector(tabID).classList.toggle('active');
        }
      }
    }
  };

  galleryTab();

  const galleryModal = () => {
		
    const galleryModals = document.querySelectorAll('#gallery-modal-btn');
    const galleryCloseButtons = document.querySelectorAll('#close-btn');
    const galleryModalOverlays = document.querySelectorAll(
      '#gallery-modal-overlay'
    );


    galleryModals.map(element => {
      element.addEventListener('click', function () {
        document
          .getElementById('gallery-modal-overlay')
          .classList.add('is-visible');
        document.getElementById('gallery-modal').classList.add('is-visible');
      });
    });

    galleryCloseButtons.map(element => {
      element.addEventListener('click', function () {
        document
          .getElementById('gallery-modal-overlay')
          .classList.remove('is-visible');
        document.getElementById('gallery-modal').classList.remove('is-visible');
      });
    });

    galleryModalOverlays.map(element => {
      element.addEventListener('click', function () {
        document
          .getElementById('gallery-modal-overlay')
          .classList.remove('is-visible');
        document.getElementById('gallery-modal').classList.remove('is-visible');
      });
    });
  };

  // galleryModal();

  const faqAccordion = () => {
    var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');

    if (accItem && accHD) {
      for (let i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
      }
      function toggleItem() {
        var itemClass = this.parentNode.className;
        for (let i = 0; i < accItem.length; i++) {
          accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
          this.parentNode.className = 'accordionItem open';
        }
      }
    }
  };

  faqAccordion();
})();
