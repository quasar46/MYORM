$(function () {
    $('a[href^="#"]').on('click', function (evt) {
        evt.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({ scrollTop: dn }, 1000);
    });
});

$(document).ready(function () {
    $('.main-header__burger').click(function (event) {
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
    })
})

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('.main-menu').removeClass('active');
        $('.main-header__burger').removeClass('active');
    }
})


// $('.wrapper-options').slick({
//     slidesToShow: 1,
// })