let productos = [
   { nombre: 'Laptop', descuento: true, precio: 600000 },
   { nombre: 'Celular', descuento: false, precio: 280000 },
   { nombre: 'Tablet', descuento: true, precio: 300000 },
   { nombre: 'Auriculares', descuento: false, precio: 50000 }
];

for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];

    // Usando el operador && (y) con descuento activo
    if (producto.descuento === true) {
        console.log(`${producto.nombre}: $${producto.precio} (en descuento)`);
    }

    // Usando el operador ! (NOT) si NO tiene descuento
    if (!producto.descuento) { // Equivale a producto.descuento === false.
        console.log(`${producto.nombre} no está en promoción.`);
    }
}
