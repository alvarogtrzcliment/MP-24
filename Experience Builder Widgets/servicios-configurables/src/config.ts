import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  nombrePrimer: string
  nombreSegundo: string
  latitudPrimer: number
  longitudPrimer: number
  latitudSegundo: number
  longitudSegundo: number
}

export type IMConfig = ImmutableObject<Config>
