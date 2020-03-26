<template lang="html">
  <div>
  <Loader v-if="Object.keys(tours.list).length == 0"/>
    <PageTemplate :background="tours.background">
      <div style="overflow: auto; white-space: nowrap;min-width:100%;">
        <div v-for="(tour,key) in tours.list" v-bind:key="key" style="min-height:60vh;display: inline-block;margin:20px;">
          <a :href="'tour/'+key" class="card" style="border-radius:10px;">
            <div class="card-image">
              <img :src="getSrc(tour.background)" style="max-width:80vh;width:100%;border-radius:10px;">
              <div class="card-title">{{tour.title}}
                <span style="font-size:16px"><br><i class="material-icons white-text" style="font-size:16px">room</i>
                  Bogotá, Colombia <br>
                  <i class="material-icons pointer tooltipped" data-position="bottom" data-tooltip="Includes transport">directions_bus</i>
                  <i class="material-icons pointer tooltipped" data-position="bottom" data-tooltip="Includes hotel">hotel</i>
                  <i class="material-icons pointer tooltipped" data-position="bottom" data-tooltip="Includes entrance tickets">local_play</i>
                  <i class="material-icons pointer tooltipped" data-position="bottom" data-tooltip="Includes lunch">restaurant_menu</i>
                  <i class="material-icons pointer tooltipped" data-position="bottom" data-tooltip="Includes snack food">free_breakfast</i>
                  <i class="material-icons pointer tooltipped" data-position="bottom" data-tooltip="Specialized bird guide">record_voice_over</i>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </PageTemplate>
  </div>
</template>

<script>
import firebase from 'firebase'
import M from 'materialize-css'
import Loader from '../components/Loader.vue'

import PageTemplate from './PageTemplate.vue'

export default {
  name:'Tours',
  components: { PageTemplate ,Loader  },
  data() {
      return {
        "tours":{
          "background":"Amazonian-Motmot.png",
          "list":{}
        },
        "title": 'Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  methods: {
    getSrc(name) {
      if (name!=null) {
        return 'https://imgsapi.000webhostapp.com/img/'+ name.replace(" ","-") + ".png"
        //return 'https://apimgs.000webhostapp.com/img/'+ name + ".png?"
        //require('../assets/img/'+ name + '.png')
        //return '/img/'+ name + '.png'
      }
    },
    // List Pages
    listPages: function () {
      firebase.database().ref("page/tours").once('value', (snapshot)=> {
        this.tours.list = snapshot.val().list
        if (snapshot.val().background != "") {
          this.tours.background = this.getSrc(snapshot.val().background)
        }
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

<style lang="css">
</style>
