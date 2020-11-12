import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from "./store";

Vue.use(VueRouter)

// Install BootstrapVue
Vue.use(BootstrapVue)

// import views you want to serve up in `router-view`
import AboutPage from './views/AboutPage.vue' 
import RequestsPage from './views/RequestsPage.vue' 
import OffersPage from './views/OffersPage.vue' 
import ContactPage from './views/ContactPage.vue' 
import LoginPage from './views/LoginPage.vue' 
import SignupPage from './views/SignupPage.vue' 
import ReportOfferPage from './views/ReportOfferPage.vue' 
import ReportRequestPage from './views/ReportRequestPage.vue' 
import SendContactOfferPage from './views/SendContactOfferPage.vue' 
import SendContactRequestPage from './views/SendContactRequestPage.vue' 
import InboxPage from './views/InboxPage.vue' 
import ReportSuccessPage from './views/ReportSuccessPage.vue' 
import ProfilePage from './views/ProfilePage.vue' 
import ContactSuccessPage from './views/ContactSuccessPage.vue' 
import RequestForm from './views/RequestForm.vue'
import OfferForm from './views/OfferForm.vue'
import SubmissionPage1 from './views/SubmissionPage1.vue'
import SubmissionPage2 from './views/SubmissionPage2.vue'


const routes = [{
    path: '/',
    component: RequestsPage
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
    component: SignupPage
  },
  {
    path: '/report-offer/:id',
    component: ReportOfferPage,
    props: true
  },
  {
    path: '/report-request/:id',
    component: ReportRequestPage,
    props: true
  },
  {
    path: '/send-contact-offer/:id',
    component: SendContactOfferPage,
    props: true
  },
  {
    path: '/send-contact-request/:id',
    component: SendContactRequestPage,
    props: true
  },
  {
    path: '/inbox',
    component: InboxPage
  },
  {
    path: '/profile',
    component: ProfilePage 
  },
  {
    path: '/report-success',
    component: ReportSuccessPage
  },
  {
    path: '/contact-success',
    component: ContactSuccessPage
  },
  {
    path: '/requestform',
    component: RequestForm
  },
  {
    path: '/offerform',
    component: OfferForm
  },
  {
    path: '/request-made',
    component: SubmissionPage1
  },
  {
    path: '/offer-made',
    component: SubmissionPage2
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  render: h => h(App), // mount the base component
  store,
  router
}).$mount('#app')


