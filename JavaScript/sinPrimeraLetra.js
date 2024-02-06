
let palabraUno = 'Hola'
let palabraDos = 'Mundo'

function unionSinPrimera(palabra1,palabra2){

  let palabra1SinP = palabra1.substring(1)
  let palabra2SinP = palabra2.substring(1)

  console.log(palabra1SinP.concat(palabra2SinP))
}

let resultadoFuncion = unionSinPrimera(palabraUno,palabraDos)


console.log(resultadoFuncion.toUpperCase())