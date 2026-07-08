const navigationLinks = document.querySelectorAll('.nav-links a, .button[href^="#"]');
const contactForm = document.querySelector('.contact-form');

navigationLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');

    if (!targetId || !targetId.startsWith('#')) {
      return;
    }

    const targetSection = document.querySelector(targetId);

    if (!targetSection) {
      return;
    }

    event.preventDefault();
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();
  alert('Merci, votre message a bien été envoyé.');
});
