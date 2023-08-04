document.addEventListener("keyup", e => {
    const buscar = document.querySelectorAll(".buscado");
    const container = document.querySelector("#ocultar")
    //console.log(e.target.matches("#buscador"))
    
    buscar.forEach(producto => {
        
        if (producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            producto.classList.remove("filtro")
            const filtrado = producto.parentElement
            filtrado.parentElement.classList.remove("ocultar")
            producto.addEventListener("click", () => {                
                const encontrado = document.querySelector(producto.getAttribute("href"));
                encontrado.classList.add("animate");
                container.classList.add("ocultar");
                e.target.value = "";  
            })
        } else {            
            producto.classList.add("filtro")
        }
        if (e.target.value == "") {
            container.classList.add("ocultar")
        }
    })
    
})

window.addEventListener("click", e => {
    const lista = document.querySelector(".lista__productos");
    const buscar = document.querySelectorAll(".buscado");
    const input = document.querySelector("#buscador")
    //console.log(e.target.matches("#buscador"))

         
        buscar.forEach(producto => {
            const encontrado = document.querySelector(producto.getAttribute("href"));
            if (encontrado.classList.contains("animate")  && e.target != producto && e.target != input){ 
                console.log(encontrado.classList.contains("animate"))
                encontrado.classList.remove("animate");
            }            
        })
    
    
})
