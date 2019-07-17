<template>
  <footer id="footer" class="transparent scrollspy"  style="display:none" >
    <div class="row no-margin">
      <div v-for="(img,key) in footer.imgs" v-bind:key="key" class="col s12 m4 l4"><a v-bind:href="img" target="_blank"><img :src="getSrc(key)" :alt="key"/></a></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterFixed',
  data (){
    return {
      "footer":{
        "imgs":{
        "aviatur-colombia":"http://www.aviaturcolombia.com/",
          "aviatur-com":"https://aviatur.com",
          "aviatur-ecoturismo":"http://www.aviaturecoturismo.com/es/"
        }
      }
    }
  },
  methods: {
    getSrc(name) {
      return require('../assets/img/'+ name + ".png")
    }
  }
}

</script>

<style lang="css" scoped>
#footer{
  position: fixed;
  bottom: 0px;
  left:50px;
}
img{
  max-width: 0px;
}
@media only screen and (min-width: 601px)
{
  img{
    max-width: 200px;
  }
}
.no-margin{
  margin: 0px;
}
</style>
