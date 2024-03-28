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
          "size": 4,
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
  
  //transform the images icons
  var iconContainer = document.querySelector(".icon-container");

  iconContainer.addEventListener("click", function() {
    var icon = document.getElementById("icon");
    var image = document.getElementById("image");
    
    if (image.style.visibility === "visible") {
      image.style.visibility = "hidden"; // Hide the image if it's visible
      icon.style.visibility = "visible"; // Show the icon
    } else {
      image.style.visibility = "visible"; // Show the image if it's hidden
      icon.style.visibility = "hidden"; // Hide the icon
    }
  });
  