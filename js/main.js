$('.header_lang_active').click(function() {
    $('.header_lang_select').toggle();
    $('.header_lang_active svg').toggleClass('img_rotate');
})

$('#hw-slide-msg-close').click(function() {
    $('.nav-toggle-wrap').addClass('mt0');
})


function sayHi() {
    $('.header_lang_select a').attr('target', '_self');
}

setTimeout(sayHi, 1000);