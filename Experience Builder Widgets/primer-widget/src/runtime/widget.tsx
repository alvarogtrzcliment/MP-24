import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className='primerWidget'>
      <h3>Primer Widget</h3>
      <p>Experience Builder</p>
      <p>Esto es una prueba de nuestro primer Widget</p>
    </div>
  )
}

export default Widget
