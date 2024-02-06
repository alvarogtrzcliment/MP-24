
const letraDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

for (let letra of letraDNI){
  
  console.log(letra)

  if (letra === 'D'){

    console.log('Como me gusta la letra '+ letra)
  }

}

for (let posicion in letraDNI){
  
  if(letraDNI[posicion]=== 'D'){
    console.log(posicion)
  }
}


// let numeroUno = 15
// let numeroDos = 16

// console.log(numeroUno + numeroDos)

function sumarDosNumeros (numUno,numDos){
  let suma = numUno + numDos
  return suma
}

let resultadoFuncion = sumarDosNumeros(12,14)

console.log(letraDNI)


function holaBuenosDias(){
  console.log('Hola Buenos días')
}


letraDNI.push('Q')


let palabra = 'Álvaro'
palabra = palabra.toUpperCase()
console.log(palabra.length)
console.log(palabra)


