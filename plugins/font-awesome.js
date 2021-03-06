import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faArrowUp } from '@fortawesome/free-solid-svg-icons'

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'

library.add(faPhone, faArrowUp)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
