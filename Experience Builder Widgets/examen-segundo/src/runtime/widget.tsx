import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { useState } from 'react'
import { type IMConfig } from '../config'
import './widget.css'
import { Button, Select, Option, NumericInput } from 'jimu-ui'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [vistaActiva, setVistaActiva] = useState<JimuMapView>()
  let urlCapa: string
  let contenidoRenderizado = (<h3>Selecciona el mapa</h3>)

  let formaSimbolo: 'circle' | 'path' | 'square' | 'cross' | 'x' | 'diamond' | 'triangle'
  let colorSimbolo: string
  let tamanoSimbolo: number
  let colorBorde: string
  let tamanoBorde: number

  function activeViewHandler (jmv: JimuMapView) {
    if (jmv) {
      setVistaActiva(jmv)
    }
  }

  if (vistaActiva !== undefined) {
    contenidoRenderizado = (<h3>Introduce la Url del Servicio</h3>)
  }

  if (props.config.urlServicio && vistaActiva !== undefined) {
    urlCapa = props.config.urlServicio

    contenidoRenderizado = (
      <>
        <h3>Define el renderizado</h3>
        <h4>Ajustes de símbolo</h4>
        <p>Forma del símbolo</p>
        <Select placeholder='Selecciona la forma del símbolo' onChange={(formaEvento) => { formaSimbolo = formaEvento.target.value }}>
          <Option value="square">
            Cuadrado
          </Option>
          <Option value="circle">
            Circulo
          </Option>
          <Option value="cross">
            Cruz
          </Option>
        </Select>

        <p>Tamaño del símbolo</p>
        <NumericInput onChange={(tamanoSimboloEvento) => { tamanoSimbolo = tamanoSimboloEvento }}></NumericInput>
        <p>Color del símbolo</p>
        <input type="color" onChange={(colorSimboloEvento) => { colorSimbolo = colorSimboloEvento.target.value }} />

        <h4>Ajustes de borde</h4>
        <p>Color del borde</p>
        <input type="color" onChange={(colorBordeEvento) => { colorBorde = colorBordeEvento.target.value }} />
        <p>Tamaño del borde</p>
        <NumericInput onChange={(tamanoBordeEvento) => { tamanoBorde = tamanoBordeEvento }}></NumericInput>

        <Button onClick={buttonHandler}>Añadir la capa con el Renderizador</Button>
      </>
    )
  }

  function buttonHandler () {
    const capaFl = new FeatureLayer({
      url: urlCapa,
      renderer: new SimpleRenderer({
        symbol: new SimpleMarkerSymbol({
          style: formaSimbolo,
          color: colorSimbolo,
          size: tamanoSimbolo,
          outline: {
            color: colorBorde,
            width: tamanoBorde
          }
        })
      })
    })

    vistaActiva.view.map.add(capaFl)
  }

  return (
    <div className='examenPresencial'>
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
