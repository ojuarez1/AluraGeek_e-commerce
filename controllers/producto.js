const crearProducto = (name, imageUrl, precio, descripcion, id) => {
    const lista = document.querySelector("[data-lista2]");
    const nuevoPro = document.createElement("li");
    const contenido = `
        <img src="../assets/img/${imageUrl}">
        <div>
            <p class="galeria__articulos-flex--precio">${name}</p>
            <p class="galeria__articulos-flex--precio">${precio}</p>
            <p class="galeria__articulos-flex--precio">${descripcion}</p>
            <div>
                <button class="id" id="${id}">Eliminar</button>
                <a href="actualizarProducto.html?id=${id}" class="link">Editar</a>
            </div> 
        </div>                        
    `
    nuevoPro.innerHTML = contenido;
    lista.appendChild(nuevoPro);
    const btn = nuevoPro.querySelector("button")
    btn.addEventListener("click", () => {
        const id = btn.id;
        eliminarProducto(id).then((respuesta) => {
            console.log(respuesta)
       }).catch((error)=> alert("Ocurrio un error"))        
    })
   
    return lista
}

const showProduct = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

showProduct().then((data) => {
    data.forEach(perfil => {
        crearProducto(perfil.name, perfil.imagenName, perfil.precio, perfil.descripcion, perfil.id);
    });
})

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method:"DELETE"
    })
}