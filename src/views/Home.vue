<template lang="html">
  <div>
    <PageTemplate :background="home.background">
      <div class="col s12">
        <div class="col s12 m12 l6 white-text">
          <h1 id="title" style="display:none" class="bebasbold no-margin scrollspy ">{{home.title}}</h1>
          <p id="description" style="display:none" class="scrollspy">
            {{home.description}}
          </p>
        </div>
        <div class="col s12 m12 l6">
          <div class="carousel">
             <a class="carousel-item waves-effect waves-light" v-for="(bird,key) in home.gallery.list" v-bind:key="key" v-on:click="setInfo(bird.name,bird.description,key)">
               <img class="scrollspy z-depth-5" style="display:none" v-bind:src="getSrc(key+'-400')">
             </a>
           </div>
        </div>
      </div>
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from './PageTemplate.vue'

import $ from 'jquery'
import firebase from 'firebase'
import M from 'materialize-css'
export default {
  components: { PageTemplate },
  data() {
      return {
        "home":{
          "gallery":{
            "list":[]
          },
          "title":"Hummingbird",
          "description":"Hummingbirds are birds native to the Americas and constitute the biological family Trochilidae. They are among the smallest of birds, most species measuring 7.5–13 cm (3–5 in) in length.",
          //"background":"/img/hummingbird.png"
          "background":this.getSrc("hummingbird")
        },
        "title": 'Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  methods: {
    getGallery: function () {
      firebase.database().ref("page/home/gallery").once('value', (snapshot)=> {
        this.home.gallery.list = snapshot.val()
        //this.users.length = snapshot.numChildren()
        setTimeout(function () {
          const elems = document.querySelectorAll('.carousel')
          M.Carousel.init(elems,{
            duration:10,
            fullWidth:true,
            padding:20,
            numVisible:3
          })
          $(".scrollspy").fadeIn(3000)
        }, 2000)
      })
    },
    getSrc(name) {
      return 'https://apimgs.000webhostapp.com/img/'+ name + ".png"
      //require('../assets/img/'+ name + '.png')
      //return './img/'+ name + '.png'
    },
    setInfo(title,description,background){
      this.home.title = title
      this.home.description = description
      this.home.background = this.getSrc(background)
    }
  },
  created(){
    this.getGallery()
  },
  mounted(){
    this.$nextTick(function () {
        window.setInterval(() => {
            const elem = document.querySelectorAll('.carousel')
            elem[0].M_Carousel.next(1)
        },2000)
    })
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
.carousel{
  top: 25vh;
  max-height: 60vh;
}
</style>
