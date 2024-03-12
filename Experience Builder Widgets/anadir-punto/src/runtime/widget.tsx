import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { useState } from 'react'
import { type IMConfig } from '../config'
import './widget.css'
import type Point from '@arcgis/core/geometry/Point'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import Graphic from '@arcgis/core/Graphic'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [coordenadas, setCoordenadas] = useState<number[]>([0, 0])

  function activeViewHandler (jmv: JimuMapView) {
    if (jmv) {
      jmv.view.on('click', (evento) => {
        const punto: Point = evento.mapPoint

        const simbologia: SimpleMarkerSymbol = new SimpleMarkerSymbol({
          color: [255, 0, 0]
        })

        const grafico: Graphic = new Graphic({
          geometry: punto,
          symbol: simbologia
        })

        const capaGrafica: GraphicsLayer = new GraphicsLayer()

        capaGrafica.add(grafico)

        jmv.view.map.add(capaGrafica)

        setCoordenadas([punto.longitude, punto.latitude])
      })
    }
  }

  return (
    <div className='coordenadasMapa'>
      {
        props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
          <JimuMapViewComponent
            useMapWidgetId={props.useMapWidgetIds[0]}
            onActiveViewChange={activeViewHandler}>
          </JimuMapViewComponent>
        )
      }
      <div>
        <p><strong>Longitud: </strong>{coordenadas[0]}</p>
        <p><strong>Latitud: </strong>{coordenadas[1]}</p>
      </div>
    </div>
  )
}

export default Widget
