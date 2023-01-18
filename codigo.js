/*Conectando los input del html con el JS para poder recibir variables para encriptar*/

const entradaMensaje = document.querySelector("#mensaje");
const salidaMensaje = document.querySelector("#salida");

/*Conectando los botones para poderlos utilizar */

const btnEncriptar = document.querySelector("#encriptar");
const btnDesncriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

/*Función para validar carácteres con acento*/

function validarMensaje (){
    
    const caracteresEspeciales = /[^a-zA_Z0-9 ]/g;
    let mensaje = String(entradaMensaje.value);
    for (let i = 0; i < mensaje.length; i++){
        if(caracteresEspeciales.test(mensaje[i])){
            alert("Por favor no ingrese cáracteres especiales");
            return;   
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

/*permite que el textarea se ajuste automaticamente */

const textarea = document.getElementById("mensaje");
const alturaMax = 400; 

textarea.addEventListener("input", function(){
    this.style.height = "auto";
    if (this.scrollHeight > alturaMax) {
        this.style.height = alturaMax + "px";
    } else {
        this.style.height = this.scrollHeight + "px";
    }
}, false);