

let numeroUno = 1
let numeroDos = 4

// Si el primer número es mayor que el segundo: 
// Sumas los números y los enseñas por consola


if(numeroUno > numeroDos){
  let suma = numeroUno + numeroDos
  console.log(`La suma de los números es: ${suma}`)
}

// Si el segundo número es negativo o distinto de cero:
// Multiplicas el segundo número por 3 y lo enseñas por consola.


if (numeroDos <= 0 || numeroDos != 0){
  let multiplicacion = numeroDos * 3
  console.log(`El número 2 multiplicado por 3 es: ${multiplicacion}`)
}

// Si al incrementar en 1 unidad el valor del número 1 no lo hace
// mayor o igual que el número 2: Determinas cuanto deberías sumarle
// al valor del número 1 para que sea igual que el numero 2 y lo 
// enseñas por consola.


if (numeroUno+1 < numeroDos){
  let diferencia = numeroDos - numeroUno
  console.log(`Le deberías de sumar ${diferencia} a ${numeroUno} para llegar a ${numeroDos}` )
}