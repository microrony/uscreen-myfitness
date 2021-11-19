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

// var tabs = new Tabby('[data-gallery-tabs]');

(function () {
  const galleryTab = () => {
    const travelImagesSrc = [
      'https://s3.amazonaws.com/unode1/assets/24958/ILUGUyhQiC8f3WO12VE9_travel_1.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/EUCr35qSFisDMRz7AsDQ_travel_2.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/MZ95of3Sb6gFmGoVTjSg_travel_3.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/YfKgGLyATQiiCI8NN9Sm_travel_4.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/DWRjXn24RZhCCg0fg2yw_travel_5.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/raV1j7sPT3m9qs0gs3wa_travel_6.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/3Fsy3R2SQamJBBQU04mR_travel_7.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/l4qWOBgsTCKLt7UQ52Ko_travel_8.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/sM84QZS3QaWU7Zn51SRW_travel_9.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/RxR8qRFLSt2b6ctFi8fx_travel_10.JPG',
      'https://s3.amazonaws.com/unode1/assets/24958/nXdp5sPCQ8qtCIXdN5u6_travel_11.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/cCPQpp1TQSumHGjkARbb_travel_12.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/6fQt6SZJRRKlau5MrVAI_travel_13.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/MODDlhQeSWyNvXTkYtGv_travel_14.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/ipFHfYCOTCWzdBWxlP3r_travel_15.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/HEOmNFhTPqCnkzLRm5Pw_travel_16.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/YVuuaunhSWec56exJtc9_travel_17.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/MnOcbMFTPC7nzFb351vg_travel_18.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/Umtg8OVpR3afSyp07nPe_travel_19.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/8dZnUGnMQ32CBzI8DAuG_travel_20.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/kUrKGbmCT3yMFyt7P92b_travel_21.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/psZITlJSfCcE2TPuRYPE_travel_22.JPG',
      'https://s3.amazonaws.com/unode1/assets/24958/10mZay6ARWG5bEPjJozA_travel_23.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/0gOthEwmQoejThFfKhM3_travel_24.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/x86AApyXQcScddFgyfO2_travel_25.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/xV43LAg5QJuP2FDmuegk_travel_26.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/0v6m9fLBQQIkn5J6omQN_travel_27.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/Xl5ApPtoSRuQN88jglNf_travel_28.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/ZEhRBHKOR7yy21lNlHqy_travel_29.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/kcR1bBOQS7GnIhOEAIj8_travel_30.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/GaaX1UAScWqUNvCcH5H8_travel_31.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/ujomWGTYQvOfXetTqPdi_travel_32.jpg',
    ];

    const eventsImagesSrc = [
      'https://s3.amazonaws.com/unode1/assets/24958/EFepwWxqS12yISgEHEiV_events_1.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/Zb5GRkaS2escUeRqHPVg_events_2.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/HVT6cCL9SyW0VD4d4dwq_events_3.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/Ropp7X5kQEKKz9sekfpn_events_4.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/TQ2MNQhHQ3qqArW3mzMN_events_5.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/g23N9TuTScC2ZD5jyNtR_events_6.JPG',
      'https://s3.amazonaws.com/unode1/assets/24958/jiBKeeYVTJKzt21VEN1k_events_7.JPG',
      'https://s3.amazonaws.com/unode1/assets/24958/vBkwA0XNQXeptNZT8EYW_events_8.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/TZzQy6EBQ1NTYGgk8qRp_events_9.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/Nag1gPsvQX6hU85JqDoQ_events_10.JPG',
      'https://s3.amazonaws.com/unode1/assets/24958/BVNT6n77S2C8rPKn39ji_events_11.JPG',
      'https://s3.amazonaws.com/unode1/assets/24958/12aD64DIR0SMndJYxa8p_events_12.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/NhMFQDsPSgmGlo7kygu9_events_13.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/9IaCfEcuR8Ct3HjZsdbw_events_14.jpg',
    ];

    const studioImagesSrc = [
      'https://s3.amazonaws.com/unode1/assets/24958/Wj2ydouSSBehuGx0zd3U_studio_1.JPG',
      'https://s3.amazonaws.com/unode1/assets/24958/sDHEjSvbQuC7eE9VasF9_studio_2.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/qEeAzh8HS20pw17F3r7g_studio_3.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/zzQrb6QNig2ClNA2iEAH_studio_4.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/Rvc4jo35RQKBuV5e7Fhx_studio_5.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/jP3p1bxPRhaX0ZNuYNHw_studio_6.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/zh7VsfCySGuKZ4z3SS0j_studio_7.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/bQAAaNpfSw2XFwGsDu3k_studio_8.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/6CuKZoMRPCCt5B3KPIdQ_studio_9.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/jN4o9LxiSPmWmlEG891H_studio_10.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/JNe6pr3T5SIo6xvYl8He_studio_11.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/bGXqnEPsRQmIzfi9eRNo_studio_12.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/vi5hLihERXq84Umc6C5x_studio_13.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/0KiMhXFQuW6YZ4jElx0E_studio_14.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/cRlZo0XQpyvjlsQO6PDQ_studio_15.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/jHC8ki6RQmOyGObF8P6b_studio_16.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/1bzG34pGRHSlEwJuqewk_studio_17.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/fU7RdZFAQzun7knDBkpn_studio_18.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/LPjpTnwXSku5RSGB1mEE_studio_19.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/9FjKkWeTgybv9PjIEu3w_studio_20.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/olnto8HbQuSczsRbDlYs_studio_21.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/pvIcQSYR6W59QmLU0Qns_studio_22.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/Yts0o9beQaaka7xI5Ict_studio_23.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/KVij2Q8zSgOpTItMhmjg_studio_24.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/1GhszmJQtSQWlKo975fs_studio_25.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/JrCiC9SpQey3i0ubecKi_studio_26.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/UIjVK6fzRp2sK8V2P5wG_studio_27.JPG',
      'https://s3.amazonaws.com/unode1/assets/24958/BZgjbIfSZWU3p2UqTO2w_studio_28.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/shAkevWTei2COe6tDMR9_studio_29.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/idamIIeQEWXlZ7umw9gw_studio_30.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/dOXnUDnvSNO7WnpDRFYa_studio_31.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/WpDzRc7cQNYsp1ldMREg_studio_32.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/dDu7OBXwTsGgBgZUBG9w_studio_33.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/OBA60rSNQNmLyNfdhHIx_studio_34.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/Hl3G59U2R8OIc2xWKdfi_studio_35.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/LgRWeklRvCEf4w4bUKwo_studio_36.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/glXNy9e4QBWase0oNvFa_studio_37.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/sPA8PoRQxYNb5rqijAwO_studio_38.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/cF3ObKvFQ2SZ61BKpr75_studio_39.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/0FWULwC9RumNDmEkDyxh_studio_40.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/OHGdWweXSuC98CIVCtab_studio_41.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/Jg9OACAPROu62kIGodRc_studio_42.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/uFpO3iOqR2OhK3a8Z8wb_studio_43.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/FaKfT368R3hWqa0b2Rey_studio_44.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/SN6B57aLSaePnEng354E_studio_45.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/K9IdQ9sXROqlMqsWtnKf_studio_46.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/uXQdPNgtRJezxKQjXPoM_studio_47.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/LjJRk4RQiqmoSzrqBfHw_studio_48.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/ImdqidmvSuCJr1cBhyJt_studio_49.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/CrpAgqmuTreXMiF3on1L_studio_50.JPG',
      'https://s3.amazonaws.com/unode1/assets/24958/ITqhyS8nRDF70Zb3UyKI_studio_51.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/Fp82uT0NQHmveeqCwMCS_studio_52.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/WQKi5uhmQeO8NesHWzU4_studio_53.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/iARoxFPQ4yuO5Yp0y8TJ_studio_54.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/Fje3DqvGRZS5jkYxwSWh_studio_55.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/oRwkokv9QkSXQ7fSl7rN_studio_56.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/2ta4J2ctTRSs8bDhF4gG_studio_57.jpg',
    ];

    const juniorsImagesSrc = [
      'https://s3.amazonaws.com/unode1/assets/24958/ragqyJgyTSuJmXJJTQlU_juniors_1.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/xIbdtMXzS4GGc3234cp7_juniors_2.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/9e3JKPkSu6Ie3Z4ljkq8_juniors_3.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/JOrESvjTQH6Xwd1POvdg_juniors_4.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/oyFKgNwZTBeNBSr670GZ_juniors_5.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/f4sDtxWKSVeKaiA4gJNB_juniors_6.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/AbG0X3aoTSduBEvDMqOr_juniors_7.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/3U3vXIOTOChEBLUftEvw_juniors_8.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/GgWyPbbSYC9H43ZMjaeJ_juniors_9.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/H7sTYDCTAGNEncrueJGX_juniors_10.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/RV9IENdQ7K0ec8o51Thw_juniors_11.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/gKeYKilURWSdp3YZUmMF_juniors_12.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/24xzHh9QpKv1sVQy1wL1_juniors_13.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/5Ub5ObS0Rgu8geVXHTMA_juniors_14.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/al6W7uqgT6y3E0GQF67t_juniors_15.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/Jl94WLXQg2nTIetcj4HQ_juniors_16.jpg',
      'https://s3.amazonaws.com/unode1/assets/24958/FjC3Mb8QCawffhsDJJTt_juniors_17.JPG',
      'https://s3.amazonaws.com/unode1/assets/24958/aA5pE5IOQNOEbRKYW8Rh_juniors_18.jpg',
    ];

    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const tab3 = document.getElementById('tab3');
    const tab4 = document.getElementById('tab4');

    const galleryTabContent = document.querySelector('.gallery-tab-content');

    if ((tab1, tab2, tab3, tab4, galleryTabContent)) {
      const tabNode = (imagesSrc, juniorsImage) => {
        let html = '';

        const content = `
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
	${imagesSrc
    .map((img, index) => {
      return `
		<div class='gallery-image-container' data-travel="travel">
		<div class="cursor-pointer gallery-modal-btn">
			<img
				alt="Travel Photo"
				class="w-full h-full object-cover ${
          juniorsImage && index === 0 ? 'juniors-first-image' : ''
        }"
				src="${img}"
			/>
		</div>
		<div class="gallery-modal-overlay"></div>
		<div class="gallery-modal" id="gallery-modal">
			<button class="modal-close-btn">
				<i class="fa fa-times"></i>
			</button>
			<img
				alt="Travel Photo"
				class="w-full h-full object-cover"
				src="${img}"
			/>
		</div>
	</div>
		`;
    })
    .join('')}
	</div>
	`;

        html += content;

        galleryTabContent.innerHTML = html;
      };

      window.onload = function () {
        tab1.click();
      };

      tab1.addEventListener('click', () => {
        tabNode(travelImagesSrc);

        tab1.classList.add('active');
        tab2.classList.remove('active');
        tab3.classList.remove('active');
        tab4.classList.remove('active');
      });

      tab2.addEventListener('click', () => {
        tabNode(eventsImagesSrc);

        tab2.classList.add('active');
        tab1.classList.remove('active');
        tab3.classList.remove('active');
        tab4.classList.remove('active');
      });

      tab3.addEventListener('click', () => {
        tabNode(studioImagesSrc);

        tab3.classList.add('active');
        tab2.classList.remove('active');
        tab1.classList.remove('active');
        tab4.classList.remove('active');
      });

      const juniorsImage = true;

      tab4.addEventListener('click', () => {
        tabNode(juniorsImagesSrc, juniorsImage);

        tab4.classList.add('active');
        tab2.classList.remove('active');
        tab3.classList.remove('active');
        tab1.classList.remove('active');
      });
    }
  };

  galleryTab();

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
