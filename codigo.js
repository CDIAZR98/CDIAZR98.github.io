/*Conectando los input del html con el JS para poder recibir variables para encriptar*/

const entradaMensaje = document.querySelector("#mensaje");
const salidaMensaje = document.querySelector("#salida");

/*Conectando los botones para poderlos utilizar */

const btnEncriptar = document.querySelector("#encriptar");
const btnDesncriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

/*Creacion de las funciones de encriptado, desencriptado y copiado*/

function encriptarTexto(){

    let mensajeEncriptado = String(entradaMensaje.value).replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/o/g,"ober")
    .replace(/a/g,"ai")
    .replace(/u/g,"ufat");

    salidaMensaje.value = mensajeEncriptado;
   
}
function desencriptarTexto(){

    let mensajeDesencriptado = String(entradaMensaje.value).replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ober/g,"o")
    .replace(/ai/g,"a")
    .replace(/ufat/g,"u");

    salidaMensaje.value = mensajeDesencriptado;

}

btnEncriptar.onclick = encriptarTexto;
btnDesncriptar.onclick= desencriptarTexto;