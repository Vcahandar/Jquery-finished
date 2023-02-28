$(function() {

    let img = $('.slider-img');
  
    $('.prev').on('click', function() {
  
        img.animate({left: '0%'}, 300, function(){
  
            img.css('left', '-100%');
  
        $('.slide').first().before($('.slide').last());
  
      });
  
  
    });
  
  
  
    $('.next').on('click', function() {
  
        img.animate({left: '-200%'}, 300, function(){
  
            img.css('left', '-100%');
  
        $('.slide').last().after($('.slide').first());
  
      });
  
  
    });
  
  
  })
  