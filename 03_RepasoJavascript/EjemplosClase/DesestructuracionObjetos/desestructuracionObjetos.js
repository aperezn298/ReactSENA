const frutas = [{
    nombreFruta: 'Manzana',
    color: 'Rojo',
    precio: 1.5,
    propiedades: {
        vitaminas: 'A, C',
        origen: 'Colombia'
    }},{
    nombreFruta: 'Banano',
    color: 'Amarillo',
    precio: 0.5,
    propiedades: {
        vitaminas: 'B, C',
        origen: 'Ecuador'
    }},{
    nombreFruta: 'Fresa',
    color: 'Rojo',
    precio: 2.5,
    propiedades: {
        vitaminas: 'C',
        origen: 'Perú'
    }}];
        
frutas.forEach(({nombreFruta, color, precio}) => {
    console.log(`La ${nombreFruta} es de color ${color}, 
        tiene un precio de $${precio} COP`);
});