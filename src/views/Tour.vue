<template lang="html">
    <PageTemplate :background="tour.background">
      <div class="col s12">
          <div>Tour: {{ $route.params.id }}</div>
      </div>
    </PageTemplate>
</template>

<script>
import PageTemplate from './PageTemplate.vue'
export default {
  name:"Tous",
  components: { PageTemplate },
  data(){
    return {
      "tour":{
        "background":this.getSrc("Scarlet-Macaw")
      }
    }
  },
  methods:{

    getSrc(name) {
      //return 'https://apimgs.000webhostapp.com/img/'+ name + ".png?"
      require('../assets/img/'+ name + '.png')
      return './img/'+ name + '.png'
    },
  }
}
</script>

<style lang="css">
</style>
