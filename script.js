document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('X3gPIx0bTp03_BKdU');

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
});
