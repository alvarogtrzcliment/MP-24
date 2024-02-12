
// Selecciono el Botón

const boton = document.getElementById('button')

// Creo un evento sobre el botón

boton.addEventListener('click', botonHandler)

// Creo la funcion del evento

function botonHandler(){

  // Seleccionar el input

  const input = document.getElementById('input')

  // Acceder a la propiedad que almacena el texto

  let textoInput = input.value

  // Pintarlo por consola

  console.log(textoInput)

  // Defino mi animal favorito

  const animalFavorito = 'Perro'

  // Evaluar si existe un párrafo ya

  if(document.body.children.length === 4){
    document.body.lastChild.remove()
  }
  // Evaluar si mi animal favorito es igual que el del texto almacenado del input

  if(animalFavorito === textoInput){

    // Mostramos el mensaje correcto

    // Crear elemento P e insertar texto

    let parrafo = document.createElement('p')

    parrafo.innerHTML = '¡Tu animal favorito y el mío es el mismo!'

    document.body.appendChild(parrafo)


  }else{

    // Mostramos el mensaje incorrecto

    let parrafo = document.createElement('p')

    parrafo.innerHTML = '¡Tu animal favorito y el mío no es el mismo :(!'

    document.body.appendChild(parrafo)

  }

}

