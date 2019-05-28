import Vue from 'vue'
import Router from 'vue-router'

import InConstruction from './views/InConstruction.vue'
import Admin from './views/Admin.vue'
import Home from './views/Home.vue'
import AboutUs from './views/AboutUs.vue'
import Staff from './views/Staff.vue'
import BirdwatchingColombia from './views/BirdwatchingColombia.vue'

import Error404 from './views/Error404.vue'


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
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff
    },
    {
      path: '/birdwatching-colombia',
      name: 'BirdwatchingColombia',
      component: BirdwatchingColombia
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue' )
    },
    {
      path: '*',
      name: 'Error404',
      component: Error404
    },
  ]
})
