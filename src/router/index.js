import Vue from 'vue'
import Router from 'vue-router'

import planit from '@/components/planit'//추가
 
Vue.use(Router)

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'planit',
      component: planit
    },
  ]
});