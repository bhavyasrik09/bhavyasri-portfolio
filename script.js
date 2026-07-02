document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('X3gPIx0bTp03_BKdU');

    const navToggle = document.querySelector('.nav-toggle');
    const siteHeader = document.querySelector('.site-header');
    const nav = document.querySelector('.site-nav');

    if (navToggle && siteHeader && nav) {
        navToggle.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            siteHeader.classList.toggle('nav-open');
        });
    }

    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fromName = document.getElementById('name').value.trim();
        const fromEmail = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!fromName || !fromEmail || !subject || !message) {
            feedback.textContent = 'Please fill in all fields before sending.';
            return;
        }

        feedback.textContent = 'Sending message...';

        const templateParams = {
            from_name: fromName,
            from_email: fromEmail,
            subject: subject,
            message: message,
        };

        emailjs.send('service_d4ivxyu', 'template_vgqzgg8', templateParams)
            .then(function () {
                feedback.textContent = 'Message sent successfully. Thank you!';
                form.reset();
            }, function (error) {
                feedback.textContent = 'Error sending message. Please try again or email directly.';
                console.error('EmailJS error:', error);
            });
    });

    const patentModal = document.getElementById('patent-modal');
    const patentOpen = document.getElementById('patent-view-product');
    const patentClose = document.getElementById('patent-close-modal');

    if (patentModal && patentOpen && patentClose) {
        patentOpen.addEventListener('click', function () {
            patentModal.classList.add('show');
            patentModal.setAttribute('aria-hidden', 'false');
        });

        patentClose.addEventListener('click', function () {
            patentModal.classList.remove('show');
            patentModal.setAttribute('aria-hidden', 'true');
        });

        patentModal.addEventListener('click', function (event) {
            if (event.target === patentModal) {
                patentModal.classList.remove('show');
                patentModal.setAttribute('aria-hidden', 'true');
            }
        });
    }
});
