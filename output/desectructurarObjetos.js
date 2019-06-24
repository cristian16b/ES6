"use strict";

var usuario = {
  nombre: 'cristian',
  correo: 'c@n.com',
  edad: 29 // no es necesario poner todos los atributos
  // conviene trabajar con objetos

};
var nombre = usuario.nombre,
    correo = usuario.correo,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? 'No tiene' : _usuario$profesion;
console.log(nombre);
console.log(profesion);

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesio = _ref.profesio,
      profesio = _ref$profesio === void 0 ? 'Est' : _ref$profesio;
  console.log("su nombre es ".concat(nombre, " su profesion es ").concat(profesio));
};

mostrarInfo(usuario);