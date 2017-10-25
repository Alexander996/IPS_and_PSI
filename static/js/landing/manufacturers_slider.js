var $manufacturers_slidewrapper = $('.manufacturers_slidewrapper');
var $manufacturers_viewport = $('.manufacturers_viewport');

var manufacturers_translateWidth = 0;
var manufacturers_slideNow = 1;
var manufacturers_slideCount = $manufacturers_slidewrapper.children().length;

function manufacturers_nextSlide() {
    if (manufacturers_slideNow < manufacturers_slideCount && manufacturers_slideNow > 0) {
        manufacturers_translateWidth = -$manufacturers_viewport.width() * manufacturers_slideNow;
        $manufacturers_slidewrapper.css({
            'transform': 'translate(' + manufacturers_translateWidth + 'px, 0)'
        });
        manufacturers_slideNow++;
    }
}

function manufacturers_prevSlide() {
    if (manufacturers_slideNow <= manufacturers_slideCount && manufacturers_slideNow > 1) {
        manufacturers_translateWidth = -$manufacturers_viewport.width() * (manufacturers_slideNow - 2);
        $manufacturers_slidewrapper.css({
            'transform': 'translate(' + manufacturers_translateWidth + 'px, 0)'
        });
        manufacturers_slideNow--;
    }
}

$(document).ready(function () {
    $('.arrow_next img').click(function(event) {
        manufacturers_nextSlide();
    });

    $('.arrow_prev img').click(function(event) {
        manufacturers_prevSlide();
    });
});