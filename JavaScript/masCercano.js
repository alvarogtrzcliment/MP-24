
let numeroUno = 96
let numeroDos = 95

let unoACien = 100-numeroUno
let dosACien = 100-numeroDos

if(Math.abs(unoACien) > Math.abs(dosACien)){
  console.log(`${numeroDos} está mas cerca de 100`)
  
}else{
  console.log(`${numeroUno} está mas cerca de 100`)
  console.log(unoACien)
}