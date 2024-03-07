import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className='informacionAyuntamiento'>
      <header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kZsqMAqzYLkXn5xk1XqNGvNw65v8IHBOvg&usqp=CAU" alt="" />
        <h3>Ayuntamiento de Madrid</h3>
      </header>

      <div className='informacion'>
        <p><strong>Teléfono: </strong>010</p>
        <p><strong>Calle: </strong>Paseo de Recoletos</p>
        <a href="https://www.madrid.es/portal/site/munimadrid">Página Web del Ayuntamiento</a>
      </div>

    </div>
  )
}

export default Widget
