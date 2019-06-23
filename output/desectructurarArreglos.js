"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// const persona = ['oso pardo',29,'ARG','Desarrollador web'];
var persona = ['oso pardo', 29, 'ARG']; // desectructuracion de arreglos

var nombre = persona[0],
    _persona$ = persona[2],
    pais = _persona$ === void 0 ? 'ARG' : _persona$; // console.log(nombre,pais,profesion);
// 1ero desestructuracion
// const mostrarInfo = ([nombre, ,pais]) => {
//     alert(`${nombre}-${pais} `);
// }
// arrow function con parametros pro defecto en la desestructuracion

var mostrarInfo = function mostrarInfo(_ref) {
  var _ref2 = _slicedToArray(_ref, 4),
      nombre = _ref2[0],
      pais = _ref2[2],
      _ref2$ = _ref2[3],
      profesion = _ref2$ === void 0 ? 'NOOO' : _ref2$;

  return console.log("".concat(nombre, "-").concat(profesion, " "));
}; // 2do ejecuto la funcion 


mostrarInfo(persona);