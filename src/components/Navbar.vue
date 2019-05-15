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
  margin-top: 0px;
}
</style>
