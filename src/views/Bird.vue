<template lang="html">
  <div>
    <Loader v-if="bird.loader"/>
    <PageTemplate :background="bird.background">
      <div class="col s12 white-text">
        <div class="col s12 m8 l8">
          <h1 class="bebasbold">{{ bird.info.name }}</h1>
          <div id="description">
            <p v-html="bird.info.description"></p>
            <div class="col 12 no-padding">
              <div class="col s4">
                <a class="btn-floating waves-effect blue darken-3 waves-light tooltipped" data-position="bottom" :data-tooltip="'Ubication: '+bird.info.ubication"><i class="material-icons">place</i></a>
              </div>
              <div class="col s4">
                <a class="btn-floating pulse waves-effect blue darken-3 waves-light tooltipped"  v-on:click="soundBird(id)" data-position="bottom" data-tooltip="Lisent Bird"><i class="material-icons">hearing</i></a>
              </div>
              <div class="col s4">
                <a :href="'/bird/'+bird.info.ubication" class="hide btn-floating waves-effect blue darken-3 waves-light tooltipped" data-position="bottom" data-tooltip="More Info"><i class="material-icons">help_outline</i></a>
              </div>
            </div>
          </div>
          <div class="col s12">
            <Suggestions/>
          </div>
        </div>
        <div class="col s12 m4 l4">
          <iframe class="map" :src="bird.info.map"  height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <!--<audio :id="this.$route.params.id" controls loop class="hide">
          <source :src="getSound(this.$route.params.id)" type="audio/mpeg">
        </audio>-->
      </div>
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from './PageTemplate.vue'
import Suggestions from './Suggestions.vue'
import Loader from '../components/Loader.vue'

import M from 'materialize-css'
import firebase from 'firebase'
import $ from 'jquery'
export default {
  name:"Bird",
  components: { PageTemplate,Loader,Suggestions },
  data() {
    return {
      "id":"Hummingbird",
      "bird":{
        "loader":true,
        "background":this.getSrc("Scarlet-Macaw"),
        "info":{
          "name":"Hummingbird"
        }
      },
      "tours":{},
      "birds":{},
      "title": 'Tours Birdwatching Colombia',
      "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
      "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
    }
  },
  created(){
      this.id = this.$route.params.id
      this.getBird(this.$route.params.id)
      this.title = this.bird.info.name + ' Tours Birdwatching Colombia'
  },
  methods:{
    getSrc(name) {
      return 'https://imgsapi.000webhostapp.com/img/'+ name + ".png?"
      //require('../assets/img/'+ name + '.png')
      //return '/img/'+ name + '.png'
    },
    /* getSound(name) {
      if (require('../assets/mp3/'+ name + '.mp3')!=null) {
          return '/media/'+ name + '.mp3'
      }
    },*/
    soundBird(bird){
      const myAudio = document.querySelector('#'+bird+'')
      myAudio.paused ? myAudio.play() : myAudio.pause()
    },
    getBird(){
      this.$route.params.id
      firebase.database().ref("page/home/gallery").once('value', (snapshot)=> {
        this.birds = snapshot.val()
        M.Tooltip.init(document.querySelectorAll('.tooltipped'))
        snapshot.forEach((childSnapshot) => {
          if (this.$route.params.id == childSnapshot.key) {
            this.bird.info = childSnapshot.val()
            if (childSnapshot.key != "") {
              this.bird.background = this.getSrc(childSnapshot.key)
              $(".loader").fadeOut(3000)
            }
          }
        })
      })
    },
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
.map{
  width:300px;
}
@media only screen and (min-width: 993px){
  .map{
    width:400px;
  }
}
</style>
