

const textbox = document.querySelector("[data-email]");
const contra = document.querySelector("[data-contra]")


const enviarFormulario = () => {
    const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json())
    listaClientes().then((data) => {
        data.forEach(perfil => {
            if (perfil.correo == textbox.value && perfil.password == contra.value) {
                location.href = "registroCompletado.html"                
            } else {
                alert("Correo u contraseña no coinciden")
                
            }
        });
    }).catch((error) => alert("Ocurrio un error"))

    return false
}
