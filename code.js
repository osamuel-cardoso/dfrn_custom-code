const swiperProcess = new Swiper(".swiper.process", {
  slidesPerView: "auto",
  spaceBetween: 20,
  
  navigation: {
    nextEl: "control_left-arrow",
    prevEl: "control_right-arrow"
  },

  breakpoints: {
    480: {
      loop: true
    }
  }
});
