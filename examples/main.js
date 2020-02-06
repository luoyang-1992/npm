import Vue from 'vue'
import App from './App.vue'
import pkgName from '../packages/index'

Vue.use(pkgName)

new Vue({
  el: '#app',
  render: h => h(App)
})
