
const nombres = ['Miguel', 'Javier','María', 'Juan', 'Guille', 'Miguel ángel']

// for(let nombre of nombres){
//   console.log(nombre)
// }

// Método funcional de tipos de dato array


let nuevoArray = nombres.map(function enMayusculas(palabra){
  palabra = palabra.toUpperCase()
  return palabra
})

console.log(nuevoArray)