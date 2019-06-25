"use strict";

// rest recibe una cantidad N de param
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

mostrarDatos('jose', 'pedro', null); // spread recibe un vector de long N

var mostrarDatosSpreach = function mostrarDatosSpreach() {
  for (var _len2 = arguments.length, datos = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    datos[_key2] = arguments[_key2];
  }

  console.log(datos);
};

var arreglodatos = ['oso', 'casa', 'feliz'];
mostrarDatosSpreach.apply(void 0, arreglodatos);
var numeros = [10, 20, 30]; // con rest

var sumar = function sumar() {
  var suma = 0;

  for (var _len3 = arguments.length, lista = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    lista[_key3] = arguments[_key3];
  }

  for (var k in lista) {
    suma = suma + lista[k];
  }

  console.log("la suma es ".concat(suma));
};

sumar(20, 30, 50, 60); // con spreach