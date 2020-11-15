import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from "./store";
import { routes } from './route'

Vue.use(VueRouter)

// Install BootstrapVue
Vue.use(BootstrapVue)

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  render: h => h(App), // mount the base component
  store,
  router
}).$mount('#app')


