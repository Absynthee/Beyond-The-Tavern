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

// FORM

// const form = document.getElementById('contact');
// const result = document.getElementById('result');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const object = Object.fromEntries(formData);
//   const json = JSON.stringify(object);
//   result.innerHTML = "Please wait..."

//     fetch('https://api.web3forms.com/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: json
//         })
//         .then(async (response) => {
//             let json = await response.json();
//             if (response.status == 200) {
//                 result.innerHTML = "Form submitted successfully";
//             } else {
//                 console.log(response);
//                 result.innerHTML = json.message;
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             result.innerHTML = "Something went wrong!";
//         })
//         .then(function() {
//             form.reset();
//             setTimeout(() => {
//                 result.style.display = "none";
//             }, 3000);
//         });
// });

// document.addEventListener('DOMContentLoaded', function() {
//   console.log('Script is running');
//   document.getElementById('contact').addEventListener('submit', function(event) {
//       console.log('Form submit event triggered');
//       event.preventDefault(); // Prevent form submission for testing

//       // Validation logic
//       let isValid = true;

//       // Name validation
//       const name = document.getElementById('name').value;
//       if (!name) {
//           document.getElementById('name-invalid').style.display = 'block';
//           isValid = false;
//           console.log('Name is invalid')
//       } else {
//           document.getElementById('name-invalid').style.display = 'none';
//       }

//       // Email validation
//       const email = document.getElementById('email').value;
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!email || !emailPattern.test(email)) {
//           document.getElementById('email-invalid').style.display = 'block';
//           isValid = false;
//           console.log('Email is invalid')
//       } else {
//           document.getElementById('email-invalid').style.display = 'none';
//       }

//       // Message validation
//       const message = document.getElementById('message').value;
//       if (!message) {
//           document.getElementById('message-invalid').style.display = 'block';
//           isValid = false;
//           console.log('Message is invalid')
//       } else {
//           document.getElementById('message-invalid').style.display = 'none';
//       }

//       if (isValid) {
//           console.log('Form is valid');
//           // Proceed with form submission or further processing
//       } else {
//           console.log('Form is invalid');
//       }
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  // console.log('Script is running');
  
  const form = document.getElementById('contact');
  const result = document.getElementById('result');

  form.addEventListener('submit', function(event) {
      console.log('Form submit event triggered');
      event.preventDefault(); // Prevent form submission for testing

      // Validation logic
      let isValid = true;

      // Name validation
      const name = document.getElementById('name').value;
      if (!name) {
          document.getElementById('name-invalid').style.display = 'block';
          isValid = false;
          console.log('Name is invalid');
      } else {
          document.getElementById('name-invalid').style.display = 'none';
      }

      // Email validation
      const email = document.getElementById('email').value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailPattern.test(email)) {
          document.getElementById('email-invalid').style.display = 'block';
          isValid = false;
          console.log('Email is invalid');
      } else {
          document.getElementById('email-invalid').style.display = 'none';
      }

      // Message validation
      const message = document.getElementById('message').value;
      if (!message) {
          document.getElementById('message-invalid').style.display = 'block';
          isValid = false;
          console.log('Message is invalid');
      } else {
          document.getElementById('message-invalid').style.display = 'none';
      }

      if (isValid) {
          console.log('Form is valid');
          // Proceed with form submission
          const formData = new FormData(form);
          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);
          result.innerHTML = "Please wait...";

          fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: json
          })
          .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                  result.innerHTML = "Thank you! We've got your message. We'll get back to you as soon as possible!";
              } else {
                  console.log(response);
                  result.innerHTML = json.message;
              }
          })
          .catch(error => {
              console.log(error);
              result.innerHTML = "Something went wrong!";
          })
          .then(function() {
              form.reset();
              setTimeout(() => {
                  result.style.display = "none";
              }, 3000);
          });
      } else {
          console.log('Form is invalid');
      }
  });
});
