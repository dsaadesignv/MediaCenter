$(document).ready(function() {
  // menu hamburger
  $('.h-menu').on('click',function(){
    $(this).toggleClass('glyphicon-menu-hamburger').toggleClass('glyphicon-remove');
    $('section')
      .toggleClass('slideLeft')
  });

  // mouseover/mouseout
  $('.keyframes-div')
    .on('mouseover',function(){
      console.log('hover');
      $(this).removeClass('animation-out').addClass('animation-on');
    })
    .on('mouseout',function(){
      $(this).removeClass('animation-on').addClass('animation-out');
    });
});
