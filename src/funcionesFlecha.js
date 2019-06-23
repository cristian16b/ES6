const nombres = ['peron','eva','nestor'];

// const numero_caracteres = nombres.map(
//     function(nombre) {
//         let salida = `${nombre} cantidad chars ${nombre.length}`
//         console.log(salida);
//     }
// );

//
// (parametro) => {
//     // codigo 
//     // return
// }

// const numero_caracteres = nombres.map((nombre) => {
//     let salida = `${nombre} cantidad chars ${nombre.length}`
//     console.log(salida);
// });

// const numero_caracteres = nombres.map((nombre) => { return `${nombre} cantidad chars ${nombre.length}`});

// const numero_caracteres = nombres.map((nombre) => `${nombre} cantidad chars ${nombre.length}` );

/*
*El método map() crea un nuevo array con los resultados de la llamada a la función
* indicada aplicados a cada uno de sus elementos.
*/

const numero_caracteres = nombres.map(nombre => {
   return `${nombre} cantidad chars ${nombre.length}` 
});

const numero_mayor = (x,y) => {
    let salida = `${x}>${y}`;
    if (y>x) {
        salida = `${y}>${x}`
    }
    return salida;
}

// console.log(numero_caracteres);

// let a = 20,b = 30,c = 10;
// console.log(numero_mayor(a,b));
// console.log(numero_mayor(c,a));

const numeros = [20,3,5,6];

function duplicarVector(x) {
    const duplicar = x.map(numero => {
        return numero * 2
    });
    // console.log(duplicar);
    return duplicar;
}

// console.log(numeros);
// console.log(duplicarVector(numeros));
// IMPORTANTE FOREACH SOLO RECORRE NO DEVUELVE UN ARRAY COMO LO HACE MAP
// function duplicarVector2(x) {
//     console.log(x);
//     const vector_duplicado2 = numeros.forEach(numero => {
//         document.write(numero);
//     });
//     console.log(vector_duplicado2);
//     return vector_duplicado2;
// }
//TENER EN CUENTA LOS SIGUIENTE
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array

numeros.forEach((numero,indice,array) => {
    console.log(numero,indice,array);
});

//REPASAR FUNCIONES DE ARRAYS CON LA ES6, PORQUE ES MUY NECESARIO AGARRARLE LA MANO
numeros.push(21);
console.log( `push inserto final ${numeros}`);
numeros.pop();
console.log(`pop elimino final ${numeros}`);
numeros.shift();
console.log(`shift elimino al inicio ${numeros}`);
numeros.unshift([-1,0]);
console.log(`unshift inserto inicio ${numeros}`);
console.log(`index of 5 es ${numeros.indexOf(5)}`);
console.log(`index of -2 ${numeros.indexOf(-2)}`);//retorna -1 porque no existe
numeros.splice(0,1);
console.log(`splice para eliminar ${numeros}`);
numeros.splice(1,0,'a','b','c');
console.log(`splice para insertar c/ pos negativa ${numeros}`);
numeros.splice(-1,0,'atraz','oh','zzzz');
console.log(`splice eliminar insertar ${numeros}`);
let pos = numeros.indexOf('atraz');
// ref posicion desde donde, cantidad a eliminar, elementos a insertar ...
numeros.splice(pos,3,0,null,null);
console.log(numeros);



