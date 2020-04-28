import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import meBar from '../components/meBar'
import list from '../components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: meBar
    },
    {
      path: '/list',
      name: 'blog-list',
      component: list
    }
  ]
})
