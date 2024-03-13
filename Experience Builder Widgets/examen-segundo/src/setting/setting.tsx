import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { MapWidgetSelector, SettingSection } from 'jimu-ui/advanced/setting-components'
import { React } from 'jimu-core'
import { UrlInput, type UrlInputResult } from 'jimu-ui'

const Setting = (props: AllWidgetSettingProps<any>) => {
  function selectMapHandler (resultadoEvento: string[]) {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: resultadoEvento
    })
  }

  function urlHandler (urlEvento: UrlInputResult) {
    if (urlEvento.valid) {
      props.onSettingChange({
        id: props.id,
        config: props.config.set('urlServicio', urlEvento.value)
      })
    }
  }

  return (
    <>
      <SettingSection title={'Selecciona un Mapa'} >
        <MapWidgetSelector useMapWidgetIds={props.useMapWidgetIds} onSelect={selectMapHandler}></MapWidgetSelector>
      </SettingSection>
      <SettingSection title={'Introduce la url del servicio'}>
        <UrlInput schemes={['https']} onChange={urlHandler}></UrlInput>
      </SettingSection>
    </>
  )
}

export default Setting
