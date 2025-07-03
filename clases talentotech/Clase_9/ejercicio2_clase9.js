// Solicitar datos al usuario
let nombre = prompt("Por favor, ingresa tu nombre:");
let edadInput = prompt("Hola " + nombre + ", ingresa tu edad:");

let edad = parseInt(edadInput);


if (isNaN(edad)) { // con isNAN() se valida si es un número
    console.log("Error: '" + edadInput + "' no es un número de edad válido.");
} else if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else if (edad < 18 && edad > 14) {
    console.log("Eres adolescente");
} else {
    console.log("Eres un infante.");
}
