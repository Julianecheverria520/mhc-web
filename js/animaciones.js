// js/animaciones.js

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los elementos que tengan la clase 'reveal'
    const reveals = document.querySelectorAll('.reveal');

    // Configuramos el Intersection Observer para detectar cuándo entran en pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento entra en la ventana, le añadimos la clase activa
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15 // El elemento debe estar 15% visible para activar la animación
    });

    // Observar cada elemento
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});