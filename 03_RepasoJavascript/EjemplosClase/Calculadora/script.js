// Ejemplo:

// 1. Solicitar por teclado dos numeros enteros - prompt
// 2. Usuario seleccione la operacion a realizar 
// (suma, resta, multiplicacion, division)
// 3. Mostrar el resultado de la operacion

// 4. Incluir funcion flecha para realizar la operacion
// 5. Incluir try-catch para manejar errores de los 
// numeros ingresados y de la operacion seleccionada


// Solucion:
// 1. Solicitar por teclado dos numeros enteros
const numUno = prompt("Ingrese el primer numero: ");
const numDos = prompt("Ingrese el segundo numero: ");

// 2. Usuario seleccione la operacion a realizar (suma, resta, multiplicacion, division)
const operacion = prompt("Seleccione la operacion a realizar: \n1.Suma, \n2.Resta, \n3.Multiplicacion, \n4.Division");

// 4. Incluir funcion flecha para realizar la operacion
let resultado = 0;
const operacionRealizada = (numUno, numDos, operacion) => {
    switch (parseInt(operacion)) {
        case 1:
            resultado = parseInt(numUno) + parseInt(numDos);
            break;
        case 2:
            resultado = parseInt(numUno) - parseInt(numDos);
            break;
        case 3:
            resultado = parseInt(numUno) * parseInt(numDos);
            break;
        case 4:
            if (parseInt(numDos) === 0) {
                throw new Error("No se puede dividir por 0");
            }else {
                resultado = parseInt(numUno) / parseInt(numDos);
            }
            break;
        default:
            throw new Error("Operacion no valida");
    }
    return resultado;
}

// 5. Incluir try-catch para manejar errores de los numeros ingresados y de la operacion seleccionada
try {
    if (isNaN(numUno) || isNaN(numDos) || isNaN(operacion)) {
        throw new Error("Los valores deben ser Numeros");
    }
    const resultado = operacionRealizada(numUno, numDos, operacion);
    window.alert(`El resultado de la operacion es: ${resultado}`);
} catch (error) {
    window.alert(`Error: ${error.message}`);
} finally {
    window.alert("Aplicacion ha finalizada.");
}