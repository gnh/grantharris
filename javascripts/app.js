$(window).scroll(function(){

  var scrollTop = $(window).scrollTop();

  if(scrollTop >= 308){
    $('#logo').css('width', '2.5rem')
              .css('height', '2.5rem')
              .css('fill', '#d2d3e3');
  }
  else{
    $('#logo').css('width', '5rem')
              .css('height', '5rem')
              .css('fill', '#24252B');
  }

});

