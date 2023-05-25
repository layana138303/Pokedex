var loadScreen = document.getElementById("loading");

const busquedaTotal = document.getElementById("busqueda-total");
const contenido = document.getElementById("contenido");
const buscador = document.getElementById("buscador");
const inputBusqueda = document.getElementById("input-busqueda");
const botonBusqueda = document.getElementById("boton-busqueda");

const divBusquedaMegadex = document.getElementById("div-busqueda-megadex");
const divBusquedaPokedex = document.getElementById("div-busqueda-pokedex");
const divBusquedaRegiones = document.getElementById("div-busqueda-regiones");
const divBusquedaAtaques = document.getElementById("div-busqueda-ataques");
const divBusquedaTablaTipos = document.getElementById("div-busqueda-tabla-tipos");

const divElementoABuscar = document.getElementById("div-elemento-a-buscar");

const botonMegadex = document.getElementById('megadex');
const botonPokedex = document.getElementById("pokedex");
const botonAtaques = document.getElementById("ataques");
const botonRegiones = document.getElementById("regiones");
const botonTablaTipos = document.getElementById("tabla-tipos");
const botonJuego = document.getElementById("juego");

var megaPokemonsCargados = false;
var pokemonsCargados = false;
var movimientosCargados = false;
var regionesCargadas = false;

var acabaCargaMegaPokemon = false;
var acabaCargaPokemon = false;
var acabaCargaMovimientos = false;
var acabaCargaRegiones = false;

botonMegadex.addEventListener("click", function() {
    soloMostrarPokedex(true);
    cargarDatosMegaPokemon();
});
botonPokedex.addEventListener("click", function() {
    soloMostrarPokedex(false);
    cargarDatosPokemon();
});
botonAtaques.addEventListener("click", function() {
    soloMostrarAtaques();
    cargarDatosMovimientos();
});
botonRegiones.addEventListener("click", function() {
    soloMostrarRegiones();
    cargarDatosRegiones();
});
botonTablaTipos.addEventListener("click", function() {
    soloMostrarTablaTipos();
});
botonJuego.addEventListener("click", function() {
    soloMostrarJuego();
});

var megaPokemons = new Map();
var pokemons = new Map();
var movimientos = new Map();
var regiones = new Map();

document.addEventListener("focusin", function(event) {
    if (event.target.getAttribute("tabindex") > 1000) {
        menuFocus = document.getElementById(event.target.id);
    }
});

function soloMostrarPokedex(esMega) {
    busquedaTotal.style.display = "block";
    if (esMega === true) {
        divBusquedaMegadex.style.display = "block";
        divBusquedaPokedex.style.display = "none";
        if (document.documentElement.lang == "es") {
            inputBusqueda.placeholder = "Busca mega por nombre o id";
        } else {
            inputBusqueda.placeholder = "Search mega by name or id";
        }
        inputBusqueda.setAttribute("data-placeholder-key", "busqueda-megapokedex");
    } else {
        divBusquedaMegadex.style.display = "none";
        divBusquedaPokedex.style.display = "block";
        if (document.documentElement.lang == "es") {
            inputBusqueda.placeholder = "Busca pokemon por nombre o id";
        } else {
            inputBusqueda.placeholder = "Search pokemon by name or id";
        }
        inputBusqueda.setAttribute("data-placeholder-key", "busqueda-pokedex");
    }
    divBusquedaAtaques.style.display = "none";
    divBusquedaRegiones.style.display = "none";
    divBusquedaTablaTipos.style.display = "none";
    divElementoABuscar.style.display = "none";

    let contenidoDisplays = document.querySelectorAll(".contenido-visual > div");
    contenidoDisplays.forEach(element => {
        element.style.display = "none";
    });
    
    inputBusqueda.value = "";
    inputBusqueda.disabled = false;

    busquedaTotal.style.width = "20%";
    buscador.style.width = "100%";
    contenido.style.width = "70%";
}

