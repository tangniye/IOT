//$(function () {
//    //$("#brief").load("app/components/_brief.html");
//    //$("#lightspot").load("app/components/_lightspot.html");
//
//    $('.carousel__control').on('li#prev', "click", function (event) {
//        console.log(event)
//        prev();
//    });
//
//    //$('.carousel__control').on('li:last', 'click', function () {
//    //    next();
//    //});
//
//    var imgWidth = $('.carousel__indicators li').innerWidth(),
//        bannerSlider = $('.carousel__indicators'),
//        animating = false;
//    console.log(imgWidth)
//
//    //bannerSlider.style.left = -imgWidth + 'px';
//
//    function prev() {
//        debugger
//        if (!animating) {
//            //toggleBlockage();
//            animate(imgWidth);
//        }
//    }
//
//    function next() {
//        if (!animating) {
//            //toggleBlockage();
//            animate(-imgWidth);
//        }
//    }
//
//    function animate(offset) {
//        animating = true;
//        var newOffset = parseInt(bannerSlider.style.left || 0) + offset;
//        var time = 300;
//        var interval = 10;
//        var speed = offset / (time / interval);
//
//        function go() {
//            if ((speed < 0 && parseInt(bannerSlider.style.left) > newOffset) || (speed > 0 && parseInt(bannerSlider.style.left) < newOffset)) {
//                bannerSlider.style.left = parseInt(bannerSlider.style.left) + speed + 'px';
//
//                setTimeout(go, interval);
//
//            } else {
//                animating = false;
//                bannerSlider.style.left = newOffset + 'px';
//
//                if (newOffset > -imgWidth) {
//                    bannerSlider.style.left = -3 * imgWidth + 'px';
//                }
//                if (newOffset < -3 * imgWidth) {
//                    bannerSlider.style.left = -imgWidth + 'px';
//                }
//            }
//        }
//
//        go();
//
//    }
//});
