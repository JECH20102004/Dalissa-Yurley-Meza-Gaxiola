document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const messageDisplay = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // En un sitio estático, no podemos enviar el correo directamente.
            // La mejor práctica es usar un servicio de terceros como Formspree o Netlify Forms.

            // Simulamos el envío exitoso
            messageDisplay.textContent = '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.';
            messageDisplay.style.backgroundColor = '#d4edda';
            messageDisplay.style.color = '#155724';
            messageDisplay.style.padding = '10px';
            messageDisplay.style.borderRadius = '5px';
            messageDisplay.style.display = 'block';
            form.reset();

            // Opcional: Ocultar el mensaje después de unos segundos
            setTimeout(() => {
                messageDisplay.style.display = 'none';
            }, 5000);
        });
    }

    // Suavizar el desplazamiento al hacer clic en los enlaces de navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
