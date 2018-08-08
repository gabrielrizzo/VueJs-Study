import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Dashboard from './components/DashboardComponent.vue'
import Signin from './components/SigninComponent.vue'
import Signup from './components/SignupComponent.vue'
import AddEvent from './components/AddEventComponent.vue'
import EventLoopComponent from './components/EventLoopComponent.vue'
import MusicComponent from './components/MusicComponent'
import MaterialComponent from './components/MaterialComponent.vue'
import ProfileComponent from './components/ProfileComponent.vue'
import {firebaseApp} from './firebaseApp'
import Vuex from 'vuex'
import store from './vuex/store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'





Vue.use(VueMaterial)
Vue.use(VueRouter)


const router = new VueRouter({
  mode:'history',
  routes: [
    {path: '/dashboard', component: Dashboard},
    {path: '/signin' , component: Signin},
    {path: '/signup', component: Signup},
    {path: '/addevent', component:AddEvent},
    {path:'/material', component:MaterialComponent},
    {path: '/event', component:EventLoopComponent},
    {path:'/music', component:MusicComponent},
    {path:'/profile/:user', component:ProfileComponent}
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if ( user ) {
    store.dispatch('signIn', user )
    if(router.currentRoute.fullPath === '/signin' || router.currentRoute.fullPath === '/singup'){
      router.push('/dashboard')
    }

  } else {
    router.replace('/signin')
  }
})

new Vue ({
  el:'#app',
  components: {App},
  router,
  store,
  render: h => h(App)
})
