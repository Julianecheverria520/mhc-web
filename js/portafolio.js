// --- LÓGICA DE INYECCIÓN DEL PORTAFOLIO DE PROYECTOS ---

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('portfolio-contenedor');
    if (!contenedor) return;

    let htmlProyectos = '';

    datosProyectos.forEach(proyecto => {
        htmlProyectos += `
            <article class="proyecto-card">
                <img src="${proyecto.imagen}" alt="Fotografía ${proyecto.titulo}" loading="lazy">
                <div class="proyecto-info">
                    <span class="etiqueta-tecnica">${proyecto.etiqueta}</span>
                    <h3>${proyecto.titulo}</h3>
                    <div class="proyecto-metricas">
                        <span><i class='bx bx-ruler' aria-hidden="true"></i> ${proyecto.metrica1}</span>
                        <span><i class='bx bx-calendar' aria-hidden="true"></i> ${proyecto.metrica2}</span>
                        <span><i class='bx bx-map-pin' aria-hidden="true"></i> ${proyecto.ubicacion}</span>
                    </div>
                </div>
            </article>
        `;
    });

    contenedor.innerHTML = htmlProyectos;
});