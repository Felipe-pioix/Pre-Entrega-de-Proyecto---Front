let productos = ['Laptop', 'Celular', 'Tablet']; 

for (let i = 0; i < productos.length; i++) { 
 console.log(productos[i]); 
} 

/* 
Se crea un lista (o array) llamado 'productos' que almacena tres elementos de tipo string.

Se unsa un bucle for para recorrer el array 'productos': donde la variable i irá almacenando el valor de cada uno de los elementos de lista en cada vuelta.
- let i = 0 | inicializa el contador del bucle en 0. 
- i < productos.length | establece la condición para la repetición del bucle siempre que i sea menor que la longitud (o cantidad de elementos) de la lista.
- i++ | incrementa el contador en 1 unidad en cada iteración, vuelta o repetición
- productos[i] | accede al elemento de la lista en la posición actual de i (no siempre es el primer elemento, irá cambiando la posición con cada vuelta del bucle).

El bucle imprimirá cada elemento del array en la consola, uno por línea:
Laptop
Celular
Tablet
*/