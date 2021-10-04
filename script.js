let progressBar = document.querySelector('.hero-progress-bar');

var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      progressBar.classList.remove('animate');
      progressBar.classList.remove('active');
      progressBar.classList.add('animate');
      progressBar.classList.add('active');
    },
    slideChangeTransitionStart: function () {
      progressBar.classList.remove('animate');
      progressBar.classList.remove('active');
      progressBar.classList.add('active');
    },
    slideChangeTransitionEnd: function () {
      progressBar.classList.add('animate');
    },
  },
});

var swiper = new Swiper('.about-swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  observer: true,
  observeParents: true,
});
