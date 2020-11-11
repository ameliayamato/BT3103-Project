import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './route.js'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from "./store";

Vue.use(VueRouter)

// Install BootstrapVue
Vue.use(BootstrapVue)

const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App), // mount the base component
  store,
  router: myRouter
}).$mount('#app')


