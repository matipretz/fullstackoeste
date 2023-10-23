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
