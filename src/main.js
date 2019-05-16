import Vue from 'vue'
import router from './router'
import VueMeta from 'vue-meta'
import firebase from "firebase"

import App from './App.vue'

window.$ = require('jquery')
window.JQuery = require('jquery')

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import 'material-design-icons/iconfont/material-icons.css'

//import M from 'materialize-css'

Vue.use(VueMeta)
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Rz9B2VoLtwZlwzmCNLVAP2wBDUz7gVM",
  authDomain: "birdwatching-99f95.firebaseapp.com",
  databaseURL: "https://birdwatching-99f95.firebaseio.com",
  projectId: "birdwatching-99f95",
  storageBucket: "birdwatching-99f95.appspot.com",
  messagingSenderId: "1091553865823",
  appId: "1:1091553865823:web:ebf193e7721fb92e"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

Vue.filter('two_digits', function (value) {
  if(value.toString().length <= 1){
      return "0"+value.toString()
  }
  return value.toString();
})

new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app')
