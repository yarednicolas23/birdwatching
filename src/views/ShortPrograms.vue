<template lang="html">
  <div>
    <PageTemplate :background="shortprograms.background">
      <div style="overflow: auto; white-space: nowrap;min-width:100%;">
        <div v-for="(short,key) in shortprograms.list" v-bind:key="key" style="min-height:60vh;display: inline-block;margin:20px;">
          <div class="card" style="border-radius:10px;">
            <div class="card-image">
              <img :src="getSrc(key)" style="max-width:80vh;width:100%;border-radius:10px;">
              <div class="card-title">{{short.name}}
                <span style="font-size:16px"><br><i class="material-icons white-text" style="font-size:16px">room</i>
                  Bogotá, Colombia <br>
                  <i class="material-icons pointer tooltipped" data-position="bottom" data-tooltip="Includes transport">directions_bus</i>
                  <i class="material-icons pointer tooltipped" data-position="bottom" data-tooltip="Includes hotel">hotel</i>
                  <i class="material-icons pointer tooltipped" data-position="bottom" data-tooltip="Includes entrance tickets">local_play</i>
                  <i class="material-icons pointer tooltipped" data-position="bottom" data-tooltip="Includes lunch">restaurant_menu</i>
                  <i class="material-icons pointer tooltipped" data-position="bottom" data-tooltip="Includes snack food">free_breakfast</i>
                  <i class="material-icons pointer tooltipped" data-position="bottom" data-tooltip="Specialized bird guide">record_voice_over</i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="slider white-text" v-if='false'>
          <ul class="slides transparent">
            <li v-for="(short,key) in shortprograms.list" v-bind:key="key">
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
import firebase from 'firebase'

import PageTemplate from './PageTemplate.vue'

export default {
  name:'ShortPrograms',
  components: { PageTemplate },
  data() {
      return {
        "shortprograms":{
          "list":{},
          "background":this.getSrc("Eubucco-Bourcierii")
        },
        "title": 'Short Programs, Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  methods: {
    getSrc(name) {
      return 'https://imgsapi.000webhostapp.com/img/'+ name.replace(" ","-") + ".png"
      //return 'https://apimgs.000webhostapp.com/img/'+ name + ".png?"
      //require('../assets/img/'+ name + '.png')
      //return '/img/'+ name + '.png'
    },
    getShortPrograms(){
      M.toast({html: 'Loading...'})
      firebase.database().ref("page/shortprograms/list").once('value', (snapshot)=> {
        this.shortprograms.list = snapshot.val()
      })
    }
  },
  created(){
    this.getShortPrograms()
    M.Slider.init(document.querySelector('.slider'))
    setTimeout(function () {
        M.Slider.init(document.querySelectorAll('.slider'),{duration:1000,interval:3000})
    }, 100)
  },
  mounted(){

  },
  beforeMount: ()=> {
    setTimeout(function () {
      const tooltipped = document.querySelectorAll('.tooltipped')
      M.Tooltip.init(tooltipped)
    }, 2000)
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
