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
    // Mostrar la primera vista por defecto
    viewShow('view1');
});
