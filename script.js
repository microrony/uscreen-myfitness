var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  observer: true,
  observeParents: true,
});

var swiper = new Swiper('.about-swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  observer: true,
  observeParents: true,
});
