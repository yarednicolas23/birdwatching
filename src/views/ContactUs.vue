<template lang="html">
<div>
  <PageTemplate :background="staff.background">
    <div id="contact-us" class="col s12 center">
      <h5 class="thin no-margin white-text">If you want more information, leave us your data and we will contact you</h5>
      <form class="container" v-on:submit.prevent="submit">
        <div class="col s12">
          <div class="input-field">
            <input id="name" type="text" v-model="form.name" class="validate white-text" required>
            <label for="name">Name</label>
          </div>
          <div class="input-field">
            <input id="email" type="email" v-model="form.email" class="validate white-text" required>
            <label for="email">Email</label>
          </div>
          <div class="input-field">
            <input id="phone" type="number" v-model="form.phone" class="validate white-text" required>
            <label for="phone">Phone</label>
          </div>
          <GrandientButton text="Enviar"></GrandientButton>
        </div>
      </form>
    </div>
  </PageTemplate>
</div>
</template>

<script>
import firebase from 'firebase'
import M from 'materialize-css'

import PageTemplate from './PageTemplate.vue'
import GrandientButton from '../components/GrandientButton.vue'
export default {
  name:"ContactUs",
  components: { PageTemplate, GrandientButton },
  data() {
      return {
        "form":{
          "name":"",
          "email":"",
          "phone":"",
          "date":new Date().toString()
        },
        "staff":{
          "background":this.getSrc("Momotus-Momota")
        },
        "title": 'Contact Us - Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  methods: {
    getSrc(name) {
      //return 'https://apimgs.000webhostapp.com/img/'+ name + ".png"
      require('../assets/img/'+ name + '.png')
      return './img/'+ name + '.png'
    },
    submit: function () {
      M.toast({html: 'Cargando...'})
      firebase.database().ref().child('users').push(this.form)
      .once( "value", function() {
        M.toast({html: 'Your registration was successful'})
      }, function (error) {
        M.toast({html: 'Ups:'+error})
      })
    }
  },
  created(){

  },
  mounted(){

  },
  beforeMount: ()=> {
  },
  metaInfo () {
    return {
      title: this.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.description },
        { vmid: 'keywords', name: 'keywords', content: this.keywords }
      ]
    }
  }
}
</script>

<style lang="css">
#contact-us{
  margin-top: 70px;
}
</style>
