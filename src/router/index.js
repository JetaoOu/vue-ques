import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Index from '../components/index.vue'
import Welcome from '../components/welcome.vue'
import newQuestionNaire from '../components/newQuestionNaire.vue'
import abortQuestionNaire from '../components/abortQuestionNaire.vue'
import didQuestionNaire from '../components/didQuestionNaire.vue'
import UserInfo from '../components/userInfo.vue'
import Survey from '../components/questionNaireDetail.vue'
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
      { path: '/newQuestionNaire', component: newQuestionNaire },
      { path: '/abortQuestionNaire', component: abortQuestionNaire },
      { path: '/didQuestionNaire', component: didQuestionNaire },
      { path: '/userInfo', component: UserInfo }
    ]
  },
  {
    path: '/survey',
    name: 'survey',
    component: Survey
  }
]

const router = new VueRouter({
  routes
})

export default router
