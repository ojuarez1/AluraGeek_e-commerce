const inputs = document.querySelectorAll("#inputext");

inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        validar(input.target);

    })
})

function validar(input) {
    const tipoInput = input.dataset.tipo;
    console.log(input)
    if (validadores[tipoInput]) {
        validadores[tipoInput](input);
    }

    /*const tipoError = ["valueMissing", "customError"];
    
    const data = {
        nombre: {
            valueMissing: "Debe llenar el campo Nombre",
            customError:"El campo 'Nombre' no debe contener mas de 40 caractéres",
        },

        mensaje: {
            valueMissing: "Debe llenar el campo Mensaje",
            customError:"El campo 'Mensaje' no debe contener mas de 120 caractéres"
        }
    }
    tipoError.forEach(error => {
       if (input.validity[error]) {
            console.log(data[tipoInput][error])
        } 
    })*/
    
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