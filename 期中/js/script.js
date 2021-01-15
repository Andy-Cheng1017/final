$(document).ready(function () {

    $(".nav-list-item").hover(function () { //When trigger is hovered...
        $(this).children(".nav-member").slideDown('fast');
    }, function () {
        $(this).children(".nav-member").slideUp('fast');
    });

});