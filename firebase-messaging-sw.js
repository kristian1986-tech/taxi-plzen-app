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

messaging.onBackgroundMessage((payload) => {
  const title =
    payload?.notification?.title || "🚕 Řidič přijel";

  const body =
    payload?.notification?.body || "Řidič je na místě. Prosím vyjděte ven.";

  self.registration.showNotification(title, {
    body: body,
    icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    badge: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    vibrate: [400, 200, 400, 200, 700],
    requireInteraction: true,
    tag: "driver-arrived"
  });
});
