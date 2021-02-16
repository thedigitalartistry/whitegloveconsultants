$(document).ready(function() {
    // Code Here
      $('#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });

    $('.card-flip').click(function(){
    $(this).children().toggleClass('bar');
      
  });
});
$('.navbar-nav li a').on('click', function(){
  $('#nav-icon4').click();
});

// Animation on scroll
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  toggleActions: "restart none none none"
});

$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 86){
    $("#banner").addClass("shrink");
  }
  else
  {
    $("#banner").removeClass("shrink");
  }
});



  gsap.from(".hero-grid-item-1", {duration: 2, y: 100, scale: 0.5});
  gsap.from(".hero-grid-item-3", {duration: 2, y: 100, scale: 0.5});
  gsap.from(".hero-grid-item-2", {duration: 2, x: 300, scale: 0.5});

  gsap.from(".card-story", {
    scrollTrigger: ".card-story", 
    duration: 1.5,
    y:150,
    stagger:0.25,
    rotation:0,
    opacity:0
  });


  

  gsap.from(".popup-btn-wrap", 
  {
    scrollTrigger: {
      trigger:".popup-btn-wrap"
    },
    rotation: 0, 
    x: -100,
    duration: 2
  });

  gsap.from(".consult-img", 
  { 
    scrollTrigger: {
      trigger:".consult-img",
      start: "top center"
    },
    duration: 1,
    ease: "back", 
    y:-100,
    opacity: 0
  });

  gsap.from(".section-seprator-1", {
    scrollTrigger: {
      trigger:".section-seprator-1"
    }, 
    duration: 2,
    scaleX:0.65, 
    scaleY:0.65,
    opacity:0,
    rotation:0
  });
  gsap.from(".section-seprator-2", {
    scrollTrigger: {
      trigger:".section-seprator-2 "
    }, 
    duration: 2,
    scaleX:0.65, 
    scaleY:0.65,
    opacity:0,
    rotation:0
  });
  gsap.from(".section-seprator-3", {
    scrollTrigger: {
      trigger:".section-seprator-3 "
    }, 
    duration: 2,
    scaleX:0.65, 
    scaleY:0.65,
    opacity:0,
    rotation:0
  });


  $(document).ready(function () {
    //save boolean
    var pause = false;
    //save items that with number
    var item=  $('.select-item');
    //save blocks
    var block=  $('.bg-block');
    //variable for counter
    var k =0;
    
    
     //interval function works only when pause is false
      setInterval(function () {
          if (!pause) {
              var $this = item.eq(k);
            
            if (item.hasClass('active'))  {
              item.removeClass('active');
            };
             block.removeClass('active').eq(k).addClass('active');
              $this.addClass('active');
            //increase k every 1.5 sec
              k++;
            //if k more then number of blocks on page
              if (k >= block.length ) {
                //rewrite variable to start over
                  k = 0;
              }
          }
        //every 1.5 sec
      }, 800);
  
  
    item.hover(function () {
      //remove active class from all except this
          $(this).siblings().removeClass("active");
         $(this).addClass('active');
        //remove active class from all
        block.removeClass('active');
      //add active class to block item which is accounted as index cliked item
        block.eq($(this).index()).addClass('active');
      //on hover stop interval function
          pause = true;
      }, function () {
      
      //when hover event ends, start interval function
          pause = false;
      });
  
  });


  ScrollTrigger.matchMedia({
  
    // desktop
    "(min-width: 768px)": function() {
      // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
      // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
      gsap.from(".vedio-embed",{
        scrollTrigger: {
          trigger:".vedio-embed",
          start: "top center"
        },
        duration: 1.5,
        y:-300,
        rotation:0
      });
    }
    
  });

  ScrollTrigger.matchMedia({
  "(min-width: 768px)": function() {
  gsap.from(".hero-content", {
    scrollTrigger: {
      trigger:".hero-content",
      start: "top center"
    },
    x: 500,
    duration: 2,
    opacity: 0
  });
}   
});

