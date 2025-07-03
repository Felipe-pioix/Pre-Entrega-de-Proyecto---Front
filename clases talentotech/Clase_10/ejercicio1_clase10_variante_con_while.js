let edad = parseInt(prompt("Ingrese su edad:"));

// Validación con while + isNaN()
while (isNaN(edad)) {
    edad = parseInt(prompt("Edad inválida. Ingrese un número válido:"));
}

let miembroVIP = confirm("¿Sos miembro VIP?");

if (edad >= 18 && miembroVIP) {
    alert("Acceso concedido al área VIP.");
} else if (edad >= 18) {
    alert("Acceso concedido al área general.");
} else {
    alert("Acceso denegado.");
}