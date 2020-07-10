var mySwiper = new Swiper ('.swiper-container', {
    	loop: true,
    	slidesPerView: 1,
    	spaceBetween: 30,
    	navigation: {
     	nextEl: '.swiper-button-next',
     	prevEl: '.swiper-button-prev',
    },
	    pagination: {
	    el: '.swiper-pagination',
	    type: 'bullets',
	    clickable: true,
    },
    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: 40
      },  
      1025: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
