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
            console.log(data.results);
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

let tabla = document.getElementById("tabla");

const actualizarTabla = () => {
    // subir tabla a un fakejsonserver porque desde local lo rebota por no ser http
    // fetch('tabla.json')
    // cambiado a una api de la siguiente web https://jsonplaceholder.typicode.com/
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(respuesta => respuesta.json())
    .then(data => {
        cargarFilas(data);
    })
 //   .catch(console.log('error'))
}

const cargarFilas = (datos) => {
    for(let elemento in datos) {
//        console.log(elemento);
        tabla.innerHTML += `
            <tr>
                <td>${datos[elemento].userId}</td>
                <td>${datos[elemento].id}</td>
                <td>${datos[elemento].title}</td>
                <td>${datos[elemento].completed}</td>
            </tr>
        `;
    }
}

const agregarRecurso = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

const actualizarRecurso = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

const eliminarRecurso = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
    })
}

const filtrarRecurso = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response => response.json())
    .then(json => console.log(json))
}

export {obtenerDatos,actualizarTabla,agregarRecurso,actualizarRecurso,eliminarRecurso,filtrarRecurso};

