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
    //////////NEWS
    $('.news__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        asNavFor: '.news__nav', 
      });
      $('.tabProduct__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.tabProduct__list',
        // centerMode: true,
        focusOnSelect: true,
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>') ,
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
                },
        ],
      });


})

