<template lang="html">
  <div id="home" v-bind:style="{'background-image': 'url(' + home.background + ')'}">
  <SocialShare/>
  <FooterFixed/>
    <div id="content" class="row">
      <Navbar/>
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
               <img class="scrollspy z-depth-5" style="display:none" v-bind:src="getSrc(key)">
             </a>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SocialShare from '../components/SocialShare.vue'
import FooterFixed from '../components/FooterFixed.vue'

import $ from 'jquery'
import firebase from 'firebase'
import M from 'materialize-css'
export default {
  components: { Navbar, SocialShare,FooterFixed },
  data() {
      return {
        "home":{
          "gallery":{
            "list":[]
          },
          "title":"Hummingbird",
          "description":"Hummingbirds are birds native to the Americas and constitute the biological family Trochilidae. They are among the smallest of birds, most species measuring 7.5–13 cm (3–5 in) in length.",
          //"background":"/img/hummingbird.png"
          "background":"https://apimgs.000webhostapp.com/img/"+"hummingbird.png"
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
      return 'https://apimgs.000webhostapp.com/img/'+ name + "-400.png"
      //return require('../assets/img/'+name+'/'+ name + "-400.png")
    },
    setInfo(title,description,background){
      this.home.title = title
      this.home.description = description
      this.home.background = 'https://apimgs.000webhostapp.com/img/'+ background+'.png'
      $('#home').css("background-image","url("+'https://apimgs.000webhostapp.com/img/'+ background+'.png'+")")
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
        },2000);
    })
    $("#home").mousemove(function(e) {
      var offset = $(this).offset()
      var relativeX = (e.pageX - offset.left)
      var relativeY = (e.pageY - offset.top)
      var theTotal = relativeX/10+'% ' + relativeY/10+'%'
      $('#home').css({'background-position': theTotal})

    });
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
#home{
  background-size: cover;
  filter:saturate(1.4) contrast(1.1);
}
#content{
  min-height: 100vh;
  height: 100%;
  min-width: 100vh;
  width: 100%;
  margin:0px;
  padding:0% 5%;
  background: linear-gradient(to right,black, transparent);
}
.carousel{
  top: 25vh;
}
</style>
