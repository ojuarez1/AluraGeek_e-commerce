const detalleProducto = (id) => fetch(`http://localhost:3000/productos/${id}`).then(respuesta => respuesta.json());

const obtenerInfo = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const img = document.querySelector("[data-image]")
    const drag = document.querySelector("[data-text]");
    img.classList.add("hidden");
    drag.classList.add("hidden");
    const nombre = document.querySelector("[data-nombrePro]")
    const precio = document.querySelector("[data-precioPro]")
    const descripcion = document.querySelector("[data-descripcionPro]");
    const imagen = document.querySelector("[data-mostrar]");
    
    detalleProducto(id).then(dato => {
        nombre.value = dato.name;
        precio.value = dato.precio;
        descripcion.value = dato.descripcion;
        imagen.setAttribute("src", `../assets/img/${dato.imagenName}`);
    })
}
obtenerInfo()


const formulario = document.querySelector("[data-formulario]");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const name = document.querySelector("[data-nombrePro]").value
    const price = document.querySelector("[data-precioPro]").value
    const description = document.querySelector("[data-descripcionPro]").value
    const imagen = document.querySelector("[data-mostrar]");
    const imagenName = imagen.getAttribute("src").substring(imagen.getAttribute("src").lastIndexOf("/") + 1)
    actualizarProducto(name, imagenName, price, description, id).then(() => {
        window.location.href = "../screens/productos.html"
    })

});

const actualizarProducto = (name, imagenName, precio, descripcion, id) => {
    return  fetch(`http://localhost:3000/productos/${id}`, {
        method: "put",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name,
            imagenName,
            precio,
            descripcion
        })
    })
        
}