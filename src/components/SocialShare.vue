<template lang="html">
  <div class="fixed">
    <div class="row"  v-for="(link,key) in page.links" v-bind:key="key">
      <a v-bind:href="link" target="_blank"><i v-bind:class="'icon ion-logo-'+key+' white-text'"></i></a>
    </div>
  </div>
</template>

<script>
import 'ionicons/dist/css/ionicons.css'
export default {
  name:'SocialShare',
  data (){
    return {
      "page":{
        "links":{
          "facebook":"https://es-la.facebook.com/AVIATUR.SA/",
          "instagram":"https://www.instagram.com/aviaturoficial",
          "twitter":"https://twitter.com/aviatur"
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
.fixed{
  position: fixed;
  bottom: 0px;
  left:20px;
}
.icon{
  font-size: 1.6rem;
}
</style>
