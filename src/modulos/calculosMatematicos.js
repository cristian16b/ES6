const ObtenerSuma = () => {
    let resultado = Number.parseFloat(document.getElementById('numero1').value) 
                    + 
                    Number.parseFloat(document.getElementById('numero2').value);
    // console.log(resultado);
    document.getElementById('resultado').value = resultado;
}

export {ObtenerSuma};