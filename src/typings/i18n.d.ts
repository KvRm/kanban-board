import { DefineLocaleMessage, DefineDateTimeFormat, DefineNumberFormat } from 'vue-i18n'

export type LocaleType = 'en' | 'ru'

declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage {
    hello: string
    name: string
  }

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
