const promesa = new Promise((resolve,reject) => {
    // accion que se ejecutara
    // resolve();
    setTimeout(()=>{
        const exito = true;
        if(exito) {
            resolve();
        } else
        {
            reject();
        }
    },4000);
});

promesa.then(() => {
    console.log('exito');
});
promesa.catch(()=>{
    console.log('fallo');
});