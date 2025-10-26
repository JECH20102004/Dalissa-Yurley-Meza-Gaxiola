// Esperar a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  
  // --- Intersection Observer para animaciones de entrada ---
  const sections = document.querySelectorAll('.section');
  
  // Opciones para el observador
  const observerOptions = {
    threshold: 0.1 // Activar cuando el 10% del elemento es visible
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      // Si el elemento está entrando en la vista
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1; // Hacerlo visible
        // Opcional: Pausar la animación en CSS y solo ejecutarla aquí
        // entry.target.style.animationPlayState = 'running'; 
        obs.unobserve(entry.target); // Dejar de observar una vez animado
      }
    });
  }, observerOptions);
  
  // Observar cada sección
  sections.forEach(sec => {
    observer.observe(sec);
  });

  // --- Funcionalidad del Botón de WhatsApp ---
  const whatsappBtn = document.getElementById('whatsappBtn');
  
  // Asegurarse de que el botón existe
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      // Encontrar el formulario más cercano al botón
      const form = whatsappBtn.closest('form');
      if (!form) {
        console.error('El botón de WhatsApp no está dentro de un formulario.');
        return;
      }

      // Obtener valores del formulario
      const nombre = form.querySelector('input[name="nombre"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const mensaje = form.querySelector('textarea[name="mensaje"]').value;
      
      // Construir el mensaje de WhatsApp
      let texto = `Hola, soy ${nombre || 'alguien interesado'}. `;
      if (email) {
        texto += `Mi correo es ${email}. `;
      }
      texto += `Quisiera información sobre tus servicios.`;
      if (mensaje) {
         texto += ` Mensaje: ${mensaje}`;
      }

      // Codificar el texto para la URL y abrir en una nueva pestaña
      const numeroWA = '526221817025'; // Tu número de WhatsApp
      const url = `https://wa.me/${numeroWA}?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
    });
  } else {
    console.error('No se encontró el botón con id "whatsappBtn".');
  }
});

