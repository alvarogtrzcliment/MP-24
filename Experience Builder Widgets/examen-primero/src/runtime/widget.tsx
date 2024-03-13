import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { type IMConfig } from '../config'
import './widget.css'
import Query from '@arcgis/core/rest/support/Query'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import { useState } from 'react'


const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [filtroActivo, setFiltroActivo] = useState(false)
  
  function activeViewHandler (jmv: JimuMapView) {
    if (jmv) {
      const resultadoGL = new GraphicsLayer()
      const capaPlayas = new FeatureLayer({
        url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Playas_2015/FeatureServer'
      })
      const parametrosQuery = new Query({
        where: "Grado_urba = 'Aislada'",
        returnGeometry: true
      })
      capaPlayas.queryFeatures(parametrosQuery)
        .then((resultados) => {
          const entidades = resultados.features.map((entidad) => {
            entidad.symbol = new SimpleMarkerSymbol({
              color: [255, 0, 0]
            })
            return entidad
          })
          resultadoGL.addMany(entidades)
        })
      jmv.view.map.add(resultadoGL)
      setFiltroActivo(true)
    }
  }

  return (
    <div className='examenPrimero'>
      {
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={activeViewHandler}>
          </JimuMapViewComponent>
        )
      }
      {filtroActivo ? <h3>Playas Añadidas</h3> : <h3>Selecciona el Mapa</h3>}
    </div>
  )
}

export default Widget
