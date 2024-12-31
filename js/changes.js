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
  const cards = document.querySelectorAll(".card-w-cards");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationClass = element.dataset.animate;
          const delay = element.dataset.delay || "0ms";

          element.style.animationDelay = delay;
          element.style.animationDuration = "1s"; // Smooth animation
          element.classList.add(animationClass);

          // Remove animation classes after animation ends
          element.addEventListener("animationend", () => {
            element.classList.remove("animate__animated", animationClass);
          });

          observer.unobserve(element); // Stop observing once animated
        }
      });
    },
    { threshold: 0.2 } // Trigger animation when 20% visible
  );

  cards.forEach((card) => observer.observe(card));
});

//about animations
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-item-img-grid");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible-img-grid");
        entry.target.classList.remove("hidden-img-grid");
      }
    });
  }, { threshold: 0.1 });

  images.forEach((image) => {
    observer.observe(image);
  });
});

// solutions for network infra
// Array of items
const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8"
];

let currentIndex = 0;

// Get references to elements
const itemContainer = document.getElementById("item-container-serv");
const prevButton = document.getElementById("prev-serv");
const nextButton = document.getElementById("next-serv");

// Function to update the displayed item
function updateItem() {
  itemContainer.textContent = items[currentIndex];

  // Disable buttons at boundaries
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === items.length - 1;
}

// Event listeners for buttons
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateItem();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateItem();
  }
});

// Initialize with the first item
updateItem();

// dev service
