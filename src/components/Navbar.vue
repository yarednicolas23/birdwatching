<template>
  <div class="">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data (){
    return {
      msg: 'tt',
      title:'Titulo',
      description:'Descripción',
      keywords: 'palabras clave'
    }
  },
  metaInfo () {
      return {
        title: this.title,
        titleTemplate: null,
        meta: [
          { vmid: 'description', name: 'description', content: this.description },
          { vmid: 'keywords', name: 'keywords', content: this.keywords }
        ]
      }
    }
}

</script>

<style lang="css">
#inconstruction {
  background-color: black;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
