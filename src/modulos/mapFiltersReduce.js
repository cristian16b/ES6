let almuerzos = [
    {principal: 'arepa', postre: 'helado'},
    {principal: 'tacos', postre: 'chesecake'},
    {principal: 'arepa', postre: 'galletas'},
    {principal: 'sushi', postre: 'quesillo'}
];

// uso map
let platoPrincipal = almuerzos.map((almuerzo) => {
    return almuerzo.principal;
});

// uso de filter con map
platoPrincipal = almuerzos.filter((almuerzo)=>{
    return almuerzo.principal === 'arepa';
})
.map((almuerzo)=>{
    return almuerzo.postre;
});

//uso de reduce 
platoPrincipal = almuerzos.reduce((acumulador,almuerzo) => {
    return acumulador.concat(almuerzo.postre);
},[]);


export {platoPrincipal};

