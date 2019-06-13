<template lang="html">
  <div>
    <PageTemplate :background="tours.background">
      <div class="col s12">
        <div class="slider white-text">
          <Loader v-if="Object.keys(tours.list).length == 0"/>
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
import Loader from '../components/Loader.vue'

import PageTemplate from './PageTemplate.vue'

export default {
  name:'Tours',
  components: { PageTemplate ,Loader  },
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
      firebase.database().ref("page/tours/list").once('value', (snapshot)=> {
        this.tours.list = snapshot.val()
        setTimeout(function () {
            M.Slider.init(document.querySelectorAll('.slider'),{duration:200,interval:2000})
        }, 100)
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
.slider .indicators .indicator-item {
  height: 10px !important;
  width: 10px !important;
}
.slider .indicators .indicator-item.active {
    background-color: #3f51b5 !important;
}
</style>
