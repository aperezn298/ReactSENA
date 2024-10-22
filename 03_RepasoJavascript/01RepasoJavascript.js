// Ejercicios de Repaso de Javascript //
// Autor: Alvaro Perez N
// Fecha: Octubre de 2024

// Funciones Tipo Flecha //
// 01. Sintaxis
(param1, param2, paramN) => {
    // cuerpo de la función
}

// Tambien se puede simplificar si la 
// función solo tiene una expresión
param =>  expresion 

// 02. Ejemplo Uno
const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // 8

// 03. Ejemplo Dos
const saludar = () => console.log('Hola');
saludar(); // Resultado: 'Hola'

// 04. Ejemplo Tres
const cuadrado = num => num * num;
console.log(cuadrado(4)); // Resultado: 16

// Ejemplos de Map, Reduce y Filter con Funciones Tipo Flecha
// Map
// 01. Sintaxis
array.map(elemento => { 
    // lógica de la función 
});
// Ejemplo de Map
const numbers = [1, 2, 3, 4, 5];
const fivetime = numbers.map(num => num * 5);
console.log(fivetime); // [5, 10, 15, 20, 25]

// Reduce
// 01. Sintaxis
array.reduce((acumulador, elemento) => {
    // lógica de la función
}, valorInicial);
// Ejemplo de Reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, num) =>
    accumulator + num,
0);
console.log(sum); // 15

// Filter
// 01. Sintaxis
array.filter(elemento => {
    // lógica de la función
});
// Ejemplo de Filter
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]


// 05. Ejercicio Aplicación Uno

// Ventas de la empresa diarias
const ventasDiarias = [200, 450, 300, 600, 150, 1300, 800, 4500];

// Calcular el total de ventas
// Método Reduce: Suma todos los elementos del array
// Parámetros: (Función reductora, valor inicial)
// Función reductora: (sumaTotal, ventaDiaria) => sumaTotal + ventaDiaria
// Valor inicial: 0
// Retorno: Total de ventas
const totalVentas = ventasDiarias.reduce(
    (sumaTotal, ventaDiaria) => sumaTotal + ventaDiaria, 0);

// Imprimir el Total de ventas: $8300
console.log(`Total de ventas: $${totalVentas}`);


// 06. Ejercicio de Aplicación Dos

// Usarios en Fila de espera
const filaEspera = [
    {nombre: 'Camilo Diaz', prioridad: 'Alta'},
    {nombre: 'Andres Sanchez', prioridad: 'Media'},
    {nombre: 'Julia Zaens', prioridad: 'Baja'},
    {nombre: 'Luisa Cruz', prioridad: 'Media'},
    {nombre: 'Andrea Lopez', prioridad: 'Alta'}];

// Turnos pripioritarios
// Filtrar usuarios con prioridad Alta
// Mapear los nombres de los usuarios priorizados
// Parámetros: (Función de filtrado, Función de mapeo)
// Función de filtrado: usuario => usuario.prioridad === 'Alta'
// Función de mapeo: usuario => usuario.nombre
// Retorno: Nombres de los usuarios priorizados
const usuariosPrioritarios = filaEspera.filter(
    usuario => usuario.prioridad === 'Alta')
    .map(usuario => usuario.nombre);

// Imprimir los usuarios con prioridad Alta
console.log(`Los usuarios priorizados son: ${usuariosPrioritarios}`);

// Fin de las Funciones Tipo Flecha //

// Callbacks //
// 01. Sintaxis
function nombreFuncion(callback) {
    // Lógica de la función principal
    callback(); // Llamada al callback
}

// 02. Ejemplo Uno
// Primer paso: Declarar la función callback
function saludar(nombre) {
    // Quinto paso: Imprimir el mensaje
    console.log(`Hola, ${nombre}`);
}

// Segundo paso: Declarar la función que recibe el callback
function procesarEntradaUsuario(callback) {
    const nombre = "Juan";
    // Cuarto paso: Llamar la función callback
    callback(nombre);
}

// Tercer paso: Llamar la función que recibe el callback
procesarEntradaUsuario(saludar);

// 03. Ejemplo Dos
// Primer paso: Declarar la función callback
function saludar(nombre) {
    // Quinto paso: Imprimir el mensaje
    console.log(`Hola, ${nombre}`);
}

// Segundo paso: Declarar la función que recibe el callback
function procesarEntradaUsuario(callback) {
    const nombre = "Juan";
    // Cuarto paso: Llamar la función callback
    callback(nombre);
}

// Tercer paso: Llamar la función que recibe el callback
procesarEntradaUsuario(saludar);


// 04. Ejemplo Tres: Funciones Tipo Flecha como Callbacks
// Primer paso: Declarar la función procesarEntradaUsuario
function procesarEntradaUsuario(callback) {
    const nombre = "Ana";
    // Tercer paso: Llamar la función callback
    callback(nombre);
}

// Segundo paso: Llamar la función procesarEntradaUsuario
procesarEntradaUsuario(
    // Cuarto paso: Declarar la función callback - tipo flecha
    (nombre) => { 
    // Quinto paso: Imprimir el mensaje
    console.log(`Hola, ${nombre}`); 
    }
);


