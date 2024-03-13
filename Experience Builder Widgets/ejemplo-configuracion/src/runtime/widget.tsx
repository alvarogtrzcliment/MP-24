import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { type IMConfig } from '../config'
import './widget.css'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  function activeViewHandler (jmv: JimuMapView) {
    if (jmv) {
      console.log()
    }
  }

  console.log(props)

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
      <h3>{props.config.nombreAyuntamiento}</h3>
    </div>
  )
}

export default Widget
