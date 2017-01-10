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

        $('.btn-price').each(function () {
            var text = $('.btn-price').text();
            $('.btn-price').text(text + ' Р.');
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


    }); //end ready

}(jQuery));
