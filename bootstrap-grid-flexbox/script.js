(() => {
  'use strict';

  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    feedback.classList.add('d-none');
    form.classList.add('was-validated');

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(':invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    feedback.classList.remove('d-none');
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  form.addEventListener('input', () => {
    if (form.checkValidity()) feedback.classList.add('d-none');
  });
})();
