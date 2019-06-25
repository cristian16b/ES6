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