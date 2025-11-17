const listaCaracteres = document.getElementById("character-list");
let paginaActual = 1;
const botonNext = document.getElementById("next-page");
const botonPrev = document.getElementById("prev-page");

function traerPersonajes() {
  fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const characters = data.results
        .map(character => {
          return `
            <li class="card">
              <img src="${character.image}" alt="${character.name}" />
              <h2><strong>Nombre:</strong> ${character.name}</h2>
              <p><strong>Especie:</strong> ${character.species}</p>
            </li>
          `;
        })
        .join("");

      listaCaracteres.innerHTML = characters;
    })
    .catch(err => {
      listaCaracteres.innerHTML = `<h3 class="error">${err}</h3>`;
    });
}

botonPrev.addEventListener("click", () => {
  if (paginaActual > 1) {
    paginaActual--;
    traerPersonajes();
  }
});

botonNext.addEventListener("click", () => {
  if (paginaActual < 42) {
    paginaActual++;
    traerPersonajes();
  }
});

traerPersonajes();