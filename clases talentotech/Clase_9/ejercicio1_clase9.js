alert("Operación: Suma de 2 números")
let numeroA = prompt("Ingrese un número: ")
let numeroB = prompt("Ingrese un número: ")

numeroA = parseInt(numeroA)
numeroB = parseInt(numeroB)

if (isNaN(numeroA) || isNaN(numeroB)) {
    alert("Error. Asegúrese de ingresar números en ambos campos.")
} else {
    let resultadoSuma = numeroA + numeroB
    alert(`El resultado de la suma es: ${resultadoSuma}`)

    alert("Operación: Resta de un tercer valor")
    let numeroC = prompt("Ingrese un número: ")
    if (isNaN(numeroC)) {
         alert("Error: El tercer valor también debe ser un número.")
    } else {
        let resultadoResta = resultadoSuma - numeroC

        alert(`El resultado de restar ${numeroC} a ${resultadoSuma} es: ${resultadoResta}`)

        console.log(`Se ingresaron 2 valores numéricos: ${numeroA} y ${numeroB}, se los sumó obteniendo ${resultadoSuma}.\nLuego, para realizar una resta se pidió un tercer valor y se ingreso ${numeroC} que al restarlo a ${resultadoSuma} se obtuvo ${resultadoResta} como resultado final.`)
    }    
}
