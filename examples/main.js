import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import pkgName from '../packages/index'
Vue.use(pkgName)


new Vue({
  el: '#app',
  render: h => h(App)
})
