<template lang="html">
  <div>
    <PageTemplate :background="tours.background">
      <div class="col s12">
        <div class="slider">
          <ul class="slides transparent">
            <li v-for="(tour,key) in tours.list" v-bind:key="key">
               <!--<img :src="getSrc(key)"> random image -->
              <div class="caption">
                <h1 class="bebasbold">Tour: {{key}}</h1>
                <p>{{tour.description}}</p>
                <a :href="'/tour/'+key" class="button-shadow" >See More!</a>
              </div>
            </li>
          </ul>
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
            M.Slider.init(document.querySelectorAll('.slider'))
        }, 1000)
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
