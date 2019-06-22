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

const numeros = [2,3,5,6];

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

// console.log(duplicarVector2(numeros));

//REPASAR FUNCIONES DE ARRAYS CON LA ES6, PORQUE ES MUY NECESARIO AGARRARLE LA MANO



