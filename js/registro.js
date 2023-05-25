const formRegistro = document.getElementById('registro-general');
const formularioRegistro = document.getElementById("form-registro-ext");
const botonRegistro = document.getElementById('boton-enviar-registro');
const botonCerrarRegistro = document.getElementById("boton-cerrar-registro");
const botonVolverLogin = document.getElementById('boton-volver-login');
const mensajeRellenarCamposRegistro = document.getElementById("div-mensaje-rellenar-campos-registro");
const divMensaje = document.getElementById("mensaje-login-registro");
var labelMensaje = document.getElementById("label-mensaje-obtenido");

function guardarRegistro(event) {

    event.preventDefault();

    let formData = new FormData(formRegistro);

    let data = {
        'nombre': formData.get('nombre'),
        'usuario': formData.get('usuario'),
        'correo': formData.get('correo'),
        'contrasena': formData.get('contrasena')
    };

    let faltanDatos = false;
    for (let key in data) {
        if (data[key] == "") {
            let divInput = document.querySelector(`.registro-${key}`);

            divInput.style.backgroundColor= "rgba(255, 0, 0, 0.5)";

            mensajeRellenarCamposRegistro.style.visibility = "visible";

            setTimeout(function () {
                divInput.style.backgroundColor= "transparent";
                mensajeRellenarCamposRegistro.style.visibility = "hidden";
            }, 2000);

            faltanDatos = true;
        }
    }

    if (faltanDatos) {
        return;
    }

    $.ajax({
        url: "/php/registro.php",
        type: "POST",
        data: data,
        success: function (response) {
            if (response.ok) {
                formularioRegistro.style.display = "none";
                formRegistro.reset();
                
                mostrarMensaje("Usuario registrado correctamente", "green");
            }
            else {
                mostrarMensaje(response.respuesta, "yellow");
            }
        }
    });
}

botonRegistro.addEventListener('click', guardarRegistro);

botonVolverLogin.addEventListener('click', function () {
    formularioRegistro.style.display = "none";
    formularioLogin.style.display = "block";
    formRegistro.reset();
});

botonCerrarRegistro.addEventListener("click", function () {
    formularioRegistro.style.display = "none";
    formRegistro.reset();
});

function mostrarMensaje(mensaje, color) {
    labelMensaje.innerHTML = mensaje;
    divMensaje.style.backgroundColor = color;
    divMensaje.style.display = "block";

    setTimeout(function () {
        divMensaje.style.display = "none";
    }, 2000);
}