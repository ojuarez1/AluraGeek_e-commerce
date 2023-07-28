const contenido = document.querySelector("[data-container]");
const dragText = contenido.querySelector("[data-text]");
const button = document.querySelector("[data-boton]");
const input = contenido.querySelector("#input-file");
let files;

button.addEventListener("click", (event) => {
    input.click();
})

input.addEventListener("change", (e) => {
    files = this.files;
    contenido.classList.add("active");
    showFiles(files)
    contenido.classList.remove("active");
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
    contenido.classList.remove("active");
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
    } else {
        alert("Archivo no valido")
    }
}