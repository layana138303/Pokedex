const busquedaTotal = document.getElementById("busqueda-total");
const contenido = document.getElementById("contenido");
const buscador = document.getElementById("buscador");
const botonBusqueda = document.getElementById("boton-busqueda");

const divBusquedaPokedex = document.getElementById("div-busqueda-pokedex");
const divBusquedaRegiones = document.getElementById("div-busqueda-regiones");
const divBusquedaAtaques = document.getElementById("div-busqueda-ataques");
const divBusquedaTablaTipos = document.getElementById("div-busqueda-tabla-tipos");
const divElementoABuscar = document.getElementById("div-elemento-a-buscar");

const divContenidoPokedex = document.getElementById("div-contenido-visual-pokedex");
const divContenidoRegiones = document.getElementById("div-contenido-visual-regiones");
const divContenidoAtaques = document.getElementById("div-contenido-visual-ataques");
const divContenidoTablaTipos = document.getElementById("div-contenido-visual-tabla-tipos");

/*############# POKEDEX ##############*/
const imagenPokemon = document.getElementById("pokemon-imagen");
const idPokemon = document.getElementById("pokemon-numero-pokedex");
const nombrePokemon = document.getElementById("pokemon-nombre");
const alturaPokemon = document.getElementById("pokemon-altura");
const pesoPokemon = document.getElementById("pokemon-peso");
const tipo1Pokemon = document.getElementById("pokemon-tipo-1");
const tipo2Pokemon = document.getElementById("pokemon-tipo-2");
const habilidad1Pokemon = document.getElementById("pokemon-habilidad-1");
const habilidad2Pokemon = document.getElementById("pokemon-habilidad-2");
const hpPokemon = document.getElementById("pokemon-stats-hp");
const ataquePokemon = document.getElementById("pokemon-stats-ataque");
const defensaPokemon = document.getElementById("pokemon-stats-defensa");
const ataqueEspecialPokemon = document.getElementById("pokemon-stats-ataque-especial");
const defensaEspecialPokemon = document.getElementById("pokemon-stats-defensa-especial");
const velocidadPokemon = document.getElementById("pokemon-stats-velocidad");

const movimientosPokemon = document.getElementById("div-moves-pokemon");
const localizacionesPokemon = document.getElementById("div-location-pokemon");
const labelLocalizacionesPokemon = document.getElementById("areas-localizacion-pokemon");
const evolucionesPokemon = document.getElementById("div-evolution-pokemon");
const labelEvolucionesPokemon = document.getElementById("cadena-evolutiva-pokemon");


/*############# ATAQUES ##############*/
const nombreMovimiento = document.getElementById("move-info-name");
const tipoMovimiento = document.getElementById("move-info-type");
const categoriaMovimiento = document.getElementById("move-info-damage-class");
const imagenCategoriaMovimiento = document.getElementById("move-info-damage-class-img");
const potenciaMovimiento = document.getElementById("move-info-power");
const precisionMovimiento = document.getElementById("move-info-accuracy");
const ppMovimiento = document.getElementById("move-info-pp");
const prioridadMovimiento = document.getElementById("move-info-priority");

const nombreMovimientoInfoGeneral = document.getElementById("move-name");
const tipoMovimientoInfoGeneral = document.getElementById("move-type");
const ppMovimientoInfoGeneral = document.getElementById("move-pp");

const infoGeneralMovimiento = document.getElementById("div-info-general-move");
const infoConcretaMovimiento = document.getElementById("div-info-concreta-move");
const pokemonUsanMovimiento = document.getElementById("div-pokemon-use-move");


/*############# REGIONES #############*/
const contenidoRegiones = document.getElementById("display-contenido-regiones");
const localizacionesRegion = document.getElementById("localizaciones-region");
const lugaresRegion = document.getElementById("lugares-region");
const mapaRegion = document.getElementById("div-imagen-region");
const personajes = document.getElementById("espacio-personajes");
const parrafoRegion = document.getElementById("parrafo-informativo");
const personajeRegion1 = document.getElementById("imagen-personaje1");
const personajeRegion2 = document.getElementById("imagen-personaje2");
let intervaloParrafoRegiones;


