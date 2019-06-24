const usuario = {
    nombre : 'cristian',
    correo : 'c@n.com',
    edad: 29
}

// no es necesario poner todos los atributos
// conviene trabajar con objetos

const {nombre,correo,profesion = 'No tiene'} = usuario;

console.log(nombre);

console.log(profesion);

const mostrarInfo = ({nombre,profesio = 'Est'}) => {
    console.log(`su nombre es ${nombre} su profesion es ${profesio}`);
}

mostrarInfo(usuario);