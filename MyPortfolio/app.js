document.addEventListener('DOMContentLoaded', function() {
  // 1. Initialize Particles
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 115, "density": { "enable": true, "value_area": 480 } },
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5, "random": false },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 6, "direction": "none", "out_mode": "out" }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "repulse" },
        "resize": true
      },
      "modes": {
        "grab": { "distance": 180, "line_linked": { "opacity": 0.6 } },
        "repulse": { "distance": 160, "duration": 0.4 },
        "push": { "particles_nb": 4 },
        "remove": { "particles_nb": 2 }
      }
    },
    "retina_detect": true
  });

  // 2. Setup Stats (with safety check)
  var count_particles = document.querySelector('.js-count-particles');
  var stats;

  if (window.Stats) {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
  }

  // 3. Update Loop
  var update = function() {
    if (stats) stats.begin();
    if (stats) stats.end();
    
    // Check if particles exist before updating count
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS.particles.array) {
      if (count_particles) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
    }
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
});
