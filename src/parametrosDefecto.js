// defino parametros por default en funcion
function registrarUsuario(nombre,pais = '<ARG>',correo = '<sin correo>') {
    return `nombre = ${nombre} pais = ${pais} correo = ${correo}` ;
}

console.log(registrarUsuario('oso','polonia'));
console.log(registrarUsuario('oso'));


