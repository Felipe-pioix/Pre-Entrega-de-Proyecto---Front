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
        precio: event.target.getAttribute('data-precio'),
        cantidad: 1
    };
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    let productoExistente = carrito.find(item => item.id === producto.id);
if (productoExistente) {
    // Si existe, aumentar la cantidad
    productoExistente.cantidad += producto.cantidad;
} else {
    // Si no existe, agregarlo al carrito
    carrito.push(producto);
}console.log(producto)
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

// mostrar modal
function cargarCarrito() {
    
    console.log("Cargar carrito");
    
    let totalCarrito = document.getElementById('total-carrito');
    const modal = document.getElementById("modal-carrito");
    let tabla = document.getElementById('tabla-carrito');
    let header = document.getElementById('header-tabla-carrito');
    let cartel = document.getElementById('cartel-carritovacio');
    tabla.innerHTML = ''; // Limpiar contenido anterior

    totalCarrito.textContent = '0';

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contador = document.getElementById("contador-carrito");
    let total = 0;

    if (carrito.length){
        header.style.display = "block";
        cartel.style.display ="none"
        carrito.forEach(producto => {
            let fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${producto.nombre}</td>
                <td>
                    <button onclick="disminuirCantidad('${producto.id}')">-</button>
                    ${producto.cantidad}
                    <button onclick="aumentarCantidad('${producto.id}')">+</button>
                </td>
                <td>$${parseInt(producto.precio).toLocaleString("es-AR")}</td>
                <td>$${parseInt((parseFloat(producto.precio) * producto.cantidad)).toLocaleString("es-AR")}</td>
                <td>
                
                <button onclick="eliminarProducto('${producto.id}')">🗑️</button>
            </td>
            `;
            tabla.appendChild(fila);
            total += parseFloat(producto.precio * producto.cantidad) || 0 ;
        
        });
    }else{
header.style.display = "none";
cartel.style.display ="Block"
    }

   
    totalCarrito.textContent = 'Total: $'+ parseInt(total).toLocaleString("es-AR");
    localStorage.setItem('total', total);
    modal.style.display = "block";
    
    
}

function aumentarCantidad(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let producto = carrito.find(p => p.id === id);
    if (producto) {
        producto.cantidad += 1;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        cargarCarrito();
        actualizarContadorCarrito();
    }
}

function disminuirCantidad(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let producto = carrito.find(p => p.id === id);
    if (producto) {
        if (producto.cantidad > 1) {
            producto.cantidad -= 1;
        } else {
            // Eliminar si cantidad llega a 1 y se presiona -
            carrito = carrito.filter(p => p.id !== id);
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        cargarCarrito();
        actualizarContadorCarrito();
    }
}

function eliminarProducto(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(p => p.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
    actualizarContadorCarrito();
}


// actualiza el contador del carrito
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contador = document.getElementById("contador-carrito");
    let cantidadTotal = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    if (contador) {
        // Actualizar el número
        contador.innerHTML = cantidadTotal > 9 ? "9+" : cantidadTotal;
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
    const total = localStorage.getItem('total') || 0;
    
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    
    
    alert(`Total a pagar: $${parseInt(total).toLocaleString("es-AR")}`);
    window.location.href = "compra.html";
}


// Función para cerrar el modal
function cerrarModal() {actualizarContadorCarrito();
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
     cartelDolar.innerHTML="<p></p><h4>Cotizacion Dolar: $"+parseFloat(resultado.tipoCotizacion).toLocaleString("es-AR")+"</h4><p></p>"
     
 }); 
}