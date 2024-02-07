

let elementoBoton = document.getElementById('leer-mas')

let elementoP = document.getElementsByTagName('section')


console.log(elementoBoton)

console.log(elementoP)


// Seleccionar las secciones a través del CSS

let secciones = document.querySelectorAll('section')

console.log(secciones)

// Crear un enlace y acceder a la propiedad href del enlace

let enlace = document.createElement('a')

enlace.href = 'https://developer.mozilla.org/es/docs/Web/API/Element'

enlace.innerHTML = 'Enlace al documento'

console.log(enlace)

// Crear un párrafo con un texto

let parrafoNuevo = document.createElement('p')

let nodoTexto = document.createTextNode('Hola buenos días')

parrafoNuevo.appendChild(nodoTexto)

console.log(parrafoNuevo)

let seccionDescripcion = document.querySelector('.descripcion')

seccionDescripcion.appendChild(parrafoNuevo)

seccionDescripcion.appendChild(enlace)


// Encontrar el enlace de la imagen del ArcGIS Pro y cambiarlo a ArcGIS Online

let imagen = document.querySelector('img')

console.log(imagen.getAttributeNames())

console.log(imagen.getAttribute('src'))

imagen.setAttribute('src','https://www.esri.es/content/dam/esrisites/en-us/arcgis/products/arcgis-online/assets/arcgis-online-product-logo-icon.png')

// Modo oscuro del encabezado

let elementoClase = document.getElementsByClassName('encabezado')

let encabezado = elementoClase[0]

console.log(encabezado.classList)

encabezado.classList.add('oscuro')

console.log(encabezado.classList)

encabezado.classList.remove('oscuro')