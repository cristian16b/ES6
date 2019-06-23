"use strict";

// defino parametros por default en funcion
function registrarUsuario(nombre) {
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '<ARG>';
  var correo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '<sin correo>';
  return "nombre = ".concat(nombre, " pais = ").concat(pais, " correo = ").concat(correo);
}

console.log(registrarUsuario('oso', 'polonia'));
console.log(registrarUsuario('oso'));
console.log(registrarUsuario('oso', '')); //no usar

console.log(registrarUsuario('oso', null)); //no usar

console.log(registrarUsuario('oso', undefined)); //equivalente a no declararlo