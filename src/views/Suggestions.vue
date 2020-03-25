<template lang="html">
  <div>
    <div style="overflow: auto; white-space: nowrap;min-width:100%;">
      <div v-for="(short,key) in shortprograms.list" v-bind:key="key" style="min-height:10vh;display: inline-block;margin:5px;">
        <a :href="'/short-program/'+key" target="_blank" class="card" style="border-radius:10px;">
          <div class="card-image">
            <img :src="getSrc(key)" style="max-width:30vh;width:100%;border-radius:10px;">
            <div class="card-title"><h5>{{short.name.substring(0,10)+'...'}}</h5><h6 class="thin">See more</h6></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
import firebase from 'firebase'

export default {
  name:'Suggestions',
  data() {
    return {
      "shortprograms":{
        "list":{}
      }
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
  },
  mounted(){

  },
  beforeMount: ()=> {
    setTimeout(function () {
      const tooltipped = document.querySelectorAll('.tooltipped')
      M.Tooltip.init(tooltipped)
    }, 2000)
  }
}
</script>

<style lang="css" scoped>

</style>
