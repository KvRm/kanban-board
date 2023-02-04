import { DefineLocaleMessage, DefineDateTimeFormat, DefineNumberFormat } from 'vue-i18n'

declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage {
    boards: string
    myBoards: string
    myTasks: string
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
    createNewSection: string
  }

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
