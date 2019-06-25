"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// http://www.etnassoft.com/2016/12/02/introduccion-a-la-poo-en-javascript-moderno-las-nuevas-clases-en-es6/
var Usuario =
/*#__PURE__*/
function () {
  // necesario para inicializar
  function Usuario(username, edad) {
    _classCallCheck(this, Usuario);

    // por convencion se usa _nombrevariable
    this._username = username;
    this._edad = edad;
  }

  _createClass(Usuario, [{
    key: "toString",
    value: function toString() {
      return "".concat(this._username, "-").concat(this._edad);
    }
  }, {
    key: "username",
    get: function get() {
      return this._username;
    }
  }, {
    key: "edad",
    get: function get() {
      return this._edad;
    }
  }]);

  return Usuario;
}();

var Estudiante =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Estudiante, _Usuario);

  // necesario para inicializar
  function Estudiante(username, edad) {
    var _this;

    var carrera = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'No definida';

    _classCallCheck(this, Estudiante);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Estudiante).call(this, username, edad));
    _this._carrera = carrera;
    return _this;
  }

  _createClass(Estudiante, [{
    key: "toString",
    value: function toString() {
      return "".concat(_get(_getPrototypeOf(Estudiante.prototype), "toString", this).call(this), "-").concat(this._carrera);
    }
  }]);

  return Estudiante;
}(Usuario);

var carlos = new Estudiante('pedro', 2);
console.log(carlos.toString());
var carlos2 = new Estudiante('pedro', 2, 'ing');
console.log(carlos2.toString());