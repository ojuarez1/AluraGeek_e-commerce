const inputs = document.querySelectorAll(".input");
const contenedor = document.querySelector("[data-contenedor]")

inputs.forEach(input =>{
  input.addEventListener("blur", (evento)=>{
    validar(evento.target);
  })
})

const validar = (input) =>{
  const tipoDeInput = input.dataset.tipo;
  
  if (!input.validity.valid){
    input.parentElement.classList.add("contenedorError");
    input.parentElement.querySelector(".span").innerHTML = mostrarErrores(tipoDeInput, input);
    console.log(input)
  }else{
    input.parentElement.classList.remove("contenedorError");
    input.parentElement.querySelector(".span").innerHTML = "";
  }
}

const mensajeErrores ={
    nombre:{
        valueMissing: "El campo Nombre no puede estar vacio",
        patternMismatch:"El campo Nombre no debe tener mas de 50 caracteres"
    },
    /* email:{
      valueMissing:"El campo Correo no puede estar vacio",
      typeMismatch:"Debe contener el signo @ y al menos un punto (.)"
    },
    asunto:{
        valueMissing: "El campo Asunto no puede estar vacio",
        patternMismatch:"El campo Asunto no debe tener mas de 50 caracteres"
    }, */

    password:{
        valueMissing: "El campo Contraseña no debe estar vacio",
        patternMismatch: "Al menos 8 caracteres, máximo 15, una letra mayúscula, un numero y no caracteres especiales."
    },

    mensaje: {
        valueMissing: "El campo Mensaje no puede estar vacio",
        patternMismatch:"El campo Nombre no debe tener mas de 300 caracteres"
    }
    
 }

const listaErrores =[
  "valueMissing",
  "typeMismatch",
  "patternMismatch"
]

const mostrarErrores = (tipoDeInput, input) => {
  let mensaje = "";
  listaErrores.forEach(error => {
    if(input.validity[error]){
      mensaje = mensajeErrores[tipoDeInput][error];
    }
  })
  return mensaje
}