// 1. Solicitar por teclado dos números enteros y la operación
let numUno;
let numDos;
let operacion;

try {
    numUno = prompt("Ingrese el primer número: ");
    numDos = prompt("Ingrese el segundo número: ");
    operacion = prompt("Seleccione la operación a realizar: \n1.Suma, \n2.Resta, \n3.Multiplicación, \n4.División");

    // Validar que los inputs sean números
    if (isNaN(numUno) || isNaN(numDos) || isNaN(operacion)) {
        throw new Error("Los valores deben ser números");
    }
} catch (error) {
    window.alert(`Error: ${error.message}`);
}

// 3. Realizar cada operación con funciones flecha
const suma = (numUno, numDos) => parseInt(numUno) + parseInt(numDos);
const resta = (numUno, numDos) => parseInt(numUno) - parseInt(numDos);
const multiplicacion = (numUno, numDos) => parseInt(numUno) * parseInt(numDos); 
const division = (numUno, numDos) => parseInt(numUno) / parseInt(numDos);

let resultado = 0;

try {
    const operacionRealizada = (numUno, numDos, operacion) => {
        switch (parseInt(operacion)) {
            case 1:
                resultado = suma(numUno, numDos);
                break;
            case 2:
                resultado = resta(numUno, numDos);
                break;
            case 3:
                resultado = multiplicacion(numUno, numDos);
                break;
            case 4:
                resultado = division(numUno, numDos);
                if(isNaN(resultado) || !isFinite(resultado)) {
                    throw new Error("No se puede dividir por cero");
                }
                break;
            default:
                throw new Error("Operación no válida");
        }
        return resultado;
    }
    const resultado = operacionRealizada(numUno, numDos, operacion);
    window.alert(`El resultado de la operación es: ${resultado}`);
} catch (error) {
    window.alert(`Error: ${error.message}`);
} finally {
    window.alert("Aplicación ha finalizado.");
}