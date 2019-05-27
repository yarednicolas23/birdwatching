<template lang="html">
  <div>
    <PageTemplate :background="staff.background">
      <div class="col s12">
        <div class="col s2"></div>
        <div class="col s3">
            <img class="responsive-img circle" src="https://apimgs.000webhostapp.com/img/samy-bessudo-staff.png" alt="Samy Bessudo">
        </div>
        <div class="col s1"></div>
        <div class="col s3">
            <img class="responsive-img circle" src="https://apimgs.000webhostapp.com/img/oswaldo-cortes-staff.jpeg" alt="Samy Bessudo">
        </div>
      </div>
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from './PageTemplate.vue'

import $ from 'jquery'
import firebase from 'firebase'
import M from 'materialize-css'
export default {
  components: { PageTemplate },
  data() {
      return {
        "staff":{
          "background":"https://apimgs.000webhostapp.com/img/"+"staff-birdwatching-colombia.png"
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

</style>
