import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { MapWidgetSelector, SettingSection } from 'jimu-ui/advanced/setting-components'
import { React } from 'jimu-core'

const Setting = (props: AllWidgetSettingProps<any>) => {
  function selectMapHandler (resultadoEvento: string[]) {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: resultadoEvento
    })
  }

  function inputHandler (eventoInput) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('nombreAyuntamiento', eventoInput.target.value)
    })
  }

  return (
    <>
      <SettingSection title={'Selecciona un Mapa'} >
        <MapWidgetSelector useMapWidgetIds={props.useMapWidgetIds} onSelect={selectMapHandler}></MapWidgetSelector>
      </SettingSection>
      <SettingSection title={'Introduce el nombre'}>
        <input type="text" onChange={inputHandler}/>
      </SettingSection>

    </>
  )
}

export default Setting
