const bodyElements = document.querySelectorAll('body > *');
const buttons = document.querySelectorAll('button');
const dialogoOak = document.querySelector(".dialogo-oak");
const botonDialogoOak = document.getElementById("boton-cerrar-dialogo");
const textoDialogoOak = document.getElementById("texto-dialogo-oak");
let contenedores = document.getElementsByTagName('div');
const oak = document.getElementById("oak-clickable");

let frasesDialogoOak = [];

fetch('frases.json')
    .then(response => response.json())
    .then(data => {
        frasesDialogoOak = data["oak"];
    })
    .catch(error => console.error(error));

function soloMostrarDialogoOak() {
    buttons.forEach(button => {
        if (button != botonDialogoOak)
            button.disabled = true;
    });
    bodyElements.forEach(element => {
        if (element == dialogoOak)
            return;
        element.style.opacity = 0.4;
    });

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
}

botonDialogoOak.addEventListener("click", function(){
    buttons.forEach(button => {
        if (button != botonDialogoOak)
            button.disabled = false;
    });
    bodyElements.forEach(element => {
        if (element == dialogoOak)
            return;
        element.style.opacity = 1;
    });
    oak.style.display = 'block';
    dialogoOak.style.display = "none";
    clearInterval(intervalo);
    textoDialogoOak.innerHTML = "";
});

