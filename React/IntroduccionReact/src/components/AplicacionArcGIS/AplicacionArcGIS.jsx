import './AplicacionArcGIS.css'


function AplicacionArcGIS({ linkImagen, titulo, descripcion, linkProducto }){

  return(
    <div className='Aplicacion'>
      <img src={linkImagen} alt="" />
      <div>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <a href={linkProducto}>Enlace al producto</a>
      </div>
    </div>
  )

}

export default AplicacionArcGIS