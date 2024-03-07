import { React } from 'jimu-core'

const InformacionServicio = ({ titulo, telefono, direccion }) => {
  return (
    <div>
      <h3>{titulo}</h3>
      <p><strong>Teléfono: </strong>{telefono}</p>
      <p><strong>Dirección: </strong>{direccion}</p>
    </div>
  )
}

export default InformacionServicio
