const textbox = document.querySelector(".input");
const form = document.querySelector(".inicioSecion__form")


    const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json())
 
    console.log(listaClientes())
    listaClientes().then((data) => {
        data.forEach(perfil => {
            if (perfil.correo == textbox.value) {
                console.log(textbox.value)
                alert("No puede ingresar")
            } else {
                console.log("Este es el error")
            }
        });
    }).catch((error) => alert("Ocurrió un error"))


