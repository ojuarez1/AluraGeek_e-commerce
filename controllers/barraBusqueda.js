const buscar = document.querySelector("[data-input-buscar]");


buscar.addEventListener("keyup", (e) => {
    const listaUl = document.querySelector("[data-lista]");
    const listaLi = listaUl.querySelectorAll("li");
    listaLi.forEach(producto => {
        producto.textContent.toLowerCase().includes(e.target.value.toLowerCase());
    })
    console.log(e.target.value)
})