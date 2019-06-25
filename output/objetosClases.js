"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// http://www.etnassoft.com/2016/12/02/introduccion-a-la-poo-en-javascript-moderno-las-nuevas-clases-en-es6/
var usuario =
/*#__PURE__*/
function () {
  // necesario para inicializar
  function usuario(username, edad) {
    _classCallCheck(this, usuario);

    this._username = username;
    this._edad = edad;
  }

  _createClass(usuario, [{
    key: "username",
    get: function get() {
      return this._username;
    }
  }]);

  return usuario;
}();

var carlos = new usuario('pedro', 2);
console.log("su username es ".concat(carlos._edad));
console.log(carlos.suusername());
alert(carlos._edad);
console.log("pruebo acceder a atributo privado ".concat(carlos._edad));