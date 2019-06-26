"use strict";

var texto = 'Hola mundo'; //verifico si texto (convertido a minus) arranca con h

console.log(texto, 'arranca con h', texto.toLowerCase().startsWith('h')); //verifico si el texto (conv a minus) finaliza con o

console.log(texto, 'termina con o', texto.toLowerCase().endsWith('o')); //verif si include oso

console.log(texto.includes('Hola', 'Mundo'));
var frutas = ['manzana', 'pera', 'uva'];
console.log(frutas.includes('manzana'));
console.log(frutas.includes('manzana', 'pera'));
console.log(frutas.find(function (fruta) {
  return fruta.length > 4;
}));
console.log(frutas);
console.log(frutas.find(function (fruta) {
  return fruta.length <= 4;
}));
console.log(frutas.findIndex(function (fruta) {
  return fruta === 'uva';
}));
console.log(frutas.findIndex(function (fruta) {
  return fruta === 'pera';
}));