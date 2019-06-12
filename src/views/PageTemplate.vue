<template lang="html">
  <div id="home" v-bind:style="{'background-image': 'url(' + background + ')'}">
    <Loader/>
    <SocialShare/>
    <FooterFixed/>
      <div id="content" class="row">
        <Navbar/>
        <slot></slot>
      </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Loader from '../components/Loader.vue'
import SocialShare from '../components/SocialShare.vue'
import FooterFixed from '../components/FooterFixed.vue'

import $ from 'jquery'
export default{
  name:'PageTemplate',
  components: { Navbar,SocialShare,FooterFixed,Loader },
  props: ['background'],
  data() {
    return {
      "home":{
        //"background":"/img/hummingbird.png"
        "background":"https://apimgs.000webhostapp.com/img/"+"hummingbird.png"
      }
    }
  },
  methods:{
    
  },
  beforeCreate(){

  },
  mounted(){
    $("#home").mousemove(function(e) {
      var offset = $(this).offset()
      var relativeX = (e.pageX - offset.left)
      var relativeY = (e.pageY - offset.top)
      var theTotal = relativeX/10+'% ' + relativeY/10+'%'
      $('#home').css({'background-position': theTotal})
    })
    $(".scrollspy").fadeIn(3000)
  },
}
</script>

<style lang="css">
#home{
  background-size: cover;
  filter:saturate(1.4) contrast(1.1);
}
#content{
  min-height: 100vh;
  min-width: 100vh;
  width: 100%;
  margin:0px;
  padding:0% 5%;
  background: linear-gradient(to right,black, transparent);
}
.button-shadow {
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  border: 2px solid #3f51b5 ;
  background-color: #3f51b5 ;
  border-radius: 50px;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  box-shadow: 0px 0px 15px #3f51b5 ;
}
.button-shadow:hover {
  cursor: pointer;
  background-color: transparent;
}
@keyframes pulseSlow {
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>
