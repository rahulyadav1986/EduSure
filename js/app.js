
$('.mobile_menu').slicknav({
    label: '',
    prependTo: 'header .main_header .container',
    closedSymbol: '+',
    openedSymbol: '-',
    allowParentLinks:"true",
});

/* On Scroll Js */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    var header= document.getElementById("header");
    header.classList.add('active');
  } else {
    var header= document.getElementById("header");
    header.classList.remove('active');
  }
}
/* On Scroll Js */



var owl = $('#course-slider');
owl.owlCarousel({
     loop: false,
     dots: false,
     nav:true,
     navText: [
         ("<img src='images/ar1.png' />"),
         ("<img src='images/ar2.png' />")
     ],
     autoplay:true,
     center:false,
     margin: 22,
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 2,
         },
         1000:{
             items: 3
         }
     }
 });

 var owl = $('#video-slider');
owl.owlCarousel({
     loop: false,
     dots: false,
     nav:true,
     navText: [
         ("<img src='images/ar1.png' />"),
         ("<img src='images/ar2.png' />")
     ],
     autoplay:true,
     center:true,
     margin: 40,
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 2,
         },
         1000:{
             items: 3
         }
     }
 });

 var owl = $('#review-slider');
 owl.owlCarousel({
      loop: true,
      dots: false,
      nav:true,
      navText: [
          ("<img src='images/ar1.png' />"),
          ("<img src='images/ar2.png' />")
      ],
      autoplay:false,
      center:true,
      margin: 0,
      responsive:{
          0:{
              items: 1,
              margin: 0,
          },
          600:{
              items: 1,
          },
          1000:{
              items: 3
          }
      }
  });

 var swiper = new Swiper('#coverflow-slider', {
  effect: 'coverflow',
  // init: false,
  hashNavigation: {
    watchState: true,
    replaceState: true,
  },
    navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  initialSlide:1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 48,
    modifier: 5,    
    slideShadows : true,
  },
  
  
});


/*Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
      display: [
        { id: "prev", position: "center" },
        { id: "counter", position: "center" },
        { id: "next", position: "center" },
        "zoom",
        "slideshow",
        "fullscreen",
        "download",
        "thumbs",
        "close",
      ],
    },
  });*/



