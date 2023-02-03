import { DefineLocaleMessage, DefineDateTimeFormat, DefineNumberFormat } from 'vue-i18n'

declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage {
    myTasks: string
    myBoards: string
    allBoards: string
    lastTasks: string
    categories: {
      id: string
      title: string
      board: string
      statusSection: string
      tags: string
      criticalLvl: string
      createDate: string
      completeDate: string
      author: string
    }
  }

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
