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

(function(){
	const galleryTabsList = document.querySelector('.gallery-tabs-list');
	const galleryTabs = document.querySelectorAll('.gallery-tab');
	const galleryContents = document.querySelectorAll('.gallery-tab-content');

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
})();
