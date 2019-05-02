<template lang="html">
  <div id="inconstruction">
    <div class="container">
      <form class="row">
        <div class="col s12">
          <img src="../assets/img/birdwatching.gif">
        </div>
        <div class="col s12">
          <h4 class="thin">Estamos mejorando sitio web para ti,<br> esperalo pronto</h4>
          <Countdown date="2019-06-19"></Countdown>
        </div>
        <div class="col s12 hide">
          <div class="input-field">
            <input v-model="question" id="question" type="email" class="validate">
            <label for="question">First Name</label>
          </div>
        </div>
      </form>
      <audio id="audio" autoplay controls class="hide">
        <source src="../assets/mp3/1630.mp3" type="audio/mpeg">
      </audio>
    </div>
  </div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = jQuery

import Countdown from './Countdown.vue';

import 'materialize-css/dist/js/materialize.js'

export default {
  name:"inconstruction",
  components: { Countdown },
  data() {
      return {
        
      }
  },
  ready () {
    //M.updateTextFields();
  },
  beforeCreate: ()=> {

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
</style>
