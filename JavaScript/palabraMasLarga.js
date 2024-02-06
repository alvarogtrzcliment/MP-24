
// ¿Cuál es la palabra mas larga?

const semana = ['Lunes', 'Martes', 'Miércoles','Jueves','Viernes','Sábado','Domingo']

let palabraMasLargaOf = semana[0]

for(let dia of semana){
  if(dia.length > palabraMasLargaOf.length){
    palabraMasLargaOf = dia
  }
}

console.log(palabraMasLargaOf)


let declaracionVacia;

console.log(declaracionVacia)

declaracionVacia = 'declaraciónLLena'

console.log(declaracionVacia)

let cumpleanos = {
  dia: 22,
  mes: 'Octubre'
}

console.log(`El día de mi cumpleaños es el ${cumpleanos.dia} de ${cumpleanos.mes}`)

console.log('El dia de mi cumpleaños es ' + cumpleanos.dia + ' de ' + cumpleanos.mes)

let arrayCumpleanos = ['24 Junio', '4 Noviembre', ' 1 Mayo']

console.log(arrayCumpleanos)

console.log(arrayCumpleanos[1])

if(cumpleanos.dia === 24 || cumpleanos.mes === 'Junio'){
  console.log(`El día de mi cumpleaños es el ${cumpleanos.dia} de ${cumpleanos.mes}`)
}

let numeroUno = 12
let numeroDos = 14

if(numeroUno > numeroDos){
  let suma = numeroUno + numeroDos
  console.log(suma)
}else{
  let resta = numeroDos - numeroUno
  console.log(resta)
}



