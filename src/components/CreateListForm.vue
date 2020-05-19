<template>
  <div class="home container">
    <label>
      Nombre de tu negocio:
      <input type="text" v-model="company">
    </label>
    <br>
    <label>
      Url del Google Spreadsheet:
      <input type="text" v-model="gdocUrl">
      <div v-if="error" class="error">* Hay un error en la url ingresada del Google Spreadsheet!</div>
    </label>
    <div v-if="!error && linkToShare">
      <hr class="divider">
      <h3>Tu lista de precios esta lista!</h3>
      <p>Copia esta url y compartila con todos tus clientes y en todas tus redes sociales.</p>
      <textarea name="" id="" cols="30" rows="10">{{linkToShare}}</textarea>
      <p>
        <a class="btn" :href="linkToShare" target="_blank">Mirá tu lista de precios</a>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CreateListForm',
  data () {
    return {
      error: false,
      gdocUrl: '',
      company: ''
    }
  },
  computed: {
    linkToShare: function() {
      if (this.company && this.gdocUrl) {
        let drive
        try {
          drive = this.driveObj(this.gdocUrl)
        } catch (error) {
          console.error('Error al intentar parsear el gdoc')
          this.error = true
          return 'error'
        }
        let path = this.$router.resolve({
          name: 'landing',
          params: {
            company: this.company,
            gdocId: drive.gkey
          }
        }).href
        let basePath = location.href.split('#')[0]

        this.error = false
        return `${basePath}${path}`
      }
      return ''
    }
  },
  methods: {
    driveObj: (gdocUrl) => {
      const pat = /\/d\/([A-Za-z\-_0-9]*)\/.+#gid=([A-Za-z\-_0-9]*)/
      const match = gdocUrl.match(pat)
      const obj = {
        gkey: match[1],
        gid: match[2],
        gdocUrl: gdocUrl
      }
      return obj
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  border-radius: 3px;
  padding: 3px 5px;
}
label {display: block;}
.error {
  color: red;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 11px;
  padding: 5px 0;
}
textarea {
  min-width: 90%;
  height: 2rem;
  text-align: center;
  padding: 5px 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
}
hr.divider {
  margin-top: 20px;
}
a.btn {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  background: #42b983;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
</style>
