<template>
  <nav id="nav" class="transparent">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><img id="logo" class="responsive-img" src="../assets/img/logo.png" alt=""> </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data (){
    return {

    }
  }
}

</script>

<style lang="css">
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
