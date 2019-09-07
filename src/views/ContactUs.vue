<template lang="html">
<div>
  <PageTemplate :background="staff.background">
    <div id="contact-us" class="col s12 center">
      <h5 class="thin white-text">If you want more information, leave us your data and we will contact you</h5>
      <form class="container" v-on:submit.prevent="submit">
        <div class="col s12">
          <div class="input-field col s12 m6 l6">
            <i class="material-icons prefix white-text">mood</i>
            <input id="name" type="text" v-model="form.name" class="validate white-text" required>
            <label for="name">Name</label>
          </div>
          <div class="input-field col s12 m6 l6">
            <i class="material-icons prefix white-text">phone</i>
            <input id="phone" type="number" v-model="form.phone" class="validate white-text" required>
            <label for="phone">Phone</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix white-text">email</i>
            <input id="email" type="email" v-model="form.email" class="validate white-text" required>
            <label for="email">Email</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix white-text">comment</i>
            <textarea id="textarea1" class="materialize-textarea white-text" v-model="form.message" data-length="250" required></textarea>
            <label for="textarea1">Message</label>
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
          "background":this.getSrc("Eubucco-Bourcierii")
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
    const characterCounter = document.querySelectorAll('.materialize-textarea')
    M.CharacterCounter.init(characterCounter)

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
  margin-top: 5px;
}
.character-counter{
  color:white;
}
</style>
