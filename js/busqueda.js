const busqueda = document.getElementById("busqueda");
const inputBusqueda = document.getElementById("input-busqueda");
const busquedaPokedex = document.getElementById("div-busqueda-pokedex");
const busquedaAtaques = document.getElementById("div-busqueda-ataques");
const busquedaRegiones = document.getElementById("div-busqueda-regiones");
const botonPokedex = document.getElementById("pokedex");
const botonAtaques = document.getElementById("ataques");
const botonRegiones = document.getElementById("regiones");
const botonTablaTipos = document.getElementById("tabla-tipos");
const botonJuego = document.getElementById("juego");

botonPokedex.disabled = true;
botonAtaques.disabled = true;
botonRegiones.disabled = true;
botonTablaTipos.disabled = true;
botonJuego.disabled = true;

setTimeout(function () {
    if (dialogoOak.style.display == "")
        botonTablaTipos.disabled = false;
}, 2000);
setTimeout(function () {
    if (dialogoOak.style.display == "")
        botonJuego.disabled = false;
}, 5000);

var pokemons = new Map();
var movimientos = new Map();
var regiones = new Map();

cargarDatosPokemon();
cargarDatosMovimientos();
cargarDatosRegiones();

busqueda.addEventListener("click", function (event) {
    let pokemonMainListener = event.target.classList[0].split("-")[0];
    let pokemonSecondaryListener = "";
    if (event.target.classList[0].split("-").length > 1)
        pokemonSecondaryListener = event.target.classList[0].split("-")[1];
    if (pokemonMainListener.includes("pokemon")) {
        const pokemonName = event.target.getAttribute("name");
        mostrarContenidoPokemon(pokemons.get(pokemonName));
    }
    if (pokemonSecondaryListener.length > 0 && pokemonSecondaryListener.includes("pokemon")){
        const pokemonName = event.target.parentNode.getAttribute("name");
        mostrarContenidoPokemon(pokemons.get(pokemonName));
    }

    let movimientoMainListener = event.target.classList[0].split("-")[0];
    let movimientoSecondaryListener = "";
    if (event.target.classList[0].split("-").length > 1)
        movimientoSecondaryListener = event.target.classList[0].split("-")[1];
    if (movimientoMainListener.includes("movimiento")) {
        const movimientoInfo = movimientos.get(event.target.getAttribute("name"));
        mostrarContenidoAtaque(movimientoInfo);
    }
    if (movimientoSecondaryListener.length > 0 && movimientoSecondaryListener.includes("movimiento")) {
        const movimientoInfo = movimientos.get(event.target.parentNode.getAttribute("name"));
        mostrarContenidoAtaque(movimientoInfo);
    }

    let regionMainListener = event.target.classList[0];
    if (regionMainListener.includes("region") && !regionMainListener.includes("-")) {
        const regionInfo = regiones.get(event.target.getAttribute("name"));
        mostrarContenidoRegion(regionInfo);
    }
});

async function cargarDatosPokemon() {
    for (let i = 1; i <= 905; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(pokemon => pokemon.json()).then(pokemon => {
            let id = pokemon.id;
            let nombre = pokemon.name;
            let divPokemon = document.createElement("div");
            let tipo1 = pokemon.types[0].type.name;
            let tipo2 = "";
            if (pokemon.types.length > 1)
                tipo2 = pokemon.types[1].type.name;
            divPokemon.setAttribute("class", "pokemon " + id + " " + tipo1 + " " + tipo2);
            divPokemon.setAttribute("name", nombre);
            divPokemon.innerHTML = `<img src="${pokemon.sprites.front_default} "class="mini-pokemon" name="${nombre}">` +
                                    `<p class="id-pokemon">#${("0000".slice(0, -(id.toString().length)) + id)}</p>` +
                                    `<p class="nombre-pokemon">${nombre}</p>`;
            busquedaPokedex.appendChild(divPokemon);
            pokemons.set(nombre, pokemon);
        });
        await sleep(5);
    }

    inputBusqueda.placeholder = "Datos cargados";
    setTimeout(function () {
        inputBusqueda.placeholder = "Accede a una pestaña y busca";
        if (dialogoOak.style.display == "") {
            botonPokedex.disabled = false;
            botonAtaques.disabled = false;
            botonRegiones.disabled = false;
        }
    }, 1000);
}

async function cargarDatosMovimientos() {
    for (let i = 1; i <= 900; i++) {
        fetch(`https://pokeapi.co/api/v2/move/${i}`).then(movimiento => movimiento.json()).then(movimiento => {
            let nombre = movimiento.name;
            let tipo = movimiento.type.name;
            let imagen = "img/general/" + movimiento.damage_class.name + "Attack.png";
            if ((nombre != "pound" || i == 1) && movimiento.learned_by_pokemon.length > 0) {
                if (movimiento.learned_by_pokemon.length >= 1 && movimiento.learned_by_pokemon[0].url.split("/")[6] <= 905) {
                    let divMovimiento = document.createElement("div");
                    divMovimiento.setAttribute("class", "movimiento"+tipo);
                    divMovimiento.setAttribute("name", nombre);
                    let claseTipo = `tipo-movimiento-${tipo.toLowerCase()}`;
                    divMovimiento.innerHTML = `<img src="${imagen}" class="mini-movimiento" alt="${nombre}">
                                                <p class="nombre-movimiento">${nombre}</p>
                                                <p class="${claseTipo}">${tipo.substring(0, 3)}</p>`;
                    busquedaAtaques.appendChild(divMovimiento);
                    movimientos.set(nombre, movimiento);
                }                    
            }
        });
        await sleep(1); 
    }
}

async function cargarDatosRegiones() {
    for (let i = 1; i <= 8; i++) {
        fetch(`https://pokeapi.co/api/v2/region/${i}`).then(region => region.json()).then(region => {
            let nombre = region.name;
            let divRegion = document.createElement("div");
            divRegion.setAttribute("class", "region");
            divRegion.setAttribute("name", nombre);
            divRegion.innerHTML = `<p class="nombre-region">${nombre}</p>`;
            busquedaRegiones.appendChild(divRegion);
            regiones.set(nombre, region);
        });
        await sleep(1);
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}