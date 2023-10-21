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

function renderizarImagenes() { // Renderiza un icono con sus parametros por cada rutas
    const contenedor = document.getElementById("contenedorImg"); // Apunta al div donde se van a renderizar los iconos
    iconList.forEach(ruta => { // Por cada ruta en el arrego...
        const nuevaImagen = document.createElement("img"); // Crea un elemento img...
        nuevaImagen.src = ruta; // Le da el src de la iteracion del arreglo llamada ruta
        const query = ruta.split("/")[3]; // Obtiene la query original desde la ruta
        nuevaImagen.alt = query; // Le da atributo alt
        nuevaImagen.title = query; // Le da atributo title
        nuevaImagen.style.width = "80px"; //Le da ancho
        nuevaImagen.style.height = "80px"; //Le da alto
        contenedor.appendChild(nuevaImagen); // Apendiza el elemento creado
    });
}
document.addEventListener("DOMContentLoaded", renderizarImagenes);// Ejecutar la función cuando el DOM esté cargado

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
    // Se inicia un bucle que va desde 0 hasta 4
    for (let i = 0; i <= 4; i++) {
        // Se selecciona un elemento con un ID específico que sigue el patrón 'viewlinkX'
        document.getElementById(`viewlink${i}`).addEventListener('click', function () {
            // Cuando se hace clic en el elemento seleccionado, se ejecuta una función que llama a 
            // 'viewShow' y le pasa como argumento el ID de una vista.
            // El ID de la vista se construye concatenando 'view' con el valor actual de 'i'
            viewShow(`view${i === 0 ? 4 : i}`); // Si i es 0 muestra view4, si es falso muestra i
        });
    }
    // Muestra la primera vista por defecto
    viewShow('view1');

});

// Agrega un event listener para escuchar cuando se envía el formulario
document.getElementById('form').addEventListener('submit', (event) => {
    // Previene el comportamiento predeterminado de enviar el formulario
    event.preventDefault();
    // Obtiene el elemento para el nombre y para el mensaje de error
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');
    // Verifica si el campo de nombre está vacío
    if (entradaNombre.value.trim() === '') {
        // Si está vacío, muestra un mensaje de error
        errorNombre.textContent = 'Por favor, introducí tu nombre';
    } else {
        // Si no está vacío, elimina el mensaje de error
        errorNombre.textContent = '';
    }
    // Obtiene el elemento de entrada para el correo electrónico y para el mensaje de error
    let emailEntrada = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de validación básico para correo electrónico

    // Verifica si el correo electrónico tiene un formato válido
    if (!emailPattern.test(emailEntrada.value)) {
        // Si no es válido, muestra un mensaje de error
        emailError.textContent = 'Por favor, introducí un mail válido';
    } else {
        // Si es válido, elimina el mensaje de error
        emailError.textContent = '';
    }
    // Verifica si no hay mensajes de error en nombre y correo electrónico
    if (!errorNombre.textContent && !emailError.textContent) {
        // Si no hay errores, muestra un mensaje de agradecimiento y envía el formulario
        alert("Gracias por contactarse con nosotros. \nSu mensaje será respondido a la brevedad.");
        document.getElementById('form').submit();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        toggleTheme()
    }
});


function toggleTheme() {
    const head = document.querySelector("head");
    const toggler = document.createElement("link");
    toggler.href = "assets/styles/light.css";
    toggler.rel = "stylesheet";
    toggler.id = "lightMode";

    if (!!document.getElementById("lightMode")) {
        head.removeChild(document.getElementById("lightMode"));
        localStorage.setItem("theme", "dark");
    } else {
        head.append(toggler);
        localStorage.setItem("theme", "light");
    }
}