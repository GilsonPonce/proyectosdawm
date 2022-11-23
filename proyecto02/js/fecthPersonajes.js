const btnnext = document.getElementById("btnnext");
const btnprevious = document.getElementById("btnprevious");
const limit = 4;
let peticion = 0;


window.addEventListener("load", () => {
  llenarPersonajes();
  habilitarBotonPrevious();
});

btnnext.addEventListener("click", () => {
  peticion++;
  let offset = peticion * limit;
  llenarPersonajes(offset);
  habilitarBotonPrevious();
});

btnprevious.addEventListener("click", () => {
  peticion--;
  let offset = peticion * limit;
  llenarPersonajes(offset);
  habilitarBotonPrevious();
});

function llenarPersonajes(offset) {
  const containerPersonajes = document.querySelector("article.container section#personajes");
  containerPersonajes.innerHTML = `<div class="spinner-border" style="width: 20rem; height: 20rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
  obtenerPersonajes(offset).then(({ results }) => {
    containerPersonajes.innerHTML = "";
    results.map(({ name, description, thumbnail }) => {

      containerPersonajes.innerHTML += `
            <div class="col-6">
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${thumbnail.path + "." + thumbnail.extension}" class="img-fluid rounded-start" alt="imagen del personaje ${name}">
              </div>
              <div class="col-md-8">
                <div class="card-body text-dark">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${description == "" ? "No description to show" : description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>`

    })
  })
}

async function obtenerPersonajes(offset = 0) {
  const URL = `http://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&ts=3000&apikey=c0c7a7a4d7b567db6bdd487b26f69959&hash=edd7c232f6dda15da4de0ba9ce76426d`;
  const response = await fetch(URL);
  const personajes = await response.json();
  return personajes.data;
}

function habilitarBotonPrevious() {
  if (peticion != 0) {
    btnprevious.classList.remove("d-none")
  } else {
    btnprevious.classList.add("d-none")
  }
}
