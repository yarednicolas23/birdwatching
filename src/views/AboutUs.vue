<template lang="html">
  <div id="aboutus">
    <PageTemplate :background="about.background"></PageTemplate>
  </div>
</template>
<script>
import PageTemplate from './PageTemplate.vue'
export default{
  name:'AboutUs',
  components: { PageTemplate },
  data() {
    return {
      "about":{
        //"background":"/img/hummingbird.png"
        "background":this.getSrc("Momotus-Momota")
      }
    }
  },
  methods:{
    getSrc(name) {
      //return 'https://apimgs.000webhostapp.com/img/'+ name + ".png?"
      require('../assets/img/'+ name + '.png')
      return './img/'+ name + '.png'
    }
  },
  mounted(){

  },
}
</script>

<style lang="css">
</style>
