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

// Donation with YooMoney
function donate(amount) {
  // Здесь вставьте ваш YooMoney receiver ID
  const receiverID = '410011234567890'; // ЗАМЕНИТЕ НА ВАШ ID!
  
  // Формируем URL для YooMoney
  const yoomoneyUrl = `https://yoomoney.ru/quickpay/confirm?` +
    `receiver=${receiverID}` +
    `&quickpay-form=shop` +
    `&targets=Поддержка%20сервера%20Kentucky%20V` +
    `&paymentType=SB` +
    `&sum=${amount}` +
    `&label=kentuckyv_donate_${Date.now()}`;
  
  // Открываем страницу оплаты
  window.open(yoomoneyUrl, '_blank');
  
  showNotification(`Переход к оплате ${amount}₽ через YooMoney...`);
}

// Newsletter form handler
function handleNewsletter(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  showNotification(`Спасибо за подписку! Email: ${email}`);
  event.target.reset();
  return false;
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
  // Observe sections for animations
  document.querySelectorAll('.feature-card, .server-card, .step-card, .streamer-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Add animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);