$('.nav-item').on('click', (e) => {
    $('.nav-item').removeClass('is-active');
    $('.plus').text('+');
    $('.content-container').addClass('is-hidden');
    $(e.target).addClass('is-active');
    $(e.target).find('.plus').text('-')
    $("#" + $(e.target).attr('data-id')).removeClass('is-hidden');
});

$('.nav-title').on('click', () => {
    if ( $('.mobile-navs').css('display') === 'none' ) {
        $('.mobile-navs').css('display', 'flex')
    } else {
        $('.mobile-navs').css('display', 'none')  
    }
});

$(window).on('resize', () => {
    if ( $(window).width() > 720) {
        $('.mobile-navs').css('display', 'none')        
    }
});