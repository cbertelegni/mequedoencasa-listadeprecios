<template>
  <div class="home container">
    <h1>Como crear tu lista de precios?</h1>

    <p>Para poder publicar un catalogo es muy simple, solo necesitás una planilla de datos de Google Spreadsheet con el listado de todos tus productos y sus precios y esta aplicción se encargará del resto!</p>

    <h3>Paso 1 - Creá tu lista de precios</h3>
    <p>Con tu cuenta de Gmail creá un Spreadsheet (es lo mismo que un excel) con el listado de <b>Procuctos</b> con sus respectivos precios.</p>
    <p>También podes agregar una columna llamada <b>filtros</b> donde podés asignar una categoria a cada producto. Por ejemplo, si el producto es 'leche' se le puede asignar el filtro (o categoría) almacén. Este valor se va a usar en la aplicacion para poder filtrar los datos.</p>
    <p>* Acá tenes una planilla de <a :href="sampleDoc" target="_blank" rel="noopener noreferrer">Google Spreadsheet</a> para que tengas de ejemplo, lo más importante es que NO cambies el nombre de las colúmnas ya que estos son usados para reconocer los datos en tu lista de precios.</p>
    <img class="help-img" src="@/assets/sample.png">

    <h3>Paso 2 - Hacé pública tu planilla en la web</h3>
    <p>Para hacer púbica tu planilla en la web es muy simple, solo tienes que seguir estos pasos:</p>
    <h5 class="ref">* Archivo --> Publicar en la Web</h5>
    <img class="help-img" src="@/assets/step-1.png">
    <h5 class="ref">* Hacer click en publicar y dar "OK"</h5>
    <img class="help-img" src="@/assets/step-2.png">
    <h5 class="ref">* Listo! cerrar es modal :-)</h5>
    <img class="help-img" src="@/assets/step-3.png">

    <h3>Paso 3 - Obtené la url para compartir con tu clientes</h3>
    <p>Para esto es muy simple, solo tenes que ingresar el nombre de tu negocio y la url del Google Spreadsheet que acabas de crear con tu lista de precios</p>
    <CreateListForm />
  </div>
</template>

<script>
import CreateListForm from '@/components/CreateListForm'
export default {
  name: 'Howto',
  data () {
    return {
      gdocIdTest: '1ONiFtaZx2ow099y4KFwOwMK9FjV2VYkDmRskEqoO6Yc',
      sampleDoc: 'https://docs.google.com/spreadsheets/d/1ONiFtaZx2ow099y4KFwOwMK9FjV2VYkDmRskEqoO6Yc/edit#gid=0'
    }
  },
  components: {CreateListForm}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
