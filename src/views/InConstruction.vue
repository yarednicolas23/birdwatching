<template lang="html">
  <div id="inconstruction">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <h1 class="hide">Birdwatching Colombia</h1>
          <img class="responsive-img" src="../assets/img/birdwatching.gif">
        </div>
        <div class="col s12">
          <h5 class="thin no-margin">Estamos mejorando nuestro sitio web para ti, Espéralo pronto</h5>
          <Countdown date="2019-06-30"></Countdown>
          <div class="col s12">
            <div id="container">
              <div id="circle">
                <div id="center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h5 class="thin">¿Necesitas Información o quieres conocer más?<br> Déjanos tus datos y sé el primero en conocer nuestras novedades.</h5>
        </div>
        <form class="container" v-on:submit.prevent="submit">
          <div class="col s12">
            <div class="input-field">
              <input v-model="form.name" id="name" type="text" class="validate white-text">
              <label class="" for="name">Nombre</label>
            </div>
            <div class="input-field">
              <input v-model="form.email" id="email" type="email" class="validate white-text">
              <label class="" for="email">Email</label>
            </div>
            <div class="input-field">
              <input v-model="form.phone" id="phone" type="number" class="validate white-text">
              <label class="" for="question">Teléfono</label>
            </div>
            <GrandientButton text="Enviar"></GrandientButton>
          </div>
        </form>
      </div>
      <audio id="audio" autoplay controls loop class="hide">
        <source src="../assets/mp3/birdwatching.mp3" type="audio/mpeg">
      </audio>
    </div>
  </div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = jQuery
import firebase from 'firebase'
import M from 'materialize-css'

import Countdown from '../components/Countdown.vue';
import GrandientButton from '../components/GrandientButton.vue'

export default {
  name:"inconstruction",
  components: { Countdown,GrandientButton },
  data() {
      return {
        "form":{
          "name":"",
          "email":"",
          "phone":""
        },
        "users":[],
        "title": 'Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  methods: {
    submit: function () {
      M.toast({html: 'Cargando...'})
      firebase.database().ref().child('users').push(this.form)
      .once( "value", function() {
        M.toast({html: 'Tu Registro fue Exitoso'})
      }, function (error) {
        M.toast({html: 'Ups:'+error})
      })
    }
  },
  mounted() {
    //M.updateTextFields();
  },
  beforeCreate: ()=> {
    $("#audio").play()
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
#inconstruction{
  background-color: black;
  font-weight: 100;
  text-align: center;
  color: white;
  min-height: 100vh;
  height: 100%;
}
@import url(https://fonts.googleapis.com/css?family=Lato:100);
body {
  background-color: #333;
}
#circle{
  display: inline-block;
  width:3em;
  height:3em;
  border-radius:50%;
  background-color:rgba(255,255,255,0);
  border: 0.185em solid rgba(255,255,255,1);
  -webkit-animation: pulse 2s linear infinite;
}
#center{
  width:2.5em;
  height:2.5em;
  background-color:rgba(255,255,255,0);
  border: 0.1em solid rgba(255,255,255,1);
  border-radius:50%;
  -webkit-animation: pulse 2s linear infinite;
}

@-webkit-keyframes pulse{
  0%{
    transform:scale(1,1);
    opacity:0.1;
  }
  20%{
    transform:scale(1.10,1.10);
    opacity:1;
  }
  90%{
    transform:scale(1.5,1.5);
    opacity:0;
  }
  100%{
    opacity:0;
  }
}
</style>
