<template lang="html">
    <PageTemplate :background="background">
      <div class="col s12 white-text">
        <div v-html="shortprogram.description"></div>
        <div class="col s12" v-if="shortprogram.location!=null">
          <iframe class="map" :src="shortprogram.location" frameborder="0" style="width:100%;height:200px;" allowfullscreen></iframe>
        </div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
      </div>
    </PageTemplate>
</template>

<script>
import firebase from 'firebase'
import M from 'materialize-css'

import PageTemplate from './PageTemplate.vue'
export default {
  name:"ShortProgram",
  components: { PageTemplate },
  data() {
      return{
        "background":this.getSrc("Hummingbird"),
        "shortprogram":{},
        "title": 'Tours Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  created(){
    this.getShortPrograms()
  },
  methods:{
    getSrc(name) {
      return 'https://imgsapi.000webhostapp.com/img/'+ name + ".png?"
      //require('../assets/img/'+ name + '.png')
      //return '/img/'+ name + '.png'
    },
    getShortPrograms(){
      M.toast({html: 'Loading...'})
      this.$route.params.id
      firebase.database().ref("page/shortprograms/list/"+ this.$route.params.id).once('value', (snapshot)=> {
        this.shortprogram = snapshot.val()
        M.Tooltip.init(document.querySelectorAll('.tooltipped'))
      })
    }
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
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.item {
  display: inline-block;
}
</style>
