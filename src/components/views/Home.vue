<template>
  <div class="home container">
    <h1>#QuedateEnCasa lista de precios</h1>

    <h2>Compartí tu lista de precios con todos tus contactos.</h2>

    <h3>De qué se trata?</h3>

    <p>Si sos comerciante y debido a la cuarentena te estas adaptando a vender por redes sociales (Facebook, Whatsapp entre otros) esta aplicación puede ayudarte a compartir todos tus productos en todas tus redes.</p>
    <p>La motivación de este proyecto es ayudar, desde mis posibilidades, a los comerciantes y emprendedores que estan tratando de buscarle la vuelta para generar ingresos en esta época tan difícil que nos toca vivir.</p>
    <p>El uso de esta aplicación no tiene ningún tipo de costo.</p>
    <router-link :to="{
      name: 'landing',
      params: {
        company: 'Empresa Nombre',
        gdocId: gdocIdTest
        }}">Lista de precios de ejemplo</router-link>

    <h3><router-link :to="{name: 'howto'}">Creá tu lista de precios en 3 pasos!</router-link></h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      gdocIdTest: '1ONiFtaZx2ow099y4KFwOwMK9FjV2VYkDmRskEqoO6Yc',
      sampleDoc: 'https://docs.google.com/spreadsheets/d/1ONiFtaZx2ow099y4KFwOwMK9FjV2VYkDmRskEqoO6Yc/edit#gid=0'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
