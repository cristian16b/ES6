!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.getElementById("formulario"),t=e.numero1.value,n=e.numero2.value;Number.parseFloat(t),Number.parseFloat(n)},o=(document.querySelector("#contenido"),document.getElementById("tabla")),u=function(){fetch("https://jsonplaceholder.typicode.com/todos").then(function(e){return e.json()}).then(function(e){c(e)})},c=function(e){for(var t in e)o.innerHTML+="\n            <tr>\n                <td>".concat(e[t].userId,"</td>\n                <td>").concat(e[t].id,"</td>\n                <td>").concat(e[t].title,"</td>\n                <td>").concat(e[t].completed,"</td>\n            </tr>\n        ")};window.addEventListener("load",function(){window.addEventListener("scroll",d,!1),document.getElementById("sumar").addEventListener("click",r,!1),document.getElementById("actualizar").addEventListener("click",u,!1)},!1);var d=function(){var e=document.body.scrollHeight-window.innerHeight;window.scrollY>e&&u()}}]);