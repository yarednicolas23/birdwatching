<template lang="html">

</template>

<script>
import PageTemplate from './PageTemplate.vue'

export default {
  name:"Bird",
  components: { PageTemplate },
  data() {
    return {
      "bird":{
        "background":this.getSrc("Scarlet-Macaw"),
        "info":{}
      },
      "title": 'Tours Birdwatching Colombia',
      "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
      "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
    }
  },
  created(){

      this.$route.params.id
  },
  methods:{
    getSrc(name) {
      //return 'https://apimgs.000webhostapp.com/img/'+ name + ".png?"
      //require('../assets/img/'+ name + '.png')
      //return '/img/'+ name + '.png'
    },
  }
}
</script>

<style lang="css">

</style>
