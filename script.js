// Toggle FAQ items
function toggleFaq(element) {
  const answer = element.nextElementSibling;
  const toggle = element.querySelector('.toggle');
  
  // Close all other FAQ items
  document.querySelectorAll('.faq-answer.active').forEach(item => {
    if (item !== answer) {
      item.classList.remove('active');
      item.previousElementSibling.querySelector('.toggle').textContent = '+';
    }
  });
  
  // Toggle current item
  if (answer.classList.contains('active')) {
    answer.classList.remove('active');
    toggle.textContent = '+';
  } else {
    answer.classList.add('active');
    toggle.textContent = '−';
  }
}

// Copy server IP to clipboard
function copyIP(ip) {
  navigator.clipboard.writeText(ip).then(() => {
    // Show notification
    showNotification(`IP адрес скопирован: ${ip}`);
  }).catch(err => {
    console.error('Ошибка копирования:', err);
    showNotification('Ошибка копирования IP', 'error');
  });
}

// Show notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#00ff00' : '#ff4444'};
    color: #000;
    padding: 1rem 2rem;
    border-radius: 10px;
    font-weight: bold;
    z-index: 10000;
    animation: slideIn 0.3s ease;
    box-shadow: 0 0 20px ${type === 'success' ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 68, 68, 0.5)'};
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Animate online counter
function animateCounter() {
  const counter = document.getElementById('onlinePlayers');
  if (!counter) return;
  
  const target = Math.floor(Math.random() * 500) + 1000; // Random between 1000-1500
  const duration = 2000;
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      counter.textContent = target.toLocaleString('ru-RU');
      clearInterval(timer);
    } else {
      counter.textContent = Math.floor(current).toLocaleString('ru-RU');
    }
  }, 16);
}

// Newsletter form submission
function handleNewsletter(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.querySelector('input[type="email"]').value;
  
  if (email) {
    showNotification(`Спасибо за подписку! Письмо отправлено на ${email}`);
    form.reset();
  }
  
  return false;
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const currentScroll = window.scrollY;
  
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 5px 30px rgba(255, 68, 68, 0.3)';
    navbar.style.background = 'rgba(10, 10, 10, 0.98)';
  } else {
    navbar.style.boxShadow = 'none';
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
  }
  
  lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
  // Animate counter on load
  animateCounter();
  
  // Update counter every 30 seconds
  setInterval(() => {
    animateCounter();
  }, 30000);
  
  // Observe sections for animations
  document.querySelectorAll('.feature-card, .server-card, .step-card, .streamer-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
  
  console.log('%c Kentucky V Website Loaded Successfully! ', 'background: #ff4444; color: #fff; font-size: 16px; padding: 10px;');
  console.log('%c Ready to play? Visit our servers! ', 'background: #00ff00; color: #000; font-size: 14px; padding: 5px;');
});

// Add CSS animations dynamically
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
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Prevent context menu on images (optional security)
document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiPattern.join(',')) {
    document.body.style.animation = 'rainbow 2s linear infinite';
    showNotification('🎉 Секретный код активирован! 🎉');
    setTimeout(() => {
      document.body.style.animation = '';
    }, 2000);
  }
});

// Random server stats update
setInterval(() => {
  document.querySelectorAll('.server-stats .stat').forEach((stat, index) => {
    if (index === 0) { // Players count
      const current = parseInt(stat.textContent.match(/\d+/)[0]);
      const change = Math.floor(Math.random() * 10) - 5;
      const newValue = Math.max(0, Math.min(500, current + change));
      stat.innerHTML = `<i class="icon">👥</i> ${newValue} / 500`;
    }
  });
}, 10000); // Update every 10 seconds