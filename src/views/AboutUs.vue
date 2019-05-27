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
        "background":"https://apimgs.000webhostapp.com/img/"+"Momotus-Momota.png"
      }
    }
  },
  mounted(){

  },
}
</script>

<style lang="css">
</style>
