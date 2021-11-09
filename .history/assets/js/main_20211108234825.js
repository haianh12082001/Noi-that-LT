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
                breakpoint: 576,
                settings: {
                  
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
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
      //////////// MENU MOBI
      $(".nav__bar").click(function(){
        $('.header__menu').toggleClass('active');
        $('.nav__bar').toggleClass('active');
        $('.opacity__menu').toggleClass('open__opacity');
     
      })
      $('.opacity__menu').click(function(){
        $('.header__menu').toggleClass('active');
        $('.nav__bar').toggleClass('active');
        $('.opacity__menu').toggleClass('open__opacity');
      })
      /// SHOW OPEN
      $(".header__item").click(function(){
        $(this).toggleClass('active')
      })
      /// SHOW APPENDIX
      $(".appendix__toggle").click(function(){
        $('.fas.fa-list-ol').toggleClass('fas fa-angle-up')
      })
    $(".my-rating-4").starRating({
      totalStars: 5,
      starShape: 'rounded',
      starSize: 40,
      emptyColor: 'lightgray',
      hoverColor: 'salmon',
      activeColor: 'crimson',
      useGradient: false
    });
    $(".my-rating").starRating({
      // initialRating: 4,
      strokeColor: '#894A00',
      strokeWidth: 10,
      starSize: 25,
      
      // activeColor:"yellow"
 

    });
   
})
  //// SHOW__OPEN
//   const headerLinks = document.querySelectorAll('.header__link')
//   const headerItems = document.querySelectorAll('.header__item')
//   headerLinks.forEach(function(link, index) {
//     link.addEventListener('click', function() {
//         headerItem = headerItems[index]
//         headerItem.classList.toggle('active')
//     })
// })

