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

// //uso de reduce 
// platoPrincipal = almuerzos.reduce((acumulador,almuerzo) => {
//     return acumulador.concat(almuerzo.postre);
// },[]);

let plato = almuerzos.reduce((anterior,actual,index,arreglo)=>{
    return anterior.concat(actual.principal);
},[]);

plato = almuerzos.reduce((anterior,actual,index,arreglo)=>{
    // console.log(actual.postre);
    // console.log(index);
    // console.log(arreglo);
    // console.log(actual.postre === 'helado');
    if(actual.postre === 'helado') {
        return anterior + 1;
    }
    return anterior + 0;
},0);

export {platoPrincipal,plato};

