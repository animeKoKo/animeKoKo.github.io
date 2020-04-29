import Vue from 'vue'
import Router from 'vue-router'
import meBar from '../components/meBar'
import list from '../components/list'
import showBlog from '../components/show-blog'

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
    },
    {
      path: '/show-blog',
      name: 'show-blog-info',
      component: showBlog
    }
  ]
})
