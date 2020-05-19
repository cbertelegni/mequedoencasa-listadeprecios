<template>
  <div id="app">
    <router-link :to="{
      name: 'home'}">
      <img class="logo" src="./assets/stay_home.png">
    </router-link>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {Footer}
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
h1, h2 {
  font-weight: normal;
}
h3 {
  margin-top: 60px;
}
h5.ref {
  margin: 40px 0 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img.help-img {
  max-width: 600px;
  display: block;
  margin: 0 auto;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
