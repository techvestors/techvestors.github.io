var content = 'A team of highly enthusiastic and passionate techies who are working together to innovate and develop technologies to invest in companies which has the potential to achieve new heights.';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo($("#para1")).each(function (i) {
    $(this).delay(50 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});

