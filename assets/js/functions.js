(function ($) {
    'use strict';

    $(document).ready(function () {

        $('a').click(function () {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        });

        $(".close-modal").click(function () {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
            $(".write-us-form").fadeOut(500);
            $('body').css('padding-right', '0');
            $('body').css('overflow', 'visible');
        });

        $(".address a").click(function () {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
            $(".write-us-form").fadeIn(500);
            $('body').css('overflow', 'hidden');
        });

        $('.btn-price').each(function () {
            var text = '';
            text = $(this).text();
            if (text.indexOf("Р.") <= 0) {
                $(this).text(text + ' Р.');
            }
        });

        $('.item').mouseenter(function () {
            $(this).children('.overlay').fadeIn(300);
        });
        $('.item').mouseleave(function () {
            $(this).children('.overlay').fadeOut(300);
        });

    }); //end ready

}(jQuery));
