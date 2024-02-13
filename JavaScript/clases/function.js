
class Puerta{

  // Propiedades de nuestras puertas

  color;
  numero_visagras;
  tipo_mango;
  altura;
  estado = 'Cerrada'

  constructor(colorProp,numero_visagrasProp,tipo_mangoProp,alturaProp){
    this.color = colorProp
    this.numero_visagras = numero_visagrasProp
    this.tipo_mango = tipo_mangoProp
    this.altura = alturaProp
  }

  abrirPuerta(){
    this.estado = 'Abierta'
  }

}

let puerta1 = new Puerta('Azul',3,'Normal',2)

console.log(puerta1)

puerta1.abrirPuerta()

console.log(puerta1)





let coche = {
  ruedas: 4,
  marca: 'Audi',
  plazas: 5,
  color: 'Negro'
}

let cocheBMW = {
  ruedas: 4,
  marca: 'BMW',
  plazas: 5,
  color: 'Negro'
}