$(document).ready(function() {

// Показать или скрыть пароль
$('.form__input-icon--password').click( function(){
  var type = $('.form__input--password').attr('type') == 'text' ? 'password' : 'text';
  $('.form__input--password').attr('type', type);
    if ($(this).hasClass('form__passwrod--hide')) {
        $(this).removeClass('form__passwrod--hide');
        $(this).addClass('form__passwrod--show'); 
      } else {
        $(this).addClass('form__passwrod--hide');
        $(this).removeClass('form__passwrod--show');
       
      }
  });
  // Покаазать подсказку поля ввода
  $('.form__input').focus(function(){
    $(this).closest('.form__input-container')
    .find('.form__help-text')
    .show(200);
  })

  //Скрыть подсказку поля ввода 
  //Сделать текста placeholder снова крупным, если поле пустое
  $('.form__input').blur(function(){
    $(this).closest('.form__input-container')
    .find('.form__help-text')
    .hide(200);
    if($(this).val() == ''){ 
        $(this).closest('.form__input-container')
        .find('.form__placeholder')
        .removeClass('form__placeholder--small');
    } else {
        $(this).closest('.form__input-container')
        .find('.form__placeholder')
        .addClass('form__placeholder--small');
    }
});
});