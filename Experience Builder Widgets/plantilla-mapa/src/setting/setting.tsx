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

  return (
    <SettingSection title={'Selecciona un Mapa'} >
      <MapWidgetSelector useMapWidgetIds={props.useMapWidgetIds} onSelect={selectMapHandler}></MapWidgetSelector>
    </SettingSection>
  )
}

export default Setting
