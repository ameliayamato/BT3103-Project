import HomePage from './views/HomePage.vue' 
import AboutPage from './views/AboutPage.vue' 
import RequestsPage from './views/RequestsPage.vue' 
import OffersPage from './views/OffersPage.vue' 
import ContactPage from './views/ContactPage.vue' 
import LoginPage from './views/LoginPage.vue' 
import RegisterPage from './views/RegisterPage.vue' 
import RequestForm from './views/RequestForm.vue'
import OfferForm from './views/OfferForm.vue'


export default [{
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
  },
  {
    path: '/requestform',
    component: RequestForm
  },
  {
    path: '/offerform',
    component: OfferForm
  }
]