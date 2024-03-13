import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  nombreAyuntamiento: string
  numeroTelefono: number
}

export type IMConfig = ImmutableObject<Config>
