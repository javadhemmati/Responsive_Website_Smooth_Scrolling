
// JavaScript
window.sr = ScrollReveal(); 

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px' 
// });


$(function(){
    menu = $('nav ul');

    $('#toggle-btn').on('click', function(e){
        e.preventDefault();
        menu.slideToggle();
    })
    
    $(window).resize(function () { 
        var w = $(this).width();
        if(w > 580 && menu.is(':hidden')){
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function (e) {
        var w = $(window).width();
        if(w < 580){
            menu.slideToggle();
        }
    });
    
    $('.open-menu').height($(window).height());
})