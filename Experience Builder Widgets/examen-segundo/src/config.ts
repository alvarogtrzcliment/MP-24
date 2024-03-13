import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  urlServicio: string
}

export type IMConfig = ImmutableObject<Config>
