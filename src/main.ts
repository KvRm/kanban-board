import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import { i18n } from './plugins/i18n'

import DefaultLayout from './layout/DefaultLayout.vue'
import EmptyLayout from './layout/EmptyLayout.vue'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { FIREBASE_CONFIG } from './services/firebase/config'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMagnifyingGlass,
  faChevronDown,
  faArrowUpWideShort,
  faArrowDownWideShort,
  faEllipsis,
  faCircleUp,
  faXmark,
  faTrash,
  faPen,
  faCheck,
  faSortUp,
  faSortDown,
  faPlus,
  faUser,
  faUpLong,
  faCloudArrowUp,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faMagnifyingGlass,
  faChevronDown,
  faArrowUpWideShort,
  faArrowDownWideShort,
  faEllipsis,
  faCircleUp,
  faXmark,
  faTrash,
  faPen,
  faCheck,
  faSortUp,
  faSortDown,
  faPlus,
  faUser,
  faUpLong,
  faCloudArrowUp,
  faRightFromBracket
)

const firebaseApp = initializeApp(FIREBASE_CONFIG)
export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)

const app = createApp(App)

const pinia = createPinia()

app
  .use(router)
  .use(pinia)
  .use(i18n)
  .use(ElementPlus)
  .component('DefaultLayout', DefaultLayout)
  .component('EmptyLayout', EmptyLayout)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app')
