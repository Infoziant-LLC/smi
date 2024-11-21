document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
  
    const elements = document.querySelectorAll('[data-animate]');
  
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  });

// Select all stat items
const statItems = document.querySelectorAll('.stat-item');

// Add event listener for scroll
window.addEventListener('scroll', () => {
  statItems.forEach((item) => {
    const itemPosition = item.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 50;

    if (itemPosition < screenPosition) {
      item.classList.add('visible');
    }
  });
});

  
  // ScrollReveal animation setup
ScrollReveal().reveal('.title-offshore', {
    delay: 300,
    duration: 1500,
    origin: 'top',
    distance: '50px',
    opacity: 0,
    easing: 'ease-in-out'
  });
  
  ScrollReveal().reveal('.subtitle-offshore', {
    delay: 500,
    duration: 1500,
    origin: 'top',
    distance: '50px',
    opacity: 0,
    easing: 'ease-in-out'
  });
  
  ScrollReveal().reveal('.cta-button-offshore', {
    delay: 700,
    duration: 1500,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
    easing: 'ease-in-out'
  });

  // JavaScript to add the "visible" class when the step comes into view
const steps = document.querySelectorAll('.step');

window.addEventListener('scroll', () => {
  steps.forEach(step => {
    if (step.getBoundingClientRect().top < window.innerHeight - 100) {
      step.classList.add('visible');
    }
  });
});

// process section

window.onload = function() {
  process1();
};

function process1(){
  // Update the content
  document.querySelector('.process-content-title').textContent = 'Discovery';
  document.querySelector('.process-content').textContent = 'We collaborate to understand your goals, audience, and needs, gaining insights into your vision. This helps us create a strategic roadmap aligned with your objectives for project success.';
  
  // Remove 'active' class from all circles
  removeActiveClass();

  // Add 'active' class to the clicked circle
  document.querySelector('.pc-1').classList.add('active');
}

function process2(){
  // Update the content
  document.querySelector('.process-content-title').textContent = 'Design';
  document.querySelector('.process-content').textContent = 'We create visual concepts and interactive prototypes that blend aesthetics and functionality, aligning with your goals. These prototypes provide a tangible preview for feedback and design refinement.';
  
  // Remove 'active' class from all circles
  removeActiveClass();

  // Add 'active' class to the clicked circle
  document.querySelector('.pc-2').classList.add('active');
}

function process3(){
  // Update the content
  document.querySelector('.process-content-title').textContent = 'Development';
  document.querySelector('.process-content').textContent = 'We design secure, scalable solutions tailored to your needs, using advanced technologies to ensure reliability and performance. Built for adaptability, our solutions evolve with your business to meet future challenges.';
  
  // Remove 'active' class from all circles
  removeActiveClass();

  // Add 'active' class to the clicked circle
  document.querySelector('.pc-3').classList.add('active');
}

function process4(){
  // Update the content
  document.querySelector('.process-content-title').textContent = 'Testing';
  document.querySelector('.process-content').textContent = 'We ensure a flawless solution through rigorous testing and QA, examining functionality, performance, security, and user experience to deliver a reliable, high-quality product.';
  
  // Remove 'active' class from all circles
  removeActiveClass();

  // Add 'active' class to the clicked circle
  document.querySelector('.pc-4').classList.add('active');
}

function process5(){
  // Update the content
  document.querySelector('.process-content-title').textContent = 'Launch';
  document.querySelector('.process-content').textContent = 'We ensure seamless deployment and provide ongoing support to address issues, updates, and evolving needs. This guarantees reliable, efficient operations over time.';
  
  // Remove 'active' class from all circles
  removeActiveClass();

  // Add 'active' class to the clicked circle
  document.querySelector('.pc-5').classList.add('active');
}

// Function to remove the 'active' class from all circles
function removeActiveClass() {
  // Select all process circles and remove the 'active' class
  const circles = document.querySelectorAll('.process-circle');
  circles.forEach(circle => circle.classList.remove('active'));
}
