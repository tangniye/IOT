$(document).ready(function () {
    $('#prev').on("click", function (event) {
        prev();
    });

    $('#next').on('click', function () {
        next();
    });

    var imgWidth = $('.carousel__indicators li').innerWidth(),
        bannerSlider = $('.carousel__indicators'),
        animating = false;
    console.log(imgWidth)

    //bannerSlider.style.left = -imgWidth + 'px';

    function prev() {
        if (!animating) {
            //toggleBlockage();
            animate(imgWidth);
        }
    }

    function next() {
        if (!animating) {
            //toggleBlockage();
            animate(-imgWidth);
        }
    }

    //vm.goto = function (nowIndex) {
    //    if (nowIndex == index) {
    //        return;
    //    }
    //    if (!animating) {
    //        var offset = -imgWidth * (nowIndex - index);
    //        animate(offset);
    //
    //        index = nowIndex;
    //        toggleBlockage();
    //    }
    //};

    //function autoAnimate() {
    //    next();
    //    timer = $timeout(function () {
    //        vm.autoAnimate()
    //    }, 3000)
    //};

    //vm.stopAutoAnimate = function () {
    //    timer && $timeout.cancel(timer);
    //};

    function animate(offset) {
        debugger
        animating = true;
        var newOffset = bannerSlider.offset().left || 0 + offset;
        var speed = 300;
        //var interval = 10;
        //var speed = offset / (time / interval);

        function go() {
            bannerSlider.animate({left: offset + 'px'}, speed);

            //if ((speed < 0 && bannerSlider.offset().left > newOffset) || (speed > 0 && bannerSlider.offset().left < newOffset)) {
            //    //bannerSlider.scrollLeft(bannerSlider.scrollLeft() + speed);
            //    bannerSlider.animate({left: offset + 'px'}, speed);
            //    setTimeout(go, interval);
            //
            //} else {
            //    animating = false;
            //    bannerSlider.animate({left: newOffset + 'px'}, speed);
            //
            //    if (newOffset > -imgWidth) {
            //        bannerSlider.animate({left: -7 * imgWidth + 'px'}, speed);
            //    }
            //    if (newOffset < -7 * imgWidth) {
            //        bannerSlider.animate({left: -imgWidth + 'px'}, speed);
            //    }
            //}
        }

        go();

    }

    //function toggleBlockage() {
    //    for (var i = 0; i < blockages.length; i++) {
    //        if (blockages[i].classList.contains('active')) {
    //            blockages[i].classList.remove('active');
    //            break;
    //        }
    //    }
    //    blockages[index - 1].classList.add('active');
    //}
});