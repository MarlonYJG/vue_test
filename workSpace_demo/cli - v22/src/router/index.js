import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      // name: 'Hello',
      component: IndexPage
    },
    {
      path: '/detail',
      // name: 'Hello',
      component: DetailPage
    }
  ]
})
