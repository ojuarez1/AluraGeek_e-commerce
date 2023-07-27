const textbox = document.querySelector("[data-email]");
const contra = document.querySelector("[data-contra]")


const enviarFormulario = () => {
    let exito = false
    const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());
    listaClientes().then((data) => {
        data.forEach(perfil => {
            if (perfil.correo == textbox.value && perfil.contra == contra.value) {
                location.href = "registroCompletado.html"
                exito = true
            }
        })

        if (exito == false) {
                 alert("Su correo u contraseña no coinciden")
            }
    }).catch((error) => alert("Ocurrio un error"))

    return false
}
