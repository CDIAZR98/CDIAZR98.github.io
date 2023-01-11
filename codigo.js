/*Conectando los input del html con el JS para poder recibir variables para encriptar*/

const entradaMensaje = document.querySelector("#mensaje");
const salidaMensaje = document.querySelector("#salida");

/*Conectando los botones para poderlos utilizar */

const btnEncriptar = document.querySelector("#encriptar");
const btnDesncriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

/*Función para validar carácteres con acento*/

function validarMensaje (){
    
    let mensaje = String(entradaMensaje.value);
    for (let i = 0; i < mensaje.length; i++){
        
        if(mensaje[i] === "á" || mensaje[i] === "é" || mensaje[i] === "í" || mensaje[i] === "ó" || mensaje[i] === "ú"){
            
            alert("Por favor no ingrese cáracteres especiales");
            break;   
        }
    }    
}

/*Creacion de las funciones de encriptado, desencriptado y copiado*/

function encriptarTexto(){
/*Tomando la informacion del input y convirtiendola a string y reemplazando valores con el método replace*/ 
    validarMensaje();
    let mensajeEncriptado = String(entradaMensaje.value).replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/o/g,"ober")
    .replace(/a/g,"ai")
    .replace(/u/g,"ufat");

    salidaMensaje.value = mensajeEncriptado;
   
}
function desencriptarTexto(){
/*Tomando la informacion del input y convirtiendola a string y reemplazando valores con el método replace*/ 
    validarMensaje();
    let mensajeDesencriptado = String(entradaMensaje.value).replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ober/g,"o")
    .replace(/ai/g,"a")
    .replace(/ufat/g,"u");

    salidaMensaje.value = mensajeDesencriptado;

}
function copiar (){

    let mensaje = salidaMensaje.value;
    navigator.clipboard.writeText(mensaje);
}

/*Programación de los botones*/

btnCopiar.onclick = copiar;
btnEncriptar.onclick = encriptarTexto;
btnDesncriptar.onclick= desencriptarTexto;