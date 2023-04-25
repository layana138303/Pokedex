const busquedaTotal = document.getElementById("busqueda-total");
const contenido = document.getElementById("contenido");
const buscador = document.getElementById("buscador");
const inputBusqueda = document.getElementById("input-busqueda");
const botonBusqueda = document.getElementById("boton-busqueda");

const divBusquedaPokedex = document.getElementById("div-busqueda-pokedex");
const divBusquedaRegiones = document.getElementById("div-busqueda-regiones");
const divBusquedaAtaques = document.getElementById("div-busqueda-ataques");
const divBusquedaTablaTipos = document.getElementById("div-busqueda-tabla-tipos");

const divElementoABuscar = document.getElementById("div-elemento-a-buscar");

const botonPokedex = document.getElementById("pokedex");
const botonAtaques = document.getElementById("ataques");
const botonRegiones = document.getElementById("regiones");

cargarDatosPokemon();
cargarDatosMovimientos();
cargarDatosRegiones();

var pokemons = new Map();
var movimientos = new Map();
var regiones = new Map();

document.addEventListener("focusin", function(event) {
    if (event.target.getAttribute("tabindex") > 1000) {
        menuFocus = document.getElementById(event.target.id);
    }
});

function soloMostrarPokedex(){
    busquedaTotal.style.display = "block";
    divBusquedaAtaques.style.display = "none";
    divBusquedaRegiones.style.display = "none";
    divBusquedaTablaTipos.style.display = "none";
    divBusquedaPokedex.style.display = "block";
    divElementoABuscar.style.display = "none";

    if (document.documentElement.lang == "es") {
        inputBusqueda.placeholder = "Busca pokemon por nombre o id";
    } else {
        inputBusqueda.placeholder = "Search pokemon by name or id";
    }
    inputBusqueda.setAttribute("data-placeholder-key", "busqueda-pokedex");
    
    inputBusqueda.value = "";
    inputBusqueda.disabled = false;

    busquedaTotal.style.width = "20%";
    buscador.style.width = "100%";
    contenido.style.width = "70%";

    divBusquedaPokedex.firstElementChild.focus();

    const elements = document.querySelectorAll('.pokemon');
    navigationThroughLists(elements);     
}

function soloMostrarRegiones(){
    busquedaTotal.style.display = "block";
    divBusquedaAtaques.style.display = "none";
    divBusquedaPokedex.style.display = "none";
    divBusquedaTablaTipos.style.display = "none";
    divBusquedaRegiones.style.display = "block";
    divElementoABuscar.style.display = "none";

    inputBusqueda.placeholder = "";
    inputBusqueda.setAttribute("data-placeholder-key", "busqueda-regiones");

    inputBusqueda.value = "";
    inputBusqueda.disabled = true;

    busquedaTotal.style.width = "10%";
    buscador.style.width = "95%";
    contenido.style.width = "80%";

    divBusquedaRegiones.firstElementChild.focus();

    const elements = document.querySelectorAll('.region');
    navigationThroughLists(elements);    
}

function soloMostrarAtaques(){
    busquedaTotal.style.display = "block";
    divBusquedaPokedex.style.display = "none";
    divBusquedaRegiones.style.display = "none";
    divBusquedaTablaTipos.style.display = "none";
    divBusquedaAtaques.style.display = "block";
    divElementoABuscar.style.display = "none";

    if (document.documentElement.lang == "es") {
        inputBusqueda.placeholder = "Busca ataque por nombre o tipo";
    } else {
        inputBusqueda.placeholder = "Search move by name or type";
    }
    inputBusqueda.setAttribute("data-placeholder-key", "busqueda-ataques");
    
    inputBusqueda.value = "";
    inputBusqueda.disabled = false;

    busquedaTotal.style.width = "20%";
    buscador.style.width = "100%";
    contenido.style.width = "70%";

    divBusquedaAtaques.firstElementChild.focus();

    const elements = document.querySelectorAll('[class^="movimiento"]');
    navigationThroughLists(elements);    
}

function soloMostrarTablaTipos(){
    busquedaTotal.style.display = "none";
    divBusquedaPokedex.style.display = "none";
    divBusquedaRegiones.style.display = "none";
    divBusquedaAtaques.style.display = "none";
    divBusquedaTablaTipos.style.display = "block";
    divElementoABuscar.style.display = "none";

    contenido.style.width = "90%";

    mostrarContenidoTablaTipos();

    selectorTipos.focus();
    selectorTipos.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            menuFocus.focus();
        }
    });
}

function soloMostrarJuego() {
    busquedaTotal.style.display = "none";
    divBusquedaPokedex.style.display = "none";
    divBusquedaRegiones.style.display = "none";
    divBusquedaAtaques.style.display = "none";
    divBusquedaTablaTipos.style.display = "none";
    divElementoABuscar.style.display = "none";

    contenido.style.width = "90%";

    mostrarContenidoJuego();
}

