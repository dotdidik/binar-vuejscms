import Vue from 'vue'
import Router from 'vue-router'

import auth from '../services/auth.js'

import cmsHome from '@/components/cmsHome'
import cmsLogin from '@/components/cmsLogin'
import cmsProduct from '@/components/cmsProduct'
import cmsMain from '@/components/cmsMain'
import contohForm from '@/components/contohForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: cmsLogin
    },
    {
      path: '/adminhome',
      component: cmsHome,
      children: [
        {
          name: 'cmsMain',
          path: '/',
          component: cmsMain
        },
        {
          name: 'cmsProduct',
          path: 'product',
          component: cmsProduct
        },
        {
          name: 'contohForm',
          path: 'form',
          component: contohForm
        }
      ]
    },
  ]
})
