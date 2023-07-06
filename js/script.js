const inputs = document.querySelectorAll("[data-rodapie]");
const form = document.querySelector("[data-form]");

inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        validar(input.target);
        console.log(input)

    })
})

function validar(input) {
    const tipoInput = input.dataset.tipo;
    console.log(input)
    if (validadores[tipoInput]) {
        validadores[tipoInput](input);
    }
}

const validadores = {
    nombre: (input) => crearMensajeError(input),
    mensaje:(input) => crearMensajeError(input),
}


function crearMensajeError(input) {
    const contenido = input.value;
    let mensaje= ""
    if (!contenido) {
        mensaje = "Este campo no debe estar vacio"
    }
    input.setCustomValidity(mensaje);
}
