function uuidv4() {
    const data = [1e7] + -1e3 + -4e3 + -8e3 + -1e11;
    return data.replace(/[018]/g, (c) => (
        crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4))).toString(16)
    );
}

const registrarCliente = (nombre, correo, contra) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            nombre,
            correo,
            contra,
            id: uuidv4()
        })
    })
};

const form = document.querySelector("[data-form]");
console.log(form)
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const correo = document.querySelector("[data-email]").value;
    const contra = document.querySelector("[data-contra]").value;

    registrarCliente(nombre, correo, contra).then((respuesta) => {
       
        window.location.href = "registroCompletado.html";
        
    }).catch((error) => console.log("Ocurrio un error"));

})
