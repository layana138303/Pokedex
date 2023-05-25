const formLogin = document.getElementById('login-general');
const formularioLogin = document.getElementById("form-login-ext");
const botonLogin = document.getElementById('boton-enviar-login');
const botonCerrarLogin = document.getElementById("boton-cerrar-login");
const botonLoginRegistro = document.getElementById("boton-login-registro");
const mensajeRellenarCamposLogin = document.getElementById("div-mensaje-rellenar-campos-login");

const botonPulsarInicioSesion = document.getElementById("boton-inicio-sesion");
const botonPulsarCerrarSesion = document.getElementById("boton-cerrar-sesion");


function guardarLogin(event) {

    event.preventDefault();

    let formData = new FormData(formLogin);

    let data = {
        'usuario': formData.get('usuario'),
        'contrasena': formData.get('contrasena')
    };

    let faltanDatos = false;
    for (let key in data) {
        if (data[key] == "") {
            let divInput = document.querySelector(`.login-${key}`);

            divInput.style.backgroundColor= "rgba(255, 0, 0, 0.5)";

            mensajeRellenarCamposLogin.style.visibility = "visible";

            setTimeout(function () {
                divInput.style.backgroundColor= "transparent";
                mensajeRellenarCamposLogin.style.visibility = "hidden";
            }, 2000);

            faltanDatos = true;
        }
    }

    if (faltanDatos) {
        return;
    }

    $.ajax({
        url: "/php/login.php",
        type: "POST",
        data: data,
        success: function (response) {
            if (response.ok) {
                formularioLogin.style.display = "none";
                botonMegadex.style.display = "block";
                botonPulsarCerrarSesion.style.display = "flex";
                botonPulsarInicioSesion.style.display = "none";
                formLogin.reset();
                
                mostrarMensaje("Usuario logueado correctamente", "green");
            }
            else {
                mostrarMensaje(response.respuesta, "yellow");
            }
        }
    });
}

botonLogin.addEventListener('click', guardarLogin);

botonCerrarLogin.addEventListener("click", function () {
    formularioLogin.style.display = "none";
    formLogin.reset();
});

botonLoginRegistro.addEventListener("click", function () {
    formularioLogin.style.display = "none";
    formularioRegistro.style.display = "block";
    formLogin.reset();
});

botonPulsarInicioSesion.addEventListener("click", function () {
    formularioLogin.style.display = "block";
});

botonPulsarCerrarSesion.addEventListener("click", function () {
    formularioLogin.style.display = "none";
    botonMegadex.style.display = "none";
    botonPulsarCerrarSesion.style.display = "none";
    botonPulsarInicioSesion.style.display = "block";
});