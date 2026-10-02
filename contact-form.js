const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    setTimeout(() => {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';

        contactForm.reset();

        alert('Message sent successfully!');
    }, 1000);
});