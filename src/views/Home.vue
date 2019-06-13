<template lang="html">
  <div>
    <PageTemplate :background="home.background">
      <div class="col s12">
        <div class="col s12 m12 l6 white-text">
          <h1 id="title" style="display:none" class="bebasbold no-margin scrollspy ">{{home.title}}</h1>
          <div id="description" style="display:none" class="scrollspy">
            <p>{{home.description}}</p>
            <br>
            <div class="col 12 no-padding">
              <div class="col s4">
                <a class="btn-floating pulse waves-effect blue darken-3 waves-light tooltipped" data-position="bottom" :data-tooltip="'Ubication'"><i class="material-icons">place</i></a>
              </div>
              <div class="col s4">
                <a class="btn-floating pulse waves-effect blue darken-3 waves-light tooltipped" data-position="bottom" data-tooltip="Lisent Bird"><i class="material-icons">hearing</i></a>
              </div>
              <div class="col s4">
                <a class="btn-floating pulse waves-effect blue darken-3 waves-light tooltipped" data-position="bottom" data-tooltip="More Info"><i class="material-icons">help_outline</i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col s12 m12 l6">
          <div class="carousel">
             <a class="carousel-item waves-effect waves-light" v-for="(bird,key) in home.gallery.list" v-bind:key="key" v-on:click="setInfo(bird.name,bird.description,key)">
               <img class="scrollspy z-depth-5" style="display:none" v-bind:src="getSrc(key+'-400')">
             </a>
           </div>
        </div>
      </div>
      <audio id="audio" autoplay controls loop class="hide">
        <source src="../assets/mp3/birdwatching.mp3" type="audio/mpeg">
      </audio>

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
          "background":this.getSrc("Hummingbird")
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
      return 'https://apimgs.000webhostapp.com/img/'+ name + ".png?"
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
        },3000)
    })
    const tooltipped = document.querySelectorAll('.tooltipped')
    M.Tooltip.init(tooltipped)

    setTimeout( ()=> {
      var promise = document.querySelector('#audio').play()
      if (promise !== undefined) {
          promise.then( ()=> {
              // Autoplay started!
          }).catch( ()=> {
              // Autoplay was prevented.
              // Show a "Play" button so that user can start playback.
              document.querySelector('#audio').play()
          })
      }
    }, 2000)
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
.carousel .carousel-item {
  width: 250px;
  height: 250px;
}
.carousel{
  top: 25vh;
  max-height: 60vh;
}
.carousel .carousel-item > img{
  width: 100%;
}
@media only screen and (max-width: 601px){
  .carousel{
    top: 0vh;
    max-height: 60vh;
  }
  .carousel .carousel-item > img{
    width: 100%;
    margin-left: 10%;
  }
}
</style>
