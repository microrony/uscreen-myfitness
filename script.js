let heroProgressBar = document.querySelector('.hero-progress-bar');

var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  speed: 300,
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
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 300,
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
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  speed: 300,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.about-page-swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 300,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 40,
    },
  },
});

if (window.innerWidth < 640) {
  var swiper = new Swiper('.members-swiper-container', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 300,
    loop: true,
    grabCursor: true,
  });
}

(function () {
  const filterGalleryImages = () => {
    const showAllTab = document.querySelector('.tab-show-all');
    const travelTab = document.querySelector('.tab-travel');
    const eventsTab = document.querySelector('.tab-events');
    const studioTab = document.querySelector('.tab-studio');
    const juniorsTab = document.querySelector('.tab-juniors');

		const allGalleryTabs = document.querySelectorAll('.gallery-tab');
    const allFilteredDivs = document.querySelectorAll(
      '.gallery-image-container'
    );

		console.log(allFilteredDivs)

    if (
      showAllTab &&
      travelTab &&
      eventsTab &&
      studioTab &&
      juniorsTab &&
      allFilteredDivs &&
			allGalleryTabs
    ) {
      // Turns node list into an array
      const allGalleryTabsArray =  Array.from(allGalleryTabs);
      const allFilteredDivsArray = Array.from(allFilteredDivs);

      showAllTab.addEventListener('click', showAll);
      function showAll() {

				allGalleryTabsArray.forEach(div => {
					div.classList.remove('active');

					if(div.dataset.all) {
						div.classList.add('active');
					}
				});

        allFilteredDivsArray.forEach(div => {
          div.classList.remove('remove');
          div.classList.add('show');
        });
      }

      travelTab.addEventListener('click', filterTravelImages);
      function filterTravelImages() {

				allGalleryTabsArray.forEach(div => {
					div.classList.remove('active');

					if(div.dataset.travel) {
						div.classList.add('active');
					}
				});

				allFilteredDivsArray.forEach(div => {
					div.classList.remove('show');
					div.classList.remove('remove');
			
					if (div.dataset.travel) {
						div.classList.add('show');
					} else {
						div.classList.add('remove');
					}
        });
      }

			eventsTab.addEventListener('click', filterEventsImages);
      function filterEventsImages() {

				allGalleryTabsArray.forEach(div => {
					div.classList.remove('active');

					if(div.dataset.events) {
						div.classList.add('active');
					}
				});

				allFilteredDivsArray.forEach(div => {
					div.classList.remove('show');
					div.classList.remove('remove');
			
					if (div.dataset.events) {
						div.classList.add('show');
					} else {
						div.classList.add('remove');
					}
        });
      }

			studioTab.addEventListener('click', filterStudioImages);
      function filterStudioImages() {

				allGalleryTabsArray.forEach(div => {
					div.classList.remove('active');

					if(div.dataset.studio) {
						div.classList.add('active');
					}
				});

				allFilteredDivsArray.forEach(div => {
					div.classList.remove('show');
					div.classList.remove('remove');
			
					if (div.dataset.studio) {
						div.classList.add('show');
					} else {
						div.classList.add('remove');
					}
        });
      }

			juniorsTab.addEventListener('click', filterJuniorsImages);
      function filterJuniorsImages() {

				allGalleryTabsArray.forEach(div => {
					div.classList.remove('active');

					if(div.dataset.juniors) {
						div.classList.add('active');
					}
				});

				allFilteredDivsArray.forEach(div => {
					div.classList.remove('show');
					div.classList.remove('remove');
			
					if (div.dataset.juniors) {
						div.classList.add('show');
					} else {
						div.classList.add('remove');
					}
        });
      }

    }
  };

  filterGalleryImages();

  const galleryModal = () => {
    if (window.innerWidth > 600) {
      const galleryModals = document.querySelectorAll('.gallery-modal-btn');
      const galleryCloseButtons = document.querySelectorAll('.modal-close-btn');
      const galleryModalOverlays = document.querySelectorAll(
        '.gallery-modal-overlay'
      );

      if (galleryModals && galleryCloseButtons && galleryModalOverlays) {
        const openModal = e => {
          e.currentTarget.parentNode.children[1].classList.toggle('is-visible');
          e.currentTarget.parentNode.children[2].classList.toggle('is-visible');
        };

        const closeModal = e => {
          e.currentTarget.parentNode.parentNode.children[1].classList.toggle(
            'is-visible'
          );
          e.currentTarget.parentNode.parentNode.children[2].classList.toggle(
            'is-visible'
          );
        };

        for (let i = 0; i < galleryModals.length; i++) {
          galleryModals[i].addEventListener('click', e => openModal(e));
          galleryModalOverlays[i].addEventListener('click', e => openModal(e));
          galleryCloseButtons[i].addEventListener('click', e => closeModal(e));
        }
      }
    }
  };

  galleryModal();

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