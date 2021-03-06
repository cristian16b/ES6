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

const numeros = [10,20,30,20];
// con rest
const sumar = (...lista) => {
    let suma = 0;
    for(let k in lista) {
        suma = suma + lista[k];
    }
    console.log(`la suma es ${suma}`);
}
sumar(20,30,50,60);

// con spreach se le pasa un vector 
// y lo pone como un vector
const sumarSpreach = (...datos) => {
    // convierte 
    console.log(datos);
    let suma = 0;
    for (let m in datos) {
        suma = suma + datos[m];
    }
    console.log(suma);
}
sumarSpreach(...numeros);