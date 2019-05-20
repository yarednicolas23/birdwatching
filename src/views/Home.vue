<template lang="html">
  <div id="home"  v-bind:style="{ 'background-image': 'url(' + home.background + ')' }">
  <SocialShare/>
    <div id="content" class="row">
      <Navbar/>
      <div class="col s12">
        <div class="col s12 m6 l6 white-text">
          <h1 class="bebasbold no-margin">Hummingbird</h1>
          <p>Hummingbirds are birds native to the Americas and constitute the biological family Trochilidae. They are among the smallest of birds, most species measuring 7.5–13 cm (3–5 in) in length.</p>
        </div>
        <div class="col s12 m6 l6">
          <div class="carousel" v-for="(bird,key) in home.gallery.list" v-bind:key="key">
             <a class="carousel-item z-depth-4" href="#one!"><img v-bind:src="'/img/'+key+'/'+bird.img"></a>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SocialShare from '../components/SocialShare.vue'

import firebase from 'firebase'
import M from 'materialize-css'
export default {
  components: { Navbar, SocialShare },
  data() {
      return {
        "home":{
          "gallery":{
            "list":[]
          },
          "background":"/img/hummingbird.png"
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

      })
    }
  },
  created(){
    this.getGallery()
  },
  mounted(){
    setTimeout(function () {
      const elems = document.querySelectorAll('.carousel')
      M.Carousel.init(elems)
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
#home{
  background-size: cover;
  filter:saturate(1.4);
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
</style>