/*#####################################*/


function soloMostrarPokedex(){
    busquedaTotal.style.display = "block";
    divBusquedaAtaques.style.display = "none";
    divBusquedaRegiones.style.display = "none";
    divBusquedaTablaTipos.style.display = "none";
    divBusquedaPokedex.style.display = "block";
    divElementoABuscar.style.display = "none";
    inputBusqueda.placeholder = "Busca pokemon por nombre o id";
    inputBusqueda.value = "";
    inputBusqueda.disabled = false;

    busquedaTotal.style.width = "20%";
    buscador.style.width = "100%";
    contenido.style.width = "70%";

    clearInterval(intervaloParrafoRegiones);
}

function soloMostrarRegiones(){
    busquedaTotal.style.display = "block";
    divBusquedaAtaques.style.display = "none";
    divBusquedaPokedex.style.display = "none";
    divBusquedaTablaTipos.style.display = "none";
    divBusquedaRegiones.style.display = "block";
    divElementoABuscar.style.display = "none";
    inputBusqueda.placeholder = "";
    inputBusqueda.value = "";
    inputBusqueda.disabled = true;

    busquedaTotal.style.width = "10%";
    buscador.style.width = "95%";
    contenido.style.width = "80%";
}

function soloMostrarAtaques(){
    busquedaTotal.style.display = "block";
    divBusquedaPokedex.style.display = "none";
    divBusquedaRegiones.style.display = "none";
    divBusquedaTablaTipos.style.display = "none";
    divBusquedaAtaques.style.display = "block";
    divElementoABuscar.style.display = "none";
    inputBusqueda.placeholder = "Busca ataque por nombre o tipo";
    inputBusqueda.value = "";
    inputBusqueda.disabled = false;

    busquedaTotal.style.width = "20%";
    buscador.style.width = "100%";
    contenido.style.width = "70%";
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
}

function juego() {
    busquedaTotal.style.display = "none";
    divBusquedaPokedex.style.display = "none";
    divBusquedaRegiones.style.display = "none";
    divBusquedaAtaques.style.display = "none";
    divBusquedaTablaTipos.style.display = "none";
    divElementoABuscar.style.display = "none";

    contenido.style.width = "90%";

    empezarJuego();
}

inputBusqueda.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        botonBusqueda.click();
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
            inputBusqueda.placeholder = "No se ha encontrado el pokemon";
        }
    } else if (inputBusqueda.placeholder.includes("ataque")) {
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
            inputBusqueda.placeholder = "No se ha encontrado el ataque";
        }
    }
    inputBusqueda.value = "";
}

