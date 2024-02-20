
// Programación síncrona

// let miNombre = 'Álvaro'
// let mensaje = `Buenos días mi nombre es ${miNombre}`
// console.log(mensaje)

// Programación Asíncrona

// function mensajeLento(mensaje){
//   setTimeout(()=>{
//     console.log(`Te dejo este mensaje: ${mensaje}`)
//   },5000)
// }

// let nuevoNombre = 'Esri'
// let nuevoMensaje = mensajeLento(`Buenos días mi nombre es: ${nuevoNombre}`)

// console.log('Sigo con el código')

// Llamar a APIs

async function llamadaApi(){
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  console.log(response)
  let respuestaJSON = response.json()
  .then((data)=>{
    console.log(data.value)
  })
  
}

llamadaApi()