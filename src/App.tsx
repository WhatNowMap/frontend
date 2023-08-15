import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/landing-page";
import UserRegisterOrLogin from "./pages/register-login-page";
import RootLayout from "./pages/root-layout";
import ListView from "./pages/list-interface";
import EventDetail from "./pages/event-detail";
import MapView from "./pages/map-interface";
import UserProfileAndSetting from "./components/user-profile-and-setting/userProfileAndSetting";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/register" element={<UserRegisterOrLogin />} />
      <Route path="/map" element={<MapView />} />
      <Route path="/map/:category" element={<MapView />} />
      <Route path="/map/:category/:keyword" element={<MapView />} />
      <Route path="/list" element={<ListView />} />
      <Route path="/list/:category" element={<ListView />} />
      <Route path="/list/:category/:sort/" element={<ListView />} />
      <Route path="/list/:category/:sort/:keyword" element={<ListView />} />
      <Route path="/event" element={<EventDetail />} />
      <Route path="/profile" element={<UserProfileAndSetting />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
