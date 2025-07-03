// HTML | Ejercicio #2

/* 

  <button id="agregar">Agregar Elemento</button>

*/

  //JS

  /*

// Seleccionamos el botón y la lista por su ID
let boton = document.getElementById("agregar");
let lista = document.getElementById("lista");


// Agregamos el evento click al botón
boton.addEventListener("click", function() {

  // Creamos un nuevo elemento <li>
  let nuevoItem = document.createElement("li");


  // Asignamos el texto al nuevo elemento
  nuevoItem.textContent = "Nuevo Elemento";


  // Añadimos el nuevo elemento a la lista
  lista.appendChild(nuevoItem);


  // Mostramos una alerta confirmando la acción
  alert("Se ha añadido un nuevo elemento");
});

  */