<template lang="html">
  <div>
    <Loader v-if="home.loader"/>
    <PageTemplate :background="home.background">
      <div class="row">
        <div class="col s12 m12 l6 white-text">
          <h1 id="title" style="display:none" class="bebasbold scrollspy ">{{home.title}}</h1>
          <div id="description" style="display:none" class="scrollspy">
            <p v-html="home.description"></p>
            <br>
            <div class="col 12 no-padding">
              <div class="col s4">
                <a :href="'/bird/'+home.sound" class="btn-floating waves-effect blue darken-3 waves-light tooltipped" data-position="bottom" :data-tooltip="'Ubication: '+home.ubication"><i class="material-icons">place</i></a>
              </div>
              <div class="col s4">
                <a class="btn-floating pulse waves-effect blue darken-3 waves-light tooltipped"  v-on:click="soundBird(home.sound)" data-position="bottom" data-tooltip="Lisent Bird"><i class="material-icons">hearing</i></a>
              </div>
              <div class="col s4">
                <a :href="'/bird/'+home.sound" class="btn-floating waves-effect blue darken-3 waves-light tooltipped" data-position="bottom" data-tooltip="More Info"><i class="material-icons">help_outline</i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col s12 m12 l6">
          <div class="carousel">
             <a class="carousel-item waves-effect waves-light z-depth-2" v-for="(bird,key) in home.gallery.list" v-bind:key="key" v-on:click="setInfo(bird.name,bird.description,bird.ubication,key)">
               <div class="background-img-bird" v-bind:style="'background-image:url('+getSrc(key)+')'"></div>
               <!--<img class="scrollspy" style="display:none" v-bind:src="getSrc(key)" :alt="key">-->
             </a>
           </div>
        </div>
      </div>
    </PageTemplate>

    <audio id="Hummingbird" controls loop class="hide">
      <source src="../assets/mp3/Hummingbird.mp3" type="audio/mpeg">
    </audio>
    <audio id="Momotus-Momota" controls loop class="hide">
      <source src="../assets/mp3/Momotus-Momota.mp3" type="audio/mpeg">
    </audio>
    <audio id="Scarlet-Macaw" controls loop class="hide">
      <source src="../assets/mp3/Scarlet-Macaw.mp3" type="audio/mpeg">
    </audio>
    <audio id="Tangara-Cyanicollis" controls loop class="hide">
      <source src="../assets/mp3/Tangara-Cyanicollis.mp3" type="audio/mpeg">
    </audio>
    <audio id="Galbula-ruficauda" controls loop class="hide">
      <source src="../assets/mp3/Galbula-ruficauda.mp3" type="audio/mpeg">
    </audio>

    <audio id="audio" autoplay controls loop class="hide">
      <source src="../assets/mp3/birdwatching.mp3" type="audio/mpeg">
    </audio>
    <div class="fixed-action-btn horizontal click-to-toggle">
      <!-- Element Showed -->
      <a id="menu" class="waves-effect waves-light btn btn-floating grey darken-4" v-on:click="togglePlay()"><i class="material-icons">hearing</i></a>

      <!-- Tap Target Structure -->
      <div class="tap-target grey darken-4 white-text" data-target="menu">
        <div class="tap-target-content">
          <h5>Click here</h5>
          <p>And turn up the volume for a new experience</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTemplate from './PageTemplate.vue'
import Loader from '../components/Loader.vue'

import $ from 'jquery'
import firebase from 'firebase'
import M from 'materialize-css'
export default {
  components: { PageTemplate,Loader },
  data() {
      return {
        "home":{
          "loader":true,
          "gallery":{
            "list":[]
          },
          "title":"White-necked Jacobin",
          "description":"Hummingbirds are birds native to the Americas and constitute the biological family Trochilidae. They are among the smallest of birds, most species measuring 7.5–13 cm (3–5 in) in length.<br/> Scientific name: trochilidae <br/> Average life: 3 - 5 years. <br/> Family: Trochilidae; <br/> Speed: 79 km / h (Maximum, Slashed).",
          //"background":"/img/hummingbird.png"
          "background":this.getSrc("Hummingbird"),
          "sound":"White-necked-Jacobin",
          "ubication":"South America"
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
      return 'https://imgsapi.000webhostapp.com/img/'+ name + ".png?"
      //require('../assets/img/'+ name + '.png')
      //return './img/'+ name + '.png'
    },
    setInfo(title,description,ubication,background){
      this.home.title = title
      this.home.description = description
      this.home.background = this.getSrc(background)
      this.home.sound = background
      this.home.ubication = ubication
    },
    togglePlay() {
      const myAudio = document.querySelector('#audio')
      return myAudio.paused ? myAudio.play() : myAudio.pause();
    },
    soundBird(bird){
      const Hummingbird = document.querySelector('#Hummingbird')
      const Momotus = document.querySelector('#Momotus-Momota')
      const Scarlet = document.querySelector('#Scarlet-Macaw')
      const Tangara = document.querySelector('#Tangara-Cyanicollis')
      const Galbula = document.querySelector('#Galbula-ruficauda')
      const homeaudio = document.querySelector('#audio')

      Hummingbird.pause()
      Momotus.pause()
      Scarlet.pause()
      Tangara.pause()
      Galbula.pause()
      homeaudio.pause()

      const myAudio = document.querySelector('#'+bird+'')
      myAudio.paused ? myAudio.play() : myAudio.pause()
    }
  },
  created(){
    this.getGallery()
    setTimeout( ()=> {

      $(".loader").fadeOut(2500)
      //this.home.loader = false
    }, 3500)
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
              var elem= document.querySelector('.tap-target')
              var instance = M.TapTarget.init(elem)
              instance.open()
          })
      }
    }, 3000)
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
.background-img-bird{
  width:600px;
  height:250px;
  background-size:contain;
  background-position-x: -100px;
}
.carousel .carousel-item > img{
  width: 100%;
  border-radius: 20px;
}
.carousel .carousel-item{
  border-radius: 20px;
}
@media only screen and (max-width: 601px){
  .carousel{
    top: 0vh;
    max-height: 60vh;
  }
  .carousel .carousel-item > img{
    width: 100%;
    margin: 10%;
  }
}
</style>
