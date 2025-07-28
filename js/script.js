  const greetings = ["Vanakkam!", "Welcome!", "Namaskaram!", "Namaskara!", "Namaste!"];
  const rotatingText = document.getElementById("rotating-text");
  let index = 0;

  setInterval(() => {
    rotatingText.style.opacity = 0; // fade out
    setTimeout(() => {
      index = (index + 1) % greetings.length;
      rotatingText.textContent = greetings[index];
      rotatingText.style.opacity = 1; // fade in
    }, 500);
  }, 3000); // change every 3 seconds

  // Optional: Scroll to booking section if needed
  function scrollToBooking() {
    document.getElementById("booking-section").scrollIntoView({ behavior: "smooth" });
  }

  // Function to animate number count-up
  function animateCountUp(el, endValue, duration = 2000) {
    let startTimestamp = null;
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      el.innerText = Math.floor(progress * (endValue - startValue) + startValue);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.innerText = endValue;
      }
    };

    window.requestAnimationFrame(step);
  }

  // Use IntersectionObserver to detect when .fact-counter is in view
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".count-text");
    const options = { threshold: 0.5 };
    let animated = false;

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          counters.forEach((el) => {
            const endValue = parseInt(el.getAttribute("data-stop")) || parseInt(el.innerText);
            const speed = parseInt(el.getAttribute("data-speed")) || 2000;
            animateCountUp(el, endValue, speed);
          });
          animated = true;
          observer.disconnect(); // remove observer after animation
        }
      });
    }, options);

    const target = document.querySelector(".fact-counter");
    if (target) {
      observer.observe(target);
    }
  });


  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 700,
      responsive:{
        0:{ items:1 },
        768:{ items:2 },
        992:{ items:3 }
      }
    });
  });