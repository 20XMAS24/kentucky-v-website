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
  answer.classList.toggle('active');
  toggle.textContent = answer.classList.contains('active') ? '−' : '+';
}

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  if (email) {
    alert(`Спасибо за подписку! Письмо отправлено на ${email}`);
    this.reset();
  }
});

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

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.boxShadow = '0 5px 30px rgba(255, 68, 68, 0.2)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

console.log('Kentucky V Website loaded successfully!');