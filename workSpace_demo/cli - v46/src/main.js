// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'//

import Layout from '@/components/layout'
// import App from './App'
import router from './router'
// import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(VueResource)//http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
