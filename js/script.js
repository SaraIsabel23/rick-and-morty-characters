/*const listaCaracteres = document.getElementById("character-list");
const urlBase = 

function traerPersonajes() {
    fetch(`https://rickandmortyapi.com/api/character/?page=(1)`)
    .then(response => response.json())
    .then(data => {
        const card = `<div class="card"><img src="`https://rickandmortyapi.com/api/character
    })
}
console.log(traerPersonajes);

    /*.then(response => response.json())
    .then(data)
    }
}*/
const listaCaracteres = document.getElementById("character-list");
let paginaActual = 1;

function traerPersonajes() {
  // 1. PEDIR (fetch)
  fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}`)
    // 2. RECIBIR y convertir a JavaScript (response.json())
    .then(response => response.json())
    // 3. USAR los datos
    .then(data => {
      console.log(data);  // ← AQUÍ VES QUÉ TRAE LA API
      
      // Limpia lo viejo
      listaCaracteres.innerHTML = "";
      
      // Crea cards para cada personaje
      data.results.forEach(personaje => {
        const card = `
          <div class="card">
            <img src="${personaje.image}" alt="${personaje.image}">
            <p><strong>Name:</strong> ${personaje.name}</p>
            <p><b>Species:</b> ${personaje.species}</p>
          </div>
        `;
        listaCaracteres.innerHTML += card;  // Agrega el card
      });
    });
}

// Llama a la función
traerPersonajes();