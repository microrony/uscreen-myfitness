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
