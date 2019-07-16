<template lang="html">
  <div class="loader center">
    <img class="responsive-img" src="../assets/img/birdwatching.gif">
  </div>
</template>

<script>
export default {
  name:"Loader",
  props: {
    loader: {
      type: Boolean
    }
  },
  /*
  data() {
    return {
      "loader":false
    }
  },*/
  methods:{
  },
}
</script>

<style lang="css">
.loader-gradient {
  top: 0px;
  position: fixed;
  animation: bg 15s linear infinite;
  background-clip: text;
  -webkit-background-clip: text;
  background: linear-gradient(to left, #1a237e, #3f51b5, #2196f3, #283593, #1a237e);
  color: #FFF;
  min-height: 0.5vh;
  width: 90%;
  transition: 0.3s ease background-position;
}
.loader{
  height: 100vh;
  width: 100%;
  position: fixed;
  background: #030303;
  z-index: 10;
}
.loader img{
  max-height: 90vh;
}
@keyframes bg {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 10000px;
  }
}
</style>
