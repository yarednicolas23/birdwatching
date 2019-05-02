import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import InConstruction from './components/InConstruction.vue'

window.$ = require('jquery')
window.JQuery = require('jquery')

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

Vue.use(VueRouter)
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
      }
    ]
  }),
}).$mount('#app')
