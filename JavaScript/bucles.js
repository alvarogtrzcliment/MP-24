
for(let i = 0; i < 3; i++){
  console.log(i)
}

const semana = ['Lunes', 'Martes', 'Miércoles','Jueves','Viernes','Sábado', 'Domingo']

for(let dia of semana){
  
  if (dia === 'Sábado'){
    break
  }
  console.log(dia)
}

for(let dia in semana){
  console.log(dia)
}

