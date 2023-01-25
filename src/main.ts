import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'

import DefaultLayout from './layout/DefaultLayout.vue'
import EmptyLayout from './layout/EmptyLayout.vue'

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
  faCheck
)

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .component('DefaultLayout', DefaultLayout)
  .component('EmptyLayout', EmptyLayout)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app')
