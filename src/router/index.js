import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import view3D from '@/components/view3D'
import ShowModel from '@/components/ShowModel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/view3D',
      name: 'view3D',
      component: view3D
    },
    {
      path: '/',
      name: 'ShowModel',
      component: ShowModel
    }
  ]
})
//现在showmodel页面显示不出来
// 终端怎么不报错了
//刚刚还报错的，现在不知道怎么回事没报错了，但是就是显示不出来