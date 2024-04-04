particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // White particles
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.8, // Increased opacity
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1, // Fixed size value
      "random": false, // Disable random size variation
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff", // White connections
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, // Decreased movement speed
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Changed on hover mode to grab
      },
      "onclick": {
        "enable": true,
        "mode": "bubble" // Changed on click mode to bubble
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 7,
        "duration": 0.2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// transform the images icons
document.getElementById("icon").addEventListener("click", function () {
  var image = document.getElementById("image");
  if (image.style.transform === "rotateY(0deg)") {
    image.style.transform = "rotateY(180deg)";
  } else {
    image.style.transform = "rotateY(0deg)";
  }
});
document.getElementById("image").addEventListener("click", function () {
  var icon = document.getElementById("image");
  if (icon.style.transform === "rotateY(0deg)") {
    icon.style.transform = "rotateY(180deg)";
  } else {
    icon.style.transform = "rotateY(0deg)";
  }
});

// curtain navigation js
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/* Smooth scrolling for all browsers */
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
// char count for text field
function updateCharCount() {
  var message = document.getElementById('message');
  var charCount = document.getElementById('char-count');
  charCount.textContent = message.value.length + ' / 1000';
 }

 // card js
 var mouse = {
  X   : 0,
  Y   : 0,
  CX  : 0,
  CY  : 0
},
block = {
  X   : mouse.X,
  Y   : mouse.Y,
  CX  : mouse.CX,
  CY  : mouse.CY
},
imags = [
  'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/210546/pexels-photo-210546.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

$('.block').on('mousemove', function(e) {
mouse.X   = (e.pageX - $(this).offset().left) - $('.block').width() / 2;
mouse.Y   = (e.pageY - $(this).offset().top) - $('.block').height() / 2;
})

$('.block').on('mouseleave', function(e) {
mouse.X   = mouse.CX;
mouse.Y   = mouse.CY;
})

setInterval(function(){

block.CY   += (mouse.Y - block.CY) / 12;
block.CX   += (mouse.X - block.CX) / 12;

$('.block').css({
transform : 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)'
})

}, 20);

$('.slider .item').each(function(i){

if(i == 0){

$(this).addClass('active');
$(this).next().addClass('next');
$(this).prev().addClass('prev');
}

$(this).attr('id', 'slide-'+i);

$(this).find('.block').css('background-image', 'url(' + imags[i] + ')')

$('.navigations .dots').append(
$('<li>', {class: i == 0 ? 'active' : '', id: i}).on('click', function(){
var cSlide = $('.slider #slide-'+$(this).attr('id'));
  
  $('.navigations .dots li').removeClass('active');
  $(this).addClass('active');
  
  $('.slider .item').removeClass('active prev next');
  cSlide.addClass('active');
  cSlide.next().addClass('next');
  cSlide.prev().addClass('prev');
})
)
})
