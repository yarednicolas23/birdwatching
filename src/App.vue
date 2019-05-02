<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-weight: 100;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body{
  @font-face {
  font-family: 'Roboto';
  src:  url('./assets/fonts/Roboto/Roboto-Bold.ttf') format('ttf'),
        url('./assets/fonts/Roboto/Roboto-Black.ttf') format('ttf'),
        url('./assets/fonts/Roboto/Roboto-Thin.ttf') format('ttf'),
        url('./assets/fonts/Roboto/Roboto-Light.ttf') format('ttf');
  font-weight: bold;
  font-style: normal;
}
}
</style>
