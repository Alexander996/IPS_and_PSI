var $slidewrapper = $('.manufacturers_slidewrapper');
var $viewport = $('.manufacturers_viewport');

var translateWidth = 0;
var slideNow = 1;
var slideCount = $slidewrapper.children().length;

function nextSlide() {
    if (slideNow < slideCount && slideNow > 0) {
        translateWidth = -$viewport.width() * slideNow;
        $slidewrapper.css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow <= slideCount && slideNow > 1) {
        translateWidth = -$viewport.width() * (slideNow - 2);
        $slidewrapper.css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow--;
    }
}

$(document).ready(function () {
    $('.arrow_next img').click(function(event) {
        nextSlide();
    });

    $('.arrow_prev img').click(function(event) {
        prevSlide();
    });
});