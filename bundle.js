!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.getElementById("formulario"),t=e.numero1.value,n=e.numero2.value;Number.parseFloat(t),Number.parseFloat(n)},o=(document.querySelector("#contenido"),document.getElementById("tablaBody")),c=function(){fetch("https://jsonplaceholder.typicode.com/todos").then(function(e){return e.json()}).then(function(e){i(e)})},i=function(e){var t=e.map(function(e){return"\n                <tr>\n                    <td>".concat(e.userId,"</td>\n                    <td>").concat(e.id,"</td>\n                    <td>").concat(e.title,"</td>\n                    <td>").concat(e.completed,"</td>\n                </tr>\n            ")});o.innerHTML+=t},u=[{principal:"arepa",postre:"helado"},{principal:"tacos",postre:"chesecake"},{principal:"arepa",postre:"galletas"},{principal:"sushi",postre:"quesillo"}],a=u.map(function(e){return e.principal});a=u.filter(function(e){return"arepa"===e.principal}).map(function(e){return e.postre}),window.addEventListener("load",function(){window.addEventListener("scroll",l,!1),document.getElementById("sumar").addEventListener("click",r,!1),document.getElementById("actualizar").addEventListener("click",c,!1)},!1);var l=function(){var e=document.body.scrollHeight-window.innerHeight;window.scrollY>e&&c()};console.log(a)}]);