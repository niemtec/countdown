particlesJS("particles-js", {
  particles: {
    number: {value: 100, density: {enable: true, value_area: 900}},
    color: {value: "#ecf0f1"},
    shape: {
      type: "circle",
      stroke: {width: 0, color: "#ecf0f1"},
      polygon: {nb_sides: 5},
      // image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {enable: false, speed: 10, opacity_min: 0.5, sync: false}
    },
    size: {
      value: 3,
      random: true,
      anim: {enable: true, speed: 5, size_min: 0.5, sync: false}
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ecf0f1",
      opacity: 0.4,
      width: 0.55
    },
    move: {
      enable: true,
      speed: 1.0,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: true,
      attract: {enable: false, rotateX: 600, rotateY: 1200}
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {enable: true, mode: "grab"},
      onclick: {enable: true, mode: "push"},
      resize: true
    },
    modes: {
      grab: {distance: 300, line_linked: {opacity: 0.5}},
      bubble: {distance: 400, size: 40, duration: 2, opacity: 8, speed: 3},
      repulse: {distance: 200, duration: 0.4},
      push: {particles_nb: 1},
      remove: {particles_nb: 2}
    }
  },
  retina_detect: true
});
// var count_particles, stats, update;
// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = "absolute";
// stats.domElement.style.left = "0px";
// stats.domElement.style.top = "0px";
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);


const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Apr 26, 2064 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
          document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)