// 05. Ejemplo Cuatro: Callbacks con Parámetros
// Primer paso: Definir la función que recibe el callback
function sumarNumeros(a, b, entregarResultado) {
    const resultado = a + b;
    // Cuarto paso: Llamar la función callback
    entregarResultado(resultado);
}

// Segundo paso: Definir la función callback
function mostrarResultado(res) {
    // Quinto paso: Mostrar el resultado del callback
    console.log(`El resultado es: ${res}`);
}

// Tercer paso: Llamar la función principal y pasarle el callback
sumarNumeros(5, 3, mostrarResultado);


// 06. Ejemplo Cinco: Uso de funciones asincronas
// Paso 1: Crear la función principal
function iniciarSesion(usuario, password, validarDatos) {
    console.log("Procesando la información...");
    // Paso 4: Simular un tiempo de espera de 2 segundos
    setTimeout(() => {
    // Paso 5: Llamar a la función de validación
    validarDatos(usuario, password); 
    }, 2000);
}
// Paso 2: Crear la función de validación
function validarDatos(usuario, password) {
    // Paso 6: Validar las credenciales
    if (usuario === "Alvaro" && password === "1234") {
        console.log("Usuario autenticado correctamente");
    } else {
        console.log("Usuario o contraseña incorrectos");
    }
}

// Paso 3: Llamar a la función principal
iniciarSesion("Alvaro", "1234", validarDatos);
// Intentando iniciar sesión con credenciales incorrectas
iniciarSesion("Alvaro", "wrongpassword", validarDatos);


// 07. Ejemplo Seis: Manejo de errores en funciones asincronas
// Paso 1: Crear la función principal
function iniciarSesion(usuario, password, validarDatos, manejarError) {
    // Paso 5: Verificar si los valores de inicio de sesión son válidos
    if (!usuario || !password) {
        manejarError("Usuario y contraseña son requeridos.");
        return; // Termina la función si hay un error
    }
    console.log("Procesando la información...");
    // Simulando un tiempo de espera de 2 segundos
    setTimeout(() => {
        // Paso 6: Llamar a la función de validación
        validarDatos(usuario, password); 
    }, 2000);
}

// Paso 2: Crear la función de validación
function validarDatos(usuario, password) {
    // Paso 7: Validar las credenciales
    if (usuario === "Alvaro" && password === "1234") {
        console.log("Usuario autenticado correctamente");
    } else {
        // console.log("Usuario o contraseña incorrectos");
        manejarError("Usuario o contraseña incorrectos");
    }
}

// Paso 3: Crear la función para manejar errores
function manejarError(mensaje) {
    console.log("Error:", mensaje);
}

// Paso 4: Llamar a la función principal con credenciales correctas
iniciarSesion("Alvaro", "1234", validarDatos, manejarError);
// Intentando iniciar sesión con credenciales incorrectas
iniciarSesion("Alvaro", "wrongpassword", validarDatos, manejarError);
// Intentando iniciar sesión sin usuario y contraseña
iniciarSesion("", "", validarDatos, manejarError);

// Fin de los Callbacks //


// Try-Catch //
// 01. Sintaxis
try {
    // Código que puede producir un error
} catch (error) {
    // Código para manejar el error
} finally {
    // (Opcional) Código que se ejecuta siempre, haya o no errores
}

// 02. Ejemplo try-catch
try {
    const resultUno = 10 / 0;
    console.log('Resultado es: ', resultUno);

    let data = JSON.parse('');
    console.log(data);

} catch (error) {
    console.log("Ocurrió un error:", error.message);
} finally {
    console.log("La aplicacion ha finalizado.");
}

// 03. Ejemplo try-catch
try {
    const resultUno = 10 / 0;
    if (resultUno === Infinity) {
        throw new Error('No se puede dividir por cero.');
    }
} catch (error) {
    console.log("Ocurrió un error:", error.message);
} finally {
    console.log("La aplicacion ha finalizado.");
}
  

// Promesas //
// 01. Sintaxis de la Promesa
const promesa = new Promise((resolve, reject) => {
    // Simular una operación asincrónica
    const exito = true; // Simular el resultado de la operación

    if (exito) {
        resolve("Operación completada exitosamente.");
    } else {
        reject("Ocurrió un error en la operación.");
    }
});

// 02. Sintaxis para consumir la Promesa
// Consumir la promesa
promesa
.then((resultado) => {
    console.log(resultado); // Exito
})
.catch((error) => {
    console.error(error); // Error
})
.finally(() => {
    console.log("Esta línea se ejecuta siempre.");
});  

// 03. Ejemplo de una promesa
const accion = new Promise((resolve, reject) => {
    // Simular una operación asincrónica
    const exito = true; // Simular el resultado de la operación
    if (exito) {
        resolve("Operación completada exitosamente.");
    } else {
        reject("Ocurrió un error en la operación.");
    }
});

