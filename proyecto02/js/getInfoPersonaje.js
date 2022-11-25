
const contenido = document.querySelector("main#contenido");

function cargarEstadisticas(urlCharacter) {
    contenido.innerHTML = `<article class="container text-center"> </article>`;
    cargarInterfaz(urlCharacter);
}

function cargarInterfaz(urlCharacter) {
    obtenerPersonaje(urlCharacter).then(infoCharacter => {
        let { name, thumbnail, description, comics, series, stories, events } = infoCharacter;
        let arrNumeros = {
            comics: comics.available,
            series: series.available,
            stories: stories.available,
            events: events.available
        }
        let { path, extension } = thumbnail;
        let articleMain = document.querySelector("article.container");
        articleMain.innerHTML = `<section class="row justify-content-center"><div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${path+"."+extension}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${description}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div></section>
      <section class="row"><canvas id="graficone"></canvas></section>`
      setTimeout(cargarGraficaOne(arrNumeros),1000)
    });
}

function cargarGraficaOne({comics,series,stories,events}){
    const grafi = document.querySelector("section.row canvas#graficone");
    console.log(grafi)
    let confi = {
        type:'doughnut',
        data: {
            labels:[
                'comic',
                'series',
                'stories',
                'events'
            ],
            datasets:[{
                label: '#',
                data:[comics,series,stories,events],
                backgroundColor:[
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)'
                ]
            }]
        },
        options:{}
    }
    new Chart(grafi,confi)
}



async function obtenerPersonaje(urlCharacter = "") {
    let url = urlCharacter + `?` + CREDENTIAL;
    const response = await fetch(url);
    const personajes = await response.json();
    return personajes.data.results[0];
}