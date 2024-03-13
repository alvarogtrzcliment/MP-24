import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  nombreAyuntamiento: string
  urlImagen: string
  numeroTelefono: number
  direccion: string
  urlPaginaWeb: string
}

export type IMConfig = ImmutableObject<Config>