// Consumir la promesa
accion.then((resultado) => {
    console.log(resultado); // Exito
    })
    .catch((error) => {
        console.error(error); // Error
    })
    .finally(() => {
        console.log("Esta línea se ejecuta siempre.");
});

// Casos de Aplicacion de las promesas

// 01. Solicitudes a las API y/o Servidores
// Nombre del pokemon
const nombrePokemon = 'bulbasaur';
// Realizar una petición a un servidor con Fetch y Promesas
fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    // Si la petición es exitosa se ejecuta el método then
    // que recibe la respuesta y la convierte a formato JSON
    .then((response) => {
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        return response.json();
    })

    // Si la respuesta es correcta se imprime en consola
    .then((pokemonData) => {
        const abilitiesPokemon = pokemonData.abilities.map(
            (ability) => ability.ability.name).join(', ');
            console.log(`Las habilidades de ${nombrePokemon} son: ${abilitiesPokemon}`);
        })
    // Si ocurre un error se imprime en consola
    .catch(error => console.error('Error en la petición:', error));

// Fin de las Promesas //

// Async/Await //
// 01. Sintaxis de Async/Await

// Función asíncrona
async function nombreFuncion() {
    try { // Bloque try-catch para manejar errores
        // Lógica de la función
        // Esperar a que la promesa se resuelva
        const resultado = await promesa;
        // Lógica después de que la promesa se resuelve
        console.log(resultado); // Imprimir el resultado
    } catch (error) { // Capturar errores
        // Manejar el error
        console.error(error);
    }
}

// Casos de Aplicacion del Async/Await

// 01. Solicitudes a las API y/o Servidores

// Nombre del pokemon
const nombredelPokemon = 'bulbasaur';
// Función asíncrona para obtener información de un Pokémon
async function obtenerInfoPokemon(nombre) {
    try {
        // Realizar una petición a un servidor con Fetch y Promesas
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!response.ok) { // Si la petición falla
            // Lanzar un error
            throw new Error('Pokémon no encontrado');
        }
        // Convertir la respuesta a formato JSON
        const pokemonData = await response.json();
        // Mapear las habilidades del Pokémon y unirlas en un string
        const abilitiesPokemon = pokemonData.abilities.map(
            (ability) => ability.ability.name).join(', ');
        // Imprimir las habilidades del Pokémon
        console.log(`Las habilidades de ${nombre} son: ${abilitiesPokemon}`);
    } catch (error) { // Capturar errores
        // Imprimir el error en consola
        console.error('Error en la petición:', error);
    }
}

// Fin del Async/Await //

// Desestructuración de Objetos //
// 01. Sintaxis
const {propiedad1, propiedad2, propiedadN} = objeto;

// 02. Ejemplo Uno
// Declarar un objeto con propiedades
const persona = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Bogotá'
};

// Desestructurar el objeto persona
const {nombre, edad, ciudad} = persona;

// Imprimir las propiedades desestructuradas
console.log(nombre); // Juan
console.log(edad); // 25
console.log(ciudad); // Bogotá

// 03. Ejemplo Dos
// Declarar un objeto con propiedades
const equipoComputo = {
    marca: 'HP',
    modelo: 'Pavilion',
    procesador: 'Intel Core i5'
};

// Desestructurar el objeto equipoComputo
const {marca: marcaEquipo, modelo: modeloEquipo} = equipoComputo;

// Imprimir las propiedades desestructuradas
console.log(marcaEquipo); // HP
console.log(modeloEquipo); // Pavilion

// 04. Ejemplo Tres
// Declarar un objeto con propiedades
const aprendiz = {
    nombreApellido: 'Ana Cruz',
  };
  
  // Asignar valor por defecto
  const { nombreApellido, genero = "F" } = aprendiz;
  
  console.log(nombreApellido); // 'Ana Cruz'
  console.log(genero);   // F

// 05. Ejemplo Cuatro
// Declarar un objeto con propiedades
const fruta = {
    nombreFruta: 'Manzana',
    color: 'Rojo',
    precio: 1.5,
    propiedades: {
      vitaminas: 'A, C',
      origen: 'Colombia'
    }
};

// Desestructurar el objeto fruta
const {nombreFruta, color, precio, propiedades: {vitaminas, origen}} = fruta;

// Imprimir las propiedades desestructuradas
console.log(nombreFruta); // Manzana
console.log(color); // Rojo
console.log(precio); // 1.5
console.log(vitaminas); // A, C
console.log(origen); // Colombia

// 06. Ejemplo Cinco
// Declarar un objeto con propiedades
const docente = {
    nombres: 'Luis Dario',
    edad: 32,
    ubicacion: 'Sevilla',
    profesion: 'Ingeniero'
};
  
// Desestructurar algunas propiedades y capturar el resto
const { nombres, ubicacion, ...resto } = docente;

// Imprimir las propiedades desestructuradas
console.log(nombre); // 'Luis'
console.log(ciudad); // 'Sevilla'
console.log(resto);  // { edad: 32, profesion: 'Ingeniero' }
  
