"use strict";

// const crearObjeto = (nombre,edad) => {
//     return {
//         nombre: nombre,
//         edad: edad
//     }
// }
var crearObjeto = function crearObjeto(nombre, edad) {
  // se puede reducir la sintaxis
  return {
    nombre: nombre,
    edad: edad,
    // puedo agregar funciones
    // toString: () => {
    //     return `${nombre} ${edad}`
    // }
    // forma mas simplificada
    toString: function toString() {
      return "".concat(nombre, " ").concat(edad);
    }
  };
};

console.log(crearObjeto('oso', 29).toString());
var lista = [];
lista.push(crearObjeto('oso', 29));
lista.push(crearObjeto('noel', 29));
lista.push(crearObjeto('noosos', 29));
console.log(lista);