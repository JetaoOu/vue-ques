import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Index from '../components/index.vue'
import Title from '../components/title.vue'
import NavMenu from '../components/navMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/navMenu'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/title',
    component: Title
  },
  {
    path: '/navMenu',
    component: NavMenu
  }
]

const router = new VueRouter({
  routes
})

export default router
