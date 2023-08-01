document.addEventListener("keyup", e => {
    const listaUl = document.querySelector("[data-lista]");
    const buscar = document.querySelectorAll(".buscado");
    //console.log(e.target.matches("#buscador"))

    buscar.forEach(producto => {
        
        if (producto.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ) {
            const filtrado = producto.parentElement
            filtrado.parentElement.classList.add("filtro")
            console.log(e.target.value)
        } else {
            const noFiltrado = producto.parentElement
            noFiltrado.parentElement.classList.remove("filtro")
        }
        
    })
    
})