// --- CONFIGURACIÓN DEL MAPA INTERACTIVO (LEAFLET.JS) ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Buscamos el contenedor del mapa en el HTML
    const mapaContenedor = document.getElementById('mapa-colombia');

    // Si no existe el contenedor en esta página, detenemos el script para evitar errores
    if (!mapaContenedor) return;

    // 2. Inicializar el mapa centrado en Colombia
    // Coordenadas aproximadas del centro de Colombia y nivel de zoom inicial
    const map = L.map('mapa-colombia').setView([4.5709, -74.2973], 5);

    // 3. Cargar la capa visual del mapa (Usamos la oficial de OpenStreetMap, libre)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        minZoom: 4
    }).addTo(map);

    // 4. Definir ícono personalizado para MHC (Punto rojo)
    const mhcIcon = L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // 5. Array con ubicaciones de ejemplo de proyectos MHC
    // (En producción, estos datos vendrían de tu base de datos)
    const ubicacionesProyectos = [
        { lat: 4.6097, lon: -74.0817, titulo: "Oficina Principal - Bogotá", desc: "Sede administrativa central." },
        { lat: 10.3910, lon: -75.4794, titulo: "Viaducto El Gran Manglar", desc: "Obra galardonada en Cartagena." },
        { lat: 7.1254, lon: -73.1198, titulo: "Variante Bucaramanga", desc: "Proyecto vial de alta complejidad." },
        { lat: 6.2476, lon: -75.5658, titulo: "Proyecto Túnel del Toyo", desc: "Participación en obra subterránea." },
        { lat: 3.4516, lon: -76.5320, titulo: "Mantenimiento Vial Cali", desc: "Obras de infraestructura urbana." },
        { lat: 4.1420, lon: -73.6266, titulo: "Vía Villavicencio", desc: "Intervención en corredor clave." }
    ];

    // 6. Recorrer el array y agregar los marcadores al mapa
    ubicacionesProyectos.forEach(proyecto => {
        L.marker([proyecto.lat, proyecto.lon], { icon: mhcIcon })
            .addTo(map)
            .bindPopup(`<b>${proyecto.titulo}</b><br>${proyecto.desc}`);
    });
});