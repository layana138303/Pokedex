const botonPulsarInicioSesion = document.getElementById("boton-inicio-sesion");
const formularioLogin = document.getElementById("form-login-ext");
const formularioRegistro = document.getElementById("form-registro-ext");
const botonCerrarLogin = document.getElementById("boton-cerrar-login");
const botonCerrarRegistro = document.getElementById("boton-cerrar-registro");
const botonRegistrate = document.getElementById("registrate");
const botonEnviarLogin = document.getElementById("boton-enviar-login");
const botonLoginRegistro = document.getElementById("boton-login-registro");

botonPulsarInicioSesion.addEventListener("click", function () {
    formularioLogin.style.display = "block";
});

botonEnviarLogin.addEventListener("click", function () {
    formularioLogin.style.display = "none";
});

botonCerrarLogin.addEventListener("click", function () {
    formularioLogin.style.display = "none";
});

botonLoginRegistro.addEventListener("click", function () {
    formularioLogin.style.display = "none";
    formularioRegistro.style.display = "block";
});

botonCerrarRegistro.addEventListener("click", function () {
    formularioRegistro.style.display = "none";
});

