const disablingElements = document.querySelectorAll('button, select, input');
const dialogoOak = document.querySelector(".dialogo-oak");
const divDialogo = document.querySelector(".divDialogo");
const botonDialogoOak = document.getElementById("boton-cerrar-dialogo");
const textoDialogoOak = document.getElementById("texto-dialogo-oak");
const oak = document.getElementById("oak-clickable");

oak.addEventListener("click", soloMostrarDialogoOak);

function soloMostrarDialogoOak() {
    let frasesDialogoOak = [];
    fetch('json/frases.json')
        .then(response => response.json())
        .then(frases => {
            let idiomaActual = document.documentElement.lang;

            frasesDialogoOak = frases[idiomaActual]["oak"];

            disablingElements.forEach(element => {
                if (element != botonDialogoOak)
                    element.disabled = true;
            });
            
            busqueda.removeEventListener("click", mostrarContenidoElementoBusqueda);
        
            oak.style.display = 'none';
            divDialogo.style.display = 'block';
            let numFrase = Math.floor(Math.random() * frasesDialogoOak.length);
            while (frasesDialogoOak[numFrase].includes(dialogoOak.innerHTML) && dialogoOak.innerHTML != "") {
                numFrase = Math.floor(Math.random() * frasesDialogoOak.length);
            }
            let x = 0;
            function escribirTexto() {
                textoDialogoOak.innerHTML = frasesDialogoOak[numFrase].substring(0, x);
                x++;
                if (x > frasesDialogoOak[numFrase].length)
                    clearInterval(intervalo);
            }
            intervalo = setInterval(escribirTexto, 40);
        })
        .catch(error => console.error(error));
}

botonDialogoOak.addEventListener("click", function(){
    disablingElements.forEach(element => {
        if (element != botonDialogoOak)
            element.disabled = false;
    });

    busqueda.addEventListener("click", mostrarContenidoElementoBusqueda);

    oak.style.display = 'block';
    divDialogo.style.display = "none";
    clearInterval(intervalo);
    textoDialogoOak.innerHTML = "";
});

