import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

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
  }
})
