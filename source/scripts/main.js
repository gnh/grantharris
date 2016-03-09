 //= require jquery

// $(window).scroll(function(){

//   var scrollTop = $(window).scrollTop();

//   if(scrollTop >= 366){
//     $('#logo').css('width', '2.5rem').css('height', '2.5rem').css('fill', '#74A7FF');

//     $('#logo').mouseenter(function(){
//       $('#logo').css('width', '5rem').css('height', '5rem').css('fill', '#fff');
//     });

//     $('#logo').mouseleave(function(){
//         $('#logo').css('width', '2.5rem').css('height', '2.5rem').css('fill', '#74A7FF');
//     });
//   }
  
//   else{
//     $('#logo').css('width', '5rem').css('height', '5rem').css('fill', '#fff');

//     $('#logo').unbind('mouseenter');

//     $('#logo').unbind('mouseleave');
//   }

// });

$(window).scroll(function(){

  // Scroll & Window variables
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var fadeProgress = 1 - (scrollTop / (0.7 * windowHeight));    // Opacity: 0; after scroll down 50% of viewport height
  var slideProgress = 1 - (windowHeight * (scrollTop / windowHeight));  // Return desired percentage of distance scrolled

  // negative scrolling zero
  if (scrollTop < 0) scrollTop = 0;

  // var pct = scrollTop / windowHeight;
  // if(pct > 1) pct = 1;

  if (slideProgress > 1) slideProgress = 1;

  // Fade & offset position during scroll event (via xProgress variables)
  $('header > .kanye__ego > h3').css('opacity', fadeProgress);
  $('header > .kanye__ego > h1').css('opacity', fadeProgress);

  $('header > .kanye__ego > h3').css('transform', 'translateY(' +  -0.6 * slideProgress + 'px)');
  $('header > .kanye__ego > h1').css('transform', 'translateY(' +  -0.4 * slideProgress + 'px)');

});

