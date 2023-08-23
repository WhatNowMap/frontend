import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/landing-page";
import RootLayout from "./pages/root-layout";
import ListView from "./pages/list-interface";
import EventDetail from "./pages/event-detail";
import MapView from "./pages/map-interface";
import UserProfile from "./pages/user-profile";
import NotFound from "./pages/not-found";
import Bookmark from "./pages/bookmark";
import CreateEvent from "./pages/event/create/CreateEvent";
import ViewEventHistory from "./pages/user-profile/ViewEventHistory";

import { useEffect } from "react";
import { initializeCloudMessaging, receiveMessage, requestPermission, requestToken } from "./components/cloud-messaging/receive-message";
import { getToken, onMessage } from "firebase/messaging";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/map" element={<MapView />} />
      <Route path="/map/:category" element={<MapView />} />
      <Route path="/map/:category/:keyword" element={<MapView />} />
      <Route path="/list" element={<ListView />} />
      <Route path="/list/:category" element={<ListView />} />
      <Route path="/list/:category/:sort/" element={<ListView />} />
      <Route path="/list/:category/:sort/:keyword" element={<ListView />} />
      <Route path="/event/:event_id" element={<EventDetail />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/event/create-event" element={<CreateEvent />} />
      <Route path='/eventHistory' element={<ViewEventHistory />}
      />
    </Route>
  )

);

function App() {
  const messaging = initializeCloudMessaging();
  requestPermission();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js', {
      scope: '/'
    }).then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      getToken(messaging, { vapidKey: 'BBNCXrmhtZTUNHNSFnN9BlSmRtKjaszNJOTXVJNlOC1DudMIMBetilg-HJl3xkSNC7Imt8-2L8PoqLLGRUOOl6E' }).then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
          console.log(currentToken);
          onMessage(messaging, (payload) => {
            console.log("Message received. ", payload);
          });
          
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
    }).catch(err => {
      console.log("Failed to register a service worker", err);
    });
  }
  useEffect(() => {
    console.log("Receiving")
    receiveMessage(messaging);
  })
  return <RouterProvider router={router} />;
}

export default App;
