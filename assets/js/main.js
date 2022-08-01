'use strict';
$(document).ready(function(){


    AOS.init({
    startEvent:'load',
    useClassNames: true,
    initClassName: false,
    once:true,
    animatedClassName: 'animate__animated',
    });

    $('.menu-btn').click(function(){
        $(this).toggleClass('open');
        $('.menus').toggleClass('show');
    });

   $(window).on('scroll',function(){
        if($(this).scrollTop() > 20){
            $('.navbar').addClass('bg-change');
        }
        else{
            $('.navbar').removeClass('bg-change');
        }
   });  

   $('.exams img'). addClass('animate__animated animate__zoomIn');  


  $('.video-slider').slick({
  dots: false,
  arrows:true,
  infinite: true,
  autoplay:true,
  speed:800,
    initialSlide:0,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint:991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:765,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        dots:true
      }
    },
    {
      breakpoint:600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         arrows:false,
        dots:true
      }
    }
    
    ]
    });

    $('.news-slider').slick({
  dots: false,
  arrows:true,
  infinite: true,
  autoplay:true,
  speed:900,
  slidesToScroll: 1,  
  slidesToShow: 1,
  prevArrow:$('.side-arrow.slick-prev'),
  nextArrow:$('.side-arrow.slick-next'),

    });
   AOS.refresh();  
 });  