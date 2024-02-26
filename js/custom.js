$(function () {

    $('.counter').counterUp({
        delay: 20,
        time: 1000
    });
});

$('.test_slide').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    dots: false,
    nav: true,
    navText: ['<i class="fa-solid fa-long-arrow-left arrow_left"></i>', '<i class="fa-solid fa-long-arrow-right arrow_right"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 1,

        },
        1000: {
            items: 1,

        },
        1200: {
            items: 1,

        }
    }
});
