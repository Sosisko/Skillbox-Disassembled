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
	$('label').css('display', 'none'); //Убирает lable при закрытии на крестик
	$('.popup__input').removeClass('error'); //Убирает класс error при закрытии на крестик
	$('.popup__input').val(''); //Очищает поля вводов при закрытии на крестик
};

window.onclick = function (event) {
	if (event.target == modal) {
		$('.overlay').css('display', 'none'); //Выключает модальное окно по нажатию вне окна
		$('.blur').css('filter','blur(0)'); //Выключаем размытие фона
		$(document.body).css('overflow', 'visible'); //Включаем скролл для body
		$('.wrapper__popup_sended').hide(); //Скрывает окно сообщения отправки
		$('label').css('display', 'none'); //Убирает lable по нажатию вне окна
		$('.popup__input').removeClass('error'); //Убирает класс error по нажатию вне окна
		$('.popup__input').val(''); //Очищает поля вводов по нажатию вне окна
	}
};


var btnCloseOk = $('.close-btn-ok')[0];

		btnCloseOk.onclick = function () {
			$('.overlay').css('display', 'none'); //Выключает модальное окно по нажатию вне окна
			$('.blur').css('filter','blur(0)'); //Выключаем размытие фона
			$(document.body).css('overflow', 'visible'); //Включаем скролл для body
			$('.wrapper__popup_sended').hide(); //Скрывает окно сообщения отправки
		};


jQuery.validator.addMethod("checkMask", function(e, o) {
			return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(e)
		});

$('input[type="tel"]').inputmask({mask: "+7(999)999-9999"});

$(".popup__form_call").each(function() {
    $(this).validate({
        focusInvalid: !1,
        rules: {
            name: {
                required: !0
            },
            phone: {
                required: !0,
                checkMask: !0
            }
        },
        messages: {
            name: {
                required: "Введите ваше имя"
            },
            phone: {
                required: "Введите номер телефона",
                checkMask: "Введите полный номер телефона"
            }
        },
        submitHandler: function(e) {
            $(".wrapper__popup_sended").show(),
            $(".popup__input").val("")
        }
    })
});
$(".popup__form_more").each(function() {
    $(this).validate({
        focusInvalid: !1,
        rules: {
            name: {
                required: !0
            },
            phone: {
                required: !0,
                checkMask: !0
            },
            email: {
                required: !0,
                email: !0
            }
        },
        messages: {
            name: {
                required: "Введите ваше имя"
            },
            phone: {
                required: "Введите номер телефона",
                checkMask: "Введите полный номер телефона"
            },
            email: {
                required: "Введите Корректный Email"
            }
        },
        submitHandler: function(e) {
            $(".wrapper__popup_sended").show(),
            $(".popup__input").val("")
        }
    })
});
