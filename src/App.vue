<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  metaInfo: {
    titleTemplate: '%s | Avistamiento de aves',
      meta: [
        { vmid: 'charset', charset: 'utf-8' },
        { vmid: 'viewport',name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
}
</script>

<style lang="css">
@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Roboto/Roboto-Thin.ttf');
}
@font-face {
  font-family: 'BebasNeueBold';
  src: url('./assets/fonts/bebasneue/BebasNeueBold.ttf');
}
@font-face {
  font-family: 'FuturaBold';
  font-weight: 400;
  src: url('./assets/fonts/AVIATUR/FuturaBold.otf');
}
#app{
}
body{
  font-family: 'Roboto', Helvetica;
  font-weight: 100;
}
.thin{
  font-weight: 100;
}
.bebasbold{
  font-family: 'BebasNeueBold';
}
.futura-bold{
  font-family: 'FuturaBold';
}
</style>
