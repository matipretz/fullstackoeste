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
    for (let i = 0; i <= 4; i++) {
        document.getElementById(`viewlink${i}`).addEventListener('click', function () {
            viewShow(`view${i === 0 ? 4 : i}`);
        });
    }    
    // Mostrar la primera vista por defecto
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
    if (theme === "dark") {
        toggleTheme()
    }
});
document.getElementById('toggler').addEventListener('click', toggleTheme);


function toggleTheme() {
    const head = document.querySelector("head");
    const toggler = document.createElement("link");
    toggler.href = "assets/styles/dark.css";
    toggler.rel = "stylesheet";
    toggler.id = "darkMode";

    if (!!document.getElementById("darkMode")) {
        head.removeChild(document.getElementById("darkMode"));
        localStorage.setItem("theme", "light");
    } else {
        head.append(toggler);
        localStorage.setItem("theme", "dark");
    }
}