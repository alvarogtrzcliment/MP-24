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

  return (
    <div>
      {
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={activeViewHandler}>
          </JimuMapViewComponent>
        )
      }
      <div>
        <header>
          <img src={props.config.urlImagen} alt="Imagen Rota" />
          <h3>{props.config.nombreAyuntamiento}</h3>
        </header>

        <div>
          <p><strong>Teléfono: </strong>{props.config.numeroTelefono}</p>
          <p><strong>Calle: </strong>{props.config.direccion}</p>
          <a href={props.config.urlPaginaWeb}>Página Web del Ayuntamiento</a>
        </div>

      </div>
    </div>
  )
}

export default Widget
