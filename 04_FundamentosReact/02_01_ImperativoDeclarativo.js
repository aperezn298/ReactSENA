// Imperativo VS Declarativo

// Gestion de Ventas
const ventas = [100, 300, 450, 600, 700, 850];

// Imperativo
function sumarVentas(ventas) {
  let total = 0;
  for (let i = 0; i < ventas.length; i++) {
    total += ventas[i];
  }
  return total;
}
console.log(sumarVentas(ventas));

// Declarativo
const sumarVentasDeclarativo = ventas.reduce(
    (acumu, venta) => acumu + venta, 0);
console.log(sumarVentasDeclarativo);

//
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const personas = [
  { usuario: 'Juan Diaz', prioridad: 'Alta' },
  { usuario: 'Maria Perez', prioridad: 'Media' },
  { usuario: 'Pedro Gomez', prioridad: 'Baja' },
  { usuario: 'Ana Diaz', prioridad: 'Alta' }
]

const prioridadEmpresa = 'Baja';
const personaCumplePrioridad = 
personas.filter(persona => persona.prioridad === prioridadEmpresa);
console.log(personaCumplePrioridad); // [{ usuario: 'Juan Diaz', prioridad: 'Alta' }, { usuario: 'Ana Diaz', prioridad: 'Alta' }]

const otroEjemplo = personas.filter().map();