import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局样式
import "./assets/scss/style.scss";













new Vue({
  render: h => h(App),
}).$mount('#app')
