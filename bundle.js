!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r=function(){var e=document.getElementById("formulario"),n=e.numero1.value,t=e.numero2.value;Number.parseFloat(n),Number.parseFloat(t)},o=(document.querySelector("#contenido"),document.getElementById("tablaBody"),function(){}),l=[{principal:"arepa",postre:"helado"},{principal:"tacos",postre:"chesecake"},{principal:"arepa",postre:"galletas"},{principal:"sushi",postre:"quesillo"}];l.map(function(e){return e.principal});l.filter(function(e){return"arepa"===e.principal}).map(function(e){return e.postre});var u=l.reduce(function(e,n,t,r){return e.concat(n.principal)},[]);u=l.reduce(function(e,n,t,r){return console.log(n.postre),console.log(t),console.log(r),console.log("helado"===n.postre),"helado"===n.postre?(alert(e),e+1):e+0},0),window.addEventListener("load",function(){window.addEventListener("scroll",i,!1),document.getElementById("sumar").addEventListener("click",r,!1),document.getElementById("actualizar").addEventListener("click",o,!1)},!1);var i=function(){var e=document.body.scrollHeight-window.innerHeight;window.scrollY>e&&o()};console.log(u)}]);