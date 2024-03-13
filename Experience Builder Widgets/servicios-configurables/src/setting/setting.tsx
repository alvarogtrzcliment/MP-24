import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { MapWidgetSelector, SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { React } from 'jimu-core'
import { NumericInput, TextInput } from 'jimu-ui'

const Setting = (props: AllWidgetSettingProps<any>) => {
  function selectMapHandler (resultadoEvento: string[]) {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: resultadoEvento
    })
  }

  function nombrePrimerHandler (eventoInput) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('nombrePrimer', eventoInput.target.value)
    })
  }
  function nombreSegundoHandler (eventoInput) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('nombreSegundo', eventoInput.target.value)
    })
  }

  function latitudPrimerHandler (eventoInput) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('latitudPrimer', eventoInput)
    })
  }

  function latitudSegundoHandler (eventoInput) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('latitudSegundo', eventoInput)
    })
  }

  function longitudPrimerHandler (eventoInput) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('longitudPrimer', eventoInput)
    })
  }

  function longitudSegundoHandler (eventoInput) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('longitudSegundo', eventoInput)
    })
  }

  return (
    <>
      <SettingSection title={'Selecciona un Mapa'} >
        <MapWidgetSelector useMapWidgetIds={props.useMapWidgetIds} onSelect={selectMapHandler}></MapWidgetSelector>
      </SettingSection>
      <SettingSection title={'Primer Servicio'}>
        <SettingRow flow="wrap" label={'Nombre'}>
          <TextInput onChange={nombrePrimerHandler}></TextInput>
        </SettingRow>
        <SettingRow flow="wrap" label={'Latitud'}>
          <NumericInput onChange={latitudPrimerHandler}></NumericInput>
        </SettingRow>
        <SettingRow flow="wrap" label={'Longitud'}>
          <NumericInput onChange={longitudPrimerHandler}></NumericInput>
        </SettingRow>
      </SettingSection>

      <SettingSection title={'Segundo Servicio'}>
        <SettingRow flow="wrap" label={'Nombre'}>
          <TextInput onChange={nombreSegundoHandler}></TextInput>
        </SettingRow>
        <SettingRow flow="wrap" label={'Latitud'}>
        <NumericInput onChange={latitudSegundoHandler}></NumericInput>
        </SettingRow>
        <SettingRow flow="wrap" label={'Longitud'}>
          <NumericInput onChange={longitudSegundoHandler}></NumericInput>
        </SettingRow>
      </SettingSection>

    </>
  )
}

export default Setting
