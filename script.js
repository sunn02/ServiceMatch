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
        { nombre: "Juan Pérez", calificacion: "★★★★★", categoria: "Plomero", ciudad: "Asunción", numero: "+595 981 942410" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque", numero: "+595 981 942410" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque", numero: "+595 981 942410" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque", numero: "+595 981 942410" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque", numero: "+595 981 942410" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque", numero: "+595 981 942410" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque", numero: "+595 981 942410" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque", numero: "+595 981 942410" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque", numero: "+595 981 942410" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque", numero: "+595 981 942410" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque", numero: "+595 981 942410" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque", numero: "+595 981 942410" },
        { nombre: "María López", calificacion: "★★★★☆", categoria: "Electricista", ciudad: "Luque", numero: "+595 981 942410" },
        { nombre: "Carlos Gómez", calificacion: "★★★☆☆", categoria: "Jardinero", ciudad: "Areguá", numero: "+595 981 942410" }
    ];

    const proveedorContainer = document.getElementById('proveedores-container');

    proveedores.forEach(proveedor => {
        const card = `
            <div class="proveedor">
                <h4 class="proveedor-title">${proveedor.nombre}</h4>
                <div class="proveedor-rating">${proveedor.calificacion}</div>
                <p class="proveedor-category">${proveedor.categoria}</p>
                <p class="proveedor-city">Ciudad: ${proveedor.ciudad}</p>
                <a href="tel:${proveedor.numero}" class="proveedor-number">${proveedor.numero}</a>
                <a href="info.html" class="contact-button">Haz match!</a>
            </div>
        `;
        proveedorContainer.innerHTML += card;
    });
}

loadHTML();
loadProveedores();