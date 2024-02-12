import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJ1XUNuULiNgU6Ofih2LrV24EEWA_sCwQ",
    authDomain: "vue-chat-app-befb3.firebaseapp.com",
    projectId: "vue-chat-app-befb3",
    storageBucket: "vue-chat-app-befb3.appspot.com",
    messagingSenderId: "850294782168",
    appId: "1:850294782168:web:ef4d3f3d9951e09457bfad",
    measurementId: "G-Y6MJEL992Y"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');
