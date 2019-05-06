import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import App from './App.vue'
import InConstruction from './components/InConstruction.vue'
import Navbar from './components/Navbar.vue'

window.$ = require('jquery')
window.JQuery = require('jquery')

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

Vue.use(VueRouter)
Vue.use(VueMeta)
Vue.config.productionTip = false


Vue.filter('two_digits', function (value) {
    if(value.toString().length <= 1)
    {
        return "0"+value.toString();
    }
    return value.toString();
});

new Vue({
  render: h => h(App),
  router:new VueRouter({
    routes: [
      {
        path: '/',
        name: 'home',
        component: InConstruction
      },
      {
        path: '/helloworld',
        name: 'home',
        component: Navbar
      }
    ]
  }),
}).$mount('#app')
