console.log("Script app.js cargado"); // Verificación de que el archivo se está cargando

const API_URL = 'https://api.gameofthronesquotes.xyz/v1/random'; // URL de la API

function fetchQuote() {
    console.log("Intentando obtener una cita."); // Verificación de que se llama a la función

    fetch(API_URL)
        .then(response => {
            console.log("Respuesta recibida:", response); // Mostrar la respuesta en consola
            if (!response.ok) {
                throw new Error(`Error en la respuesta: ${response.status}`);
            }
            return response.json(); // Convertir la respuesta en formato JSON
        })
        .then(data => {
            console.log("Datos obtenidos:", data); // Mostrar datos obtenidos en consola
            displayQuote(data); // Llamar a la función para mostrar la cita
        })
        .catch(error => {
            console.error("Error al obtener la cita:", error); // Manejar errores
        });
}

function displayQuote(quoteData) {
    const container = document.getElementById('quote-container');
    container.innerHTML = `
        <strong>${quoteData.character.name}:</strong> "${quoteData.sentence}"
    `;
    console.log("Cita mostrada correctamente");
}

// Llamar a la función al cargar la página
fetchQuote();
