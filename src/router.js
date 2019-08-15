import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tribute from '@/views/Tribute.vue'
import Form from '@/views/Form.vue'
import ProductLanding from '@/views/ProductLanding.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tribute',
      name: 'tribute',
      component: Tribute
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/product-landing',
      name: 'product-landing',
      component: ProductLanding
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    /* 
    https://router.vuejs.org/guide/advanced/scroll-behavior.html#async-scrolling
    // scroll to top on clicking link, if use forward or backwards go to saved position!
     */
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
