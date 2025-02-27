/*
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
  
  //more code here...
});
*/

// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    number: {
      value: 100, // Number of particles
      density: {
        enable: true,
        value_area: 800 // Density of particles
      }
    },
    color: {
      value: '#ffffff' // Color of particles
    },
    shape: {
      type: 'circle', // Shape of particles
      stroke: {
        width: 0,
        color: '#ffffff'
      }
    },
    opacity: {
      value: 0.5, // Opacity of particles
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3, // Size of particles
      random: true,
      anim: {
        enable: true,
        speed: 5,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150, // Distance between linked particles
      color: '#ffffff', // Color of the lines
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3, // Speed of particles movement
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse' // Effect when hovering over particles
      },
      onclick: {
        enable: true,
        mode: 'push' // Add more particles on click
      }
    }
  },
  retina_detect: true
});

