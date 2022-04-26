import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDiFy3JNFtnRT_zRslYatMqCZ_JmNvMtUA",
    authDomain: "grupo-unico-autenticacao.firebaseapp.com",
    databaseURL: "https://grupo-unico-autenticacao-default-rtdb.firebaseio.com",
    projectId: "grupo-unico-autenticacao",
    storageBucket: "grupo-unico-autenticacao.appspot.com",
    messagingSenderId: "224285959873",
    appId: "1:224285959873:web:4bce9bfa6aded7e05f5640",
    measurementId: "G-0KMWNTJSQ2"
  };
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// createApp.config.productionTip = false;
console.log(firebase)
createApp(App).use(Quasar, quasarUserOptions).use(router).mount('#app')
