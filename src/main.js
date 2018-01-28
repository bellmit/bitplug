// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// css assets
import './assets/sass/paper-dashboard.scss'
// import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/font-awesome/css/font-awesome.css'
import './assets/css/themify-icons/themify-icons.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue2-dropzone/dist/vue2Dropzone.css'

// library imports
import Chartist from 'chartist'
// import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
// import 'es6-promise/auto'

// plugins imports
import SideBar from './components/shared/SidebarPlugin'
import Notifications from './components/shared/NotificationPlugin'
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import vClickOutside from 'v-click-outside'
import VeeValidate from 'vee-validate'

import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// plugin setup
Vue.use(vClickOutside)
Vue.use(SideBar)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)
Vue.use(ElementUI)

locale.use(lang)

// cOfiguration of the vee validate
const config = {
  errorBagName: 'errors', // change if property conflicts
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  classes: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true
}

Vue.use(VeeValidate, config)

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data: {
    Chartist: Chartist
  }
})
