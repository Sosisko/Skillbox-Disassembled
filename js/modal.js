var modal = $('.overlay')[0];
	callOrderBtn = $('.call-order');
	btnClose = $('.popup__close_btn')[0];
	sendBtb = $('.popup__send-btn');
	knowMoreBtn = $('.know-more-btn');

callOrderBtn.click(function(e){
	e.preventDefault();
	$('.overlay').css('display', 'inline-block'); //Включает модальное окно
	$('.blur').css('filter','blur(3px)'); //Включаем размытие фона
	$(document.body).css('overflow', 'hidden'); //Выключаем скролл для body
	$('.popup__form_more').hide(); //Скрывает форму в инпутом емайл
	$('.popup__form_call').show(); //Показывает форму без инпута емайл
  });


knowMoreBtn.click(function(e){
  	e.preventDefault();
	$('.overlay').css('display', 'inline-block'); //Включает модальное окно
	$('.blur').css('filter','blur(3px)'); //Включаем размытие фона
	$(document.body).css('overflow', 'hidden'); //Выключаем скролл для body
	$('.popup__form_more').show(); //Показывает форму в инпутом емайл
	$('.popup__form_call').hide(); //Скрывает форму без инпута емайл
  });


btnClose.onclick = function () {
	$('.overlay').css('display', 'none'); //Выключает модальное окно по нажатию на кнопку Х
	$('.blur').css('filter','blur(0)'); //Выключаем размытие фона
	$(document.body).css('overflow', 'visible'); //Включаем скролл для body
	$('.popup__input').val('');
	$('#name-error, #phone-error, #email-error').hide();
}

window.onclick = function (event) {
	if (event.target == modal) {
		$('.overlay').css('display', 'none'); //Выключает модальное окно по нажатию вне окна
		$('.blur').css('filter','blur(0)'); //Выключаем размытие фона
		$(document.body).css('overflow', 'visible'); //Включаем скролл для body
		$('.wrapper__popup_sended').hide(); //Скрывает окно сообщения отправки
		$('.popup__input').val('');
		$('#name-error, #phone-error, #email-error').hide();
	}
};


var btnCloseOk = $('.close-btn-ok')[0];

		btnCloseOk.onclick = function () {
			$('.overlay').css('display', 'none'); //Выключает модальное окно по нажатию вне окна
			$('.blur').css('filter','blur(0)'); //Выключаем размытие фона
			$(document.body).css('overflow', 'visible'); //Включаем скролл для body
			$('.wrapper__popup_sended').hide(); //Скрывает окно сообщения отправки
		};




//Добавляем правило в плагин validate используя плагин inputmask (взято отсюда https://ru.stackoverflow.com/questions/682481/%D0%92%D0%B0%D0%BB%D0%B8%D0%B4%D0%B0%D1%86%D0%B8%D1%8F-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B0-%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B5-%D1%81-%D0%BC%D0%B0%D1%81%D0%BA%D0%BE%D0%B9-%D1%84%D0%BE%D1%80%D0%BC%D1%8B)
jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
});

$('input[type="tel"]').inputmask({"mask": "+7(999)999-9999"}); 
//Конец правила





$('.popup__form_call').each(function() { //Валидация формы "Заказать звонок"
	$(this).validate({
		// errorPlacement(error, element) {
		// 	return true;
		// },
		focusInvalid: false,
		rules: {
			name: {
				required: true,
			},
			phone: {
				required: true,
				checkMask: true
			}
		},
		messages: {
			name: {
				required: 'Введите ваше имя'
			},
			phone: {
				required: 'Введите номер телефона',
				checkMask: "Введите полный номер телефона"
			},
		},
		submitHandler: function(form) {
			$('.wrapper__popup_sended').show(); //Показывает отрисовку, что форма отправлена
			$('.popup__input').val(''); //Очищает поля инпутов после отправки
		}
	})
});


$('.popup__form_more').each(function() { //Валидация формы с емайлом
	$(this).validate({
		// errorPlacement(error, element) {
		// 	},

		focusInvalid: false,
		rules: {
			name: {
				required: true
			},
			phone: {
				required: true,
				checkMask: true
			},
			email: {
				required: true,
				email: true
			}

		},
		messages: {
			name: {
				required: 'Введите ваше имя'
			},
			phone: {
				required: 'Введите номер телефона',
				checkMask: "Введите полный номер телефона"
			},
			email: {
				required: 'Введите Корректный Email'
			},
		},
		submitHandler: function(form) {
			$('.wrapper__popup_sended').show(); //Показывает отрисовку, что форма отправлена
			$('.popup__input').val(''); //Очищает поля инпутов после отправки
		}
	})
});

