<template lang="html">
    <PageTemplate :background="staff.background">
      <div class="col s12">

      </div>
    </PageTemplate>
</template>

<script>
import PageTemplate from './PageTemplate.vue'
export default {
  name:"ContactUs",
  components: { PageTemplate },
  data() {
      return {
        "staff":{
          "background":this.getSrc("Momotus-Momota")
        },
        "title": 'Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  methods: {
    getSrc(name) {
      //return 'https://apimgs.000webhostapp.com/img/'+ name + ".png"
      require('../assets/img/'+ name + '.png')
      return './img/'+ name + '.png'
    }
  },
  created(){

  },
  mounted(){

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

<style lang="css">
</style>
