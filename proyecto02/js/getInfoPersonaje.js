
const contenido = document.querySelector("main#contenido");
let urlIdCharacter = "";
let grafictwoRef = null;

function cargarEstadisticas(urlCharacter) {
    urlIdCharacter = urlCharacter;
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
        articleMain.innerHTML = `<section class="row justify-content-center align-items-center">
        <div class="col-6">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${path + "." + extension}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${description}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <select class="form-select" aria-label="Default select example" onchange="filtroEvent()">
                <option selected>Open this select menu</option>
                <option value="1">Comics</option>
                <option value="2">Series</option>
                <option value="3">Stories</option>
                <option value="4">Events</option>
            </select>
        </div>
        <div class="col-5 text-center">
            <canvas id="graficone"></canvas>
        </div>
        <div class="col-6 text-center">
            <canvas id="grafictwo"></canvas>
        </div>
      </section>
      <section class="row justify-content-center m-3"><button class="btn btn-danger col-3" onclick="window.location.reload()">Return</button></section>`
        setTimeout(()=>{cargarGraficaOne(arrNumeros); filtroEvent()}, 1000)
    });
}

function filtroEvent() {
    let filter = document.querySelector("div.col-6 select.form-select");
    switch (filter.value) {
        case 1:
            sendInfoComicsToGrafic();
            break;
        case 2:
            sendInfoSeriesToGrafic();
            break;
        case 3:
            sendInfoStoriesToGrafic();
            break;
        case 4:
            sendInfoEventsToGrafic();
            break;
        default:
            sendInfoComicsToGrafic();
    }
}

function sendInfoComicsToGrafic(){
    let data = {
        name:"Comics"
    }
    getComics().then(dataCo => {
        if(grafictwoRef != null) grafictwoRef.destroy();
        dataCo.map(({title,pageCount})=>{
            data[title] = pageCount;
        })
        grafictwoRef = cargarGaleriaTwo(data);
        grafictwoRef.update();
    })
}

function sendInfoSeriesToGrafic(){
    let data = {
        name:"Series"
    }
    getSeries().then(dataSe => {
        if(grafictwoRef != null) grafictwoRef.destroy();
        dataSe.map(({title,creators})=>{
            data[title] = creators.available;
        })
        grafictwoRef = cargarGaleriaTwo(data);
        grafictwoRef.update();
    })
}

function sendInfoStoriesToGrafic(){
    let data = {
        name:"Stories"
    }
    getStories().then(dataSt => {
        if(grafictwoRef != null) grafictwoRef.destroy();
        dataSt.map(({title,creators})=>{
            data[title] = creators.available;
        })
        grafictwoRef = cargarGaleriaTwo(data);
        grafictwoRef.update();
    })
}

function sendInfoEventsToGrafic(){
    let data = {
        name:"Eventos"
    }
    getEvents().then(dataEv => {
        if(grafictwoRef != null) grafictwoRef.destroy();
        dataEv.map(({title,creators})=>{
            data[title] = creators.available;
        })
        grafictwoRef = cargarGaleriaTwo(data);
        grafictwoRef.update();
    })
}

function cargarGraficaOne({ comics, series, stories, events }) {
    let grafi = document.querySelector("section.row canvas#graficone");
    let confi = {
        type: 'doughnut',
        data: {
            labels: [
                'comics',
                'series',
                'stories',
                'events'
            ],
            datasets: [{
                label: '#',
                data: [comics, series, stories, events],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)'
                ]
            }]
        },
        options: {}
    }
    new Chart(grafi, confi)
}

function cargarGaleriaTwo(data) {
    let grafi = document.querySelector("canvas#grafictwo");
    let confi = {
        type: 'bar',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: data.name,
                data: Object.values(data),
                backgroundColor:'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
    return new Chart(grafi, confi);
}

async function obtenerPersonaje(urlCharacter = "") {
    let url = urlCharacter + `?` + CREDENTIAL;
    const response = await fetch(url);
    const personajes = await response.json();
    return personajes.data.results[0];
}

//entrega un array
async function getComics() {
    let url = urlIdCharacter + "/comics?" + CREDENTIAL;
    let response = await fetch(url);
    let info = await response.json();
    return info.data.results;
}

async function getSeries() {
    let url = urlIdCharacter + "/series?" + CREDENTIAL;
    let response = await fetch(url);
    let info = await response.json();
    return info.data.results;
}

async function getStories() {
    let url = urlIdCharacter + "/stories?" + CREDENTIAL;
    let response = await fetch(url);
    let info = await response.json();
    return info.data.results;
}

async function getEvents() {
    let url = urlIdCharacter + "/events?" + CREDENTIAL;
    let response = await fetch(url);
    let info = await response.json();
    return info.data.results;
}
