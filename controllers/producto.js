const crearProducto = (name, imageUrl, precio, descripcion) => {
    const lista = document.querySelector("[data-lista]");
    const nuevoPro = document.createElement("li");
    const contenido = `
        <img src="../assets/img/${imageUrl}">
        <div>
            <p class="galeria__articulos-flex--precio">${name}</p>
            <p class="galeria__articulos-flex--precio">${precio}</p>
            <p class="galeria__articulos-flex--precio">${descripcion}</p>
        </div>                        
    `
    nuevoPro.innerHTML = contenido;
    lista.appendChild(nuevoPro);
    return lista
}

const showProduct = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

showProduct().then((data) => {
    data.forEach(perfil => {
        crearProducto(perfil.name, perfil.imagenName, perfil.precio, perfil.descripcion);

    });
})

