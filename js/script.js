//const btnPie = document.querySelector("[data-form-btn]");
const inputName = document.querySelector("[data-form-name]");


inputName.addEventListener("blur", (e) => {
    crearMensajeError(e.target);
    
})

/*const data = {
    nombre: {
        valueMissing:"Este campo no debe estar vacio"
    }    
}*/


function crearMensajeError(input) {
    const contenido = input.value;
    let mensaje= ""
    if (!contenido) {
        mensaje = "Este campo no debe estar vacio"
    }
    input.setCustomValidity(mensaje);
}