function mostrarContenidoPokemon(pokemon){
    divContenidoPokedex.style.display = "block";
    divContenidoRegiones.style.display = "none";
    divContenidoAtaques.style.display = "none";
    divContenidoTablaTipos.style.display = "none";

    let imagenFrente = pokemon.sprites.front_default;
    let imagenAtras = pokemon.sprites.back_default;
    let imagenFrenteShiny = pokemon.sprites.front_shiny;
    let imagenAtrasShiny = pokemon.sprites.back_shiny;


    let id = pokemon.id;
    let nombre = pokemon.name;
    let peso = pokemon.weight;
    let altura = pokemon.height;
    let tipos = pokemon.types;
    let habilidades = pokemon.abilities;

    let stats = pokemon.stats;
    let hp = stats[0].base_stat;
    let ataque = stats[1].base_stat;
    let defensa = stats[2].base_stat;
    let ataqueEspecial = stats[3].base_stat;
    let defensaEspecial = stats[4].base_stat;
    let velocidad = stats[5].base_stat;


    /*Movimientos de los pokemon*/

    let moves = pokemon.moves;
    let movimientosDelPokemon = [];
    for (let i = 0; i < moves.length; i++) {
        movimientosDelPokemon.push(moves[i].move.name);
    }

    movimientosPokemon.innerHTML = "";
    const querySelectors = [
        ".movimientograss",
        ".movimientofire",
        ".movimientowater",
        ".movimientoelectric",
        ".movimientoground",
        ".movimientoflying",
        ".movimientopsychic",
        ".movimientobug",
        ".movimientorock",
        ".movimientoghost",
        ".movimientodark",
        ".movimientosteel",
        ".movimientofairy",
        ".movimientonormal",
        ".movimientofighting",
        ".movimientoposion",
        ".movimientodragon",
        ".movimientoice"
      ];
      
    querySelectors.forEach((querySelector) => {
        const divsMovimiento = divBusquedaAtaques.querySelectorAll(querySelector);
        divsMovimiento.forEach((div) => {
            if (movimientosDelPokemon.includes(div.getAttribute("name"))) {
                movimientosPokemon.appendChild(div.cloneNode(true));
            }
        });
    });
      
    movimientosPokemon.addEventListener("click", function (event) {
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
    });


    /*Stats e imagen de pokemon*/

    imagenPokemon.removeEventListener("click", cambiarImagenPokemon);
    imagenPokemon.addEventListener("click", cambiarImagenPokemon);

    function cambiarImagenPokemon() {
        if (imagenPokemon.getAttribute("src") == imagenFrente) {
            if (imagenAtras != null) {
                imagenPokemon.setAttribute("src", imagenAtras);
            } else {
                imagenPokemon.setAttribute("src", imagenFrenteShiny);
            }
        } else if (imagenPokemon.getAttribute("src") == imagenAtras) {
            imagenPokemon.setAttribute("src", imagenFrenteShiny);
        } else if (imagenPokemon.getAttribute("src") == imagenFrenteShiny) {
            if (imagenAtrasShiny != null) {
                imagenPokemon.setAttribute("src", imagenAtrasShiny);
            } else {
                imagenPokemon.setAttribute("src", imagenFrente);
            }
        } else {
            imagenPokemon.setAttribute("src", imagenFrente);
        }
    }

    imagenPokemon.setAttribute("src", imagenFrente);

    idPokemon.innerText = "Id pokemon: #" + ("0000".slice(0, -(id.toString().length)) + id);
    nombrePokemon.innerText = "Nombre: " + nombre;
    alturaPokemon.innerHTML = "Altura: " + (altura / 10).toFixed(2) + " m";
    pesoPokemon.innerHTML = "Peso:  " + (peso / 10).toFixed(2) + " kg";
    tipo1Pokemon.innerHTML = tipos[0].type.name;
    tipo1Pokemon.setAttribute("class", "movimiento" + tipos[0].type.name);
    if (tipos.length > 1) {
        tipo2Pokemon.innerHTML = tipos[1].type.name;
        tipo2Pokemon.setAttribute("class", "movimiento" + tipos[1].type.name);
    } else {
        tipo2Pokemon.innerHTML = "";
        tipo2Pokemon.setAttribute("class", "sinmovimiento");
    }
    habilidad1Pokemon.innerHTML = habilidades[0].ability.name;
    if (habilidades.length > 1) {
        habilidad2Pokemon.innerHTML = habilidades[1].ability.name;
    }
    hpPokemon.innerText = "PS: " + hp;
    ataquePokemon.innerText = "At: " + ataque;
    defensaPokemon.innerText = "Def: " + defensa;
    ataqueEspecialPokemon.innerText = "At. sp: " + ataqueEspecial;
    defensaEspecialPokemon.innerText = "Def. sp: " + defensaEspecial;
    velocidadPokemon.innerText = "Vel: " + velocidad;


    /*Localizaciones y evolucion pokemon*/

    let localizaciones = [];
    localizacionesPokemon.innerHTML = "";
    localizacionesPokemon.appendChild(labelLocalizacionesPokemon);
    fetch(pokemon.location_area_encounters).then(location => location.json()).then(location => {
        for (let i = 0; i < location.length; i++) {
            localizaciones.push(location[i].location_area.name);
        }
        if (localizaciones.length > 0) {
            localizaciones.forEach(localizacion => {
                let divLocalizacion = document.createElement("div");
                divLocalizacion.setAttribute("class", "localizacion");
                divLocalizacion.setAttribute("name", localizacion);
                divLocalizacion.innerHTML = `<p class="nombre-localizacion">${localizacion}</p>`;
                localizacionesPokemon.appendChild(divLocalizacion);
            });
        }
    });

    let evoluciones = [];
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(specie => specie.json()).then(specie => {
        fetch(specie.evolution_chain.url).then(evolution => evolution.json()).then(evolution => {
            evoluciones = obtenerEvoluciones(evolution.chain);

            /*Obtener información de las localizaciones donde se encuentra su prevolución*/
            let prevolucion = pokemons.get(divBusquedaPokedex.getElementsByClassName(evoluciones[0]).item(0).getAttribute("name"));

            if (localizaciones.length <= 0) {
                localizacionesPokemon.appendChild(labelLocalizacionesPokemon);

                let localizacionesPrevolucion = [];
                fetch(prevolucion.location_area_encounters).then(location => location.json()).then(location => {
                    for (let i = 0; i < location.length; i++) {
                        localizacionesPrevolucion.push(location[i].location_area.name);
                    }
                    localizacionesPrevolucion.forEach(localizacion => {
                        let divLocalizacion = document.createElement("div");
                        divLocalizacion.setAttribute("class", "localizacion");
                        divLocalizacion.setAttribute("name", localizacion);
                        divLocalizacion.innerHTML = `<p class="nombre-localizacion">${localizacion}</p>`;
                        localizacionesPokemon.appendChild(divLocalizacion);
                    });
                });
            }

            /*Obtener cadena evolutiva*/
            let pokemonsCadenaEvolutiva = [];
            if (prevolucion.name == "eevee") {
                for (let i = 0; i < evoluciones.length; i++) {
                    if (evoluciones[i] == 133 || evoluciones[i] == id) {
                        pokemonsCadenaEvolutiva.push(pokemons.get(divBusquedaPokedex.getElementsByClassName(evoluciones[i]).item(0).getAttribute("name")));
                    }
                }
            }
            else {
                for (let i = 0; i < evoluciones.length; i++) {
                    pokemonsCadenaEvolutiva.push(pokemons.get(divBusquedaPokedex.getElementsByClassName(evoluciones[i]).item(0).getAttribute("name")));
                }
            }
            evolucionesPokemon.innerHTML = "";
            evolucionesPokemon.appendChild(labelEvolucionesPokemon);
            let longitudCadenaEvolutiva = pokemonsCadenaEvolutiva.length > 3 ? 3 : pokemonsCadenaEvolutiva.length;
            for (let i = 0; i < longitudCadenaEvolutiva; i++) {
                let pokemon = pokemonsCadenaEvolutiva[i];
                let divEvolucion = document.createElement("div");
                divEvolucion.setAttribute("class", "evolucion");
                divEvolucion.setAttribute("name", "evoluciones" + pokemon.name);
                divEvolucion.innerHTML = `<img src="${pokemon.sprites.front_default}" class="imagen-evolucion" alt="Imagen evolucion de ${pokemon.name}">`;
                evolucionesPokemon.appendChild(divEvolucion);
                if (i < (longitudCadenaEvolutiva - 1 < 2 ? longitudCadenaEvolutiva - 1 : 2)) {
                    let divFlecha = document.createElement("div");
                    divFlecha.setAttribute("class", "flecha-evolucion");
                    divFlecha.innerHTML = `<img src="img/general/flecha.png" class="flecha" alt="Flecha evolucion">`;
                    evolucionesPokemon.appendChild(divFlecha);
                }
            }
        });
    });

    function obtenerEvoluciones(evolution_chain){
        let evoluciones = [];
        evoluciones.push(evolution_chain.species.url.split("/")[6]);
        for (let i = 0; i < evolution_chain.evolves_to.length; i++) {
            evoluciones.push(evolution_chain.evolves_to[i].species.url.split("/")[6]);
            if (evolution_chain.evolves_to[i].evolves_to.length > 0) {
                let masEvoluciones = obtenerEvoluciones(evolution_chain.evolves_to[i]);
                masEvoluciones.forEach(pokId => {
                    if (!evoluciones.includes(pokId)) {
                        evoluciones.push(pokId);
                    }
                });
            }
        }
        return evoluciones;
    }

    localizacionesPokemon.addEventListener("click", function (event) {
        let localizacionMainListener = event.target.classList[0].split("-")[0];
        let localizacionSecondaryListener = "";
        if (event.target.classList[0].split("-").length > 1)
        localizacionSecondaryListener = event.target.classList[0].split("-")[1];
        if (localizacionMainListener.includes("localizacion")) {
            let nombreLocalizacion = event.target.getAttribute("name");
            
            for (const region of regiones.values()) {
                region.locations.forEach(localizacion => {
                    if (nombreLocalizacion.includes(localizacion.name)) {
                        mostrarContenidoRegion(region);
                    }
                });
            }
        }
        if (localizacionSecondaryListener.length > 0 && localizacionSecondaryListener.includes("localizacion")) {
            let nombreLocalizacion = event.target.parentNode.getAttribute("name");

            for (const region of regiones.values()) {
                region.locations.forEach(localizacion => {
                    if (nombreLocalizacion.includes(localizacion.name)) {
                        mostrarContenidoRegion(region);
                    }
                });
            }
        }
    });

}

