document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box-anmBox");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animation = entry.target.getAttribute("data-animation");
            entry.target.classList.add(animation);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    boxes.forEach((box) => observer.observe(box));
  });

  
// counter script
$(document).ready(function () {
  // Function to start the counter when the section is in view
  function startCounterWhenInView() {
    $(".container-counter").each(function () {
      var $counterSection = $(this);
      var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // If the section is in view, start the counter animation
            $counterSection.find(".counter-timer-counter").each(function () {
              var number = $(this).attr("data-to");
              $(this).countTo({
                from: 0,
                to: number,
                speed: 1500,
                refreshInterval: 10,
                formatter: function (number, options) {
                  number = number.toFixed(options.decimals);
                  number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  return number;
                },
              });
            });
            observer.disconnect(); // Stop observing after the animation starts
          }
        });
      }, { threshold: 0.5 }); // Trigger when 50% of the section is in view
      observer.observe($counterSection[0]);
    });
  }

  // Call the function to initialize the observer
  startCounterWhenInView();
});


// about animations
AOS.init({
  offset: 120, // Offset from the top of the viewport in pixels
  duration: 1000, // Animation duration in milliseconds
  easing: 'ease-in-out', // Animation easing
  once: true, // Whether animation should happen only once
});

// animation for why choose us
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-choose");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the slow animation class to all cards
          entry.target.classList.add("animate__animated", "animate__slow");

          // Add the specific animation class based on the card ID
          if (entry.target.id === "card1") {
            entry.target.classList.add("animate__bounceInLeft");
          } else if (entry.target.id === "card2") {
            entry.target.classList.add("animate__bounceInUp");
          } else if (entry.target.id === "card3") {
            entry.target.classList.add("animate__bounceInRight");
          }

          // Listen for the end of the animation and enable hover
          entry.target.addEventListener("animationend", () => {
            // Re-enable hover effect after animation is finished
            entry.target.style.pointerEvents = 'auto'; // Enable hover
          });

          // Stop observing the element after it's animated
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 } // Trigger when at least 10% of the card is in the viewport
  );

  // Observe each card element
  cards.forEach((card) => {
    observer.observe(card);
  });
});