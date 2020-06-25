var isYou = false;
let orientation = 'horizontal';
var leftNewWord;
var topNewWord;
var letters = [];
var flip = false;
function removeClass(el){
    $(el).removeClass('anim');
}
function addWord(){

    if(!$(this).parent().hasClass('anim')){
        var leftNewWord;
        var topNewWord;
        if(orientation == 'horizontal'){
            orientation =       'vertical';
            leftNewWord =        $(this).offset().left ;
            topNewWord  =        $(this).offset().top  + $(this).outerHeight(true);
        }else{
            orientation =    'horizontal';
            leftNewWord =    $(this).offset().left  + $(this).outerWidth(true)
            if(4*$("body").innerWidth()/5 <= $(this).offset().left  + $(this).outerWidth(true)){
                flip = true;
            }
            if($("body").innerWidth()/5 >= $(this).offset().left  + $(this).outerWidth(true)){
                flip = false;
            }
            topNewWord  =    $(this).offset().top;
        }

        if(isYou){
            newWord = $('.fck').clone(true).css({
                'top' : topNewWord+'px',
                'left': leftNewWord+'px',
            }).removeClass('vertical').removeClass('fck').addClass(orientation).appendTo('.main');
            setTimeout(function () {
                if(flip){
                    $(newWord.addClass('flip'));
                }
                $(newWord).removeClass('hidden');
                $(newWord).addClass('anim');
                setTimeout(removeClass, 300 , newWord);
                
            }, 20);
			isYou = false;																		
            
        }else{
            newWord = $('.you').clone(true).css({
                'top' : topNewWord+'px',
                'left': leftNewWord+'px',
            }).removeClass('vertical').removeClass('you').addClass(orientation).appendTo('.main');
            setTimeout(function () {
                $(newWord).removeClass('hidden');
                $(newWord).addClass('anim');
                setTimeout(removeClass, 300 , newWord);
                $('body , html').animate({
                    scrollTop : $(newWord).offset().top
                } , 700);
            }, 20);
            isYou = true;
        }
						
        
    }
}
$(document).ready(function(){
    $('.letter').on('click' , addWord);
});