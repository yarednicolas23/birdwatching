<template lang="html">
  <div>
    <PageTemplate :background="staff.background">
      <div class="col s12">
        <div class="col s4 offset-s4 center">
          <figure>
            <img class="" :src="getSrc('samy-bessudo-staff')" alt="Samy Bessudo">
            <figcaption><h3 class="white-text bebasbold">Samy Bessudo</h3></figcaption>
          </figure>
        </div>
          <div class="col s4 offset-s4 center">
            <figure>
              <img class="" :src="getSrc('oswaldo-cortes-staff')" alt="Oswaldo Cortes">
              <figcaption><h3 class="white-text bebasbold">Oswaldo Cortes</h3></figcaption>
            </figure>
          </div>
      </div>
    </PageTemplate>
  </div>
</template>

<script>
import PageTemplate from './PageTemplate.vue'

export default {
  components: { PageTemplate },
  data() {
      return {
        "staff":{
          "background":this.getSrc("staff-birdwatching-colombia")
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

<style lang="css" scoped>

figure {
  cursor: pointer;
  box-shadow: 0 3px 20px rgba( 0, 0, 0, 0.35 );
}

figure img {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
}

figure:hover img {
    width: 100%;
    height: 100%;
}

figure figcaption {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba( 0, 0, 0, 0 );
  transition: all 0.2s 0.1s ease-in-out;
}

figure:hover figcaption {
  background: rgba( 0, 0, 0, 0.7 );
  transition: all 0.2s ease-in-out;
}

figure figcaption h3 {
  position: absolute;
  color: #fff;
  opacity: 0;
  top: 50%;
  left: 25%;
  transform: translate( -50%, -50% );
  transition: all 0.1s ease-in-out;
}

figure:hover figcaption h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50% );
  color: #fff;
  opacity: 1;
  transition: all 0.1s 0.15s ease-in-out;
}

</style>
