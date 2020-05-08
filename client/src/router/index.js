import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Search from '../pages/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      hideHeaderSearchBar: true,
    },
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: {
      hideHeaderSearchBar: true,
    },
  },
  {
    // catch all route
    path: '*',
    redirect: { name: 'home' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
