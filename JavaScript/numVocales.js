

function numeroVocales(palabra){
  let letrasArray = palabra.split('')
  let contador = 0
  let vocales = ['a','e','i','o','u','A','E','I','O','U','á','é','í','ó','ú','Á','É','Í','Ó','Ú']


  for(let letra of letrasArray){
    
    for(let vocal of vocales){
      
      if(letra === vocal){
        contador++
      }

    }


  }

  return contador
}

console.log(numeroVocales('HOla BuEnOs DíAs'))
console.log(numeroVocales('Hasta Mañana'))