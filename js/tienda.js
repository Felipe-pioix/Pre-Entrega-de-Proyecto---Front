//actualizar contador carrito al cargar la pagina
 addEventListener("load", (event) => {dolar(); actualizarContadorCarrito();})

// Asigna evento clic a todos los botones con la clase "comprar" del HTML
let botonesComprar = document.getElementsByClassName('comprar');
   for (let i = 0; i < botonesComprar.length; i++) {
     botonesComprar[i].addEventListener('click', agregarProducto);
   }

// Vacía carrito
document.getElementById('vaciar-carrito').addEventListener('click', function() {
     localStorage.removeItem('carrito');
     console.log("carrito vacio")
     actualizarContadorCarrito();
     cargarCarrito();
});

// Agrega productos al carrito
function agregarProducto(event) {
    console.log("agregar producto");
    let producto = {
        id: event.target.getAttribute('data-id'),
        nombre: event.target.getAttribute('data-nombre'),
        precio: event.target.getAttribute('data-precio')
    };
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    console.log(producto)
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

// mostrar modal
function cargarCarrito() {
    console.log("Cargar carrito");
    let listaCarrito = document.getElementById('lista-carrito');
    let totalCarrito = document.getElementById('total-carrito');
    const modal = document.getElementById("modal-carrito");
    listaCarrito.innerHTML = '';
    totalCarrito.textContent = '0';

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contador = document.getElementById("contador-carrito");
    let total = 0;
   
    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];   
        let li = document.createElement('li');
        li.textContent = producto.nombre + ' - $' + producto.precio;
        listaCarrito.appendChild(li);
        total += parseFloat(producto.precio) || 0;
    }
    // Mostrar el total redondeado a 3 decimales
    totalCarrito.textContent = total.toFixed(3);
    modal.style.display = "block";
    
    
}

// actualiza el contador del carrito
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contador = document.getElementById("contador-carrito");
    if (contador) {
        // Actualizar el número
        contador.innerHTML = carrito.length > 9 ? "9+" : carrito.length;
        // Mostrar u ocultar según si hay productos
        if (carrito.length > 0) {
            contador.style.display = "flex";
        } else {
            contador.style.display = "none";
        }
    }
    console.log("actualizar contador",contador.innerHTML)
    
}

// carga la pagina de pagar con el carrito
function pagar() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += parseFloat(carrito[i].precio) || 0;
    }

    // Guardar datos en localtorage
    localStorage.setItem('productos', JSON.stringify(carrito));
    localStorage.setItem('total', total.toFixed(3));

    alert(`Total a pagar: $${total.toFixed(3)}`);
    window.location.href = "compra.html";
}


// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal-carrito").style.display = "none";
}

// Función para manejar clicks fuera del modal
function manejarClicksModal(event) {
    const modal = document.getElementById("modal-carrito");
    if (event.target === modal || event.target.classList.contains("cerrar-modal")) {
        cerrarModal();
    }
}


// Asignar el evento al botón (cuando el DOM esté listo)
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pagar")?.addEventListener("click", pagar);
    window.addEventListener("click", manejarClicksModal);
    document.getElementById("icono-carrito")?.addEventListener("click", cargarCarrito);
    
});















let cartelDolar = document.getElementById("dolar");
async function dolar(){
await fetch('https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones') 
 .then(response => response.json()) 
 .then(data => { 
     //console.log(JSON.parse(data))
     const resultado = data.results.detalle.find(moneda => moneda.codigoMoneda === "USD");
     cartelDolar.innerHTML="<p></p><h4>Cotizacion Dolar: $"+resultado.tipoCotizacion+"</h4><p></p>"
     
 }); 
}