function soloMostrarRegiones() {
    busquedaTotal.style.display = "block";
    divBusquedaAtaques.style.display = "none";
    divBusquedaMegadex.style.display = "none";
    divBusquedaPokedex.style.display = "none";
    divBusquedaTablaTipos.style.display = "none";
    divBusquedaRegiones.style.display = "block";
    divElementoABuscar.style.display = "none";

    let contenidoDisplays = document.querySelectorAll(".contenido-visual > div");
    contenidoDisplays.forEach(element => {
        element.style.display = "none";
    });

    inputBusqueda.placeholder = "";
    inputBusqueda.setAttribute("data-placeholder-key", "busqueda-regiones");

    inputBusqueda.value = "";
    inputBusqueda.disabled = true;

    busquedaTotal.style.width = "10%";
    buscador.style.width = "95%";
    contenido.style.width = "80%";
}

function soloMostrarAtaques() {
    busquedaTotal.style.display = "block";
    divBusquedaMegadex.style.display = "none";
    divBusquedaPokedex.style.display = "none";
    divBusquedaRegiones.style.display = "none";
    divBusquedaTablaTipos.style.display = "none";
    divBusquedaAtaques.style.display = "block";
    divElementoABuscar.style.display = "none";

    let contenidoDisplays = document.querySelectorAll(".contenido-visual > div");
    contenidoDisplays.forEach(element => {
        element.style.display = "none";
    });

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
}

function soloMostrarTablaTipos() {
    busquedaTotal.style.display = "none";
    divBusquedaMegadex.style.display = "none";
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
    divBusquedaMegadex.style.display = "none";
    divBusquedaPokedex.style.display = "none";
    divBusquedaRegiones.style.display = "none";
    divBusquedaAtaques.style.display = "none";
    divBusquedaTablaTipos.style.display = "none";
    divElementoABuscar.style.display = "none";

    contenido.style.width = "90%";

    mostrarContenidoJuego();
}

botonBusqueda.addEventListener('click', function() {
    if (divElementoABuscar.firstElementChild != null) {
        divElementoABuscar.firstElementChild.focus();
    }

    const elements = document.querySelectorAll('.elemento-a-buscar > div');
    navigationThroughLists(elements);
});

inputBusqueda.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        botonBusqueda.click();
    }
});