function mostrarContenidoRegion(region){
    divContenidoPokedex.style.display = "none";
    divContenidoRegiones.style.display = "block";
    divContenidoAtaques.style.display = "none";
    divContenidoTablaTipos.style.display = "none";

    let nombre = region.name;

    mapaRegion.style.backgroundImage = `url("img/regiones/${nombre}.png")`;
    
    if (nombre == "galar") {
        personajes.style.width = '25%';
        localizacionesRegion.style.display = 'none';
        mapaRegion.style.width = '40%';
        mapaRegion.style.height = '100%';
        parrafoRegion.style.width = '27.5%';
        parrafoRegion.style.margin = '2.5%';
        contenidoRegiones.insertBefore(parrafoRegion, mapaRegion);
    }
    else {
        personajes.style.width = '25%';
        localizacionesRegion.style.display = 'block';
        mapaRegion.style.width = '50%';
        mapaRegion.style.height = '70%';
        parrafoRegion.style.width = '100%';
        parrafoRegion.style.margin = '0';
        contenidoRegiones.insertBefore(mapaRegion, parrafoRegion);
    }

    personajeRegion1.setAttribute("src", `img/personajes/${nombre}Prota1.png`);
    personajeRegion2.setAttribute("src", `img/personajes/${nombre}Prota2.png`);

    let localizaciones = [];
    region.locations.forEach(location => {
        localizaciones.push(location.name);
    });

    lugaresRegion.innerHTML = "";
    localizaciones.forEach(localizacion => {
        let divLocalizacion = document.createElement("div");
        divLocalizacion.setAttribute("class", "localizacion");
        divLocalizacion.setAttribute("name", localizacion);
        divLocalizacion.innerHTML = `<p class="nombre-localizacion">${localizacion}</p>`;
        lugaresRegion.appendChild(divLocalizacion);
    });

    parrafoRegion.innerHTML = "";
    fetch('frases.json')
        .then(response => response.json())
        .then(data => {
            let frases = data[nombre];
            let numFrase = Math.floor(Math.random() * frases.length);
            while (frases[numFrase].includes(mapaRegion.innerHTML) && mapaRegion.innerHTML != "") {
                numFrase = Math.floor(Math.random() * frases.length);
            }
            let x = 0;
            function escribirTexto() {
                parrafoRegion.innerHTML = `<p>${frases[numFrase].substring(0, x)}</p>`;
                x++;
                if (x > frases[numFrase].length)
                    clearInterval(intervaloParrafoRegiones);
            }
            intervaloParrafoRegiones = setInterval(escribirTexto, 20);
        })
        .catch(error => console.error(error));
}


