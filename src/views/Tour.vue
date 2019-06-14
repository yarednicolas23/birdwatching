<template lang="html">
    <PageTemplate :background="tour.background">
      <div class="col s12 white-text">
        <div class="col s12 m6 l6">
          <h1 class="bebasbold">{{ tour.info.title }}</h1>
          <p>{{tour.info.description}}</p>
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
          <a :href="'/buy/'" class="button-shadow" >Buy Now!</a>
        </div>
        <div class="col s12 m6 l6">
          <div class="slider">
            <ul class="slides transparent">
              <li v-for="(tour,key) in tours" v-bind:key="key">
                 <!--<img :src="getSrc(key)"> random image -->
                <div class="caption right-align">
                  <h3 class="capitalize">{{key}}</h3>
                  <p>{{tour.description}}</p>
                  <a :href="'/tour/'+key" class="btn black" name="button">See More!</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col 12 m4 l4 hide">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011756.7151534874!2d-74.76246332613937!3d9.990870013944424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5f309f3b0773f3%3A0x29812374a959191b!2sMagdalena!5e0!3m2!1ses!2sco!4v1559860805264!5m2!1ses!2sco" width="400" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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
          "background":this.getSrc("Scarlet-Macaw"),
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
      return 'https://apimgs.000webhostapp.com/img/'+ name + ".png?"
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
          setTimeout(function () {
            M.Slider.init(document.querySelectorAll('.slider'),{height:250})
          }, 2000)
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
