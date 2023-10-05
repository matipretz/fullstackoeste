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

function crearListaURLs() {
    const listaURLs = query.map(item => `${simpleAPI}${item}`);
    return listaURLs;
}
const listaURLs = crearListaURLs();

console.log(listaURLs);

// Obtener el contenedor donde deseas agregar las imágenes
const contenedor = document.getElementById('contenedor-imagenes');

// Iterar sobre la lista de URLs y crear elementos img
listaURLs.forEach(url => {
    const imagen = document.createElement('img');
    imagen.src = url;
    imagen.alt = 'Logo';

    // Agregar la imagen al contenedor
    contenedor.appendChild(imagen);
});
