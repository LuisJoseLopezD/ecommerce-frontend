// first slider

$(".slider-1")

.not(".slick-initalized")

.slick({
    autoplay:true,
    autoplaySpeed: 3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});


// second slider

$(".slider-2") 

    .not(".slick-initalized")

    .slick({
        prevArrow: ".site-slider-2 .prev",
        nextArrow: ".site-slider-2 .next",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
    });

