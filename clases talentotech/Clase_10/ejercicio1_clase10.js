let edad = prompt("Ingrese su edad: ")


edad = parseInt(edad)


if (isNaN(edad) || edad === null) {
    alert("Ingrese su edad con los números del teclado.")
} else {  


    let miembroVIP = confirm("¿Sos miembro VIP?: ");


    if (edad >= 18 && miembroVIP) {
        alert("Acceso concedido al área VIP.");
    } else if (edad >= 18 && !miembroVIP){
        console.log("Acceso concedido al sector general.")
    } else {
        console.log("Acceso denegado.");
    }
        console.log(`El valor dado a miembroVIP fue ${miembroVIP}`)
}
