import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { MapWidgetSelector, SettingSection } from 'jimu-ui/advanced/setting-components'
import { React } from 'jimu-core'

const Setting = (props: AllWidgetSettingProps<any>) => {
  function mapSelectionHandler (selectedMap: string[]) {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: selectedMap
    })
  }

  return (
    <SettingSection title={'Selecciona un Mapa'}>
      <MapWidgetSelector
      onSelect={mapSelectionHandler}
      useMapWidgetIds={props.useMapWidgetIds}></MapWidgetSelector>
    </SettingSection>
  )
}

export default Setting
