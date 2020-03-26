<template lang="html">
  <div id="aboutus">
    <PageTemplate :background="about.background">
      <div class="col s12 scrollspy" v-html="about.data.code"></div>
    </PageTemplate>
  </div>
</template>
<script>
import PageTemplate from './PageTemplate.vue'

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
      },
       "title": 'About us | Birdwatching Colombia',
        "description":'We create unique experiences in different regions of Colombia for beginners and experts in bird watching. We are supported by 62 years of experience in tourism',  
    }
  },
  beforeCreate(){

  },
  methods:{
    getAbout(){
      firebase.database().ref("page/about-us").once('value', (snapshot)=> {
        this.about.data = snapshot.val()
        this.about.background=this.getSrc(this.about.data.background)
        this.loader = false
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
metaInfo () {
    return {
      title: this.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>

<style lang="css">
.map{
  filter:invert(1) contrast(0.8);
}
</style>
