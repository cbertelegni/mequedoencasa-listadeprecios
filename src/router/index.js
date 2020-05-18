import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'
import LandingCompany from '@/components/views/LandingCompany'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:company/:gdocId',
      name: 'landing',
      component: LandingCompany
    }
  ]
})
