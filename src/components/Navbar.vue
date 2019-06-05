<template>
  <nav id="nav" class="transparent jnav">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><img id="logo" class="responsive-img" src="../assets/img/logo.png" alt=""> </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-for="(button,key) in page.buttons" v-bind:key="key">
          <a v-bind:href="key" v-if="button.dropdown==false">{{button.name}}</a>
          <a v-if="button.dropdown!=false" :href="key">
            {{button.name}}
            <i class="material-icons right">arrow_drop_down</i>
            <!-- Dropdown Structure -->
            <ul :id="key" class="jdropdown-menu">
              <li v-for="(btn,key) in button.dropdown" v-bind:key="key"><a :href="key" class="white-text">{{btn}}</a></li>
            </ul>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'navbar',
  data (){
    return {
      "page":{
        "buttons":{
          "home":{
            "name":"Home",
            "dropdown":false
          },
          "about-us":{
            "name":"About Us",
            "dropdown":{
              "staff":"Staff",
              "birdwatching-colombia":"Birdwatching Colombia"
            }
          },
          "tours":{
            "name":"Tours",
            "dropdown":{
              "tour/amazonian":"Amazonas",
              "tour/caribe":"Caribbean Coast",
              "tour/andian":"Andes"
            }
          },
          "short-programs":{
            "name":"Short Programs",
            "dropdown":false
          },
          "contact-us":{
            "name":"Contact Us",
            "dropdown":false
          }
        }
      }
    }
  },
  mounted(){
    const elems = document.querySelectorAll('.dropdown-trigger')
    M.Dropdown.init(elems)
  },
  methods:{
    hover(elem){
       var instance = document.querySelector("#"+elem)
      instance.open()
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
.jnav {
  margin: auto; /* centers the ul.jnav */
  position: relative; /* CRITICAL gives ul.jbrand & ul.jmenu-right absolute base */
  z-index: 99;
}
.jnav ul li {
  position: relative; /* CRITICAL gives ul.jdropdown-menu absolute base */
}
.jnav ul li ul li a {
  background: rgba(0, 0, 0, 0.5);
  display: block;
  min-width: 200px;
  width: 100%;
  /* CRITICAL gives shape to li + 100% width & height */
}
.jdropdown-menu {
  position: absolute; /* CRITICAL for positioning */
  width: 120px; /* if you want same width for all li */
  display: none; /* hides the dropdown */
}
.jdropdown-menu li {
  display: block; /* CRITICAL fills up the whole space inside parent ul */
  text-align: left;
}
.jnav li:hover .jdropdown-menu {
  display: block; /* shows the dropdown */
}
</style>
