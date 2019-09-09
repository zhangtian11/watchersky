import Vue from 'vue'
import App from './App.vue'

import MoorUI from './index.js'
Vue.use(MoorUI)
// import watchersky from 'vue-watchersky'
// Vue.use(watchersky)
// import watchersky from 'watchersky'
// Vue.use(watchersky)



new Vue({
  el: '#app',
  render: h => h(App)
})
