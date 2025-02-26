//swiper
var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  centeredSlidesBounds: true, 
  direction: "horizontal",
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  watchOverflow: true,
  breakpoints: {
    480: {
      direction: "vertical",
      slidesPerView: 4
    }
  }
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  thumbs: {
    swiper: swiper,
  },
});

//tabs
const tabsButtons = document.querySelectorAll('.btn_tabs');

tabsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const activeButton = document.querySelector('.btn_tabs.active');
    const activeTab = document.querySelector('.tabs__item.active');

    if (activeButton) {
      activeButton.classList.remove('active');
    }
    if (activeTab) {
      activeTab.classList.remove('active');
    }
    
    const tabId = btn.getAttribute('data-tab');
    btn.classList.add('active');

    const tabContent = document.getElementById(tabId);
    if (tabContent) {
      tabContent.classList.add('active');
    }
  });
});