import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import VeeValidate from 'vee-validate';
Vue.config.productionTip = false;

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDUtWfeYiuRNuVHhaBHFDm0u1125QHZS8s",
  authDomain: "task-da0db.firebaseapp.com",
  databaseURL: "https://task-da0db.firebaseio.com",
  projectId: "task-da0db",
  storageBucket: "task-da0db.appspot.com",
  messagingSenderId: "129418829009",
  appId: "1:129418829009:web:bee84d28951f5db18e39f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
// dataBase.settings({timestampsInSnapshots: true});


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
