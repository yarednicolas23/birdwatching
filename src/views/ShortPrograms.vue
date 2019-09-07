<template lang="html">
  <div>
    <PageTemplate :background="shortprograms.background">
      <div class="col s12">
        <div class="slider white-text">
          <ul class="slides transparent">
            <li v-for="(short,key) in shorts.list" v-bind:key="key">
               <!--<img :src="getSrc(key)"> random image -->
              <div class="caption">
                <h1 class="bebasbold">Program: {{key}}</h1>
                <p>{{short.description}}</p>
                <a :href="'/contact-us'" class="button-shadow" >Buy Now USD ${{short.price}}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </PageTemplate>
  </div>
</template>

<script>
import M from 'materialize-css'

import PageTemplate from './PageTemplate.vue'

export default {
  name:'ShortPrograms',
  components: { PageTemplate },
  data() {
      return {
        "shortprograms":{
          "background":this.getSrc("Eubucco-Bourcierii")
        },
        "shorts":{
          "list":{
            "ARRIVING-IN-BOGOTA":{
              "name":"ARRIVING IN BOGOTA",
              "description":"Reception of the group at El Dorado International Airport in charge of the agency's logistics team, transfer to the hotel, registration and accommodation. It also includes dinner and then they can rest.",
              "price":"6300"
            },
            "LA-FLORIDA-WETLAND":{
              "name":"LA FLORIDA WETLAND",
              "description":"We start our first birding activity in La Florida wetland. In this place there are more than 40 different kind of birds, some of them endemic species and a significant number of migratory birds. With our specialized guides you will find some special birds as: -Rallus semiplumbeus / Bogotá Rail –E -Cistothorus apolinari /Apolinar´s Wren –E -Synallaxis subpudica / Silvery-throated Spinetail – E -Conirostrum rufum  / Rufous-browed Conebill - CE-Grey-rumped Tapaculo CE Gallinula melanops  / Spot-flanked Gallinule R.",
              "price":"5000"
            }
          }
        },
        "title": 'Short Programs, Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  methods: {
    getSrc(name) {
      //return 'https://apimgs.000webhostapp.com/img/'+ name + ".png?"
      require('../assets/img/'+ name + '.png')
      return '/img/'+ name + '.png'
    }
  },
  created(){
    M.Slider.init(document.querySelector('.slider'))
    setTimeout(function () {
        M.Slider.init(document.querySelectorAll('.slider'),{duration:1000,interval:3000})
    }, 100)
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
