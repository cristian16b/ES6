// const crearObjeto = (nombre,edad) => {
//     return {
//         nombre: nombre,
//         edad: edad
//     }
// }

const crearObjeto = (nombre,edad) => {
    // se puede reducir la sintaxis
    return {
        nombre,
        edad,
        // puedo agregar funciones
        // toString: () => {
        //     return `${nombre} ${edad}`
        // }
        // forma mas simplificada
        toString() {
            return `${nombre} ${edad}`
        }
    }
}

console.log(crearObjeto('oso',29).toString());

const lista = [];
lista.push(crearObjeto('oso',29));
lista.push(crearObjeto('noel',29));
lista.push(crearObjeto('noosos',29));
console.log(lista);
