"use strict";

var promesa = new Promise(function (resolve, reject) {
  // accion que se ejecutara
  // resolve();
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve();
    } else {
      reject();
    }
  }, 4000);
});
promesa.then(function () {
  console.log('exito');
});
promesa["catch"](function () {
  console.log('fallo');
});