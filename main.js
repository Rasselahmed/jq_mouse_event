$(document).ready(function () {

    $('.box1').click(function () {
        $(this).css('background', 'yellow').css('color', 'black');
    });


    $('.box2').dblclick(function () {
        $(this).css('background', 'salmon');
    });

    $('.box3').contextmenu(function () {
        $(this).css('background', 'green');
    });

    $('.box4').mouseenter(function () {
        $(this).css('background', 'skyblue');
    });

    $('.box5').mouseleave(function () {
        $(this).css('background', 'teal');
    });











});



