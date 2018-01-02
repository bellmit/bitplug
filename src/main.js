// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// css assets
import './assets/sass/paper-dashboard.scss'
// import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/font-awesome/css/font-awesome.css'
import './assets/css/themify-icons/themify-icons.css'

// library imports
import Chartist from 'chartist'
// import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
// import 'es6-promise/auto'

// plugins imports
import SideBar from './components/shared/SidebarPlugin'
import Notifications from './components/shared/NotificationPlugin'
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import vClickOutside from 'v-click-outside'

// plugin setup
Vue.use(vClickOutside)
Vue.use(SideBar)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)

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
  template: '<App/>',
  components: { App },
  data: {
    Chartist: Chartist
  }
})
