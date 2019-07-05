<template lang="html">
  <PageTemplate :background="bird.background">
    <div class="col s12 white-text">
      <div class="col s12 m6 l6">
        <h1 class="bebasbold">{{ bird.info.name }}</h1>
        <div id="description">
          <p>{{bird.info.description}}</p>
          <div class="col 12 no-padding">
            <div class="col s12">
              <a class="btn-floating waves-effect blue darken-3 waves-light tooltipped" data-position="bottom" :data-tooltip="'Ubication: '+bird.info.ubication"><i class="material-icons">place</i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from './PageTemplate.vue'

import M from 'materialize-css'
import firebase from 'firebase'
export default {
  name:"Bird",
  components: { PageTemplate },
  data() {
    return {
      "bird":{
        "background":this.getSrc("Scarlet-Macaw"),
        "info":{
          "name":"Hummingbird"
        }
      },
      "birds":{},
      "title": 'Tours Birdwatching Colombia',
      "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
      "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
    }
  },
  created(){
      this.$route.params.id
      this.getBird(this.$route.params.id)
  },
  methods:{
    getSrc(name) {
      return 'https://apimgs.000webhostapp.com/img/'+ name + ".png?"
      //require('../assets/img/'+ name + '.png')
      //return '/img/'+ name + '.png'
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
            }
          }/*
          setTimeout(function () {
            M.Slider.init(document.querySelectorAll('.slider'),{height:250})
          }, 2000)*/
        })
      })
    }
  }
}
</script>

<style lang="css">

</style>
