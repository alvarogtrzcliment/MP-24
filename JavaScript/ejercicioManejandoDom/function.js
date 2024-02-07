
// Número de enlaces de la página

let enlacesPagina = document.querySelectorAll('a')

console.log(enlacesPagina)

let numeroEnlacesPagina = enlacesPagina.length

console.log(numeroEnlacesPagina)


// Dirección a la que enlaza el último enlace

// let ultimoEnlace = enlacesPagina[enlacesPagina.length-2]

let ultimoEnlace = document.querySelector('#penultimo-enlace')

let direccionEnlace = ultimoEnlace.href 

console.log(direccionEnlace)

// Numero de enlaces en el tercer párrafo

let enlacesUltimoParrafo = document.querySelectorAll('#thirdparagraph > a')

let numeroEnlacesUltimoParrafo = enlacesUltimoParrafo.length

console.log(numeroEnlacesUltimoParrafo)

// Creo nodo y modifico el innerHTML para poner el resultado

let nuevoParrafo = document.createElement('div')

let body = document.getElementsByTagName('body')

console.log(body)

nuevoParrafo.innerHTML = `<p>Resultado1</p> <p>Resultado2</p> <p>Resultado3</p>`

body[0].appendChild(nuevoParrafo)