import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import 'virtual:windi.css'

// import firebase from 'firebase'

// import firebase from 'firebase/app';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//   apiKey: "AIzaSyDbTcacK2sg9Sy7zKp3llyk3jShpU9QiXc",
//   authDomain: "chat-3a4e0.firebaseapp.com",
//   projectId: "chat-3a4e0",
//   storageBucket: "chat-3a4e0.appspot.com",
//   messagingSenderId: "789361236952",
//   appId: "1:789361236952:web:26d1e75b224a339785b0ad",
//   measurementId: "G-4YRLCWVHS9"
// };

// const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app)


createApp(App)
  .use(router)
  .mount('#app');


// firebase.initializeApp(firebaseConfig)

// firebase.auth().onAuthStateChanged(() => new Vue({
//   render: h => h(App),
// }).$mount('#app'))
