<template lang="html">
    <PageTemplate :background="background">
      <div class="col s12 white-text">
        <div v-html="shortprogram.description"></div>
        <div class="col s12" v-if="shortprogram.location!=null">
          <iframe class="map" :src="shortprogram.location" frameborder="0" style="width:100%;height:400px;" allowfullscreen></iframe>
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
        "title": 'Short tours in big cities surrounding’s | Birdwatching Colombia ',
        "description":'Tours of 1 to 3 days, designed for experts and beginners, for exploring birds and nature around the main cities of Colombia'
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
