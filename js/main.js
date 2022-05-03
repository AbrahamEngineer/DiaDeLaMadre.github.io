$(document).ready(function () {
    $('.itemBox').filter('.mensajes').show('2000');
    $('.itemBox').filter('.imagenes').hide('2000');
    $('.itemBox').filter('.canciones').hide('2000');

    $('.list').click(function (e) {
        const value = $(this).attr('data-filter');
        $('.itemBox').not('.' + value).hide('2000');
        $('.itemBox').filter('.' + value).show('2000');

    });


    $('.list').click(function (e) {
        $(this).addClass('active').siblings().removeClass('active');
    });
});