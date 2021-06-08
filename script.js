$(".phone_mask").mask("8(999)999-99-99");

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
  slidesPerView: 1,
     pagination: {
       el: '.swiper-pagination',
      bulletActiveClass: "dots--active",
      bulletClass: "dots__dot",
      clickable: true
  }
});

const rangeInput1 = document.getElementById("range1");
const rangeInput2 = document.getElementById("range2");

const mouseMoveHandler = (rangeInput, defaultColor) => () => {
    const x = rangeInput.value;
    const color = `linear-gradient(90deg,${defaultColor} ${x}%, rgba(111, 111, 111, 0.25) ${x}%)`;
    rangeInput.style.background = color;
}

rangeInput1.addEventListener('mousemove', mouseMoveHandler(rangeInput1, '#025EC5'));
rangeInput2.addEventListener('mousemove', mouseMoveHandler(rangeInput2, '#FFB62A'));

