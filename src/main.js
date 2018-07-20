import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  // theme: {
  //   primary: "#f44336",
  //   secondary: "#9575CD",
  //   accent: "#9c27b0",
  //   error: "#f44336",
  //   warning: "#3949AB",
  //   info: "#2196f3",
  //   success: "#4caf50"
  // }
})
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyADHYqwo5GK03Qgir6wT6tUdzSN_To_huQ',
      authDomain: 'vue-ads-50bbd.firebaseapp.com',
      databaseURL: 'https://vue-ads-50bbd.firebaseio.com',
      projectId: 'vue-ads-50bbd',
      storageBucket: 'vue-ads-50bbd.appspot.com',
      messagingSenderId: '550028926035'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
