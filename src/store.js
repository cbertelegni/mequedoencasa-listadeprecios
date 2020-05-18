import Vue from 'vue'
import Vuex from 'vuex'
import {csv} from 'd3-fetch'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchText: '',
    filters: {},
    products: []
  },
  getters: {
    activesProducts: state => {
      let products = state.products
      // find by text
      if (state.searchText) {
        let toFind = state.searchText.toLowerCase()
        products = products.filter(d => {
          return d.producto.toLowerCase().includes(toFind)
        })
      }

      // find by filters
      let filters = Object.keys(state.filters).filter(k => state.filters[k])
      if (filters.length) {
        products = products.filter(d => filters.includes(d.filtro))
      }
      return products
    }
  },
  mutations: {
    findTerm (state, payload) {
      state.searchText = payload
    },
    checkFilter (state, key) {
      Vue.set(state.filters, key, !state.filters[key])
    }
  },
  actions: {
    async fetchData ({state}, gdocId) {
      let urlData = ` https://docs.google.com/spreadsheet/pub?key=${gdocId}&output=csv`
      let data = await csv(urlData)
      console.log(`Listado de productos:`)
      console.table(data)

      data.forEach(d => {
        if (!state.filters[d.filtro]) {
          Vue.set(state.filters, d.filtro, false)
        }
      })
      Vue.set(state, 'products', data)
    }
  }

})
