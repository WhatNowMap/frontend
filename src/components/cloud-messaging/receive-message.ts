import { Messaging, getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "./firebase";


function initializeCloudMessaging() {
    const messaging = getMessaging(app);
    return messaging;
}

/**
 * Access the registration token:
 * Todo: Check if permission is granted - T: Pass F: Ask for Permission.
 */
function requestPermission() {
    console.log("Requesting permission...");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
      }
    });
}

/**
 * Web Credential Cofig.
 * Allows FCM to use the VAPID key credential when sending message requests to different push services.
 * @param messaging
 */
async function requestToken(messaging: Messaging) {
    return getToken(messaging, { vapidKey: "BNLtDoKnBVaG4s8GlTWZxJOxJ7xp28UVx2dZYd8iLUm0a1oWQN7S7Dp_gEhCzOhKqaSwbNlhujLQAu1co7yjvJU" })
      .then((currentToken) => {
        if (currentToken) {
          // ? Send the token to your server and update the UI if necessary
          console.log("Current Token: ", currentToken);
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
}

/**
 * Foreground - Receive Cloud Messages:
 * @param messaging
 */
async function receiveMessage(messaging: Messaging) {
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
    });
}

export { initializeCloudMessaging, requestPermission, requestToken, receiveMessage }


