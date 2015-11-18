$(window).scroll(function(){

  // Scroll & Window variables
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var headerHeight = $('header').height();
  var fadeProgress = 1 - (scrollTop / (.5 * windowHeight));    // Opacity: 0; after scroll down 50% of viewport height
  var slideProgress = 1 - (windowHeight * (scrollTop / windowHeight));  // Return desired percentage of distance scrolled

  // negative scrolling zero
  if (scrollTop < 0) scrollTop = 0;

  // var pct = scrollTop / windowHeight;
  // if(pct > 1) pct = 1;

  if (slideProgress > 1) slideProgress = 1;

  // Fade & offset position during scroll event (via xProgress variables)
  $('section > .wrap').css('opacity', fadeProgress);
  $('section > .wrap').css('transform', 'translateY(' +  -0.4 * slideProgress + 'px)');