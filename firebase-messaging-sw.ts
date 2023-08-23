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
const isSupported = firebase.messaging.isSupported();

if (isSupported) {
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
}

messaging.onMessage(function (payload) {
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.message,
    icon: "",
    data: { url: payload.data.onClick }, //the url which we gonna use later
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );}
)

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

self.addEventListener('pushsubscriptionchange', async (event) => {
  const subscription = await self.registration.pushManager.getSubscription();
  if (subscription) {
    const token = await subscription.getToken();
    // You can use the token to send notifications to this specific device
    console.log('FCM Registration Token:', token);
    // You might want to send this token to your server for future use
  } else {
    console.log('Subscription has been unsubscribed.');
  }
});

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});