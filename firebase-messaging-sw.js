// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";

importScripts("https://www.gstatic.com/firebasejs/10.2.0/firebase-app-compat.js");
importScripts(
  "https://www.gstatic.com/firebasejs/10.2.0/firebase-messaging-compat.js"
);

// Change to env var after testing
const firebaseConfig = {
  apiKey: "AIzaSyCOZxVz-o1ahwPXa9F7e42Fa6g6YmiELTE",
  authDomain: "whatnowmap-395517.firebaseapp.com",
  projectId: "whatnowmap-395517",
  storageBucket: "whatnowmap-395517.appspot.com",
  messagingSenderId: "713441542276",
  appId: "1:713441542276:web:ea77f889191346190382d1",
  measurementId: "G-VYDYZKDQCB",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// messaging.usePublicVapidKey(
//   "BNLtDoKnBVaG4s8GlTWZxJOxJ7xp28UVx2dZYd8iLUm0a1oWQN7S7Dp_gEhCzOhKqaSwbNlhujLQAu1co7yjvJU"
// );

const isSupported = firebase.messaging.isSupported();

if (isSupported) {
    const messaging = firebase.messaging();
    messaging.onBackgroundMessage(({ notification: { title, body, image } }) => {
        self.registration.showNotification(title, { body, icon: image || '/assets/icons/icon-72x72.png' });
    });
}

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.message,
    icon: "",
    data: { url: payload.data.onClick }, //the url which we gonna use later
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

//Code for adding event on click of notification
self.addEventListener("notificationclick", function (event) {
  let url = event.notification.data.url;
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window" }).then((windowClients) => {
      // Check if there is already a window/tab open with the target URL
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        // If so, just focus it.
        if (client.url === url && "focus" in client) {
          return client.focus();
        }
      }
      // If not, then open the target URL in a new window/tab.
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});