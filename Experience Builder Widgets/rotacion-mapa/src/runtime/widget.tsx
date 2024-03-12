import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { useState } from 'react'
import { type IMConfig } from '../config'
import './widget.css'
import { Button } from 'jimu-ui'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  // Si quiero trabajar con la vista fuera del activeViewHandler uso el estado
  const [vistaActiva, setVistaActiva] = useState<JimuMapView>()
  const [rotacion, setRotacion] = useState<number>(0)

  function activeViewHandler (jmv: JimuMapView) {
    if (jmv) {
      setVistaActiva(jmv)
    }
  }

  function buttonHandler () {
    const sumaRotacion = rotacion + 25
    console.log(sumaRotacion)
    vistaActiva.view.rotation = sumaRotacion
    setRotacion(sumaRotacion)
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
      <Button onClick={buttonHandler}>Mostrar información del JimuMapView</Button>
    </div>
  )
}

export default Widget
