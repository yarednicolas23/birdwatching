<template>
  <div><router-view></router-view></div>
</template>

<script>

export default {
  name: 'app',
  metaInfo: {
    title: 'Birdwatching Colombia | Immersive nature experience',
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
  font-weight: 100;
  src: url('./assets/fonts/Roboto/Roboto-Thin.ttf');
}
@font-face {
  font-family: 'Roboto-Light';
  src: url('./assets/fonts/Roboto/Roboto-Light.ttf');
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
  font-family: 'Roboto-Ligh', Helvetica;
  font-weight: 200;
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
.no-margin{
  margin:inherit;
}
::-webkit-scrollbar {
    -webkit-appearance: none;
}

::-webkit-scrollbar:vertical {
    width: 12px;
}

::-webkit-scrollbar:horizontal {
    height: 12px;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .5);
    border-radius: 10px;
    border: 1px solid transparent;
}

::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.2);
}
</style>
