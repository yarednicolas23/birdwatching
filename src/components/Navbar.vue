<template>
  <nav id="nav" class="transparent">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><img id="logo" class="responsive-img" src="../assets/img/logo.png" alt=""> </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-for="(button,key) in page.buttons" v-bind:key="key">
          <a v-bind:href="key" v-if="button.dropdown==false">{{button.name}}</a>
          <a v-if="button.dropdown!=false" class="dropdown-trigger" :data-target="key" @mouseover="M.Dropdown.getInstance(elem).open()">
            {{button.name}}
            <i class="material-icons right">arrow_drop_down</i>
            <!-- Dropdown Structure -->
            <ul :id="key" class="dropdown-content black">
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
          "about":{
            "name":"About Us",
            "dropdown":{
              "staff":"Staff",
              "birdwatching-colombia":"Birdwatching Colombia"
            }
          },
          "tours":{
            "name":"Tours",
            "dropdown":{
              "amazonian":"Amazonas",
              "caribe":"Caribbean Coast",
              "andian":"Andes"
            }
          },
          "shortprograms":{
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
