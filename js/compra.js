const total = localStorage.getItem('total') || 0;
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const resumenDiv = document.getElementById("detalle");
let totalCarrito = document.getElementById('totalCarrito');
let tabla = document.getElementById('tabla-carrito');
let header = document.getElementById('header-tabla-carrito');
let carritoData=document.getElementById('carritoData');
tabla.innerHTML = ''; // Limpiar contenido anterior
totalCarrito.innerHTML = '0';
  
carrito.forEach(producto => {
    let fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>$${parseInt(producto.precio).toLocaleString("es-AR")}</td>
        <td>$${parseInt((parseFloat(producto.precio) * producto.cantidad)).toLocaleString("es-AR")}</td>
        
    `;
    tabla.appendChild(fila);
    carritoData.innerHTML += `${producto.nombre} - ${producto.cantidad}</td> - $${parseInt(producto.precio).toLocaleString("es-AR")} - $${parseInt((parseFloat(producto.precio) * producto.cantidad)).toLocaleString("es-AR")}\n`;

});

let filaTotal = document.createElement('tr');
filaTotal.innerHTML = `
    <td><strong>Total:</strong></td>
    <td></td>
    <td></td>
    <td><strong>$${parseFloat(total).toLocaleString("es-AR")}</strong></td>
`;
tabla.appendChild(filaTotal);
carritoData.innerHTML += `Total: $${parseFloat(total).toLocaleString("es-AR")}\n`;
totalCarrito.innerHTML = total;

function enviarFormulario() {
    console.log("enviarForm")

    const nombreContacto = document.getElementById('nombre').value.trim();
    const emailContacto = document.getElementById('contactoEmail').value.trim();
    if (!nombreContacto || !emailContacto) {
        alert("Por favor, completa con tu nombre completo y un email antes de enviar.");
        return;
    }

    
    // Enviar el formulario
    document.getElementById('formulario').submit();
/*    //        botonEnviar.addEventListener('click', enviarFormulario);
        localStorage.removeItem("carrito");
        localStorage.clear()*/

}

