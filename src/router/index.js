import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Index from '../components/index.vue'
import Welcome from '../components/welcome.vue'
import newMessage from '../components/newMessage.vue'
import UserInfo from '../components/userInfo.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/index',
    component: Index,
    redirect: '/welcome',
    children: [
      { path: '/welcome', name: 'welcome', component: Welcome },
      { path: '/newMessage', component: newMessage },
      { path: '/userInfo', component: UserInfo }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
