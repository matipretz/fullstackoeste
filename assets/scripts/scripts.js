const query = [ // Lista de iconos
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
const simpleAPI = 'https://cdn.simpleicons.org/' // Ruta base para la lista de iconos

function createIconList() { // Compone un arreglo para cada icono en la lista
    const list = query.map(item => `${simpleAPI}${item}`); // Mapea el arreglo y lo compone con la ruta base
    return list; // Retorna una lista de rutas
}
iconList = createIconList() // Lista de rutas de iconos

function renderizarImagenes() { // Renderiza un icono con sus parametros por cada rutas c
    const contenedor = document.getElementById("contenedorImg"); // Apunta al div donde se van a renderizar los iconos
    iconList.forEach(ruta => { // Por cada ruta en el arrego...
        const nuevaImagen = document.createElement("img"); // Crea un elemento img...
        nuevaImagen.src = ruta; // Le da el src de la iteracion del arreglo llamada ruta
        nuevaImagen.style.width = "80px"; //Le da ancho
        nuevaImagen.style.height = "80px"; //Le da alto
        contenedorImg.appendChild(nuevaImagen); // Apendiza el elemento creado
    });
}

// Ejecutar la función cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", renderizarImagenes);

// Esconder el Loader
document.getElementById('loader').style.display = 'none';