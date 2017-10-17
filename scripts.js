const runTabs = (e) => {
    let currentTab = $(e.target).attr('data-id');

    $('.tabs li').removeClass('is-active');
    $('.plus').text('+');
    $('.content-container').addClass('is-hidden');
    $(e.target).addClass('is-active');
    $(e.target).find('.plus').text('-')
    $("#" + currentTab).removeClass('is-hidden');
}

$('.tabs li').on('click', (e) => {runTabs(e)})