async function loadHTML() {
    try {
        let headerResponse = await fetch('header.html');
        let footerResponse = await fetch('footer.html');
        
        let headerData = await headerResponse.text();
        let footerData = await footerResponse.text();
        
        document.getElementById('header-container').innerHTML = headerData;
        document.getElementById('footer-container').innerHTML = footerData;
    } catch (error) {
        console.error('Error al cargar los archivos HTML:', error);
    }
}

function loadProveedores() {
    const proveedores = [
        { nombre: "Juan Pérez", calificacion: "★★★★★", categoria: "Plomero", ciudad: "Asunción" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque" },
        { nombre: "Carlos Gómez", calificacion: "★★★☆☆", categoria: "Jardinero", ciudad: "Areguá" }
    ];

    const proveedorContainer = document.getElementById('proveedores-container');

    proveedores.forEach(proveedor => {
        const card = `
            <div class="proveedor">
                <h5 class="proveedor-title">${proveedor.nombre}</h5>
                <div class="proveedor-rating">${proveedor.calificacion}</div>
                <p class="proveedor-category">${proveedor.categoria}</p>
                <p class="proveedor-city">Ciudad: ${proveedor.ciudad}</p>
                <a href="info.html" class="contact-button">Contactar</a>
            </div>
        `;
        proveedorContainer.innerHTML += card;
    });
}

loadHTML();
loadProveedores();