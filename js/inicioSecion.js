const inputs = document.querySelectorAll("[data-inicio]");
const container = document.querySelector("[data-cont]");

inputs.forEach(input => {
    input.addEventListener("blur", (e) => {
        validar(e.target)
        console.log(input)
    })
})

function validar(input) {
    const tipoDeInput = input.dataset.tipo;    
    if (!input.validity.valid) {
        input.parentElement.classList.add("formulario");
        input.parentElement.querySelector(".form__span").textContent = crearMensajeError(tipoDeInput, input);
                         
    } else {
        input.parentElement.classList.remove("formulario");
        input.parentElement.querySelector(".form__span").textContent = ""
    }
}

const errores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

const tipoErrores = {
    email: {
        valueMissing: "El campo E-mail no debe estar vacio",
        typeMismatch: "Debe contener el signo @ y al menos un punto (.)"
    },

    password: {
        valueMissing: "El campo Contraseña no debe estar vacio",
        patternMismatch: "Al menos 8 caracteres, máximo 15, una letra mayúscula, un numero y no caracteres especiales."
    }
}

function crearMensajeError(tipoDeInput, input) {
    let mensaje = "";
    errores.forEach(error => {
        if (input.validity[error]) {
            mensaje = tipoErrores[tipoDeInput][error]
        }
    })
    return mensaje
}

