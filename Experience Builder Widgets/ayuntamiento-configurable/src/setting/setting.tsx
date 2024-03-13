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

  function nombreHandler (eventoInput) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('nombreAyuntamiento', eventoInput.target.value)
    })
  }

  function imagenHandler (eventoInput) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('urlImagen', eventoInput.target.value)
    })
  }

  function telefonoHandler (eventoInput) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('numeroTelefono', eventoInput.target.value)
    })
  }

  function direccionHandler (eventoInput) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('direccion', eventoInput.target.value)
    })
  }

  function paginaWebHandler (eventoInput) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('urlPaginaWeb', eventoInput.target.value)
    })
  }

  return (
    <>
      <SettingSection title={'Selecciona un Mapa'} >
        <MapWidgetSelector useMapWidgetIds={props.useMapWidgetIds} onSelect={selectMapHandler}></MapWidgetSelector>
      </SettingSection>
      <SettingSection title={'Introduce el nombre'}>
        <input type="text" onChange={nombreHandler}/>
      </SettingSection>
      <SettingSection title={'Introduce la url de la imagen'}>
        <input type="text" onChange={imagenHandler}/>
      </SettingSection>
      <SettingSection title={'Introduce el teléfono'}>
        <input type="number" onChange={telefonoHandler}/>
      </SettingSection>
      <SettingSection title={'Introduce la dirección'}>
        <input type="text" onChange={direccionHandler}/>
      </SettingSection>
      <SettingSection title={'Introduce la página web'}>
        <input type="text" onChange={paginaWebHandler}/>
      </SettingSection>
    </>
  )
}

export default Setting
