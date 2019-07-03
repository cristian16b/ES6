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

platoPrincipal = almuerzos.filter((almuerzo)=>{
    return almuerzo.principal === 'arepa';
})
.map((almuerzo)=>{
    return almuerzo.postre;
});



export {platoPrincipal};