function mostrarContenidoAtaque(ataque){
    divContenidoPokedex.style.display = "none";
    divContenidoRegiones.style.display = "none";
    divContenidoAtaques.style.display = "block";
    divContenidoTablaTipos.style.display = "none";

    let nombre = ataque.name;
    let categoria = ataque.damage_class.name;
    let tipo = ataque.type.name;
    let potencia = ataque.power;
    let precision = ataque.accuracy;
    let pp = ataque.pp;
    let prioridad = ataque.priority;

    let learned_by_pokemon = ataque.learned_by_pokemon;
    let pokemonsUsanAtaque = [];
    for (let i = 0; i < learned_by_pokemon.length; i++) {
        pokemonsUsanAtaque.push(learned_by_pokemon[i].name);
    }

    pokemonUsanMovimiento.innerHTML = "";

    const divsPokemon = divBusquedaPokedex.querySelectorAll('.pokemon');
    divsPokemon.forEach(div => {
        if (pokemonsUsanAtaque.includes(div.getAttribute("name"))) {
            let nuevoDiv = div.cloneNode(true);
            nuevoDiv.setAttribute("class", "pokemon-usa-ataque");
            nuevoDiv.setAttribute("name", div.getAttribute("name")+"-usa-"+nombre);
            nuevoDiv.querySelector(".mini-pokemon").setAttribute("class", "imagen-pokemon-usa-ataque");
            pokemonUsanMovimiento.appendChild(nuevoDiv);
        }
    });

    pokemonUsanMovimiento.addEventListener("click", function (event) {
        let pokemonMainListener = event.target.classList[0].split("-")[0];
        let pokemonSecondaryListener = "";
        if (event.target.classList[0].split("-").length > 1)
            pokemonSecondaryListener = event.target.classList[0].split("-")[1];
        if (pokemonMainListener.includes("pokemon")) {
            const pokemonName = event.target.getAttribute("name").split("-")[0];
            mostrarContenidoPokemon(pokemons.get(pokemonName));
        }
        if (pokemonSecondaryListener.length > 0 && pokemonSecondaryListener.includes("pokemon")){
            const pokemonName = event.target.parentNode.getAttribute("name").split("-")[0];
            mostrarContenidoPokemon(pokemons.get(pokemonName));
        }
    });

    tipoMovimiento.setAttribute("class", "movimiento" + tipo);
    tipoMovimientoInfoGeneral.setAttribute("class", "movimiento" + tipo);
    infoGeneralMovimiento.setAttribute("class", "div-info-general-move movimiento" + tipo);

    nombreMovimientoInfoGeneral.innerHTML = nombre;
    tipoMovimientoInfoGeneral.innerHTML = tipo;
    ppMovimientoInfoGeneral.innerHTML = "PP " + pp + "/" + pp;

    nombreMovimiento.innerHTML = "Nombre: " + nombre;
    categoriaMovimiento.innerHTML = "Categoria: " + categoria;
    imagenCategoriaMovimiento.setAttribute("src", "img/general/" + categoria + "Attack.png");
    tipoMovimiento.innerHTML = "Tipo: " + tipo;
    potenciaMovimiento.innerHTML = "Potencia: " + potencia;
    precisionMovimiento.innerHTML = "Precision: " + precision;
    ppMovimiento.innerHTML = "PP: " + pp;
    prioridadMovimiento.innerHTML = "Prioridad: " + prioridad;
}

function mostrarContenidoTablaTipos(){
    divContenidoPokedex.style.display = "none";
    divContenidoRegiones.style.display = "none";
    divContenidoAtaques.style.display = "none";
    divContenidoTablaTipos.style.display = "block";
}

function empezarJuego() {
    divContenidoPokedex.style.display = "none";
    divContenidoRegiones.style.display = "none";
    divContenidoAtaques.style.display = "none";
    divContenidoTablaTipos.style.display = "none";
}