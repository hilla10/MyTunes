$(function () {
    var menu = $('nav ul');

    $('#open').on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(this).width();
        if (w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function (e) {
        var w = $(window).width();
        if (w < 480) {
            menu.slideToggle();
        }
    });

    // Adjust menu height
    $('.open-menu').height($(window).height());
});