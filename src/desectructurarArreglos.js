// const persona = ['oso pardo',29,'ARG','Desarrollador web'];
const persona = ['oso pardo',29,'ARG'];
// desectructuracion de arreglos
const 
[
    nombre,
    // edad = 'No informada',
     , // sino se va a mostrar dejar un espacio del tipo , ,
    pais = 'ARG',
    // profesion = 'No definida' 
     ,
] = persona;

// console.log(nombre,pais,profesion);

// 1ero desestructuracion
// const mostrarInfo = ([nombre, ,pais]) => {
//     alert(`${nombre}-${pais} `);
// }

// arrow function con parametros pro defecto en la desestructuracion
const mostrarInfo = ([nombre, ,pais,profesion = 'NOOO']) => console.log(`${nombre}-${profesion} `);

// 2do ejecuto la funcion 
mostrarInfo(persona);