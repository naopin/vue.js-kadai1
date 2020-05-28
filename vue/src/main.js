import Vue from 'vue'
import App from './App.vue'
import HelloWord from './conponents/HelloWord.vue'

Vue.config.productionTip = false
Vue.component('HelloWord',HelloWord);

new Vue({
  render: h => h(App),
}).$mount('#app')
