<template lang="html">
  <div id="aboutus">
    <PageTemplate :background="about.background">
      <div class="col s12 scrollspy" v-html="about.data.code"></div>
    </PageTemplate>
  </div>
</template>
<script>
import PageTemplate from './PageTemplate.vue'
import Loader from '../components/Loader.vue'

import firebase from 'firebase'
export default{
  name:'AboutUs',
  components: { PageTemplate },
  data() {
    return {
      "about":{
        "data":{},
        //"background":"/img/hummingbird.png"
        //"background":this.getSrc("Momotus-Momota")
      }
    }
  },
  beforeCreate(){
    
  },
  methods:{
    getAbout(){
      firebase.database().ref("page/about-us").once('value', (snapshot)=> {
        this.about.data = snapshot.val()
        this.about.background=this.getSrc(this.about.data.background)

      })
    },
    getSrc(name) {
      //return 'https://apimgs.000webhostapp.com/img/'+ name + ".png?"
      require('../assets/img/'+ name + '.png')
      return './img/'+ name + '.png'
    }
  },
  created(){
      this.getAbout()
  },
  mounted(){
  },
}
</script>

<style lang="css">
</style>
