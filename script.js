const swiper1 = new Swiper('.swiper-container1', {
  loop: true,
  spaceBetween: 240,
  slidesPerView: 1,
  pagination: {
       el: '.swiper-pagination',
      bulletActiveClass: "dots--active",
      bulletClass: "dots__dot",
      clickable: true
  }
});

const swiper2 = new Swiper('.swiper-container2', {
  loop: true,
  spaceBetween: 240,
  slidesPerView: 1
});