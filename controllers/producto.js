const crearProducto = (name, imageUrl, precio, descripcion) => {
    const lista = document.querySelector("[data-lista]");
    const contenido = `<li>
        <img src="${imageUrl}">
        <div>
            <p class="galeria__articulos-flex--precio">${name}</p>
            <p class="galeria__articulos-flex--precio">${precio}</p>
            <p class="galeria__articulos-flex--precio">${descripcion}</p>
        </div>                        
    </li>`
    lista.innerHTML = contenido;
    return lista
}

const showProduct = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());
showProduct().then((data) => {
    data.forEach(perfil => {
        console.log(crearProducto(perfil.name, perfil.imageUrl, perfil.precio, perfil.descripcion));

    });
})

