const url = "https://programming-quotes-api-default-rtdb.firebaseio.com/data.json";

// Realizar una petición GET
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error al obtener las citas: ${response.status}`);
    }
    return response.json();
  })
  .then(citas => {
    // Acceder a cada cita individual
    citas.forEach(cita => {
      const autor = cita.author;
      const cita_en = cita.en;

      console.log(`Autor: ${autor}, Cita: ${cita_en}`);
    });
  })
  .catch(error => {
    console.error(error);
  });