function navigationThroughLists(elements) {
    elements.forEach((element, index) => {
        element.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowDown' || event.key === 'Tab') {
                event.preventDefault();
                if (index < elements.length - 1) {
                    elements[index + 1].focus();
                } else {
                    elements[0].focus();
                }
            }
            if (event.key === 'ArrowUp' || (event.key === 'Tab' && event.shiftKey)) {
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

inputBusqueda.addEventListener("input", buscarElemento);

function buscarElemento() {
    divElementoABuscar.innerHTML = "";
    let elementoABuscar = inputBusqueda.value.toLowerCase();

    if (inputBusqueda.placeholder.includes("mega") || inputBusqueda.placeholder.includes("Mega")) {
        const divsPokemon = divBusquedaMegadex.querySelectorAll('.mega');
        busquedaPokemon(divsPokemon, elementoABuscar, true);

    } else if (inputBusqueda.placeholder.includes("pokemon") || inputBusqueda.placeholder.includes("Pokemon")) {
        const divsPokemon = divBusquedaPokedex.querySelectorAll('.pokemon');
        busquedaPokemon(divsPokemon, elementoABuscar, false);

    } else if (inputBusqueda.placeholder.includes("ataque") || inputBusqueda.placeholder.includes("move") || inputBusqueda.placeholder.includes("Move")) {       
        const divsMovimiento = divBusquedaAtaques.querySelectorAll('div [class^="movimiento"]');
        busquedaAtaque(divsMovimiento, elementoABuscar);
    }
}

function busquedaPokemon(divsPokemon, elementoABuscar, esMega) {
    if (esMega) {
        divBusquedaMegadex.style.display = "none";
    }
    else {
        divBusquedaPokedex.style.display = "none";
    }
    divElementoABuscar.style.display = "block";

    divsPokemon.forEach(div => {
        let nombre = div.getAttribute("name").toLowerCase();
        let id = div.classList[2];
        let tipo1 = div.classList[3];
        let tipo2 = "";
        if (div.classList.length == 5) {
            tipo2 = div.classList[4];
        }
        if (nombre.includes(elementoABuscar) || id.includes(elementoABuscar) || tipo1.includes(elementoABuscar) || tipo2.includes(elementoABuscar)) {
            divElementoABuscar.appendChild(div.cloneNode(true));
            return;
        }
    });
}

function busquedaAtaque(divsMovimiento, elementoABuscar) {
    divBusquedaAtaques.style.display = "none";
    divElementoABuscar.style.display = "block";

    divsMovimiento.forEach(div => {
        let nombre = div.getAttribute("name").toLowerCase();
        let tipo = div.classList[0];
        if (nombre.includes(elementoABuscar) || tipo.includes(elementoABuscar)) {
            divElementoABuscar.style.padding = "0";
            divElementoABuscar.appendChild(div.cloneNode(true));
            return;
        }
    });
}

busqueda.addEventListener("click", mostrarContenidoElementoBusqueda);

function mostrarContenidoElementoBusqueda (event) {
    if (event.target.classList[0] === "busqueda")
        return;

    let pokemonMainListener = event.target.classList[0].split("-")[0];
    let pokemonSecondaryListener = "";
    if (event.target.classList[0].split("-").length > 1)
        pokemonSecondaryListener = event.target.classList[0].split("-")[1];
    if (pokemonMainListener.includes("pokemon")) {
        let pokemonName;
        if (event.target.classList[1].includes("mega")) {
            pokemonName = event.target.getAttribute("name");
            mostrarContenidoPokemon(megaPokemons.get(pokemonName));
        }
        else {
            pokemonName = event.target.getAttribute("name");
            mostrarContenidoPokemon(pokemons.get(pokemonName));
        }
    }
    if (pokemonSecondaryListener.length > 0 && pokemonSecondaryListener.includes("pokemon")){
        let pokemonName;
        if (pokemonSecondaryListener.includes("mega")) {
            pokemonName = event.target.parentNode.getAttribute("name");
            mostrarContenidoPokemon(megaPokemons.get(pokemonName));
        }
        else {
            pokemonName = event.target.parentNode.getAttribute("name");
            mostrarContenidoPokemon(pokemons.get(pokemonName));
        }
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

function cargarDatosMegaPokemon() {
    if (!megaPokemonsCargados) {
        loadScreen.style.display = "block";

        megaPokemonsCargados = true;

        let botones = document.querySelectorAll(".boton-aside");
        botones.forEach((boton) => {
            boton.disabled = true;
        });

        (async () => {
            let divs = [];
            let fetchPromises = [];

            for (let i = 10001; i <= 10271; i++) {
                const fetchPromise = fetch(
                    `https://pokeapi.co/api/v2/pokemon/${i}`,
                    { timeout: 5000 }
                )
                .then((response) => response.json())
                .then((pokemon) => {           
                    let id = pokemon.id;
                    let nombre = pokemon.name;
            
                    if (!nombre.includes("mega") && !nombre.includes("gmax")) {
                        return;
                    }
            
                    let divPokemon = document.createElement("div");
                    let tipo1 = pokemon.types[0].type.name;
                    let tipo2 = "";
                    if (pokemon.types.length > 1)
                        tipo2 = pokemon.types[1].type.name;
                    divPokemon.setAttribute("class", "pokemon mega " + id + " " + tipo1 + " " + tipo2);
                    divPokemon.setAttribute("name", nombre);
                    divPokemon.setAttribute("tabindex", id - 1);
                    divPokemon.setAttribute("aria-label", nombre);
                    divPokemon.innerHTML = `<img src="${pokemon.sprites.front_default} "class="mini-megapokemon" alt="${nombre}">
                                            <p class="id-megapokemon">#${("0000".slice(0, -(id.toString().length)) + id)}</p>
                                            <p class="nombre-megapokemon">${nombre}</p>`;
                    divs[i - 10001] = divPokemon;
                    megaPokemons.set(nombre, pokemon);
                })
                .catch(error => {
                        if (error.name === 'AbortError') {
                            console.error("Error al obtener los datos del Pokemon ", i);
                        } else {
                            console.error("Error al obtener los datos del Pokemon ", i);
                    }                    
                    throw error;
                });
                
                fetchPromises.push(fetchPromise);
            }
            try {
                await Promise.all(fetchPromises);
            } catch (error) {}

            for (let i = 0; i < divs.length; i++) {
                if (divs[i] != undefined)
                    divBusquedaMegadex.appendChild(divs[i]);
            }
    
            loadScreen.style.display = 'none';

            setTimeout(() => {
                botones.forEach((boton) => {
                    boton.disabled = false;
                });
            }, 1000);
    
            divBusquedaMegadex.firstElementChild.focus();
            const elements = document.querySelectorAll('.mega');
            navigationThroughLists(elements);
    
            acabaCargaMegaPokemon = true;
        })();
    }
    else if (megaPokemonsCargados && acabaCargaMegaPokemon) {
        divBusquedaMegadex.firstElementChild.focus();
        const elements = document.querySelectorAll('.mega');
        navigationThroughLists(elements);
    }
}

function cargarDatosPokemon() {    
    if (!pokemonsCargados) {
        loadScreen.style.display = "block";

        pokemonsCargados = true;

        let botones = document.querySelectorAll(".boton-aside");
        botones.forEach((boton) => {
            boton.disabled = true;
        });

        (async () => {
            let divs = [];
            let fetchPromises = [];

            for (let i = 1; i <= 905; i++) {          
                const fetchPromise = fetch(
                    `https://pokeapi.co/api/v2/pokemon/${i}`,
                    { timeout: 5000 }
                )
                .then((response) => response.json())
                .then((pokemon) => {           
                    let id = pokemon.id;
                    let nombre = pokemon.name;
                    
                    let divPokemon = document.createElement('div');
                    let tipo1 = pokemon.types[0].type.name;
                    let tipo2 = '';
                    if (pokemon.types.length > 1) 
                    tipo2 = pokemon.types[1].type.name;
                    
                    divPokemon.setAttribute('class', 'pokemon noMega ' + id + ' ' + tipo1 + ' ' + tipo2);
                    divPokemon.setAttribute('name', nombre);
                    divPokemon.setAttribute('tabindex', id - 1);
                    divPokemon.setAttribute('aria-label', nombre);
                    divPokemon.innerHTML = `<img src="${pokemon.sprites.front_default}" class="mini-pokemon" alt="${nombre}">
                                            <p class="id-pokemon">#${('0000'.slice(0, -(id.toString().length)) + id)}</p>
                                            <p class="nombre-pokemon">${nombre}</p>`;
                    
                    divs[id - 1] = divPokemon;
                    pokemons.set(nombre, pokemon);
                })
                .catch(error => {
                        if (error.name === 'AbortError') {
                            console.error("Error al obtener los datos del Pokemon ", i);
                        } else {
                            console.error("Error al obtener los datos del Pokemon ", i);
                    }                    
                    throw error;
                });
            
                fetchPromises.push(fetchPromise);
            }
            
            try {
                await Promise.all(fetchPromises);
            } catch (error) {}
            
            for (let i = 0; i < divs.length; i++) {
                if (divs[i] != undefined)
                    divBusquedaPokedex.appendChild(divs[i]);
            }
    
            loadScreen.style.display = 'none';

            setTimeout(() => {
                botones.forEach((boton) => {
                    boton.disabled = false;
                });
            }, 1000);
    
            divBusquedaPokedex.firstElementChild.focus();
            const elements = document.querySelectorAll('.noMega');
            navigationThroughLists(elements);
    
            acabaCargaPokemon = true;
        })();
    }
    else if (pokemonsCargados && acabaCargaPokemon) {
        divBusquedaPokedex.firstElementChild.focus();
        const elements = document.querySelectorAll('.noMega');
        navigationThroughLists(elements);
    }
}

function cargarDatosMovimientos() {
    if (!movimientosCargados) {
        loadScreen.style.display = "block";

        movimientosCargados = true;

        let botones = document.querySelectorAll(".boton-aside");
        botones.forEach((boton) => {
            boton.disabled = true;
        });

        (async () => {
            let divs = [];
            let fetchPromises = [];

            for (let i = 1; i <= 900; i++) {
                const fetchPromise = fetch(
                    `https://pokeapi.co/api/v2/move/${i}`,
                    { timeout: 5000 }
                )
                .then((response) => response.json())
                .then((movimiento) => {            
                    let tipo = movimiento.type.name;
                    let nombre = movimiento.name;
                    let imagen = "img/general/" + movimiento.damage_class.name + "Attack.webp";
                    if ((nombre != "pound" || movimiento.id == 1) && movimiento.learned_by_pokemon.length > 0) {
                        let divMovimiento = document.createElement("div");
                        divMovimiento.setAttribute("class", "movimiento" + tipo);
                        divMovimiento.setAttribute("name", nombre);
                        divMovimiento.setAttribute("tabindex", i - 1);
                        divMovimiento.setAttribute("aria-label", nombre);
                        let claseTipo = `tipo-movimiento-${tipo.toLowerCase()}`;
                        divMovimiento.innerHTML = `<img src="${imagen}" class="mini-movimiento" alt="${nombre}">
                                                <p class="nombre-movimiento">${nombre}</p>
                                                <p class="${claseTipo}">${tipo.substring(0, 3)}</p>`;
                        divs[movimiento.id - 1] = divMovimiento;
                        movimientos.set(nombre, movimiento);
                    }
                })
                .catch(error => {
                        if (error.name === 'AbortError') {
                            console.error("Error al obtener los datos del movimiento ", i);
                        } else {
                            console.error("Error al obtener los datos del movimiento ", i);
                    }                    
                    throw error;
                });
                
                fetchPromises.push(fetchPromise);
            }
            
            try {
                await Promise.all(fetchPromises);
            } catch (error) {}
            
            for (let i = 0; i < divs.length; i++) {
                if (divs[i] != undefined)
                    divBusquedaAtaques.appendChild(divs[i]);
            }
    
            loadScreen.style.display = 'none';

            setTimeout(() => {
                botones.forEach((boton) => {
                    boton.disabled = false;
                });
            }, 1000);
    
            divBusquedaAtaques.firstElementChild.focus();
            const elements = document.querySelectorAll('.movimiento');
            navigationThroughLists(elements);
    
            acabaCargaMovimientos = true;
        })();
    }
    else if (movimientosCargados && acabaCargaMovimientos) {
        divBusquedaAtaques.firstElementChild.focus();
        const elements = document.querySelectorAll('[class^="movimiento"]');
        navigationThroughLists(elements);
    }
}

async function cargarDatosRegiones() { 
    if (!regionesCargadas) {
        loadScreen.style.display = "block";

        regionesCargadas = true;

        let botones = document.querySelectorAll(".boton-aside");
        botones.forEach((boton) => {
            boton.disabled = true;
        });

        (async () => {
            let divs = [];
            let fetchPromises = [];

            for (let i = 1; i <= 8; i++) {          
                const fetchPromise = fetch(
                    `https://pokeapi.co/api/v2/region/${i}`,
                    { timeout: 5000 }
                )
                .then((response) => response.json())
                .then((region) => {
                    let nombre = region.name;
                    let divRegion = document.createElement("div");
                    divRegion.setAttribute("class", "region");
                    divRegion.setAttribute("name", nombre);
                    divRegion.setAttribute("tabindex", i - 1);
                    divRegion.setAttribute("aria-label", nombre);
                    divRegion.innerHTML = `<p class="nombre-region">${nombre}</p>`;
                    divs[i] = divRegion;
                    regiones.set(nombre, region);
                })
                .catch(error => {
                        if (error.name === 'AbortError') {
                            console.error("Error al obtener los datos de la region ", i);
                        } else {
                            console.error("Error al obtener los datos de la region ", i);
                    }                    
                    throw error;
                });

                fetchPromises.push(fetchPromise);
            }

            try {
                await Promise.all(fetchPromises);
            } catch (error) {}

            for (let i = 0; i < divs.length; i++) {
                if (divs[i] != undefined)
                    divBusquedaRegiones.appendChild(divs[i]);
            }
    
            loadScreen.style.display = 'none';

            setTimeout(() => {
                botones.forEach((boton) => {
                    boton.disabled = false;
                });
            }, 1000);
    
            divBusquedaRegiones.firstElementChild.focus();
            const elements = document.querySelectorAll('.region');
            navigationThroughLists(elements);
    
            acabaCargaRegiones = true;
        })();
    }
    else if (regionesCargadas && acabaCargaRegiones) {
        divBusquedaRegiones.firstElementChild.focus();
        const elements = document.querySelectorAll('.region');
        navigationThroughLists(elements);
    }
}