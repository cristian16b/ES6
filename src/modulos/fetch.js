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

let tabla = document.getElementById("tablaBody");

const actualizarTabla = async () => { 
//     // subir tabla a un fakejsonserver porque desde local lo rebota por no ser http
    // fetch('tabla.json')
    // cambiado a una api de la siguiente web https://jsonplaceholder.typicode.com/
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {    
        const respuesta =  await fetch(url);
        const json = await respuesta.json();
        cargarFilas(json);
    } catch(e) {
        console.log(`${e}`);
    }
}

const cargarFilas = (datos) => {
//     for(let elemento in datos) {
// //        console.log(elemento);
//         tabla.innerHTML += `
//             <tr>
//                 <td>${datos[elemento].userId}</td>
//                 <td>${datos[elemento].id}</td>
//                 <td>${datos[elemento].title}</td>
//                 <td>${datos[elemento].completed}</td>
//             </tr>
//         `;
//     }

    // obtengo las filas, reemplazo el for por un map
    let filas = datos.filter((fila)=>{
<<<<<<< HEAD
       return fila.completed === false;
    }).map((elemento)=>{
        return `
                <tr>
=======
       return fila.completed === false && fila.userId === 1;
    }).map((elemento)=>{
        // return `
        tabla.innerHTML += 
                `<tr>
>>>>>>> 8842c324bbc8a8176e21c4306d08b6b195dde5b1
                    <td>${elemento.userId}</td>
                    <td>${elemento.id}</td>
                    <td>${elemento.title}</td>
                    <td>${elemento.completed}</td>
                </tr>
            `;
    });

    // let filas = datos.map((elemento)=>{
<<<<<<< HEAD
    //         return `<tr>
=======
    //         tabla.innerHTML += `<tr>
>>>>>>> 8842c324bbc8a8176e21c4306d08b6b195dde5b1
    //                     <td>${elemento.userId}</td>
    //                     <td>${elemento.id}</td>
    //                     <td>${elemento.title}</td>
    //                     <td>${elemento.completed}</td>
    //                 </tr>`;
<<<<<<< HEAD
    // });

    console.log(tabla.innerHTML);

    // inserto en el tbody
    tabla.innerHTML += filas;

    // let map = datos.map((elemento)=>{
    //     return elemento.title;
=======
>>>>>>> 8842c324bbc8a8176e21c4306d08b6b195dde5b1
    // });
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