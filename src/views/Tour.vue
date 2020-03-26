<template lang="html">
  <PageTemplate :background="tour.background">
    <div class="col s12 white-text">
      <div>
        <h1 class="bebasbold">{{ tour.info.title }}</h1>
        <p v-html="tour.info.description"></p>
        <ul class="collapsible no-border scrollspy">
          <li>
            <div class="collapsible-header transparent no-border tooltipped" data-position="left" data-tooltip="Group of people">
              <i class="material-icons">group</i>
              {{tour.info.group}}
            </div>
          </li>
          <li>
            <div class="collapsible-header transparent no-border tooltipped" data-position="left" data-tooltip="Router">
              <i class="material-icons">near_me</i>
              {{tour.info.route}}
            </div>
          </li>
          <li>
            <div class="collapsible-header transparent no-border tooltipped" data-position="left" data-tooltip="Price in Dollar">
              <i class="material-icons">monetization_on</i>
              {{tour.info.price}}
            </div>
          </li>
        </ul>
        <a :href="'/contact-us/'" class="button-shadow" >Buy Now!</a>
      </div>
    </div>
  </PageTemplate>
</template>

<script>
import firebase from 'firebase'
import M from 'materialize-css'

import PageTemplate from './PageTemplate.vue'
export default {
  name:"Tous",
  components: { PageTemplate },
  data() {
      return {
        "tour":{
          "background":this.getSrc("Hummingbird"),
          "info":{}
        },
        "tours":{},
        "title": 'Tours Birdwatching Colombia',
        "description":'Avistamiento de aves, viaja por el país con la mayor diversidad de aves del mundo. Ofrecemos rutas que cubren casi el 80% del país.',
        "keywords": 'Aviatur, Birdwatching, avistamiento de aves, diversidad, fauna, especies, aves exóticas, aves, rutas, Colombia, aves de Colombia'
      }
  },
  created(){
    this.getTour()
  },
  methods:{
    getSrc(name) {
      return 'https://imgsapi.000webhostapp.com/img/'+ name + ".png?"
      //require('../assets/img/'+ name + '.png')
      //return '/img/'+ name + '.png'
    },
    // List Pages
    getTour(){
      this.$route.params.id
      firebase.database().ref("page/tours/list").once('value', (snapshot)=> {
        this.tours = snapshot.val()
        M.Tooltip.init(document.querySelectorAll('.tooltipped'))
        snapshot.forEach((childSnapshot) => {
          if (this.$route.params.id == childSnapshot.key) {
            this.tour.info = childSnapshot.val()
            if (childSnapshot.val().background != "") {
              this.tour.background = this.getSrc(childSnapshot.val().background)
            }
          }
        })
      })
    }
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
.collapsible{
  box-shadow: none !important;
}
.collapsible-header{
  padding-left: 0px;
}
</style>
