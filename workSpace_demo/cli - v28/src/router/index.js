import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'

import DetailAnaPage from '@/pages/detail/analysis'
import DetailCouPage from '@/pages/detail/count'
import DetailForPage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'


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
      component: DetailPage,
      redirect: '/detail/analysis',//重定向：直接访问detail时，跳转到/detail/analysis
      children:[
        {
					path: 'analysis',//子路由不可以加“/”路径
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
      ]
    }
  ]
})
