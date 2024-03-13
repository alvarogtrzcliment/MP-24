import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { type IMConfig } from '../config'
import './widget.css'
import { Button } from 'jimu-ui'
import { Point } from '@arcgis/core/geometry'
import { useState } from 'react'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [vistaActiva, setVistaActiva] = useState<JimuMapView>()
  function activeViewHandler (jmv: JimuMapView) {
    if (jmv) {
      setVistaActiva(jmv)
    }
  }

  function primerServicioHandler () {
    vistaActiva.view.goTo(new Point({
      longitude: props.config.longitudPrimer,
      latitude: props.config.latitudPrimer
    }))
  }

  function segundoServicioHandler () {
    vistaActiva.view.goTo(new Point({
      longitude: props.config.longitudSegundo,
      latitude: props.config.latitudSegundo
    }))
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
      <Button onClick={primerServicioHandler}>{props.config.nombrePrimer}</Button>
      <Button onClick={segundoServicioHandler}>{props.config.nombreSegundo}</Button>
    </div>
  )
}

export default Widget
