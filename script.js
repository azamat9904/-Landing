$(".phone_mask").mask("8(999)999-99-99");

$('#priceListBtn').click(function(){
     $('html, body').animate({
        scrollTop: $("#priceElement").offset().top
    }, 1000);
});

$('#contactBtn').click(function(){
     $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$('#serviceBtn').click(function(){
     $('html, body').animate({
        scrollTop: $("#service").offset().top
    }, 1000);
});


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

const mapData = [
    {
        performance: 0.2,
        force: 1.1,
        price: '3 120 000,00'
    },
    {
        performance: 0.4,
        force: 1.1,
        price: '4 560 000,00'
    },
    {
        performance: 0.6,
        force: 1.1,
        price: '5 520 000,00'
    },
    {
        performance: 1,
        force: 2.2,
        price: '6 600 000,00'
    },
    {
        performance: 2,
        force: 4,
        price: '8 160 000,00'
    },
    {
        performance: 5,
        force: 5.5,
        price: '16 170 000,00'
    },
    {
        performance: 8,
        force: 7.5,
        price: '22 000 000,00'
    },
     {
        performance: 10,
        force: 11.5,
        price: '24 200 000,00'
    },
    {
        performance: 15,
        force: 12.5,
        price: '30 250 000,00'
    },
    {
        performance: 25,
        force: 18,
        price: '44 000 000,00'
    },
    {
        performance: 50,
        force: 25,
        price: '88 000 000,00'
    },
    {
        performance: 100,
        force: 45,
        price: '184 250 000,00'
    }
];

const rangeInput1 = document.getElementById("range1");
const rangeInput2 = document.getElementById("range2");

rangeInput1.addEventListener('mousemove', () => {
    const x = parseInt(rangeInput1.value);
    console.log(x);
    
    if(x > 0 && x < 3){
        const color = `linear-gradient(90deg,#FFB62A 6%, rgba(111, 111, 111, 0.25) 6%)`;
        rangeInput2.style.background = color;
        rangeInput2.value = '4';
        return;
    }
    
    if(x >= 25 && x <= 32){
        const color = `linear-gradient(90deg,#FFB62A 15.5%, rgba(111, 111, 111, 0.25) 15.5%)`;
        rangeInput2.style.background = color;
        rangeInput2.value = '14';
        return;
    }
    
    const color = `linear-gradient(90deg,#025EC5 ${x}%, rgba(111, 111, 111, 0.25) ${x}%)`;
    rangeInput1.style.background = color;
});

