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
                <a :href="'/tour/'+key" class="button-shadow" >Buy Now ${{short.price}}</a>
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
          "background":"https://apimgs.000webhostapp.com/img/"+"Tangara-Cyanicollis.png"
        },
        "shorts":{
          "list":{
            "example":{
              "name":"Example",
              "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              "price":"100"
            },
            "example2":{
              "name":"Example2",
              "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              "price":"100"
            }
          }
        },
        "title": 'Short Programs, Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  methods: {

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
