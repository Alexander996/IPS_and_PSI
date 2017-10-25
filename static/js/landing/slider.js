var $slidewrapper = $('.slidewrapper');
var $viewport = $('.viewport');

var translateWidth = 0;
var slideNow = 1;
var slideCount = $slidewrapper.children().length;

var navBtnId = 0;

var slideInterval = 5000;

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $slidewrapper.css('transform', 'translate(0, 0');
        slideNow = 1;
    } else {
        translateWidth = -$viewport.width() * slideNow;
        $slidewrapper.css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$viewport.width() * (slideCount - 1);
        $slidewrapper.css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$viewport.width() * (slideNow - 2);
        $slidewrapper.css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow--;
    }
}

function btn_color() {
    var $btn = $('.nav_btns li');
    $btn.css('background-color', 'white');
    $btn.eq(slideNow - 1).css('background-color', 'rgb(27, 29, 53)');
}

$(document).ready(function () {
    var switchInterval = setInterval(function() {
        nextSlide();
        btn_color();
    }, slideInterval);

    $viewport.hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(function() {
            nextSlide();
            btn_color();
        }, slideInterval);
    });

    $('.next_slide').click(function() {
        nextSlide();
        btn_color();
    });

    $('.prev_slide').click(function() {
        prevSlide();
        btn_color();
    });

    $('.nav_btns li').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$viewport.width() * navBtnId;
            $slidewrapper.css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow = navBtnId + 1;
            btn_color();
        }
    });
});