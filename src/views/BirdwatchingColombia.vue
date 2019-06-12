<template lang="html">
  <div>
    <PageTemplate :background="staff.background">
      <div class="col s12 white-text">
        <div class="col s12 m6 l6">
          <h1 id="title" style="display:none" class="bebasbold scrollspy ">{{title}}</h1>
          <div style="display:none" class="scrollspy">
            {{description}}
          </div>
        </div>
        <div class="col s12 m6 l6">
          <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.55893195463995!2d-74.06964270546567!3d4.604245250370323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a3b5543e45%3A0x5fde250990547328!2sAviatur+Principal!5e0!3m2!1ses!2sco!4v1559681040782!5m2!1ses!2sco" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      </div>
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from './PageTemplate.vue'

export default {
  name:'BirdwatchingColombia',
  components: { PageTemplate },
  data() {
      return {
        "staff":{
          "background":"/img/"+"Tangara-Cyanicollis.png"
        },
        "title": 'Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  methods: {

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

<style lang="css" scoped>
.map{
  filter:invert(1) contrast(0.8);
}
</style>
