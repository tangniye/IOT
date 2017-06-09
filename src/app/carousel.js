(function ($) {
    $(function () {
        var jcarousel = $('.jcarousel');

        jcarousel.on('jcarousel:reload jcarousel:create', function () {
                    var carousel = $(this),
                            width = carousel.innerWidth();
                    width = width / 4;

                    carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
                })
                .jcarousel({
                    wrap: 'circular'
                });

        $('.jcarousel-control-prev')
                .jcarouselControl({
                    target: '-=1'
                });

        $('.jcarousel-control-next')
                .jcarouselControl({
                    target: '+=1'
                });
        
    });
})(jQuery);
