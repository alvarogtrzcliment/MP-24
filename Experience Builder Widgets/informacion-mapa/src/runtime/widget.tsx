import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { useState } from 'react'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [jmvActivo, setJmvActivo] = useState<JimuMapView>()

  const [titulo, setTitulo] = useState<string>('')
  const [descripcion, setDescripcion] = useState<string>('')
  const [id, setId] = useState<string>('')
  const [tags, setTags] = useState<string>('')

  function viewChangeHandler (jmv: JimuMapView) {
    if (jmv) {
      // Desde aquí una vez seleccione un Mapa activo
      // puedo usar la SDK para acceder al Mapa la información
      // de mi vista se encuentra en el objeto jmv

      const portalItem = jmv.view.map.portalItem

      setTitulo(portalItem.title)
      setDescripcion(portalItem.description)
      setId(portalItem.id)
      setTags(portalItem.tags)


      // Guardo el JimuMapView en el estado

      setJmvActivo(jmv)
    }
  }

  return (
    <div>
      {
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={viewChangeHandler}></JimuMapViewComponent>
        )
      }
      <div className='informacionMapa'>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <p>{id}</p>
        <p>{tags}</p>
      </div>
    </div>
  )
}

export default Widget
