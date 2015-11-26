//= require jquery

$(window).scroll(function(){

  var scrollTop = $(window).scrollTop();

  if(scrollTop >= 366){
    $('#logo').css('width', '2.5rem').css('height', '2.5rem').css('fill', '#74A7FF');

    $('#logo').mouseenter(function(){
      $('#logo').css('width', '5rem').css('height', '5rem').css('fill', '#fff');
    });

    $('#logo').mouseleave(function(){
        $('#logo').css('width', '2.5rem').css('height', '2.5rem').css('fill', '#74A7FF');
    });
  }
  
  else{
    $('#logo').css('width', '5rem').css('height', '5rem').css('fill', '#fff');

    $('#logo').unbind('mouseenter');

    $('#logo').unbind('mouseleave');
  }

});

