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
        const query = ruta.split("/")[3]; // Obtiene la query origina desde la ruta
        nuevaImagen.alt = query; // Le da atributo alt
        nuevaImagen.title = query; // Le da atributo title
        nuevaImagen.style.width = "80px"; //Le da ancho
        nuevaImagen.style.height = "80px"; //Le da alto
        contenedor.appendChild(nuevaImagen); // Apendiza el elemento creado
    });
}
// Ejecutar la función cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", renderizarImagenes);

// Esconder el Loader
document.getElementById('loader').style.display = 'none';


//Esta función se ejecuta cuando el DOM termina de cargarse. 
//Se encarga de manejar la visibilidad de las distintas vistas
document.addEventListener('DOMContentLoaded', function () { //Esta función muestra la vista con el ID proporcionado y oculta el resto.
    const views = document.querySelectorAll('.view');    // Obtener todas las vistas con la clase 'view'
    const viewShow = (id) => {  //El ID de la vista que se desea mostrar.
        views.forEach(view => view.style.display = 'none'); // Ocultar todas las vistas
        document.getElementById(id).style.display = 'block'; // Mostrar la vista con el ID proporcionado
    };
    // Asignar eventos de clic a los enlaces de vista:
    document.getElementById('viewlink1').addEventListener('click', function () {
        viewShow('view1');
    });
    document.getElementById('viewlink2').addEventListener('click', function () {
        viewShow('view2');
    });
    document.getElementById('viewlink3').addEventListener('click', function () {
        viewShow('view3');
    });
    document.getElementById('viewlink4').addEventListener('click', function () {
        viewShow('view4');
    });
    document.getElementById('viewlink0').addEventListener('click', function () {
        viewShow('view4');
    });
    // Mostrar la primera vista por defecto
    viewShow('view1');
});
