var TIMEOUT = 6000;


var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {

  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);


  if (currentIndex >= radiosLength - 1) {

    $radios
      .first()
      .attr('checked', true);

  } else {

    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);

  }

}




var scrollLink = $('.page-scroll');
// Active link switching
$(window).scroll(function() {
var scrollbarLocation = $(this).scrollTop();

scrollLink.each(function() {

  var sectionOffset = $(this.hash).offset().top - 73;

  if ( sectionOffset <= scrollbarLocation ) {
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  }
});
});

//===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //nav
    $(document).ready(function () {
      $nav = $('.navigation-left');
      $toggleCollapse = $('.toggle-collapse');
  
      /** click event on toggle menu */
      $toggleCollapse.click( ()=> {   
          $nav.toggleClass('collapse');
      })
  });