// swiper statement
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
  deelay: 3000,
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

var swiper2 = new Swiper(".mySwipper2", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 5,
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  },
  breakpoints: {
      100: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2,
      },
      500: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2,
      },
      700: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3,
      },
      900: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 3,
      },
      1300: {
          slidesPerView: 3,
          slidesPerGroup: 3,
      },
      1700: {
          slidesPerView: 4,
          slidesPerGroup: 4,
      }
  }
});
