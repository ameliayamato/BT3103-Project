import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)

// Install BootstrapVue
Vue.use(BootstrapVue)

// import views you want to serve up in `router-view`
import HomePage from './views/HomePage.vue' 
import AboutPage from './views/AboutPage.vue' 
import RequestsPage from './views/RequestsPage.vue' 
import OffersPage from './views/OffersPage.vue' 
import ContactPage from './views/ContactPage.vue' 
import LoginPage from './views/LoginPage.vue' 
import RegisterPage from './views/RegisterPage.vue' 

const routes = [{
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/requests',
    component: RequestsPage
  },
  {
    path: '/offers',
    component: OffersPage
  },
  {
    path: '/contact',
    component: ContactPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/register',
    component: RegisterPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App), // mount the base component
  router
}).$mount('#app')


