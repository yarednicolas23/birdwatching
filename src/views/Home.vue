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
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SocialShare from '../components/SocialShare.vue'
//import M from 'materialize-css'
export default {
  components: { Navbar, SocialShare },
  data() {
      return {
        "home":{
          "background":"/img/1.png"
        },
        "title": 'Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  mounted(){

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
