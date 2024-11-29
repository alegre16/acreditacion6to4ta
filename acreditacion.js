//ejercicio 1
const edadPerro = parseInt(prompt("Ingrese la edad de su perro en años:"));
const edadHumana = edadPerro * 7;
console.log(`La edad del perro en años humanos es ${edadHumana} años.`);

//ejercicio 2
const alojamiento = parseFloat(prompt("Ingrese los gastos de alojamiento:"));
const alimentacion = parseFloat(prompt("Ingrese los gastos de alimentación:"));
const entretenimiento = parseFloat(prompt("Ingrese los gastos de entretenimiento:"));
const costoTotal = alojamiento + alimentacion + entretenimiento;
console.log(`El coste total del viaje es: $${costoTotal}`);

//ejercicio 3
function areaRectangulo(base, altura) {
    return base * altura;
}

const base = parseFloat(prompt("Ingrese la base del rectángulo:"));
const altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
console.log(`El área del rectángulo es ${areaRectangulo(base, altura)}`);

// ejercicio 4
function calcularPrecioConDescuento(precioOriginal, descuento) {
    return precioOriginal - (precioOriginal * (descuento / 100));
}

const precioOriginal = parseFloat(prompt("Ingrese el precio original del producto:"));
const descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
console.log(`El precio final con descuento es: $${calcularPrecioConDescuento(precioOriginal, descuento)}`);

//ejercicio 5 
let bandas = ["Banda1", "Banda2", "Banda3", "Banda4", "Banda5", "Banda6", "Banda7", "Banda8", "Banda9", "Banda10"];

// Mostrar el tercero, cuarto y séptimo elemento
console.log(bandas[2], bandas[3], bandas[6]);

// Modificar el segundo y tercer elemento
bandas[1] = "BandaNueva1";
bandas[2] = "BandaNueva2";
console.log(bandas);

// Agregar un nuevo elemento al final del array
bandas.push("BandaNuevaFinal");
console.log(bandas);

// Mostrar la longitud del array
console.log(`La longitud del array es: ${bandas.length}`);

// Ordenar el array
bandas.sort();
console.log(bandas);

// Recorrer el array con un bucle
for (let i = 0; i < bandas.length; i++) {
    console.log(bandas[i]);
}

