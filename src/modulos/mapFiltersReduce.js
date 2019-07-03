let almuerzos = [
    {principal: 'arepa', postre: 'helado'},
    {principal: 'tacos', postre: 'chesecake'},
    {principal: 'pizza', postre: 'galletas'},
    {principal: 'sushi', postre: 'quesillo'}
];

// uso map
let platoPrincipal = almuerzos.map((almuerzo) => {
    return almuerzo.principal;
})



export {platoPrincipal};

