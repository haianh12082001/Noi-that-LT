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
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    arrows: false ,
                }
              },
            ]
    });
    //////////NEWS
    $('.news__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        asNavFor: '.nav__list', 
      });
      $('.nav__list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.news__list',
        // centerMode: true,
        focusOnSelect: true,
       
       
      });


})

