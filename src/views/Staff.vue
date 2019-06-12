<template lang="html">
  <div>
    <PageTemplate :background="staff.background">
      <div class="col s12">
        <div class="col s4 center">
          <figure>
            <img class="" :src="getSrc('samy-bessudo-staff')" alt="Samy Bessudo">
            <figcaption>
              <h3 class="white-text bebasbold">
                Samy Bessudo
                <a :href="'/'" target="_blank"><i class="icon ion-logo-facebook white-text"></i></a>
                <a :href="'/'" target="_blank"><i class="icon ion-logo-instagram white-text"></i></a>
                <a :href="'/'" target="_blank"><i class="icon ion-logo-twitter white-text"></i></a>
              </h3>
            </figcaption>
          </figure>
        </div>

          <div class="col s4 center">
            <figure>
              <img class=""  :src="getSrc('oswaldo-cortes-staff')" alt="Oswaldo Cortes">
              <figcaption>
                <h3 class="white-text bebasbold">
                  Oswaldo Cortes
                  <i class="icon ion-logo-facebook white-text"></i>
                  <i class="icon ion-logo-instagram white-text"></i>
                  <i class="icon ion-logo-twitter white-text"></i>
                </h3>
              </figcaption>
            </figure>
          </div>
        <div class="col s3 center hide">
            <img class="responsive-img circle" :src="getSrc('oswaldo-cortes-staff')" alt="Oswaldo Cortes">
            <h3 class="white-text bebasbold">Oswaldo Cortes</h3>
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
 background-color: #000;
 display: inline-block;
 font-family: 'Open Sans', sans-serif;
 font-size: 16px;
 margin: 10px;
 max-width: 315px;
 min-width: 230px;
 overflow: hidden;
 position: relative;
 text-align: center;
 width: 100%;
}
figure *,
figure *:before {
 -webkit-box-sizing: border-box;
 box-sizing: border-box;
 -webkit-transition: all 0.35s ease;
 transition: all 0.35s ease;
}
figure img {
 backface-visibility: hidden;
 max-width: 100%;
 vertical-align: top;
}
figure figcaption {
 bottom: 30px;
 left: 0;
 position: absolute;
 z-index: 0;
}
figure figcaption:before {
 background-color: #ffffff;
 bottom: -5px;
 content: '';
 left: 0;
 position: absolute;
 right: 100%;
 top: -5px;
 z-index: -1;
}
figure h3 {
 background-color: black;
 color: #ffffff;
 font-size: 1.5em;
 font-weight: 600;
 letter-spacing: 1px;
 margin: 0;
 padding: 5px 10px;
 text-transform: uppercase;
 z-index: 1;
}
figure h3 i{
  margin:0 5px;
  display: none;
}
figure > a {
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 z-index: 1;
}
figure:hover > img,
figure.hover > img {
 opacity: 0.4;
}

figure:hover h3 i{
  display: inline-block;
}
figure:hover figcaption:before,
figure.hover figcaption:before {
 right: -5px;
}


</style>
