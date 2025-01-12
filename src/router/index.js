import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import view3D from '@/components/view3D'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'view3D',
      component: view3D
    }
  ]
})
