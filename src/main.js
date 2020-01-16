import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import './assets/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'http://www.waixingren.online'
Vue.use(VueAxios, axios)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
