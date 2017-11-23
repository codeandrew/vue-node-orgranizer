// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

//======================
// Components
import header from './common/header'
import footer from './common/footer'
import infoCol from './components/info-col'
import infoSection from './components/info-section'

import ProjectManager from './components/ProjectManager'
import finishedCol from './components/ProjectManager/finished'
import logCol from './components/ProjectManager/log'
import onGoingCol from './components/ProjectManager/on-going'


Vue.component('head-component', header )
Vue.component('foot-component', footer )
Vue.component('info-col', infoCol )
Vue.component('infoSection', infoSection )

Vue.component('project-manager', ProjectManager)
Vue.component('finished-col', finishedCol)
Vue.component('log-col', logCol )
Vue.component('on-going-col', onGoingCol )

//==================

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components:  { App }
})
