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