
const listaCaracteres = document.getElementById("character-list");
let paginaActual = 1;
const botonNext = document.getElementById("next-page");
const botonPrev = document.getElementById("prev-page");

function traerPersonajes() {
  fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      listaCaracteres.innerHTML = "";
      
      
      data.results.forEach(personaje => {
        const card = `
          <div class="card">
            <img src="${personaje.image}" alt="${personaje.image}">
            <p><strong>Name:</strong> ${personaje.name}</p>
            <p><b>Species:</b> ${personaje.species}</p>
          </div>
        `;
        listaCaracteres.innerHTML += card; 
      });
    });
}

traerPersonajes();