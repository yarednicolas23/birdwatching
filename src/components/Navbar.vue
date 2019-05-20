<template>
  <nav id="nav" class="transparent">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><img id="logo" class="responsive-img" src="../assets/img/logo.png" alt=""> </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-for="(button,key) in page.buttons" v-bind:key="key"><a v-bind:href="key">{{button}}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data (){
    return {
      "page":{
        "buttons":{
          "home":"Home",
          "about":"About Us",
          "tours":"Tours",
          "shortprograms":"Short Programs",
          "contact":"Contact Us"
        }
      }
    }
  }
}

</script>

<style lang="css" scoped>
#nav{
  box-shadow: none;
}
.nav-wrapper{
  padding:2% 0%;
}
#logo{
  max-height: 50px;
}
</style>
