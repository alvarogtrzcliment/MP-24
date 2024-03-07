import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { useState } from 'react'
import { type IMConfig } from '../config'
import './widget.css'
import { Button } from 'jimu-ui'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  // Si quiero trabajar con la vista fuera del activeViewHandler uso el estado
  const [vistaActiva, setVistaActiva] = useState<JimuMapView>()

  function activeViewHandler (jmv: JimuMapView) {
    if (jmv) {
      // Aquí vendría el código que quiero hacer con la vista al inicio.

      // Guardo en el estado por si alguna otro componente¿? requiere de la vista

      setVistaActiva(jmv)
    }
  }

  function mostrarInfo () {
    console.log(vistaActiva)
  }

  return (
    <div className='informacionConfiguracion'>
      {
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={activeViewHandler}>
          </JimuMapViewComponent>
        )
      }
      <Button onClick={mostrarInfo}>Mostrar información del JimuMapView</Button>
    </div>
  )
}

export default Widget
