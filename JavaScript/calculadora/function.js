
// Selecciono los elementos que voy a utilizar

const inputElement = document.getElementById('input')
const calcularElement = document.getElementById('calcular')
const reiniciarElement = document.getElementById('reiniciar')

const parrafoSuma = document.getElementById('suma')
const parrafoMedia = document.getElementById('media')
const parrafoMaximo = document.getElementById('valor-maximo')
const parrafoMinimo = document.getElementById('valor-minimo')

// Creo los eventos

calcularElement.addEventListener('click',calcularHandler)
reiniciarElement.addEventListener('click',reiniciarHandler)

// Funcion del botón de calcular

function calcularHandler(){

  console.log(inputElement.value)
  
  let inputModification = inputElement.value.split(',')

  console.log(inputModification)

  
  let arrayNumeros = inputModification.map(function(numeroLetra){
    return parseInt(numeroLetra)
  })

  console.log(arrayNumeros)

  parrafoSuma.innerHTML = `La suma de los números es: ${suma(arrayNumeros)}`
  parrafoMedia.innerHTML = `La media de los números es: ${media(arrayNumeros)}`
  parrafoMaximo.innerHTML = `El valor máximo es: ${valorMaxMin(arrayNumeros)[0]}`
  parrafoMinimo.innerHTML = `El valor mínimo es: ${valorMaxMin(arrayNumeros)[1]}`

}

// Funcion del botón de reiniciar

function reiniciarHandler(){
  inputElement.value = ''
  parrafoSuma.innerHTML = ''
  parrafoMedia.innerHTML = ''
  parrafoMaximo.innerHTML = ''
  parrafoMinimo.innerHTML = ''
}


// funcion sumar los numeros de un array

function suma(arrayEntrada){
  let suma = 0

  arrayEntrada.map(function(numero){
    suma = suma + numero
  })

  return suma
}

function media(arrayEntrada){
  let sumaArray = suma(arrayEntrada)
  let longitud = arrayEntrada.length

  let media = sumaArray/longitud

  return media
}

function valorMaxMin(arrayEntrada){
  let ordenado = arrayEntrada.sort()
  return ([ordenado[arrayEntrada.length-1],ordenado[0]])
}