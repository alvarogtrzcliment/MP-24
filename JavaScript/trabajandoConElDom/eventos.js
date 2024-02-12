
// Reaccionando Eventos

const botonVerMas = document.getElementById('leer-mas')

botonVerMas.addEventListener('click',buttonHandler)

function buttonHandler(evento){

  let parrafoVacio = document.createElement('p')

  let texto = document.createTextNode('Aqui va el texto de ver mas')

  parrafoVacio.appendChild(texto)

  let seccionDescripcion = document.getElementsByClassName('descripcion')

  seccionDescripcion[0].appendChild(parrafoVacio)

}

botonVerMas.addEventListener('dblclick',doubleClickHandler)

function doubleClickHandler(){

  console.log('He hecho doble click')

}
