
$(window).on('load' , function(){
    setTimeout(function(){
        if(!$('.preloader').hasClass('done')){
            $('.preloader').addClass('done');
            $('.preloader').fadeOut();
        }
    }, 1000);
});