inputBusqueda.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        botonBusqueda.click();
        if (divElementoABuscar.firstElementChild != null) {
            divElementoABuscar.firstElementChild.focus();
        }
        
        const elements = document.querySelectorAll('.elemento-a-buscar > div');
        navigationThroughLists(elements);
    }
});

function navigationThroughLists(elements) {
    elements.forEach((element, index) => {
        element.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                if (index < elements.length - 1) {
                    elements[index + 1].focus();
                } else {
                    elements[0].focus();
                }
            }
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                if (index > 0) {
                    elements[index - 1].focus();
                } else {
                    elements[elements.length - 1].focus();
                }
            }
            if (event.key === 'Enter') {
                element.click();
            }
        });
    }); 
}

busquedaTotal.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        menuFocus.focus();
    }
    if (event.key === 'CapsLock') {
        inputBusqueda.focus();
    }
});

botonBusqueda.addEventListener("click", buscarElemento);

function buscarElemento() {
    divElementoABuscar.innerHTML = "";
    let elementoABuscar = inputBusqueda.value.toLowerCase();
    let encontrado = false;
    if (inputBusqueda.placeholder.includes("pokemon")) {
        divBusquedaPokedex.style.display = "none";
        divElementoABuscar.style.display = "block";

        const divsPokemon = divBusquedaPokedex.querySelectorAll('.pokemon');
        divsPokemon.forEach(div => {
            let nombre = div.getAttribute("name").toLowerCase();
            let id = div.classList[1];
            let tipo1 = div.classList[2];
            let tipo2;
            if (div.classList.length == 4) {
                tipo2 = div.classList[3];
            }
            if (elementoABuscar == nombre || parseInt(elementoABuscar) ==  parseInt(id) || elementoABuscar == tipo1 || elementoABuscar == tipo2) {
                divElementoABuscar.appendChild(div.cloneNode(true));
                encontrado = true;
                return;
            }
        });
        if (!encontrado) {
            if (document.documentElement.lang == "es") {
                inputBusqueda.placeholder = "No se ha encontrado el pokemon";
            } else {
                inputBusqueda.placeholder = "Pokemon not found";
            }
        }
    } else if (inputBusqueda.placeholder.includes("ataque") || inputBusqueda.placeholder.includes("move")) {
        divBusquedaAtaques.style.display = "none";
        divElementoABuscar.style.display = "block";

        const divsMovimiento = divBusquedaAtaques.querySelectorAll('div [class^="movimiento"]');
        divsMovimiento.forEach(div => {
            let nombre = div.getAttribute("name").toLowerCase();
            let tipo = div.classList[0];
            if (elementoABuscar == nombre || (tipo.includes(elementoABuscar) && elementoABuscar.length >= 3)) {
                divElementoABuscar.style.padding = "0";
                divElementoABuscar.appendChild(div.cloneNode(true));
                encontrado = true;
                return;
            }
        });
        if (!encontrado) {
            if (document.documentElement.lang == "es") {
                inputBusqueda.placeholder = "No se ha encontrado el ataque";
            } else {
                inputBusqueda.placeholder = "Move not found";
            }
        }
    }
    inputBusqueda.value = "";
}

busqueda.addEventListener("click", mostrarContenidoElementoBusqueda);

function mostrarContenidoElementoBusqueda (event) {
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
}

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
            divPokemon.setAttribute("tabindex", i-1);
            divPokemon.innerHTML = `<img src="${pokemon.sprites.front_default} "class="mini-pokemon" alt="${nombre}">` +
                                    `<p class="id-pokemon">#${("0000".slice(0, -(id.toString().length)) + id)}</p>` +
                                    `<p class="nombre-pokemon">${nombre}</p>`;
            divBusquedaPokedex.appendChild(divPokemon);
            pokemons.set(nombre, pokemon);
        });
        await sleep(5);
    }
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
                    divMovimiento.setAttribute("tabindex", i-1);
                    let claseTipo = `tipo-movimiento-${tipo.toLowerCase()}`;
                    divMovimiento.innerHTML = `<img src="${imagen}" class="mini-movimiento" alt="${nombre}">
                                                <p class="nombre-movimiento">${nombre}</p>
                                                <p class="${claseTipo}">${tipo.substring(0, 3)}</p>`;
                    divBusquedaAtaques.appendChild(divMovimiento);
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
            divRegion.setAttribute("tabindex", i-1);
            divRegion.innerHTML = `<p class="nombre-region">${nombre}</p>`;
            divBusquedaRegiones.appendChild(divRegion);
            regiones.set(nombre, region);
        });
        await sleep(1);
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}