let objeto = {
    nombre: 'html',
    code: 10,
    subobjeto: {
        id: 10,
        out: 20
    }
}

let arrayobjetos = [objeto,objeto,objeto];

const obtenerDatos = () => {
    fetch('https://randomuser.me/api/')
        .then(respuesta => {
            console.log(respuesta);
        })
}







export {obtenerDatos};

