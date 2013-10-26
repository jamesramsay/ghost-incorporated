/**
 * Main JS file for Incorporated behaviours
 */

/*globals jQuery, document */
// (function ($) {
//     "use strict";
// 
//     $(document).ready(function(){
// 
//         // On the home page, move the blog icon inside the header 
//         // for better relative/absolute positioning.
// 
//         //$("#blog-logo").prependTo("#site-head-content");
// 
//     });
// 
// }(jQuery));

$(window).scroll(function() {
    var scrollBottom = $(window).scrollTop() + $(window).height();

    if ($(window).scrollTop() > 100) {
        $('body').addClass('nav-hidden');
    }

    else {
        $('body').removeClass('nav-hidden');
    }
});

$(".full img").click(function() {
  $(".full img").toggleClass('zoom');
});