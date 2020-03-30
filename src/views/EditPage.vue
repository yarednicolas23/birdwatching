<template lang="html">
  <div id="aboutus">
    <PageTemplate :background="about.background">
      <h1>Edit Page</h1>
    </PageTemplate>
  </div>
</template>
<script>
import PageTemplate from './PageTemplate.vue'

import firebase from 'firebase'
export default{
  name:'EditPage',
  components:{PageTemplate},
  data() {
    return {
      "editpage":{
        "data":{}
      }
    }
  },
  beforeCreate(){

  },
  methods:{
    getAbout(){
      firebase.database().ref("page/about-us").once('value', (snapshot)=> {
        this.about.data = snapshot.val()
        this.about.background=this.getSrc(this.about.data.background)
        this.loader = false
      })
    },
    getSrc(name) {
      return 'https://imgsapi.000webhostapp.com/img/'+ name + ".png?"
      //require('../assets/img/'+ name + '.png')
      //return './img/'+ name + '.png'
    }
  },
  created(){
      this.getAbout()
  },
  mounted(){
  },
metaInfo () {
    return {
      title: this.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>

<style lang="css">

</style>
