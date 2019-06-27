const ObtenerSuma = () => {
    // console.log(document.getElementById('formulario').numero1.value)
    let formulario = document.getElementById('formulario');
    let a = formulario.numero1.value;
    let b = formulario.numero2.value;
    // let resultado = Number.parseFloat(document.getElementById('numero1').value) 
    //                 + 
    //                 Number.parseFloat(document.getElementById('numero2').value);

    let resultado = Number.parseFloat(a) + Number.parseFloat(b);

    // console.log(resultado);
    // document.getElementById('resultado').value = resultado;

    formulario.resultado.value = resultado;
}

export {ObtenerSuma};