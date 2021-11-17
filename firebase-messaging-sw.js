importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyC3tsNeNWyPoDDvW409bk_Y9oJBe1Rlrd8",
    authDomain: "cleanclean-staging.firebaseapp.com",
    projectId: "cleanclean-staging",
    storageBucket: "cleanclean-staging.appspot.com",
    messagingSenderId: "577175530986",
    appId: "1:577175530986:web:1ede84b160deffab6e5693",
    measurementId: "G-ZG3VMZVLFJ",
  };
const messaging = firebase.messaging();
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});