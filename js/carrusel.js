// --- LÓGICA DE INYECCIÓN Y FUNCIONAMIENTO DEL CARRUSEL ---

let indiceSlide = 0;
let intervaloSlide;

function renderizarProyectos() {
    const contenedor = document.getElementById('carrusel-contenedor');
    // Si el contenedor no existe en la página, detenemos la ejecución para evitar errores
    if (!contenedor) return;

    const botonesHTML = contenedor.innerHTML; 
    let slidesHTML = '';

    datosProyectos.forEach((proyecto, index) => {
        let claseActiva = index === 0 ? ' activa' : '';
        
        slidesHTML += `
            <div class="slide${claseActiva}">
                <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
                <div class="slide-info">
                    <h3>${proyecto.titulo}</h3>
                    <p>${proyecto.descripcion}</p>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = slidesHTML + botonesHTML;
}

function mostrarSlides(n) {
    let slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return; 

    if (n >= slides.length) { indiceSlide = 0; }
    if (n < 0) { indiceSlide = slides.length - 1; }

    slides.forEach(slide => slide.classList.remove('activa'));
    slides[indiceSlide].classList.add('activa');
}

function moverSlide(n) {
    mostrarSlides(indiceSlide += n);
    reiniciarIntervalo(); 
}

function reiniciarIntervalo() {
    clearInterval(intervaloSlide);
    intervaloSlide = setInterval(() => {
        mostrarSlides(indiceSlide += 1);
    }, 5000); 
}

// Inicialización general del carrusel
document.addEventListener('DOMContentLoaded', () => {
    renderizarProyectos(); 
    mostrarSlides(indiceSlide); 
    reiniciarIntervalo(); 
});