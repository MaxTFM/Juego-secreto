let numeroSecreto = 0;
let intentos = 0;
let ListaNumerosSorteado = [];
let numeroMaximo = 10;
function asignarTextoElemento (Elemento, texto) {
    let elementoHTML = document.querySelector(Elemento);
elementoHTML.innerHTML = texto;
}
function VerificarIntento() {
    let numeroDeUsuario = parseInt (document.getElementById("valorUsuario").value);
    document.getElementById("reiniciar").removeAttribute("disabled");
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`p`,`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces" }  `);
    } else {
        if (numeroDeUsuario > numeroSecreto)
        asignarTextoElemento("p","El número secreto es menor");
    else {
        asignarTextoElemento("p","El número secreto es mayor");
    }
    intentos++;
    LimpiarCaja();
    }
    return;
}
function LimpiarCaja() {
document.querySelector("#valorUsuario").value = "";
}
function GenerarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(ListaNumerosSorteado);
//Si ya sorteamos todos los números
if (ListaNumerosSorteado.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
} else {
    

//Si el numero generado esta incluido en la lista

if (ListaNumerosSorteado.includes(numeroGenerado)) {
return GenerarNumeroSecreto();
} else {
    ListaNumerosSorteado.push(numeroGenerado);
    return numeroGenerado;
}
}
}
function CondicionesIniciales() {
asignarTextoElemento("h1", "Juego del número secreto!");
asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = GenerarNumeroSecreto();
intentos = 1;
}
 function ReiniciarJuego() {
    //limpiar caja
    LimpiarCaja();
    //Indicar mensaje de intervalo de numeros
    CondicionesIniciales();
    //generar el numero aleatorio
//Inicializar el número dei ntentos
    //Deshablitar el boton de nuevo juego 
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
 }  
CondicionesIniciales();