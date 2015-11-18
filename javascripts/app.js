$(window).scroll(function(){

  var scrollTop = $(window).scrollTop();

  if(scrollTop >= 308){
    $('#logo').css('width', '2.5rem')
              .css('height', '2.5rem')
              .css('fill', '#74A7FF')
              .css('transform', 'rotate(-90deg)');
  }
  else{
    $('#logo').css('width', '5rem')
              .css('height', '5rem')
              .css('fill', '#fff')
              .css('transform', 'rotate(0deg)');
  }

});


$('#logo').mouseenter(function(){
    $('#logo').css('width', '5rem')
              .css('height', '5rem')
              .css('fill', '#fff')
              .css('transform', 'rotate(0deg)');
});

$('#logo').mouseleave(function(){
    $('#logo').css('width', '2.5rem')
              .css('height', '2.5rem')
              .css('fill', '#74A7FF')
              .css('transform', 'rotate(-90deg)');
});

