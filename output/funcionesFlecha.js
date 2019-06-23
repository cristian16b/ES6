"use strict";

var nombres = ['peron', 'eva', 'nestor']; // const numero_caracteres = nombres.map(
//     function(nombre) {
//         let salida = `${nombre} cantidad chars ${nombre.length}`
//         console.log(salida);
//     }
// );
//
// (parametro) => {
//     // codigo 
//     // return
// }
// const numero_caracteres = nombres.map((nombre) => {
//     let salida = `${nombre} cantidad chars ${nombre.length}`
//     console.log(salida);
// });
// const numero_caracteres = nombres.map((nombre) => { return `${nombre} cantidad chars ${nombre.length}`});
// const numero_caracteres = nombres.map((nombre) => `${nombre} cantidad chars ${nombre.length}` );

/*
*El método map() crea un nuevo array con los resultados de la llamada a la función
* indicada aplicados a cada uno de sus elementos.
*/

var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " cantidad chars ").concat(nombre.length);
});

var numero_mayor = function numero_mayor(x, y) {
  var salida = "".concat(x, ">").concat(y);

  if (y > x) {
    salida = "".concat(y, ">").concat(x);
  }

  return salida;
}; // console.log(numero_caracteres);
// let a = 20,b = 30,c = 10;
// console.log(numero_mayor(a,b));
// console.log(numero_mayor(c,a));


var numeros = [20, 3, 5, 6];

function duplicarVector(x) {
  var duplicar = x.map(function (numero) {
    return numero * 2;
  }); // console.log(duplicar);

  return duplicar;
} // console.log(numeros);
// console.log(duplicarVector(numeros));
// IMPORTANTE FOREACH SOLO RECORRE NO DEVUELVE UN ARRAY COMO LO HACE MAP
// function duplicarVector2(x) {
//     console.log(x);
//     const vector_duplicado2 = numeros.forEach(numero => {
//         document.write(numero);
//     });
//     console.log(vector_duplicado2);
//     return vector_duplicado2;
// }
//TENER EN CUENTA LOS SIGUIENTE
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array


numeros.forEach(function (numero, indice, array) {
  console.log(numero, indice, array);
}); //REPASAR FUNCIONES DE ARRAYS CON LA ES6, PORQUE ES MUY NECESARIO AGARRARLE LA MANO

numeros.push(21);
console.log("push inserto final ".concat(numeros));
numeros.pop();
console.log("pop elimino final ".concat(numeros));
numeros.shift();
console.log("shift elimino al inicio ".concat(numeros));
numeros.unshift([-1, 0]);
console.log("unshift inserto inicio ".concat(numeros));
console.log("index of 5 es ".concat(numeros.indexOf(5)));
console.log("index of -2 ".concat(numeros.indexOf(-2))); //retorna -1 porque no existe

numeros.splice(0, 1);
console.log("splice para eliminar ".concat(numeros));
numeros.splice(1, 0, 'a', 'b', 'c');
console.log("splice para insertar c/ pos negativa ".concat(numeros));
numeros.splice(-1, 0, 'atraz', 'oh', 'zzzz');
console.log("splice eliminar insertar ".concat(numeros));
var pos = numeros.indexOf('atraz'); // ref posicion desde donde, cantidad a eliminar, elementos a insertar ...

numeros.splice(pos, 3, 0, null, null);
console.log(numeros);
console.log("subvector ".concat(numeros.slice(1, numeros.length)));
console.log("join devuelve ".concat(numeros.join('/')));
var va = [0, 1],
    vb = [3];
var c = va.concat(vb);
console.log("concat de dos vectores ".concat(c));
console.log(c);
console.log(c.toString());