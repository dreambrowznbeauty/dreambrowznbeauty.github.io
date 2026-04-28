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
  
  // Initialize flying butterflies
  //initButterflies();
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
// Flying Butterflies Animation
// ============================================

function initButterflies() {
  // Create butterfly container
  const container = document.createElement('div');
  container.className = 'butterfly-container';
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    z-index: 10;
    overflow: hidden;
  `;
  document.body.appendChild(container);
  
  // Number of butterflies - adjust for performance
  const butterflyCount = window.innerWidth > 768 ? 5 : 2;
  
  for (let i = 0; i < butterflyCount; i++) {
    createButterfly(container, i);
  }
}

function createButterfly(container, index) {
  const butterfly = document.createElement('div');
  butterfly.className = 'butterfly';
  
  // Ultra-Realistic Butterfly SVG
  butterfly.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="45" height="55">
      <defs>
        <radialGradient id="wingShine-${index}" cx="40%" cy="40%">
          <stop offset="0%" style="stop-color:#fff8dc;stop-opacity:0.6" />
          <stop offset="100%" style="stop-color:#fff8dc;stop-opacity:0" />
        </radialGradient>
        <filter id="wingShade-${index}">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
        </filter>
      </defs>
      
      <!-- UPPER LEFT WING -->
      <path d="M 50 40 Q 20 15 10 25 Q 5 35 8 50 Q 15 65 35 60 Q 45 55 50 45 Z" 
            fill="#d97f2f" stroke="#8b5a2b" stroke-width="0.8"/>
      
      <!-- Upper left wing pattern -->
      <circle cx="20" cy="30" r="4" fill="#ff6b35" opacity="0.7"/>
      <circle cx="25" cy="40" r="3.5" fill="#ffa500" opacity="0.6"/>
      <circle cx="18" cy="50" r="3" fill="#ff8800" opacity="0.7"/>
      <ellipse cx="28" cy="52" rx="4" ry="2.5" fill="#ffb84d" opacity="0.5"/>
      
      <!-- Upper left wing shine -->
      <ellipse cx="25" cy="35" rx="12" ry="15" fill="url(#wingShine-${index})"/>
      
      <!-- UPPER RIGHT WING -->
      <path d="M 50 40 Q 80 15 90 25 Q 95 35 92 50 Q 85 65 65 60 Q 55 55 50 45 Z" 
            fill="#d97f2f" stroke="#8b5a2b" stroke-width="0.8"/>
      
      <!-- Upper right wing pattern -->
      <circle cx="80" cy="30" r="4" fill="#ff6b35" opacity="0.7"/>
      <circle cx="75" cy="40" r="3.5" fill="#ffa500" opacity="0.6"/>
      <circle cx="82" cy="50" r="3" fill="#ff8800" opacity="0.7"/>
      <ellipse cx="72" cy="52" rx="4" ry="2.5" fill="#ffb84d" opacity="0.5"/>
      
      <!-- Upper right wing shine -->
      <ellipse cx="75" cy="35" rx="12" ry="15" fill="url(#wingShine-${index})"/>
      
      <!-- LOWER LEFT WING -->
      <path d="M 50 50 Q 25 60 18 80 Q 15 95 28 100 Q 40 98 48 80 Q 50 65 50 55 Z" 
            fill="#c9796b" stroke="#8b5a2b" stroke-width="0.8" opacity="0.9"/>
      
      <!-- Lower left wing spots -->
      <circle cx="25" cy="75" r="3.5" fill="#ff6b35" opacity="0.6"/>
      <circle cx="22" cy="88" r="2.5" fill="#ffa500" opacity="0.5"/>
      <ellipse cx="32" cy="85" rx="3" ry="2" fill="#ffb84d" opacity="0.4"/>
      
      <!-- LOWER RIGHT WING -->
      <path d="M 50 50 Q 75 60 82 80 Q 85 95 72 100 Q 60 98 52 80 Q 50 65 50 55 Z" 
            fill="#c9796b" stroke="#8b5a2b" stroke-width="0.8" opacity="0.9"/>
      
      <!-- Lower right wing spots -->
      <circle cx="75" cy="75" r="3.5" fill="#ff6b35" opacity="0.6"/>
      <circle cx="78" cy="88" r="2.5" fill="#ffa500" opacity="0.5"/>
      <ellipse cx="68" cy="85" rx="3" ry="2" fill="#ffb84d" opacity="0.4"/>
      
      <!-- BODY - Fuzzy thorax -->
      <ellipse cx="50" cy="55" rx="5" ry="12" fill="#3d2817" stroke="#1a0f0a" stroke-width="0.8"/>
      
      <!-- Body segments -->
      <ellipse cx="50" cy="58" rx="4.5" ry="3" fill="#4a3520" opacity="0.8"/>
      <ellipse cx="50" cy="62" rx="4.2" ry="3" fill="#4a3520" opacity="0.7"/>
      
      <!-- ABDOMEN -->
      <ellipse cx="50" cy="70" rx="3" ry="8" fill="#2b1810" stroke="#1a0f0a" stroke-width="0.6"/>
      
      <!-- HEAD -->
      <circle cx="50" cy="40" r="5" fill="#4a3520" stroke="#2b1810" stroke-width="0.8"/>
      
      <!-- EYES - Compound style -->
      <circle cx="46" cy="38" r="2.2" fill="#1a0f0a"/>
      <circle cx="54" cy="38" r="2.2" fill="#1a0f0a"/>
      <circle cx="46.5" cy="37.5" r="0.8" fill="#4a6fa5" opacity="0.9"/>
      <circle cx="54.5" cy="37.5" r="0.8" fill="#4a6fa5" opacity="0.9"/>
      
      <!-- ANTENNAE - Curved and realistic -->
      <path d="M 47 36 Q 42 28 40 18" stroke="#2b1810" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M 53 36 Q 58 28 60 18" stroke="#2b1810" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      
      <!-- Antenna tips - clubbed -->
      <circle cx="40" cy="18" r="1.5" fill="#5a4a3a"/>
      <circle cx="60" cy="18" r="1.5" fill="#5a4a3a"/>
      
      <!-- LEGS (visible under wings) -->
      <line x1="48" y1="65" x2="42" y2="73" stroke="#2b1810" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="52" y1="65" x2="58" y2="73" stroke="#2b1810" stroke-width="0.8" stroke-linecap="round"/>
    </svg>
  `;
  
  // Random starting position
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const duration = 15 + Math.random() * 10;
  const delay = index * 3;
  
  butterfly.style.cssText = `
    position: fixed;
    left: ${startX}px;
    top: ${startY}px;
    animation: flutter-${index} ${duration}s infinite;
    animation-delay: ${delay}s;
    filter: drop-shadow(0 2px 5px rgba(0,0,0,0.25)) brightness(1.1);
  `;
  
  container.appendChild(butterfly);
  
  // Create realistic flight animation
  const keyframes = `
    @keyframes flutter-${index} {
      0% {
        left: 0%;
        top: ${Math.random() * 40 + 10}%;
        opacity: 0;
        transform: rotateZ(0deg) rotateY(0deg);
      }
      5% {
        opacity: 1;
      }
      25% {
        top: ${Math.random() * 80}%;
        transform: rotateZ(-15deg) rotateY(35deg);
      }
      50% {
        left: 50%;
        top: ${Math.random() * 100}%;
        transform: rotateZ(15deg) rotateY(0deg);
      }
      75% {
        top: ${Math.random() * 80}%;
        transform: rotateZ(-15deg) rotateY(-35deg);
      }
      95% {
        opacity: 1;
      }
      100% {
        left: 100%;
        top: ${Math.random() * 40 + 10}%;
        opacity: 0;
        transform: rotateZ(0deg) rotateY(0deg);
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = keyframes;
  document.head.appendChild(styleSheet);
}

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
