// rest recibe una cantidad N de param
const mostrarDatos = (...datos) => {
    console.log(datos);
}

mostrarDatos('jose','pedro',null);

// spread recibe un vector de long N
const mostrarDatosSpreach = (...datos) => {
    console.log(datos);
}

const arreglodatos = ['oso','casa','feliz'];
mostrarDatosSpreach(...arreglodatos);

