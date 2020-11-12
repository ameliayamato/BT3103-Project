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
import RequestForm from './views/RequestForm.vue'
import OfferForm from './views/OfferForm.vue'


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
    path: '/requestform',
    component: RequestForm
  },
  {
    path: '/offerform',
    component: OfferForm
  }
]