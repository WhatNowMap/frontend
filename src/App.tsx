import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation, useNavigate } from "react-router-dom";

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

import { createContext, useEffect, useState } from "react";
import { initializeCloudMessaging, receiveMessage, requestPermission, requestToken } from "./components/cloud-messaging/receive-message";
import { onMessage } from "firebase/messaging";
import axios from "axios";

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
      <Route path='/eventHistory' element={<ViewEventHistory />}/>
      <Route path='/bookmark' element={<Bookmark />}/>
    </Route>
  )

);

type user = {
  email: string,
  provider: string,
  tag: string[],
  thirdPartyId: string,
  userName: string,
  _id: string
}
export const LoggedInContext = createContext<string>('');
function App() {
  const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")
  const [user, setUser] = useState<user|{}>({})
  const [checked, setChecked] = useState(false)
  const messaging = initializeCloudMessaging();
  requestPermission();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js', {
      scope: '/'
    }).then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      getToken(messaging, { vapidKey: 'BBNCXrmhtZTUNHNSFnN9BlSmRtKjaszNJOTXVJNlOC1DudMIMBetilg-HJl3xkSNC7Imt8-2L8PoqLLGRUOOl6E' }).then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
          onMessage(messaging, (payload) => {
            console.log("Message received. ", payload);
          });
          fetch(`${import.meta.env.VITE_REACT_APP_BASEURL}notify/subscribe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token: currentToken, topic: "all_users"}),
          })
          .catch((err) => {
              console.log("err", err);
          });
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    }).catch(err => {
      console.log("Failed to register a service worker", err);
    });
  }
  useEffect(() => {
    console.log("Receiving")
    receiveMessage(messaging);
  })
  const checkLoginStatus = async ()=> {
    await axios.get(`${baseUrl}auth/logged_in`, {withCredentials: true})
      .then(response => {
        if(response.data.loggedIn && loggedInStatus==='NOT_LOGGED_IN'){
          setLoggedInStatus('LOGGED_IN')
          setUser(response.data.user)
        }else if(!response.data.loggedIn && loggedInStatus==='LOGGED_IN'){
          setLoggedInStatus('NOT_LOGGED_IN')
          setUser({})
        }
        setChecked(true)
      }).catch(err=>{
        console.log(err)
        setChecked(true)
      })
  }
  useEffect(() => {
    checkLoginStatus()
  }, [])
  return (
    <>
      { 
        checked && 
        <LoggedInContext.Provider value={loggedInStatus}>
          <RouterProvider router={router} />
        </LoggedInContext.Provider>
      }
    </>
  );
}

export default App;
