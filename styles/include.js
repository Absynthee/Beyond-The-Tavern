// include.js
import { prices } from './prices.js';

window.onload = function() {
    var notFound = []; // Initialize empty array
    var priceTypes = ["bust", "half", "full", "dndhalf", "dndfull", "dndparty"];

    for (var i = 0; i < priceTypes.length; i++) {
        var priceInput = document.querySelector(".price .price_" + (i+1) + "_input");
        if (priceInput) {
            priceInput.innerHTML = prices[priceTypes[i]] ? prices[priceTypes[i]].toFixed(2) : 'xx.xx';
        } else {
            notFound.push('price_' + (i+1) + '_input');
        }
    }

    // Log the notFound array to the console
    if (notFound.length > 0) {
        console.log('Elements with classes "' + notFound.join(', ') + '" not found');
    }
}


// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function($) {
  
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
      
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      
      // Unbind scroll handler if we have no animatables
      if ($animatables.length == 0) {
        $(window).off('scroll', doAnimations);
      }
      
      // Check all animatables and animate them if necessary
          $animatables.each(function(i) {
         var $animatable = $(this);
              if (($animatable.offset().top + $animatable.height() - 120) < offset) {
          $animatable.removeClass('animatable').addClass('animated');
              }
      });
  
      };
    
    // Hook doAnimations on scroll, and trigger a scroll
      $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  
  });

  // Get all elements with class 'articlelink'
var $articlesLink = $('.articlelink');

// Loop through all elements with class 'articlelink'
$articlesLink.not(':last').each(function() {
  // Insert <hr> after each element with class 'articlelink'
  $(this).after('<hr>');
});