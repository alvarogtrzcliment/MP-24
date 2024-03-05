import './EjemploCard.css'

function EjemploCard({ imagen, titulo, descripcion, enlace }){

  return(
    <div className='EjemploCard'>
      <img src={imagen} alt="" />
      <h4>{titulo}</h4>
      <p>{descripcion}</p>
      <a href={enlace}>Enlace al Ejemplo</a>
    </div>
  )
}

export default EjemploCard