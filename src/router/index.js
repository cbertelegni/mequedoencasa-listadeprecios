import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'
import LandingCompany from '@/components/views/LandingCompany'
import Howto from '@/components/views/Howto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/como-crear-tu-lista-de-precios',
      name: 'howto',
      component: Howto
    },
    {
      path: '/:company/:gdocId',
      name: 'landing',
      component: LandingCompany
    }
  ]
})
