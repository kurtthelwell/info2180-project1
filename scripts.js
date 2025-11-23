document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.newsletter form');
  const emailInput = document.querySelector('.newsletter input[type="email"]');
  const msg = document.querySelector('.message');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = 'Please enter a valid email.';
      return;
    }

    msg.textContent = 'Subscribed!';
    emailInput.value = '';
  });
});
