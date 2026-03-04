importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCSapx5d9v_fxpPBzuOfnH66lvQoQ8H-6E",
  authDomain: "taxi-kristian.firebaseapp.com",
  projectId: "taxi-kristian",
  storageBucket: "taxi-kristian.firebasestorage.app",
  messagingSenderId: "872925880546",
  appId: "1:872925880546:web:12da74898c90a0155b7ebb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
 self.registration.showNotification(payload.notification.title, {
  body: payload.notification.body,
  icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  sound: "/notification.mp3",
  vibrate: [300,100,300,100,300],
  requireInteraction: true
});
});
