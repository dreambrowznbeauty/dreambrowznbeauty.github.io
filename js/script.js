// ============================================
// Dream Browz n Beauty - Main JavaScript
// ============================================

// ============================================
// Google Analytics
// ============================================

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NXL078TYCG');

// Load Google Analytics script dynamically
(function() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-NXL078TYCG';
  document.head.appendChild(script);
})();

document.addEventListener('DOMContentLoaded', function() {
  // Initialize mobile menu toggle
  initMobileMenu();
  
  // Initialize smooth scrolling
  initSmoothScroll();
  
  // Initialize form validation if needed
  initFormValidation();
});

// ============================================
// Mobile Menu Toggle
// ============================================

function initMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!navToggle) return;
  
  // Toggle menu on hamburger click
  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close menu when a link is clicked
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// ============================================
// Smooth Scrolling
// ============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ============================================
// Form Validation
// ============================================

function initFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!validateForm(this)) {
        e.preventDefault();
      }
    });
  });
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });
  
  // Email validation
  const emailInputs = form.querySelectorAll('input[type="email"]');
  emailInputs.forEach(input => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });
  
  return isValid;
}

// ============================================
// Utility Functions
// ============================================

// Show notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem;
    background-color: ${type === 'success' ? '#4caf50' : '#f44336'};
    color: white;
    border-radius: 5px;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Add animation to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  input.error, textarea.error {
    border-color: #f44336 !important;
    background-color: #ffebee !important;
  }
`;
document.head.appendChild(style);

// ============================================
// Analytics (Add your tracking code here)
// ============================================

// Example: Google Analytics
// Uncomment and add your tracking ID
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
*/
