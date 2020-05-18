<template>
  <div id="app">
    <img class="logo" src="./assets/stay_home.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img.logo {
  width: 5rem;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
