// import {mensajeAlerta} from './modulos/mensajeAlerta';
// import {Persona} from './modulos/ClasePersona';
// import {eventos, inicio} from './modulos/eventos';
import {ObtenerSuma} from './modulos/calculosMatematicos'

// mensajeAlerta('Hola CRISTIAN');

// const cristian = new Persona('cristian');
// console.log(cristian.toString());

//************************************************************************** */*/
// declaracion de eventos segun la w3c
window.addEventListener('load',inicio,false);

function inicio() {
    document.getElementById('sumar').addEventListener("click",ObtenerSuma,false);
}

//************************************************************************** */*/