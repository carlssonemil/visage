import Vue from 'vue'
import VueFire from 'vuefire'
import sv from 'vee-validate/dist/locale/sv'
import VeeValidate, { Validator } from 'vee-validate'
import App from './App.vue'
import router from './router'
import Notifications from 'vue-notification'

Vue.use(VueFire)
Vue.use(VeeValidate)
Vue.use(Notifications)

Validator.localize('sv', sv)

require('reset-css/reset.css')

Vue.config.productionTip = false

Vue.prototype.$scrollTop = function(id) {
  let element = document.getElementById(id);
  element.scrollTop = 0;
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
