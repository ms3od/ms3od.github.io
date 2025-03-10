// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

  // Form validation for the contact form
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          const name = contactForm.querySelector('#name').value.trim();
          const email = contactForm.querySelector('#email').value.trim();
          const message = contactForm.querySelector('#message').value.trim();
          
          if (!name || !email || !message) {
              e.preventDefault();
              alert('Please fill out all fields before submitting.');
          }
      });
  }

  // Back to Top button functionality
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = '↑ Top';
  backToTopButton.setAttribute('id', 'back-to-top');
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.right = '20px';
  backToTopButton.style.display = 'none';
  backToTopButton.style.padding = '10px 15px';
  backToTopButton.style.backgroundColor = '#007bff';
  backToTopButton.style.color = '#fff';
  backToTopButton.style.border = 'none';
  backToTopButton.style.borderRadius = '5px';
  backToTopButton.style.cursor = 'pointer';
  backToTopButton.style.zIndex = '1000';
  document.body.appendChild(backToTopButton);

  // Show or hide the button based on scroll position
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  // Smooth scroll to top when button is clicked
  backToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});