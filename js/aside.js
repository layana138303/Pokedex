const bodyElements = document.querySelectorAll('body > *');
const disablingElements = document.querySelectorAll('button, select, input');
const dialogoOak = document.querySelector(".dialogo-oak");
const botonDialogoOak = document.getElementById("boton-cerrar-dialogo");
const textoDialogoOak = document.getElementById("texto-dialogo-oak");
let contenedores = document.getElementsByTagName('div');
const oak = document.getElementById("oak-clickable");

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
            bodyElements.forEach(element => {
                if (element == dialogoOak)
                    return;
                element.style.opacity = 0.4;
            });
            
            busqueda.removeEventListener("click", mostrarContenidoElementoBusqueda);
        
            if (contenido.style.width == "90%")
                dialogoOak.style.left = "56%";
            else {
                dialogoOak.style.left = "65.5%";
            }
        
            oak.style.display = 'none';
            dialogoOak.style.display = "block";
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
    bodyElements.forEach(element => {
        if (element == dialogoOak)
            return;
        element.style.opacity = 1;
    });

    busqueda.addEventListener("click", mostrarContenidoElementoBusqueda);

    oak.style.display = 'block';
    dialogoOak.style.display = "none";
    clearInterval(intervalo);
    textoDialogoOak.innerHTML = "";
});

