import Vue from 'vue'
import Router from 'vue-router'

import InConstruction from './views/InConstruction.vue'
import Admin from './views/Admin.vue'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'InConstruction',
      component: InConstruction
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue' )
    }
  ]
})
