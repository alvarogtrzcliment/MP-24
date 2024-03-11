import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { useState } from 'react'
import { type IMConfig } from '../config'
import './widget.css'
import { Button } from 'jimu-ui'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  // Si quiero trabajar con la vista fuera del activeViewHandler uso el estado
  const [vistaActiva, setVistaActiva] = useState<JimuMapView>()
  const [url, setUrl] = useState<string>()
  let contenidoRenderizado = (<h3>Selecciona el mapa</h3>)

  function inputHandler (evento) {
    setUrl(evento.target.value)
  }

  function buttonHandler () {
    const capaFl = new FeatureLayer({
      url: url
    })

    vistaActiva.view.map.add(capaFl)
  }

  if (vistaActiva !== undefined) {
    contenidoRenderizado = (
      <>
        <input type="text" onChange={inputHandler}/>
        <Button onClick={buttonHandler}>Añadir Capa</Button>
      </>
    )
  }

  function activeViewHandler (jmv: JimuMapView) {
    if (jmv) {
      setVistaActiva(jmv)
    }
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
      {contenidoRenderizado}
    </div>
  )
}

export default Widget
