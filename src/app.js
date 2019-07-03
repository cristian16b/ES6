// import {mensajeAlerta} from './modulos/mensajeAlerta';
// import {Persona} from './modulos/ClasePersona';
// import {eventos, inicio} from './modulos/eventos';
import {ObtenerSuma} from './modulos/calculosMatematicos';
import {obtenerDatos,actualizarTabla,agregarRecurso,actualizarRecurso,eliminarRecurso,filtrarRecurso} from './modulos/fetch';
// import {fecha} from './modulos/fechasHoras';

// mensajeAlerta('Hola CRISTIAN');

// const cristian = new Persona('cristian');
// console.log(cristian.toString());

//************************************************************************** */*/
// declaracion de eventos segun la w3c
window.addEventListener('load',inicio,false);

function inicio() {
    window.addEventListener('scroll',scrollInfinito,false);
    document.getElementById('sumar').addEventListener("click",ObtenerSuma,false);
    // document.getElementById('actualizar').addEventListener("click",obtenerDatos,false);
    document.getElementById('actualizar').addEventListener("click",actualizarTabla,false);
}

const scrollInfinito = () => {
    
    // console.log('scrolling');
    // console.log(document.body.scrollHeight - window.innerHeight - 100);
    // console.log(window.scrollY);
    let tamanioViewport = document.body.scrollHeight - window.innerHeight;
    if ( window.scrollY > tamanioViewport ) {
        // hacer fetch
        // console.log('estoy en el final del scroll'); 
        // alert('estoy al final del scroll');
        actualizarTabla();
    }
}

//************************************************************************** */*/
// uso de los timers de js
let contador = 0;

const mostrar1 = () => {
    console.log(`ejecuto timeout`);
}

const mostrar2 = () => {
    console.log(`ejecuto interval`);
    contador++;
    if(contador > 5) {
        clearInterval(intervalo);
        console.log('clear');
        contador = 0;
    }
}

// setTimeout(mostrar1,3000);
// let intervalo = setInterval(mostrar2,6000);
///
const dias = ['dom','lun','mar','mie','jue','vie','sab'];
// console.log(fecha);
// console.log(fecha.getHours()-12);
// console.log(fecha.getMinutes());
// console.log(fecha.getSeconds());
// console.log(dias[fecha.getDay()]);
// console.log(fecha.getMonth()+1);
// console.log(fecha.getFullYear());

//obtenerDatos();
// agregarRecurso();
// actualizarRecurso();
// eliminarRecurso();
// filtrarRecurso();