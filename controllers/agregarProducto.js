const contenido = document.querySelector("[data-container]");
const dragText = contenido.querySelector("[data-text]");
const button = document.querySelector("[data-boton]");
const input = contenido.querySelector("#input-file");
//const imagen = document.querySelector("[data-img]")
let files;

button.addEventListener("click", (event) => {
    input.click();
})

input.addEventListener("change", (e) => {
    files = e.target.files;
    contenido.classList.add("active");
    showFiles(files)
    //contenido.classList.remove("active");
})

contenido.addEventListener("dragover", (e) => {
    e.preventDefault();
    contenido.classList.add("active");
    dragText.textContent = "Suelta para subir los archivos"
})

contenido.addEventListener("dragleave", (e) => {
     e.preventDefault();
    contenido.classList.remove("active");
    dragText.textContent ="Arrastra y suelta imagenes"
})

contenido.addEventListener("drop", (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files)
    //contenido.classList.remove("active");
    dragText.textContent ="Arrastra y suelta imagenes"
})

const showFiles = (files) => {
    if (files.length == undefined) {
        processFile(files);
    } else {
        for (const file of files) {
            processFile(file)
        }
    }
}

const processFile = (file) => {
    const docType = file.type;
    const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/svg+xml"];

    if (validExtensions.includes(docType)) {
        //archivo valido
        //imagen.src= `../assets/img/${file.name}`
        //agregarProducto(file)
        renderImage(file)
        const btn = document.querySelector("[data-btn]");
        btn.addEventListener("click", (evento) => {
            evento.preventDefault();
            const name = document.querySelector("[data-nombrePro]").value;
            const precio = document.querySelector("[data-precioPro]").value;
            const descripcion = document.querySelector("[data-descripcionPro]").value;
            agregarProducto(file, name, precio, descripcion)
        })
        
    } else {
        alert("Archivo no valido")
    }
}

function uuidv4() {
    const data = [1e7] + -1e3 + -4e3 + -8e3 + -1e11;
    return data.replace(/[018]/g, (c) => (
        crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4))).toString(16)
    );
}



const agregarProducto = (file, name, precio, descripcion) => {
    const imagenName = file.name
    return fetch("http://localhost:3000/productos", {
        method:"POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            name,
            imagenName,
            precio,
            descripcion,
            id:uuidv4()
        })
    })
}

const imag = document.querySelector("[data-image]")
const renderImage = (formData) => {
    const image = URL.createObjectURL(formData);
    const imagen = document.createElement("img")
    imagen.classList.add("dataImage")
    imagen.setAttribute("src", image);
    contenido.appendChild(imagen);
    imag.classList.add("hidden")
    dragText.classList.add("hidden");
}
