// script.js

document.addEventListener('DOMContentLoaded', () => {
  const citasElement = document.getElementById('citas');

  const url = "https://programming-quotes-api-default-rtdb.firebaseio.com/data.json";

  let citas = [];

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
        cambiarCitaAleatoria();
        setInterval(cambiarCitaAleatoria, 10000);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function cambiarCitaAleatoria() {
    const cita = obtenerCitaAleatoria();
    const autor = cita.author;
    const cita_en = cita.en;

    const p = document.createElement('p');
    p.textContent = `${cita_en} -${autor}`;

    if (citasElement.firstChild) {
      const citaAnterior = citasElement.firstChild;
      citaAnterior.style.opacity = 0; // Hacemos la cita anterior invisible
      setTimeout(() => {
        citasElement.replaceChild(p, citaAnterior);
        p.style.opacity = 1; // Hacemos la nueva cita visible con un fade in
      }, 1000); // Después de 1 segundo, reemplazamos la cita y hacemos el fade in
    } else {
      citasElement.appendChild(p);
      p.style.opacity = 1; // Hacemos la nueva cita visible con un fade in
    }
  }

  function obtenerCitaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * citas.length);
    return citas[indiceAleatorio];
  }

  obtenerCitasAleatorias();
});
