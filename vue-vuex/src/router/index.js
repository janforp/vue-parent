import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import A from '@/components/A'
import B from '@/components/B'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {path: '/', name: "A", component: A},
        {path: '/B', name: "B", component: B},
      ]
    }
  ]
})
