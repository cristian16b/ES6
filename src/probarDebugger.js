const primero = (valor) => {
    return segundo(valor + 10);
}
const segundo = (valor) => {
    return tercero(valor + 10);
}
const tercero = (valor) => {
    // debuger habilita el debug del navegador
    // debugger;
    // console.trace muestra la pila de ejecucion
    console.trace();
    return valor + 10;
}

console.log(`el resultado es ${primero(10)}`);