let objeto = {
    nombre: 'html',
    code: 10,
    subobjeto: {
        id: 10,
        out: 20
    }
}

let arrayobjetos = [objeto,objeto,objeto];
let contenido = document.querySelector("#contenido");
const obtenerDatos = () => {
    fetch('https://randomuser.me/api/')
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data.results[0]);
            contenido.innerHTML =
            `
                Nombre ${data.results[0].name.first} - 
                ${data.results[0].name.last} 
                - email 
                ${data.results[0].email}
            `;
        })
     //   .catch(console.log('error'))
}







export {obtenerDatos};

