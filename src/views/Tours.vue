<template lang="html">
  <div>
    <PageTemplate :background="tours.background">
      <div class="col s12">
        <div class="col s12 m6 l6 white-text">
          <h1 class="bebasbold">Tours</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
        <div class="col s12 m6 l6">
          <div class="carousel carousel-slider center">
            <div class="carousel-fixed-item center">
              <a class="btn waves-effect white grey-text darken-text-2">I wanna go!</a>
            </div>
            <div class="carousel-item red white-text"  v-for="(tour,key) in tours.list" v-bind:key="key">
              <h2>{{tour.title}}</h2>
              <p class="white-text">This is your first panel</p>
            </div>
          </div>

        </div>
      </div>
    </PageTemplate>
  </div>
</template>

<script>
import firebase from 'firebase'
import M from 'materialize-css'

import PageTemplate from './PageTemplate.vue'

export default {
  name:'Tours',
  components: { PageTemplate },
  data() {
      return {
        "tours":{
          "background":"/img/"+"Tangara-Cyanicollis.png",
          "list":{}
        },
        "title": 'Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  methods: {
    // List Pages
    listPages: function () {
      firebase.database().ref("page/tours").once('value', (snapshot)=> {
        this.tours.list = snapshot.val()
        setTimeout(function () {
          M.Carousel.init(document.querySelectorAll('.carousel'),{
            fullWidth: true,
            indicators: true
          })
        }, 2000)
      })
    }
  },
  created(){
    this.listPages()
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

<style lang="css" scoped>

</style>
