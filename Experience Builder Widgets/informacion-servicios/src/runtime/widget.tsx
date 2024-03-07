import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'
import InformacionServicio from './components/InformacionServicio'
import { useState } from 'react'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [botonPulsado, setBotonPulsado] = useState('sinServicio')
  console.log('Boton Pulsado', botonPulsado)

  let servicio

  if (botonPulsado === 'sinServicio') {
    servicio = <div className='sinServicio'>
      <h3>Seleccione un servicio</h3>
    </div>
  }

  if (botonPulsado === 'policia') {
    servicio = (
    <InformacionServicio
      titulo={'Policía'}
      telefono={982764398}
      direccion={'Calle Titulcia Nº 23'}></InformacionServicio>
    )
  }

  if (botonPulsado === 'bomberos') {
    servicio = (
      <InformacionServicio
        titulo={'Bomberos'}
        telefono={982764398}
        direccion={'Calle Santa Engracia Nº 35'}></InformacionServicio>
    )
  }

  if (botonPulsado === 'centroSalud') {
    servicio = (
      <InformacionServicio
        titulo={'Centro de Salud'}
        telefono={982764398}
        direccion={'Calle Ramiro de Maeztu Nº 45'}></InformacionServicio>
    )
  }

  function policiaHandler () {
    setBotonPulsado('policia')
  }
  function bomberosHandler () {
    setBotonPulsado('bomberos')
  }
  function centroSaludHandler () {
    setBotonPulsado('centroSalud')
  }

  return (
    <div className='informacionServicios'>
      <div className='botonesServicios'>
        <button onClick={policiaHandler}>Policía</button>
        <button onClick={bomberosHandler}>Bomberos</button>
        <button onClick={centroSaludHandler}>Centro de Salud</button>
      </div>
      <div className='textoInformacionServicio'>
        {servicio}
      </div>
    </div>
  )
}

export default Widget
