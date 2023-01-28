import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'

import DefaultLayout from './views/DefaultLayout.vue'
import EmptyLayout from './views/EmptyLayout.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
  faSortDown
)

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(ElementPlus)
  .component('DefaultLayout', DefaultLayout)
  .component('EmptyLayout', EmptyLayout)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app')
