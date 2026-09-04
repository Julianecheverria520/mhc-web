// Esperar a que el documento cargue
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Inicializar el mapa centrado en Colombia
    var map = L.map('mapa-colombia').setView([4.5709, -74.2973], 6);

    // 2. Cargar la capa visual del mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // 3. Lista de proyectos/ciudades (Latitud, Longitud, Nombre)
    var locaciones = [
        { lat: 7.1193, lng: -73.1227, nombre: "Bucaramanga" },
        { lat: 5.0263, lng: -74.0036, nombre: "Zipaquirá" },
        { lat: 4.6097, lng: -74.0817, nombre: "Bogotá" },
        { lat: 5.0681, lng: -75.5174, nombre: "Manizales" },
        { lat: 10.9685, lng: -74.7813, nombre: "Barranquilla" },
        { lat: 4.2886, lng: -74.8166, nombre: "Flandes" },
        { lat: 3.4516, lng: -76.5320, nombre: "Cali" },
        { lat: 5.2045, lng: -74.7397, nombre: "Honda" }
    ];

    // 4. Recorrer la lista y añadir marcadores
    locaciones.forEach(function(lugar) {
        var marker = L.marker([lugar.lat, lugar.lng]).addTo(map);
        marker.bindPopup(`<b>${lugar.nombre}</b><br>Proyecto ejecutado.`);
    });
});