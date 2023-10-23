document.addEventListener('DOMContentLoaded', () => {
  const citasElement = document.getElementById('citas');  // Obtiene el elemento con el ID 'citas'
  const url = "https://programming-quotes-api-default-rtdb.firebaseio.com/data.json";  // URL de la API que proporciona las citas
  let citas = [];  // Array que almacenará las citas obtenidas de la API.
  // Función para obtener citas aleatorias de la API
  function obtenerCitasAleatorias() {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al obtener las citas: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        citas = data;
        cambiarCitaAleatoria(); // Llama a la función para cambiar la cita inmediatamente
        setInterval(cambiarCitaAleatoria, 10000); // Cambia la cita cada 10 segundos
      })
      .catch(error => {
        console.error(error);
      });
  }
  // Función para cambiar la cita mostrada en la página
  function cambiarCitaAleatoria() {
    const cita = obtenerCitaAleatoria(); // Obtiene una cita aleatoria del array de citas
    const autor = cita.author; // Obtiene el autor de la cita
    const cita_en = cita.en; // Obtiene la cita en inglés
    // Crea un nuevo elemento 'p' para mostrar la cita y el autor
    const p = document.createElement('p')
    p.textContent = `${cita_en} -${autor}`;
    if (citasElement.firstChild) {
      const citaAnterior = citasElement.firstChild;
      // Desvanece la cita anterior
      citaAnterior.style.opacity = 0;
      setTimeout(() => {
        // Reemplaza la cita anterior con la nueva cita y la muestra con un efecto de fundido
        citasElement.replaceChild(p, citaAnterior);
        p.style.opacity = 1;
      }, 200);
    } else {
      // Si no hay citas anteriores, simplemente agrega la nueva cita
      citasElement.appendChild(p);
      p.style.opacity = 1;
    }
  }
  // Función para obtener una cita aleatoria del array de citas
  function obtenerCitaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * citas.length);
    return citas[indiceAleatorio];
  }
  // Inicia el proceso de obtención y visualización de citas aleatorias
  obtenerCitasAleatorias();
});
