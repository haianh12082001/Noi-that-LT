$(document).ready(function(){
    $(".feedback__container").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true ,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
    
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>') ,
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
    });
})