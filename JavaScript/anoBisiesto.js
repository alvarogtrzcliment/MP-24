
let numero = 1600

if(numero % 4 !== 0){
  console.log('No es Bisiesto :(')
} else if (numero % 100 !== 0){
  console.log('¡Es Bisiesto OLE!')
} else if (numero % 400 === 0){
  console.log('¡Es Bisiesto OLE!')
} else {
  console.log('No es Bisiesto :(')
}