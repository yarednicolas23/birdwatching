<template lang="html">
    <a class="btn-design blue-gradient" href=""><span>{{text}}</span></a>
</template>

<script>
export default {
  /* ready function will be here */
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style lang="css">
/* Mixins */
.btn-design {
  display: inline-block;
  margin: 1em 0;
  padding: 0.5em 2em;
  background: transparent;
  border-radius: 3px;
  font-weight:300;
  font-size: 1.3rem;
  text-align: center;
}
.green-gradient span {
  background: -webkit-linear-gradient(left, #add356, #00dfa6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.orange-gradient span {
  background: -webkit-linear-gradient(left, #ffcb52, #ff451f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.blue-gradient span {
  background:-webkit-linear-gradient(left, #16b9b1, #2f80cb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.green-gradient {
  box-shadow: -1px 0 0 1px rgba(173, 211, 86, 0.75), -1px -1px 0 1px rgba(130, 214, 106, 0.25), -1px 1px 0 1px rgba(130, 214, 106, 0.25), 0 -1px 0 1px rgba(87, 217, 126, 0.5), 0 1px 0 1px rgba(87, 217, 126, 0.5), 1px -1px 0 1px rgba(44, 220, 146, 0.25), 1px 1px 0 1px rgba(44, 220, 146, 0.25), 1px 0 0 1px rgba(0, 223, 166, 0.75);
}
.orange-gradient {
  box-shadow: -1px 0 0 1px rgba(255, 203, 82, 0.75), -1px -1px 0 1px rgba(255, 170, 70, 0.25), -1px 1px 0 1px rgba(255, 170, 70, 0.25), 0 -1px 0 1px rgba(255, 136, 57, 0.5), 0 1px 0 1px rgba(255, 136, 57, 0.5), 1px -1px 0 1px rgba(255, 103, 44, 0.25), 1px 1px 0 1px rgba(255, 103, 44, 0.25), 1px 0 0 1px rgba(255, 69, 31, 0.75);
}
.blue-gradient {
  box-shadow: -1px 0 0 1px rgba(30, 176, 255, 0.75), -1px -1px 0 1px rgba(15, 89, 255, 0.25), -1px 1px 0 1px rgba(94, 142, 226, 0.25), 0 -1px 0 1px rgba(67, 98, 255, 0.5), 0 1px 0 1px rgba(30, 232, 131, 0.5), 1px -1px 0 1px rgba(81, 255, 183, 0.25), 1px 1px 0 1px rgba(49, 255, 179, 0.25), 1px 0 0 1px rgba(31, 239, 164, 0.75);
}

</style>
