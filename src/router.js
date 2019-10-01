import Vue from 'vue'
import Router from 'vue-router'

import InConstruction from './views/InConstruction.vue'
import Admin from './views/Admin.vue'
import Home from './views/Home.vue'
import Bird from './views/Bird.vue'
import AboutUs from './views/AboutUs.vue'
import Staff from './views/Staff.vue'
import ContactUs from './views/ContactUs.vue'
import BirdwatchingColombia from './views/BirdwatchingColombia.vue'
import Tours from './views/Tours.vue'
import Tour from './views/Tour.vue'
import ShortPrograms from './views/ShortPrograms.vue'
import ShortProgram from './views/ShortProgram.vue'

import Error404 from './views/Error404.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/InConstruction',
      name: 'InConstruction',
      component: InConstruction
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/birdwatching-colombia',
      name: 'BirdwatchingColombia',
      component: BirdwatchingColombia
    },
    {
      path: '/tours',
      name: 'Tours',
      component: Tours
    },
    {
      path: '/tour/:id',
      component: Tour
    },
    {
      path: '/bird/:id',
      component: Bird
    },
    {
      path: '/short-programs',
      name: 'ShortPrograms',
      component: ShortPrograms
    },
    {
      path: '/short-program/:id',
      component: ShortProgram
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
