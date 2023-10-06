const query = [
    'visualstudiocode',
    'html5',
    'css3',
    'bootstrap',
    'git',
    'github',
    'javascript',
    'vue.js',
    'mysql',
    'python',
    'flask',
];
const simpleAPI = 'https://cdn.simpleicons.org/'

function createIconList() {
    const list = query.map(item => `${simpleAPI}${item}`);
    return list;
}
iconList = createIconList()


function renderizarImagenes() {
    const contenedor = document.getElementById("contenedorImg"); // Asegúrate de tener un elemento en tu HTML con el id "contenedor"

    iconList.forEach(ruta => {
        const nuevaImagen = document.createElement("img");
        nuevaImagen.src = ruta;
        nuevaImagen.style.width = "80px";
        nuevaImagen.style.height = "80px";
        contenedorImg.appendChild(nuevaImagen);
    });
}

// Ejecutar la función cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", renderizarImagenes);
