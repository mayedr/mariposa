$(document).ready(function() {
    $('#butterfly').on('click', function() {
        var newX = Math.random() * ($(window).width() - $(this).width());
        var newY = Math.random() * ($(window).height() - $(this).height());
        $(this).css({ 'transform': 'translate(' + newX + 'px, ' + newY + 'px)' });
    });
});
