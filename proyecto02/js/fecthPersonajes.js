window.addEventListener("load", () => {
    const containerPersonajes = document.querySelector("article.container section#personajes");
    containerPersonajes.innerHTML = "";
    obtenerPersonajes().then(({ results }) => {
        results.map(({ name, modified, description, thumbnail }) => {
            containerPersonajes.innerHTML += `
            <div class="col-6">
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${thumbnail.path + "." + thumbnail.extension}" class="img-fluid rounded-start" alt="imagen del personaje ${name}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${description}</p>
                  <p class="card-text"><small class="text-muted">${modified}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>`
        })
    })

});

async function obtenerPersonajes(limit = 6, offset = 0) {
    const URL = `http://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&ts=3000&apikey=c0c7a7a4d7b567db6bdd487b26f69959&hash=edd7c232f6dda15da4de0ba9ce76426d`;
    const response = await fetch(URL);
    const personajes = await response.json();
    return personajes.data;
}
