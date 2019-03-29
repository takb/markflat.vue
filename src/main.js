import Vue from 'vue'
import App from './App.vue'
import MarkFlat from '../plugin'

Vue.use(MarkFlat, {mbAddStyle: true, blah: 'mist'})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
