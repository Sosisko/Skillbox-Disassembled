// $('.burger').click(function() {
// 	$('.burger').toggleClass('close');
//   $('.menu-adv').toggleClass('active');	
// })

$('.burger').click(function() {
	$('.burger').toggleClass('close');
	$('.burger').toggleClass('burger-active');
  $('.nav-adv__menu').toggleClass('active');
  	
});


$('.flowing-scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 1000 // скорость прокрутки
        );
    }
    return false;
});



if(window.matchMedia('(max-width: 320px)').matches){
	 $('.social__call-order').addClass('know-more-btn');
     $('.know-more-btn').removeClass('social__call-order');
};




$('.my-info__fly-elements').hide(); //Летающие элементы появляются после загрузки страницы
window.onload = function() {
    $('.my-info__fly-elements').show();
    $('.fly-elements__item').addClass('active');
  };




$(window).scroll(function() {
  var heightWindow = $(window).scrollTop();
 /*Если сделали скролл на 1500px задаём новый класс active для летающих элементов.*/
  if(heightWindow > 1500){
      $('.fly-elements__footer').show();
      $('.fly-elements__footer_item').addClass('active');
} else{
/*Если меньше 1600px удаляем класс active для летающих элементов*/
      $('.fly-elements__footer').hide();
      $('.fly-elements__footer_item').removeClass('active');
}
});





// $('.fly-elements__footer_item').css('display', 'none');

// jQuery(function(f){
//     var element = f('.fly-elements__footer_item');
//     f(window).scroll(function(){

//         element['fade'+ (f(this).scrollTop() > 1568 ? 'In': 'Out')](0);  
//          $('.fly-elements__footer_item').addClass('active');         
//     });
// });


// $('.footer-banner h3').click(function () {
//   alert( 'Текущая прокрутка сверху: ' + window.pageYOffset );
//   alert( 'Текущая прокрутка слева: ' + window.pageXOffset );
// });


// function scrollTracking() {
// let wt = $(window).scrollTop();
// let wh = $(window).height();
// let et = $('.fly-elements__footer_item').offset().top + 255;
// let eh = $('.fly-elements__footer_item').outerHeight() + 255;
// let dh = $(document).height();
// if (wt + wh >= et || wh + wt === dh || eh + et < wh) {
// $('.fly-elements__footer_item').addClass('active'); }
// }

// $(window).on('scroll', () => {
// scrollTracking()
// });

