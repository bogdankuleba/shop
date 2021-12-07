let header = document.querySelector('.header');



window.addEventListener('scroll', function(){
  let scrollPos = window.scrollY;
  if(scrollPos > 160){
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

$(function(){
  let nav = $('#nav');
      let navToggle = $('#navToggle');
   
  $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');

        $("html, body").animate({
            scrollTop: elementOffset - 160
        }, 1500);

       
    });


  /*navTaggle*/
      

      navToggle.on('click', function(event){
      event.preventDefault();

      nav.toggleClass('show');
  });


});


