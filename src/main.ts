import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { useStore } from './stores'
import router from './router'

import DefaultLayout from './layout/DefaultLayout.vue'
import EmptyLayout from './layout/EmptyLayout.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMagnifyingGlass,
  faChevronDown,
  faArrowUpWideShort,
  faArrowDownWideShort,
} from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faChevronDown, faArrowUpWideShort, faArrowDownWideShort)

const store = useStore()

createApp(App)
  .use(store)
  .use(router)
  .component('DefaultLayout', DefaultLayout)
  .component('EmptyLayout', EmptyLayout)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app')
