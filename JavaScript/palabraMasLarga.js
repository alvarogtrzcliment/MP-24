
// ¿Cuál es la palabra mas larga?

const semana = ['Lunes', 'Martes', 'Miércoles','Jueves','Viernes','Sábado','Domingo']

let palabraMasLargaOf = semana[0]

for(let dia of semana){
  if(dia.length > palabraMasLargaOf.length){
    palabraMasLargaOf = dia
  }
}

console.log(palabraMasLargaOf)
