document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide-bg');
    const indicadores = document.querySelectorAll('.hero-indicators span');
    let indexActivo = 0;

    // Si no hay slides en la página, detenemos el script
    if (slides.length === 0) return;

    function cambiarSlide() {
        // Quitamos la clase 'active' de la foto y el puntico actual
        slides[indexActivo].classList.remove('active');
        indicadores[indexActivo].classList.remove('active');

        // Calculamos cuál es la siguiente foto (y vuelve a 0 si llega al final)
        indexActivo = (indexActivo + 1) % slides.length;

        // Le ponemos la clase 'active' a la nueva foto y puntico
        slides[indexActivo].classList.add('active');
        indicadores[indexActivo].classList.add('active');
    }

    // Ejecuta la función cambiarSlide cada 5000 milisegundos (5 segundos)
    setInterval(cambiarSlide, 5000);
});