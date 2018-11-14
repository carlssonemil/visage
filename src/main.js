import Vue from 'vue'
import VueFire from 'vuefire'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import router from './router'

Vue.use(VueFire)
Vue.use(VeeValidate)

require('reset-css/reset.css')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
