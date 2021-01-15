$(document).ready(function () {

    $(".nav-list-item").hover(function () { //When trigger is hovered...
        $(this).children(".nav-member").slideDown('fast');
    }, function () {
        $(this).children(".nav-member").slideUp('fast');
    });
    // when a hanburger menu is clicked
    let $ul = $(".nav__list"),
        $menu = $(".nav__menu");

    $($menu).click(function () {
        // toggle menu-click Class
        $ul.toggleClass("menu-click");
    }); // end click event handler
});